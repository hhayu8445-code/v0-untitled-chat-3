import { neon } from "@neondatabase/serverless"

// Database connections
const OLD_DB_URL =
  "postgresql://postgres.linnqtixdfjwbrixitrb:dEJETWQnWU6hRSrA@aws-1-us-east-1.pooler.supabase.com:6543/postgres"
const NEW_DB_URL = process.env.POSTGRES_URL || process.env.SUPABASE_URL || ""

const oldDb = neon(OLD_DB_URL)
const newDb = neon(NEW_DB_URL)

interface MigrationResult {
  table: string
  count: number
  success: boolean
  error?: string
}

const results: MigrationResult[] = []

async function log(message: string) {
  console.log(`[MIGRATION] ${message}`)
}

async function migrateTable(tableName: string, query: string, insertFn: (rows: any[]) => Promise<void>): Promise<void> {
  try {
    log(`Fetching ${tableName} from old database...`)
    const rows = await oldDb(query)

    if (rows.length === 0) {
      log(`No data in ${tableName}, skipping...`)
      results.push({ table: tableName, count: 0, success: true })
      return
    }

    log(`Found ${rows.length} rows in ${tableName}, migrating...`)
    await insertFn(rows)

    log(`✓ Migrated ${rows.length} rows to ${tableName}`)
    results.push({ table: tableName, count: rows.length, success: true })
  } catch (error: any) {
    log(`✗ Error migrating ${tableName}: ${error.message}`)
    results.push({ table: tableName, count: 0, success: false, error: error.message })
  }
}

