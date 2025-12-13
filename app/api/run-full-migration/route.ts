import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export const maxDuration = 60

const OLD_DB_URL =
  "postgresql://postgres.linnqtixdfjwbrixitrb:dEJETWQnWU6hRSrA@aws-1-us-east-1.pooler.supabase.com:6543/postgres"

export async function GET() {
  const results: any[] = []

  try {
    const oldDb = neon(OLD_DB_URL)
    const newDb = neon(process.env.POSTGRES_URL!)

    // Helper function
    async function migrateTable(name: string, fetchQuery: string, insertFn: (rows: any[]) => Promise<number>) {
      try {
        const rows = await oldDb(fetchQuery)
        if (rows.length === 0) {
          results.push({ table: name, count: 0, status: "empty" })
          return
        }
        const count = await insertFn(rows)
        results.push({ table: name, count, status: "success" })
      } catch (error: any) {
        results.push({ table: name, count: 0, status: "error", error: error.message })
      }
    }

    // 1. USERS
    await migrateTable("users", "SELECT * FROM public.users", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.users (id, discord_id, username, discriminator, avatar, email, role, coins, is_banned, ban_reason, banned_until, created_at, updated_at, last_seen) VALUES (${r.id}, ${r.discord_id}, ${r.username}, ${r.discriminator}, ${r.avatar}, ${r.email}, ${r.role || "user"}, ${r.coins || 0}, ${r.is_banned || false}, ${r.ban_reason}, ${r.banned_until}, ${r.created_at}, ${r.updated_at}, ${r.last_seen}) ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, avatar = EXCLUDED.avatar, role = EXCLUDED.role, coins = EXCLUDED.coins, updated_at = NOW()`
          count++
        } catch (e) {}
      }
      return count
    })

    // 2. ASSETS
    await migrateTable("assets", "SELECT * FROM public.assets", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.assets (id, title, description, category, framework, author_id, price, is_free, download_url, image_url, preview_images, tags, version, downloads, likes, views, file_size, requirements, status, featured, trending, created_at, updated_at) VALUES (${r.id}, ${r.title}, ${r.description}, ${r.category}, ${r.framework}, ${r.author_id}, ${r.price || 0}, ${r.is_free !== false}, ${r.download_url}, ${r.image_url}, ${r.preview_images || []}, ${r.tags || []}, ${r.version || "1.0.0"}, ${r.downloads || 0}, ${r.likes || 0}, ${r.views || 0}, ${r.file_size}, ${r.requirements || []}, ${r.status || "pending"}, ${r.featured || false}, ${r.trending || false}, ${r.created_at}, ${r.updated_at}) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, downloads = EXCLUDED.downloads, status = EXCLUDED.status`
          count++
        } catch (e) {}
      }
      return count
    })

    // 3. DOWNLOADS
    await migrateTable("downloads", "SELECT * FROM public.downloads", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.downloads (id, asset_id, user_id, coins_spent, created_at) VALUES (${r.id}, ${r.asset_id}, ${r.user_id}, ${r.coins_spent || 0}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 4. LIKES
    await migrateTable("likes", "SELECT * FROM public.likes", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.likes (id, user_id, target_id, target_type, created_at) VALUES (${r.id}, ${r.user_id}, ${r.target_id}, ${r.target_type}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 5. FORUM CATEGORIES
    await migrateTable("forum_categories", "SELECT * FROM public.forum_categories", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.forum_categories (id, name, description, icon, color, sort_order, created_at) VALUES (${r.id}, ${r.name}, ${r.description}, ${r.icon}, ${r.color}, ${r.sort_order || 0}, ${r.created_at}) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description`
          count++
        } catch (e) {}
      }
      return count
    })

    // 6. FORUM THREADS
    await migrateTable("forum_threads", "SELECT * FROM public.forum_threads", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.forum_threads (id, category_id, author_id, title, content, is_pinned, is_locked, is_deleted, status, views, likes, reply_count, last_reply_at, last_reply_by, created_at, updated_at) VALUES (${r.id}, ${r.category_id}, ${r.author_id}, ${r.title}, ${r.content}, ${r.is_pinned || false}, ${r.is_locked || false}, ${r.is_deleted || false}, ${r.status || "pending"}, ${r.views || 0}, ${r.likes || 0}, ${r.reply_count || 0}, ${r.last_reply_at}, ${r.last_reply_by}, ${r.created_at}, ${r.updated_at}) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, views = EXCLUDED.views`
          count++
        } catch (e) {}
      }
      return count
    })

    // 7. FORUM REPLIES
    await migrateTable("forum_replies", "SELECT * FROM public.forum_replies", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.forum_replies (id, thread_id, author_id, content, is_deleted, likes, created_at, updated_at) VALUES (${r.id}, ${r.thread_id}, ${r.author_id}, ${r.content}, ${r.is_deleted || false}, ${r.likes || 0}, ${r.created_at}, ${r.updated_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 8. ACTIVITIES
    await migrateTable("activities", "SELECT * FROM public.activities", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.activities (id, user_id, username, avatar, action, target, created_at) VALUES (${r.id}, ${r.user_id}, ${r.username}, ${r.avatar}, ${r.action}, ${r.target}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 9. NOTIFICATIONS
    await migrateTable("notifications", "SELECT * FROM public.notifications", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.notifications (id, user_id, title, message, type, is_read, link, created_at) VALUES (${r.id}, ${r.user_id}, ${r.title}, ${r.message}, ${r.type || "info"}, ${r.is_read || false}, ${r.link}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 10. PUBLIC NOTIFICATIONS
    await migrateTable("public_notifications", "SELECT * FROM public.public_notifications", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.public_notifications (id, title, message, type, is_active, created_at) VALUES (${r.id}, ${r.title}, ${r.message}, ${r.type || "info"}, ${r.is_active !== false}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 11. ANNOUNCEMENTS
    await migrateTable("announcements", "SELECT * FROM public.announcements", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.announcements (id, title, content, author_id, is_pinned, created_at, updated_at) VALUES (${r.id}, ${r.title}, ${r.content}, ${r.author_id}, ${r.is_pinned || false}, ${r.created_at}, ${r.updated_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 12. BANNERS
    await migrateTable("banners", "SELECT * FROM public.banners", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.banners (id, title, description, image_url, link_url, sort_order, is_active, created_at) VALUES (${r.id}, ${r.title}, ${r.description}, ${r.image_url}, ${r.link_url}, ${r.sort_order || 0}, ${r.is_active !== false}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 13. COIN TRANSACTIONS
    await migrateTable("coin_transactions", "SELECT * FROM public.coin_transactions", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.coin_transactions (id, user_id, amount, type, description, created_at) VALUES (${r.id}, ${r.user_id}, ${r.amount}, ${r.type}, ${r.description}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 14. DAILY REWARDS
    await migrateTable("daily_rewards", "SELECT * FROM public.daily_rewards", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.daily_rewards (id, user_id, reward_date, reward_amount, claimed_at) VALUES (${r.id}, ${r.user_id}, COALESCE(${r.reward_date}, ${r.claimed_at}::date), ${r.reward_amount}, ${r.claimed_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 15. MESSAGES
    await migrateTable("messages", "SELECT * FROM public.messages", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.messages (id, sender_id, recipient_id, content, is_read, created_at) VALUES (${r.id}, ${r.sender_id}, ${r.recipient_id}, ${r.content}, ${r.is_read || false}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 16. SPIN WHEEL PRIZES
    await migrateTable("spin_wheel_prizes", "SELECT * FROM public.spin_wheel_prizes", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.spin_wheel_prizes (id, name, type, value, description, color, probability, is_active, sort_order, created_at) VALUES (${r.id}, ${r.name}, ${r.type}, ${r.value}, ${r.description}, ${r.color || "#3b82f6"}, ${r.probability || 10}, ${r.is_active !== false}, ${r.sort_order || 0}, ${r.created_at}) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, probability = EXCLUDED.probability`
          count++
        } catch (e) {}
      }
      return count
    })

    // 17. SPIN WHEEL SETTINGS
    await migrateTable("spin_wheel_settings", "SELECT * FROM public.spin_wheel_settings LIMIT 1", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.spin_wheel_settings (id, spins_per_day, is_enabled, updated_at) VALUES (${r.id}, ${r.spins_per_day || 3}, ${r.is_enabled !== false}, ${r.updated_at}) ON CONFLICT (id) DO UPDATE SET spins_per_day = EXCLUDED.spins_per_day`
          count++
        } catch (e) {}
      }
      return count
    })

    // 18. SPIN HISTORY
    await migrateTable("spin_history", "SELECT * FROM public.spin_history", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.spin_history (id, user_id, prize_id, prize_name, coins_won, created_at) VALUES (${r.id}, ${r.user_id}, ${r.prize_id}, ${r.prize_name}, ${r.coins_won || 0}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 19. SPIN WHEEL ELIGIBLE USERS
    await migrateTable("spin_wheel_eligible_users", "SELECT * FROM public.spin_wheel_eligible_users", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.spin_wheel_eligible_users (id, user_id, spins_remaining, last_spin_at, created_at) VALUES (${r.id}, ${r.user_id}, ${r.spins_remaining || 1}, ${r.last_spin_at}, ${r.created_at}) ON CONFLICT (user_id) DO UPDATE SET spins_remaining = EXCLUDED.spins_remaining`
          count++
        } catch (e) {}
      }
      return count
    })

    // 20. SPIN WHEEL FORCE WINS
    await migrateTable("spin_wheel_force_wins", "SELECT * FROM public.spin_wheel_force_wins", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.spin_wheel_force_wins (id, user_id, prize_id, is_active, used_at, created_at) VALUES (${r.id}, ${r.user_id}, ${r.prize_id}, ${r.is_active !== false}, ${r.used_at}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // 21. TESTIMONIALS
    await migrateTable("testimonials", "SELECT * FROM public.testimonials", async (rows) => {
      let count = 0
      for (const r of rows) {
        try {
          await newDb`INSERT INTO public.testimonials (id, user_id, username, avatar, content, rating, is_featured, is_approved, created_at) VALUES (${r.id}, ${r.user_id}, ${r.username}, ${r.avatar}, ${r.content}, ${r.rating || 5}, ${r.is_featured || false}, ${r.is_approved || false}, ${r.created_at}) ON CONFLICT (id) DO NOTHING`
          count++
        } catch (e) {}
      }
      return count
    })

    // Calculate totals
    const totalRows = results.reduce((sum, r) => sum + r.count, 0)
    const successTables = results.filter((r) => r.status === "success" || r.status === "empty").length
    const errorTables = results.filter((r) => r.status === "error").length

    return NextResponse.json({
      success: true,
      message: "Migration completed!",
      summary: {
        totalTables: results.length,
        successTables,
        errorTables,
        totalRows,
      },
      details: results,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        results,
      },
      { status: 500 },
    )
  }
}
