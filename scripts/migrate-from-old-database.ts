/**
 * Script to migrate data from old Supabase database to new database
 *
 * OLD DATABASE: postgresql://postgres.linnqtixdfjwbrixitrb:[PASSWORD]@aws-1-us-east-1.pooler.supabase.com:6543/postgres
 * NEW DATABASE: Uses SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from environment variables
 */

import { createClient } from "@supabase/supabase-js"

// Old database configuration
const OLD_DB_URL = "https://linnqtixdfjwbrixitrb.supabase.co"
const OLD_DB_KEY = process.env.OLD_SUPABASE_SERVICE_ROLE_KEY || "YOUR_OLD_SERVICE_ROLE_KEY"

// New database configuration (from environment)
const NEW_DB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const NEW_DB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

const oldSupabase = createClient(OLD_DB_URL, OLD_DB_KEY)
const newSupabase = createClient(NEW_DB_URL, NEW_DB_KEY)

interface MigrationStats {
  table: string
  oldCount: number
  newCount: number
  migrated: number
  errors: number
}

const stats: MigrationStats[] = []

async function logProgress(message: string) {
  console.log(`[${new Date().toISOString()}] ${message}`)
}

async function migrateTable(tableName: string) {
  try {
    await logProgress(`Starting migration for table: ${tableName}`)

    // Get data from old database
    const {
      data: oldData,
      error: fetchError,
      count: oldCount,
    } = await oldSupabase.from(tableName).select("*", { count: "exact" })

    if (fetchError) {
      console.error(`Error fetching from ${tableName}:`, fetchError)
      stats.push({
        table: tableName,
        oldCount: 0,
        newCount: 0,
        migrated: 0,
        errors: 1,
      })
      return
    }

    const recordCount = oldData?.length || 0
    await logProgress(`Found ${recordCount} records in ${tableName}`)

    if (!oldData || oldData.length === 0) {
      await logProgress(`No data to migrate for ${tableName}`)
      stats.push({
        table: tableName,
        oldCount: oldCount || 0,
        newCount: 0,
        migrated: 0,
        errors: 0,
      })
      return
    }

    // Insert data into new database in batches
    const batchSize = 100
    let migrated = 0
    let errors = 0

    for (let i = 0; i < oldData.length; i += batchSize) {
      const batch = oldData.slice(i, i + batchSize)

      const { error: insertError } = await newSupabase.from(tableName).upsert(batch, { onConflict: "id" })

      if (insertError) {
        console.error(`Error inserting batch into ${tableName}:`, insertError)
        errors += batch.length
      } else {
        migrated += batch.length
      }

      await logProgress(
        `Migrated ${Math.min(i + batchSize, oldData.length)}/${oldData.length} records from ${tableName}`,
      )
    }

    // Verify migration
    const { count: newCount } = await newSupabase.from(tableName).select("*", { count: "exact", head: true })

    stats.push({
      table: tableName,
      oldCount: oldCount || 0,
      newCount: newCount || 0,
      migrated,
      errors,
    })

    await logProgress(`Completed migration for ${tableName}: ${migrated} migrated, ${errors} errors`)
  } catch (error) {
    console.error(`Fatal error migrating ${tableName}:`, error)
    stats.push({
      table: tableName,
      oldCount: 0,
      newCount: 0,
      migrated: 0,
      errors: 1,
    })
  }
}

async function runMigration() {
  console.log("=".repeat(60))
  console.log("Starting Database Migration")
  console.log("=".repeat(60))
  console.log(`Old Database: ${OLD_DB_URL}`)
  console.log(`New Database: ${NEW_DB_URL}`)
  console.log("=".repeat(60))

  // Order matters: migrate parent tables before child tables
  const tables = [
    // Core tables (no dependencies)
    "users",
    "forum_categories",
    "spin_wheel_prizes",
    "spin_wheel_settings",

    // Tables with user dependencies
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

    // Tables with multiple dependencies
    "downloads",
    "likes",
    "forum_threads",
    "messages",
    "spin_wheel_force_wins",

    // Tables with thread dependencies
    "forum_replies",

    // Public tables
    "public_notifications",
  ]

  for (const table of tables) {
    await migrateTable(table)
  }

  // Print summary
  console.log("\n" + "=".repeat(60))
  console.log("Migration Summary")
  console.log("=".repeat(60))
  console.log("Table".padEnd(30) + "Old".padEnd(10) + "New".padEnd(10) + "Migrated".padEnd(12) + "Errors")
  console.log("-".repeat(60))

  let totalMigrated = 0
  let totalErrors = 0

  for (const stat of stats) {
    console.log(
      stat.table.padEnd(30) +
        stat.oldCount.toString().padEnd(10) +
        stat.newCount.toString().padEnd(10) +
        stat.migrated.toString().padEnd(12) +
        stat.errors.toString(),
    )
    totalMigrated += stat.migrated
    totalErrors += stat.errors
  }

  console.log("-".repeat(60))
  console.log(`Total: ${totalMigrated} records migrated, ${totalErrors} errors`)
  console.log("=".repeat(60))

  if (totalErrors === 0) {
    console.log("SUCCESS: All data migrated successfully!")
  } else {
    console.log(`WARNING: Migration completed with ${totalErrors} errors`)
  }
}

// Run migration
runMigration()
  .then(() => {
    console.log("\nMigration process completed")
    process.exit(0)
  })
  .catch((error) => {
    console.error("\nFatal error during migration:", error)
    process.exit(1)
  })
