import { createClient } from "@supabase/supabase-js"

// Database lama
const OLD_DB_URL = "https://linnqtixdfjwbrixitrb.supabase.co"
const OLD_DB_KEY =
  process.env.OLD_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbm5xdGl4ZGZqd2JyaXhpdHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODI1MzEsImV4cCI6MjA0ODU1ODUzMX0.cCQ2MvI7nBqVGw7oT2pU5nqLQVVrPCrPNEpxWJ0vNSY"

// Database baru (current)
const NEW_DB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const NEW_DB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

const oldDb = createClient(OLD_DB_URL, OLD_DB_KEY)
const newDb = createClient(NEW_DB_URL, NEW_DB_KEY)

async function migrateData() {
  console.log("🚀 Starting data migration...\n")

  try {
    // 1. Migrate Users
    console.log("📊 Migrating users...")
    const { data: users, error: usersError } = await oldDb.from("users").select("*")

    if (usersError) {
      console.log("⚠️  No users table in old database or empty")
    } else if (users && users.length > 0) {
      const { error: insertError } = await newDb.from("users").upsert(users, { onConflict: "discord_id" })

      if (insertError) {
        console.error("❌ Error inserting users:", insertError.message)
      } else {
        console.log(`✅ Migrated ${users.length} users`)
      }
    }

    // 2. Migrate Forum Categories
    console.log("📊 Migrating forum categories...")
    const { data: categories, error: categoriesError } = await oldDb.from("forum_categories").select("*")

    if (categoriesError) {
      console.log("⚠️  No forum_categories table in old database")
    } else if (categories && categories.length > 0) {
      const { error: insertError } = await newDb.from("forum_categories").upsert(categories, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting categories:", insertError.message)
      } else {
        console.log(`✅ Migrated ${categories.length} forum categories`)
      }
    }

    // 3. Migrate Assets
    console.log("📊 Migrating assets...")
    const { data: assets, error: assetsError } = await oldDb.from("assets").select("*")

    if (assetsError) {
      console.log("⚠️  No assets table in old database")
    } else if (assets && assets.length > 0) {
      const { error: insertError } = await newDb.from("assets").upsert(assets, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting assets:", insertError.message)
      } else {
        console.log(`✅ Migrated ${assets.length} assets`)
      }
    }

    // 4. Migrate Forum Threads
    console.log("📊 Migrating forum threads...")
    const { data: threads, error: threadsError } = await oldDb.from("forum_threads").select("*")

    if (threadsError) {
      console.log("⚠️  No forum_threads table in old database")
    } else if (threads && threads.length > 0) {
      const { error: insertError } = await newDb.from("forum_threads").upsert(threads, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting threads:", insertError.message)
      } else {
        console.log(`✅ Migrated ${threads.length} forum threads`)
      }
    }

    // 5. Migrate Forum Replies
    console.log("📊 Migrating forum replies...")
    const { data: replies, error: repliesError } = await oldDb.from("forum_replies").select("*")

    if (repliesError) {
      console.log("⚠️  No forum_replies table in old database")
    } else if (replies && replies.length > 0) {
      const { error: insertError } = await newDb.from("forum_replies").upsert(replies, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting replies:", insertError.message)
      } else {
        console.log(`✅ Migrated ${replies.length} forum replies`)
      }
    }

    // 6. Migrate Downloads
    console.log("📊 Migrating downloads...")
    const { data: downloads, error: downloadsError } = await oldDb.from("downloads").select("*")

    if (downloadsError) {
      console.log("⚠️  No downloads table in old database")
    } else if (downloads && downloads.length > 0) {
      const { error: insertError } = await newDb.from("downloads").upsert(downloads, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting downloads:", insertError.message)
      } else {
        console.log(`✅ Migrated ${downloads.length} downloads`)
      }
    }

    // 7. Migrate Likes
    console.log("📊 Migrating likes...")
    const { data: likes, error: likesError } = await oldDb.from("likes").select("*")

    if (likesError) {
      console.log("⚠️  No likes table in old database")
    } else if (likes && likes.length > 0) {
      const { error: insertError } = await newDb.from("likes").upsert(likes, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting likes:", insertError.message)
      } else {
        console.log(`✅ Migrated ${likes.length} likes`)
      }
    }

    // 8. Migrate Notifications
    console.log("📊 Migrating notifications...")
    const { data: notifications, error: notificationsError } = await oldDb.from("notifications").select("*")

    if (notificationsError) {
      console.log("⚠️  No notifications table in old database")
    } else if (notifications && notifications.length > 0) {
      const { error: insertError } = await newDb.from("notifications").upsert(notifications, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting notifications:", insertError.message)
      } else {
        console.log(`✅ Migrated ${notifications.length} notifications`)
      }
    }

    // 9. Migrate Activities
    console.log("📊 Migrating activities...")
    const { data: activities, error: activitiesError } = await oldDb.from("activities").select("*")

    if (activitiesError) {
      console.log("⚠️  No activities table in old database")
    } else if (activities && activities.length > 0) {
      const { error: insertError } = await newDb.from("activities").upsert(activities, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting activities:", insertError.message)
      } else {
        console.log(`✅ Migrated ${activities.length} activities`)
      }
    }

    // 10. Migrate Coin Transactions
    console.log("📊 Migrating coin transactions...")
    const { data: transactions, error: transactionsError } = await oldDb.from("coin_transactions").select("*")

    if (transactionsError) {
      console.log("⚠️  No coin_transactions table in old database")
    } else if (transactions && transactions.length > 0) {
      const { error: insertError } = await newDb.from("coin_transactions").upsert(transactions, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting transactions:", insertError.message)
      } else {
        console.log(`✅ Migrated ${transactions.length} coin transactions`)
      }
    }

    // 11. Migrate Spin Wheel Prizes
    console.log("📊 Migrating spin wheel prizes...")
    const { data: prizes, error: prizesError } = await oldDb.from("spin_wheel_prizes").select("*")

    if (prizesError) {
      console.log("⚠️  No spin_wheel_prizes table in old database")
    } else if (prizes && prizes.length > 0) {
      const { error: insertError } = await newDb.from("spin_wheel_prizes").upsert(prizes, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting prizes:", insertError.message)
      } else {
        console.log(`✅ Migrated ${prizes.length} spin wheel prizes`)
      }
    }

    // 12. Migrate Spin History
    console.log("📊 Migrating spin history...")
    const { data: spinHistory, error: spinHistoryError } = await oldDb.from("spin_history").select("*")

    if (spinHistoryError) {
      console.log("⚠️  No spin_history table in old database")
    } else if (spinHistory && spinHistory.length > 0) {
      const { error: insertError } = await newDb.from("spin_history").upsert(spinHistory, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting spin history:", insertError.message)
      } else {
        console.log(`✅ Migrated ${spinHistory.length} spin history records`)
      }
    }

    // 13. Migrate Announcements
    console.log("📊 Migrating announcements...")
    const { data: announcements, error: announcementsError } = await oldDb.from("announcements").select("*")

    if (announcementsError) {
      console.log("⚠️  No announcements table in old database")
    } else if (announcements && announcements.length > 0) {
      const { error: insertError } = await newDb.from("announcements").upsert(announcements, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting announcements:", insertError.message)
      } else {
        console.log(`✅ Migrated ${announcements.length} announcements`)
      }
    }

    // 14. Migrate Testimonials
    console.log("📊 Migrating testimonials...")
    const { data: testimonials, error: testimonialsError } = await oldDb.from("testimonials").select("*")

    if (testimonialsError) {
      console.log("⚠️  No testimonials table in old database")
    } else if (testimonials && testimonials.length > 0) {
      const { error: insertError } = await newDb.from("testimonials").upsert(testimonials, { onConflict: "id" })

      if (insertError) {
        console.error("❌ Error inserting testimonials:", insertError.message)
      } else {
        console.log(`✅ Migrated ${testimonials.length} testimonials`)
      }
    }

    console.log("\n✅ Migration completed successfully!")
  } catch (error) {
    console.error("❌ Migration failed:", error)
    throw error
  }
}

// Run migration
migrateData()
  .then(() => {
    console.log("\n🎉 All data migrated successfully!")
    process.exit(0)
  })
  .catch((error) => {
    console.error("\n❌ Migration failed with error:", error)
    process.exit(1)
  })
