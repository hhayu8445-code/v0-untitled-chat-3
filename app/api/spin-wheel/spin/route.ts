import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = await createClient()
    const discordId = session.user.id

    // Get user data including spin_tickets
    const { data: userData } = await supabase
      .from("users")
      .select("id, coins, spin_tickets")
      .eq("discord_id", discordId)
      .single()

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const currentCoins = userData.coins || 0
    const currentTickets = userData.spin_tickets || 0

    if (currentTickets < 1) {
      return NextResponse.json({ error: "No spin tickets available. Claim your daily ticket!" }, { status: 403 })
    }

    // Get all active prizes
    const { data: prizes, error: prizesError } = await supabase
      .from("spin_wheel_prizes")
      .select("*")
      .eq("is_active", true)
      .order("sort_order")

    if (prizesError || !prizes?.length) {
      return NextResponse.json({ error: "No prizes available" }, { status: 500 })
    }

    let winningPrize = null
    let isForceWin = false

    // Check for force win
    const { data: forceWin } = await supabase
      .from("spin_wheel_force_wins")
      .select("*, prize:spin_wheel_prizes(*)")
      .eq("user_id", discordId)
      .eq("is_active", true)
      .single()

    if (forceWin) {
      const isExpired = forceWin.expires_at && new Date(forceWin.expires_at) < new Date()
      const maxUsesReached = forceWin.max_uses && forceWin.use_count >= forceWin.max_uses

      if (!isExpired && !maxUsesReached && forceWin.prize) {
        winningPrize = forceWin.prize
        isForceWin = true

        // Update force win use count
        const newUseCount = (forceWin.use_count || 0) + 1
        const shouldDeactivate = forceWin.max_uses && newUseCount >= forceWin.max_uses

        await supabase
          .from("spin_wheel_force_wins")
          .update({
            use_count: newUseCount,
            is_active: !shouldDeactivate,
          })
          .eq("id", forceWin.id)
      }
    }

    // If no force win, calculate winning prize based on probability
    if (!winningPrize) {
      const adjustedPrizes = prizes.map((p) => ({
        ...p,
        probability: Number.parseFloat(p.probability),
      }))

      const totalProbability = adjustedPrizes.reduce((sum, p) => sum + p.probability, 0)
      const random = Math.random() * totalProbability

      let cumulative = 0
      for (const prize of adjustedPrizes) {
        cumulative += prize.probability
        if (random <= cumulative) {
          winningPrize = prizes.find((p) => p.id === prize.id) || prizes[0]
          break
        }
      }

      if (!winningPrize) {
        winningPrize = prizes[0]
      }
    }

    const coinsWon = Number(winningPrize.coins) || 0
    const newTickets = currentTickets - 1
    const newBalance = currentCoins + coinsWon

    // Update user: deduct ticket, add coins
    const { error: updateError } = await supabase
      .from("users")
      .update({
        spin_tickets: newTickets,
        coins: newBalance,
      })
      .eq("discord_id", discordId)

    if (updateError) {
      console.error("Error updating user:", updateError)
      return NextResponse.json({ error: "Failed to update balance" }, { status: 500 })
    }

    // Record the spin with EXACT coins won
    await supabase.from("spin_history").insert({
      user_id: discordId,
      prize_id: winningPrize.id,
      coins_won: coinsWon,
      prize_name: winningPrize.name,
      spin_type: "ticket",
    })

    // Record coin transaction for winnings
    if (coinsWon > 0) {
      await supabase.from("coin_transactions").insert({
        user_id: discordId,
        amount: coinsWon,
        type: "spin_wheel",
        description: `Won ${winningPrize.name} from Spin Wheel (+${coinsWon} coins)`,
      })
    }

    const prizeIndex = prizes.findIndex((p) => p.id === winningPrize.id)

    return NextResponse.json({
      success: true,
      prize: {
        ...winningPrize,
        coins: coinsWon, // Ensure exact value
      },
      prizeId: winningPrize.id,
      prizeName: winningPrize.name,
      coinsWon: coinsWon,
      prizeIndex,
      newBalance,
      newTickets,
      isForceWin,
    })
  } catch (error) {
    console.error("Error spinning wheel:", error)
    return NextResponse.json({ error: "Failed to spin" }, { status: 500 })
  }
}
