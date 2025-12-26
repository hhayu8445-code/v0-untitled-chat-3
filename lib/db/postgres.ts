import postgres from 'postgres'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.SUPABASE_DB_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined')
}

const sql = postgres(connectionString, {
  ssl: 'require'
})

export default sql
