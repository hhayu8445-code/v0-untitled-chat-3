// Supabase Configuration
// Uses environment variables with fallback values

export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://linnqtixdfjwbrixitrb.supabase.co",
  anonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbm5xdGl4ZGZqd2JyaXhpdHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMTI4NTIsImV4cCI6MjA4MDc4ODg1Mn0.7Mm9XtHZzWC4K4iHuPBCxIWoUJAVqqsD4ph0mwUbFrU",
  serviceRoleKey:
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbm5xdGl4ZGZqd2JyaXhpdHJiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTIxMjg1MiwiZXhwIjoyMDgwNzg4ODUyfQ.Rri9zq0S-Y4nRpwkuiHp1GsZJXAsL-6-xpqJ1fAP3KE",
  databaseUrl:
    process.env.POSTGRES_URL ||
    "postgresql://postgres.linnqtixdfjwbrixitrb:06Zs04s8vCBrW4XE@aws-1-us-east-1.pooler.supabase.com:6543/postgres",
  jwtSecret:
    process.env.SUPABASE_JWT_SECRET ||
    "IdaM9Z2ufwSgUx3jk1kI5oQIkiYsWvcYLOu7QRyzelyBoLTNWEXqsh1gl+nMEbo4l+T56ampsHLiQJRj0kCSdA==",
  publishableKey: process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_qAu7FwbQGSSpw25X35BzfA_aikkbjz8",
  secretKey: process.env.SUPABASE_SECRET_KEY || "sb_secret_eovanDfZcPbXkEOlgkyALw_jw-imRnL",
}

// Validate required configuration
export function validateSupabaseConfig() {
  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('linnqtixdfjwbrixitrb') && process.env.NODE_ENV === 'production') {
    console.warn('⚠️  Warning: Using default Supabase URL. Please set NEXT_PUBLIC_SUPABASE_URL environment variable in production.')
  }
  
  if (!SUPABASE_CONFIG.anonKey || SUPABASE_CONFIG.anonKey.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9') && process.env.NODE_ENV === 'production') {
    console.warn('⚠️  Warning: Using default anon key. Please set NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable in production.')
  }
  
  if (!SUPABASE_CONFIG.serviceRoleKey || SUPABASE_CONFIG.serviceRoleKey.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9') && process.env.NODE_ENV === 'production') {
    console.warn('⚠️  Warning: Using default service role key. Please set SUPABASE_SERVICE_ROLE_KEY environment variable in production.')
  }
}

// Run validation in development
if (process.env.NODE_ENV !== 'production') {
  validateSupabaseConfig();
}