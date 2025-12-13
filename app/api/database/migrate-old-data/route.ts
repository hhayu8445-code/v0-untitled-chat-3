import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const OLD_DB_URL = "https://linnqtixdfjwbrixitrb.supabase.co"
const NEW_DB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const NEW_DB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function GET() {
  try {
    // Check for required environment variables
    if (!process.env.OLD_SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        {
          error: "OLD_SUPABASE_SERVICE_ROLE_KEY not found in environment variables",
          message: "Please add your old database service role key to .env.local",
        },
        { status: 500 },
      )
    }

    const oldSupabase = createClient(OLD_DB_URL, process.env.OLD_SUPABASE_SERVICE_ROLE_KEY)
    const newSupabase = createClient(NEW_DB_URL, NEW_DB_KEY)

    const results = []

    // Tables to migrate in order
    const tables = [
      "users",
      "forum_categories",
      "spin_wheel_prizes",
      "spin_wheel_settings",
      "assets",
      "announcements",
      "banners",
      "activities",
      "notifications",
      "coin_transactions",
      "daily_rewards",
      "testimonials",
      "spin_wheel_eligible_users",
      "spin_history",
      "downloads",
      "likes",
      "forum_threads",
      "messages",
      "spin_wheel_force_wins",
      "forum_replies",
      "public_notifications",
    ]

    for (const table of tables) {
      // Get data from old database
      const { data: oldData, error: fetchError } = await oldSupabase.from(table).select("*")

      if (fetchError) {
        results.push({
          table,
          status: "error",
          error: fetchError.message,
        })
        continue
      }

      if (!oldData || oldData.length === 0) {
        results.push({
          table,
          status: "skipped",
          message: "No data to migrate",
        })
        continue
      }

      // Insert into new database
      const { error: insertError } = await newSupabase.from(table).upsert(oldData, { onConflict: "id" })

      if (insertError) {
        results.push({
          table,
          status: "error",
          error: insertError.message,
          attempted: oldData.length,
        })
      } else {
        results.push({
          table,
          status: "success",
          migrated: oldData.length,
        })
      }
    }

    return NextResponse.json({
      message: "Migration completed",
      results,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST() {
  return GET()
}