async function runMigration() {
  log("========================================")
  log("STARTING FULL DATABASE MIGRATION")
  log("From: linnqtixdfjwbrixitrb (OLD)")
  log("To: csnogkgzziimwvwhvrhb (NEW)")
  log("========================================\n")

  // 1. USERS (must be first - other tables reference it)
  await migrateTable("users", "SELECT * FROM public.users ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.users (id, discord_id, username, discriminator, avatar, email, role, coins, is_banned, ban_reason, banned_until, created_at, updated_at, last_seen)
          VALUES (${row.id}, ${row.discord_id}, ${row.username}, ${row.discriminator}, ${row.avatar}, ${row.email}, ${row.role || "user"}, ${row.coins || 0}, ${row.is_banned || false}, ${row.ban_reason}, ${row.banned_until}, ${row.created_at}, ${row.updated_at}, ${row.last_seen})
          ON CONFLICT (id) DO UPDATE SET
            username = EXCLUDED.username,
            avatar = EXCLUDED.avatar,
            role = EXCLUDED.role,
            coins = EXCLUDED.coins,
            is_banned = EXCLUDED.is_banned,
            updated_at = EXCLUDED.updated_at,
            last_seen = EXCLUDED.last_seen
        `
    }
  })

  // 2. ASSETS
  await migrateTable("assets", "SELECT * FROM public.assets ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.assets (id, title, description, category, framework, author_id, price, is_free, download_url, image_url, preview_images, tags, version, downloads, likes, views, file_size, requirements, status, featured, trending, created_at, updated_at)
          VALUES (${row.id}, ${row.title}, ${row.description}, ${row.category}, ${row.framework}, ${row.author_id}, ${row.price || 0}, ${row.is_free !== false}, ${row.download_url}, ${row.image_url}, ${row.preview_images || []}, ${row.tags || []}, ${row.version || "1.0.0"}, ${row.downloads || 0}, ${row.likes || 0}, ${row.views || 0}, ${row.file_size}, ${row.requirements || []}, ${row.status || "pending"}, ${row.featured || false}, ${row.trending || false}, ${row.created_at}, ${row.updated_at})
          ON CONFLICT (id) DO UPDATE SET
            title = EXCLUDED.title,
            description = EXCLUDED.description,
            downloads = EXCLUDED.downloads,
            likes = EXCLUDED.likes,
            views = EXCLUDED.views,
            status = EXCLUDED.status,
            updated_at = EXCLUDED.updated_at
        `
    }
  })

  // 3. DOWNLOADS
  await migrateTable("downloads", "SELECT * FROM public.downloads ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.downloads (id, asset_id, user_id, coins_spent, created_at)
          VALUES (${row.id}, ${row.asset_id}, ${row.user_id}, ${row.coins_spent || 0}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 4. LIKES
  await migrateTable("likes", "SELECT * FROM public.likes ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.likes (id, user_id, target_id, target_type, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.target_id}, ${row.target_type}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 5. FORUM CATEGORIES
  await migrateTable("forum_categories", "SELECT * FROM public.forum_categories ORDER BY sort_order", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.forum_categories (id, name, description, icon, color, sort_order, created_at)
          VALUES (${row.id}, ${row.name}, ${row.description}, ${row.icon}, ${row.color}, ${row.sort_order || 0}, ${row.created_at})
          ON CONFLICT (id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            icon = EXCLUDED.icon,
            color = EXCLUDED.color,
            sort_order = EXCLUDED.sort_order
        `
    }
  })

  // 6. FORUM THREADS
  await migrateTable("forum_threads", "SELECT * FROM public.forum_threads ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.forum_threads (id, category_id, author_id, title, content, is_pinned, is_locked, is_deleted, status, views, likes, reply_count, last_reply_at, last_reply_by, created_at, updated_at)
          VALUES (${row.id}, ${row.category_id}, ${row.author_id}, ${row.title}, ${row.content}, ${row.is_pinned || false}, ${row.is_locked || false}, ${row.is_deleted || false}, ${row.status || "pending"}, ${row.views || 0}, ${row.likes || 0}, ${row.reply_count || 0}, ${row.last_reply_at}, ${row.last_reply_by}, ${row.created_at}, ${row.updated_at})
          ON CONFLICT (id) DO UPDATE SET
            title = EXCLUDED.title,
            content = EXCLUDED.content,
            views = EXCLUDED.views,
            likes = EXCLUDED.likes,
            reply_count = EXCLUDED.reply_count,
            updated_at = EXCLUDED.updated_at
        `
    }
  })

  // 7. FORUM REPLIES
  await migrateTable("forum_replies", "SELECT * FROM public.forum_replies ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.forum_replies (id, thread_id, author_id, content, is_deleted, likes, created_at, updated_at)
          VALUES (${row.id}, ${row.thread_id}, ${row.author_id}, ${row.content}, ${row.is_deleted || false}, ${row.likes || 0}, ${row.created_at}, ${row.updated_at})
          ON CONFLICT (id) DO UPDATE SET
            content = EXCLUDED.content,
            likes = EXCLUDED.likes,
            updated_at = EXCLUDED.updated_at
        `
    }
  })

  // 8. ACTIVITIES
  await migrateTable("activities", "SELECT * FROM public.activities ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.activities (id, user_id, username, avatar, action, target, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.username}, ${row.avatar}, ${row.action}, ${row.target}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 9. NOTIFICATIONS
  await migrateTable("notifications", "SELECT * FROM public.notifications ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.notifications (id, user_id, title, message, type, is_read, link, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.title}, ${row.message}, ${row.type || "info"}, ${row.is_read || false}, ${row.link}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 10. PUBLIC NOTIFICATIONS
  await migrateTable(
    "public_notifications",
    "SELECT * FROM public.public_notifications ORDER BY created_at",
    async (rows) => {
      for (const row of rows) {
        await newDb`
          INSERT INTO public.public_notifications (id, title, message, type, is_active, created_at)
          VALUES (${row.id}, ${row.title}, ${row.message}, ${row.type || "info"}, ${row.is_active !== false}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
      }
    },
  )

  // 11. ANNOUNCEMENTS
  await migrateTable("announcements", "SELECT * FROM public.announcements ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.announcements (id, title, content, author_id, is_pinned, created_at, updated_at)
          VALUES (${row.id}, ${row.title}, ${row.content}, ${row.author_id}, ${row.is_pinned || false}, ${row.created_at}, ${row.updated_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 12. BANNERS
  await migrateTable("banners", "SELECT * FROM public.banners ORDER BY sort_order", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.banners (id, title, description, image_url, link_url, sort_order, is_active, created_at)
          VALUES (${row.id}, ${row.title}, ${row.description}, ${row.image_url}, ${row.link_url}, ${row.sort_order || 0}, ${row.is_active !== false}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 13. COIN TRANSACTIONS
  await migrateTable(
    "coin_transactions",
    "SELECT * FROM public.coin_transactions ORDER BY created_at",
    async (rows) => {
      for (const row of rows) {
        await newDb`
          INSERT INTO public.coin_transactions (id, user_id, amount, type, description, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.amount}, ${row.type}, ${row.description}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
      }
    },
  )

  // 14. DAILY REWARDS
  await migrateTable("daily_rewards", "SELECT * FROM public.daily_rewards ORDER BY claimed_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.daily_rewards (id, user_id, reward_date, reward_amount, claimed_at)
          VALUES (${row.id}, ${row.user_id}, ${row.reward_date || row.claimed_at}::date, ${row.reward_amount}, ${row.claimed_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 15. MESSAGES
  await migrateTable("messages", "SELECT * FROM public.messages ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.messages (id, sender_id, recipient_id, content, is_read, created_at)
          VALUES (${row.id}, ${row.sender_id}, ${row.recipient_id}, ${row.content}, ${row.is_read || false}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 16. SPIN WHEEL PRIZES
  await migrateTable(
    "spin_wheel_prizes",
    "SELECT * FROM public.spin_wheel_prizes ORDER BY sort_order",
    async (rows) => {
      for (const row of rows) {
        await newDb`
          INSERT INTO public.spin_wheel_prizes (id, name, type, value, description, color, probability, is_active, sort_order, created_at)
          VALUES (${row.id}, ${row.name}, ${row.type}, ${row.value}, ${row.description}, ${row.color || "#3b82f6"}, ${row.probability || 10}, ${row.is_active !== false}, ${row.sort_order || 0}, ${row.created_at})
          ON CONFLICT (id) DO UPDATE SET
            name = EXCLUDED.name,
            value = EXCLUDED.value,
            probability = EXCLUDED.probability,
            is_active = EXCLUDED.is_active
        `
      }
    },
  )

  // 17. SPIN WHEEL SETTINGS
  await migrateTable("spin_wheel_settings", "SELECT * FROM public.spin_wheel_settings LIMIT 1", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.spin_wheel_settings (id, spins_per_day, is_enabled, updated_at)
          VALUES (${row.id}, ${row.spins_per_day || 3}, ${row.is_enabled !== false}, ${row.updated_at})
          ON CONFLICT (id) DO UPDATE SET
            spins_per_day = EXCLUDED.spins_per_day,
            is_enabled = EXCLUDED.is_enabled,
            updated_at = EXCLUDED.updated_at
        `
    }
  })

  // 18. SPIN HISTORY
  await migrateTable("spin_history", "SELECT * FROM public.spin_history ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.spin_history (id, user_id, prize_id, prize_name, coins_won, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.prize_id}, ${row.prize_name}, ${row.coins_won || 0}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 19. SPIN WHEEL ELIGIBLE USERS
  await migrateTable("spin_wheel_eligible_users", "SELECT * FROM public.spin_wheel_eligible_users", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.spin_wheel_eligible_users (id, user_id, spins_remaining, last_spin_at, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.spins_remaining || 1}, ${row.last_spin_at}, ${row.created_at})
          ON CONFLICT (user_id) DO UPDATE SET
            spins_remaining = EXCLUDED.spins_remaining,
            last_spin_at = EXCLUDED.last_spin_at
        `
    }
  })

  // 20. SPIN WHEEL FORCE WINS
  await migrateTable("spin_wheel_force_wins", "SELECT * FROM public.spin_wheel_force_wins", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.spin_wheel_force_wins (id, user_id, prize_id, is_active, used_at, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.prize_id}, ${row.is_active !== false}, ${row.used_at}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // 21. TESTIMONIALS
  await migrateTable("testimonials", "SELECT * FROM public.testimonials ORDER BY created_at", async (rows) => {
    for (const row of rows) {
      await newDb`
          INSERT INTO public.testimonials (id, user_id, username, avatar, content, rating, is_featured, is_approved, created_at)
          VALUES (${row.id}, ${row.user_id}, ${row.username}, ${row.avatar}, ${row.content}, ${row.rating || 5}, ${row.is_featured || false}, ${row.is_approved || false}, ${row.created_at})
          ON CONFLICT (id) DO NOTHING
        `
    }
  })

  // Print summary
  log("\n========================================")
  log("MIGRATION COMPLETE!")
  log("========================================\n")

  let totalMigrated = 0
  let successCount = 0
  let failCount = 0

  for (const result of results) {
    const status = result.success ? "✓" : "✗"
    log(`${status} ${result.table}: ${result.count} rows ${result.error ? `(Error: ${result.error})` : ""}`)
    totalMigrated += result.count
    if (result.success) successCount++
    else failCount++
  }

  log("\n----------------------------------------")
  log(`Total tables processed: ${results.length}`)
  log(`Successful: ${successCount}`)
  log(`Failed: ${failCount}`)
  log(`Total rows migrated: ${totalMigrated}`)
  log("========================================")
}

// Run migration
runMigration().catch(console.error)
