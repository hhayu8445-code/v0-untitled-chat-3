import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/server"

/**
 * Get current user from Supabase auth session
 */
export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

/**
 * Get user profile data from database
 */
export async function getUserProfile(discordId: string) {
  const supabase = await createAdminClient()
  const { data, error } = await supabase.from("users").select("*").eq("discord_id", discordId).single()

  if (error) {
    console.error("Error fetching user profile:", error)
    return null
  }

  return data
}

/**
 * Create or update user profile
 */
export async function upsertUserProfile(userData: {
  discord_id: string
  username: string
  avatar?: string
  email?: string
  discriminator?: string
}) {
  const supabase = await createAdminClient()

  const { data, error } = await supabase
    .from("users")
    .upsert(
      {
        discord_id: userData.discord_id,
        username: userData.username,
        avatar: userData.avatar,
        email: userData.email,
        discriminator: userData.discriminator,
        last_seen: new Date().toISOString(),
      },
      {
        onConflict: "discord_id",
      },
    )
    .select()
    .single()

  if (error) {
    console.error("Error upserting user profile:", error)
    return null
  }

  return data
}

/**
 * Check if user is admin
 */
export async function isUserAdmin(discordId: string): Promise<boolean> {
  const supabase = await createAdminClient()
  const { data } = await supabase.from("users").select("role").eq("discord_id", discordId).single()

  return data?.role === "admin" || data?.role === "superadmin"
}

/**
 * Update user's last seen timestamp
 */
export async function updateUserLastSeen(discordId: string) {
  const supabase = await createAdminClient()
  await supabase.from("users").update({ last_seen: new Date().toISOString() }).eq("discord_id", discordId)
}

/**
 * Get user coins balance
 */
export async function getUserCoins(discordId: string): Promise<number> {
  const supabase = await createAdminClient()
  const { data } = await supabase.from("users").select("coins").eq("discord_id", discordId).single()

  return data?.coins || 0
}

/**
 * Add coins to user account
 */
export async function addUserCoins(discordId: string, amount: number, type = "earn", description?: string) {
  const supabase = await createAdminClient()

  // Get current user
  const { data: user } = await supabase.from("users").select("id, coins").eq("discord_id", discordId).single()

  if (!user) {
    throw new Error("User not found")
  }

  // Update coins
  const newCoins = user.coins + amount
  await supabase.from("users").update({ coins: newCoins }).eq("discord_id", discordId)

  // Record transaction
  await supabase.from("coin_transactions").insert({
    user_id: user.id,
    amount,
    type,
    description,
  })

  return newCoins
}

/**
 * Deduct coins from user account
 */
export async function deductUserCoins(discordId: string, amount: number, description?: string) {
  const supabase = await createAdminClient()

  // Get current user
  const { data: user } = await supabase.from("users").select("id, coins").eq("discord_id", discordId).single()

  if (!user) {
    throw new Error("User not found")
  }

  if (user.coins < amount) {
    throw new Error("Insufficient coins")
  }

  // Update coins
  const newCoins = user.coins - amount
  await supabase.from("users").update({ coins: newCoins }).eq("discord_id", discordId)

  // Record transaction
  await supabase.from("coin_transactions").insert({
    user_id: user.id,
    amount: -amount,
    type: "spend",
    description,
  })

  return newCoins
}
