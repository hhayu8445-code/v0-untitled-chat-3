import { createAdminClient } from "@/lib/supabase/server"
import { readFileSync } from "fs"
import { join } from "path"

async function runMigrations() {
  console.log("🚀 Starting database migrations...")

  const supabase = await createAdminClient()

  try {
    // Read and execute schema migration
    console.log("📦 Running schema migration...")
    const schemaSQL = readFileSync(join(process.cwd(), "scripts", "001_init_schema.sql"), "utf-8")

    const { error: schemaError } = await supabase.rpc("exec_sql", { sql: schemaSQL })

    if (schemaError) {
      console.error("❌ Schema migration failed:", schemaError)
      throw schemaError
    }

    console.log("✅ Schema migration completed")

    // Read and execute seed data
    console.log("🌱 Running seed data...")
    const seedSQL = readFileSync(join(process.cwd(), "scripts", "002_seed_data.sql"), "utf-8")

    const { error: seedError } = await supabase.rpc("exec_sql", { sql: seedSQL })

    if (seedError) {
      console.error("❌ Seed data failed:", seedError)
      throw seedError
    }

    console.log("✅ Seed data completed")

    console.log("🎉 All migrations completed successfully!")
  } catch (error) {
    console.error("💥 Migration failed:", error)
    process.exit(1)
  }
}

// Run migrations
runMigrations()
