import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function POST() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id

    // Use ticket
    const ticketResult = await db.spinWheel.useTicket(userId)
    if (!ticketResult.success) {
      return NextResponse.json({ error: ticketResult.error }, { status: 403 })
    }

    // Get prizes
    const prizes = await db.spinWheel.getPrizes()
    if (!prizes.length) {
      return NextResponse.json({ error: "No prizes available" }, { status: 500 })
    }

    // Weighted random selection
    const totalProb = prizes.reduce((sum, p) => sum + parseFloat(p.probability.toString()), 0)
    const random = Math.random() * totalProb
    
    let cumulative = 0
    let winner = prizes[0]
    
    for (const prize of prizes) {
      cumulative += parseFloat(prize.probability.toString())
      if (random <= cumulative) {
        winner = prize
        break
      }
    }

    // Record spin
    await db.spinWheel.recordSpin({
      user_id: userId,
      prize_id: winner.id,
      prize_name: winner.name,
      prize_type: winner.type,
      prize_value: winner.value,
    })

    // Award prize
    if (winner.type === 'coins' && winner.value > 0) {
      await db.coins.addCoins({
        user_id: userId,
        amount: winner.value,
        type: 'spin',
        description: `Won ${winner.value} coins from spin wheel`,
      })
    } else if (winner.type === 'ticket') {
      await db.spinWheel.addTicket(userId, 'reward')
    }

    // Get updated balance
    const balance = await db.coins.getUserBalance(userId)
    const tickets = await db.spinWheel.getTickets(userId)

    const prizeIndex = prizes.findIndex(p => p.id === winner.id)

    return NextResponse.json({
      success: true,
      prize: {
        id: winner.id,
        name: winner.name,
        coins: winner.value,
        color: winner.color,
        rarity: winner.type,
      },
      prizeIndex,
      newBalance: balance,
      newTickets: tickets.length,
    })
  } catch (error) {
    console.error("Spin error:", error)
    return NextResponse.json({ error: "Failed to spin" }, { status: 500 })
  }
}
