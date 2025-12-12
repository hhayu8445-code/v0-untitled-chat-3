import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable")
  }
  return url
}

function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable")
  }
  return key
}

function getSupabaseServiceRoleKey(): string {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable")
  }
  return key
}

/**
 * Creates a Supabase client for server-side operations
 * Always create a new client within each function
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Server Component - ignore
        }
      },
    },
  })
}

/**
 * Creates an admin Supabase client that bypasses RLS
 * Removed cookies dependency - admin client doesn't need cookies
 * This fixes the "cookies() was called outside of request" error in NextAuth callbacks
 */
export async function createAdminClient() {
  const { createClient } = await import("@supabase/supabase-js")

  return createClient(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Aliases for backward compatibility
export const getSupabaseServerClient = createClient
export const getSupabaseAdminClient = createAdminClient
