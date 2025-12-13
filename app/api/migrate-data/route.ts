import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    // Database lama
    const OLD_DB_URL = "https://linnqtixdfjwbrixitrb.supabase.co"
    const OLD_DB_KEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbm5xdGl4ZGZqd2JyaXhpdHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODI1MzEsImV4cCI6MjA0ODU1ODUzMX0.cCQ2MvI7nBqVGw7oT2pU5nqLQVVrPCrPNEpxWJ0vNSY"

    // Database baru (current)
    const NEW_DB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const NEW_DB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

    const oldDb = createClient(OLD_DB_URL, OLD_DB_KEY)
    const newDb = createClient(NEW_DB_URL, NEW_DB_KEY)

    const results: any = {
      users: 0,
      assets: 0,
      forum_categories: 0,
      forum_threads: 0,
      forum_replies: 0,
      downloads: 0,
      likes: 0,
      notifications: 0,
      activities: 0,
      coin_transactions: 0,
      spin_wheel_prizes: 0,
      spin_history: 0,
      announcements: 0,
      testimonials: 0,
    }

    // Migrate each table
    const tables = [
      "users",
      "forum_categories",
      "assets",
      "forum_threads",
      "forum_replies",
      "downloads",
      "likes",
      "notifications",
      "activities",
      "coin_transactions",
      "spin_wheel_prizes",
      "spin_history",
      "announcements",
      "testimonials",
    ]

    for (const table of tables) {
      try {
        const { data, error } = await oldDb.from(table).select("*")

        if (!error && data && data.length > 0) {
          const { error: insertError } = await newDb.from(table).upsert(data, { onConflict: "id" })

          if (!insertError) {
            results[table] = data.length
          }
        }
      } catch (err) {
        console.error(`Error migrating ${table}:`, err)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Migration completed",
      results,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
