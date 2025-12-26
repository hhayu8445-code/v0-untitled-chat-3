import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { SUPABASE_CONFIG, validateSupabaseConfig } from "./config"
import { createClient as createSupabaseClient } from "@supabase/supabase-js"

function getSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || SUPABASE_CONFIG.url
}

function getSupabaseAnonKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || SUPABASE_CONFIG.anonKey
}

function getSupabaseServiceRoleKey(): string {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_CONFIG.serviceRoleKey
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
 * Does not use cookies - suitable for NextAuth callbacks and API routes
 */
export function createAdminClient() {
  return createSupabaseClient(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: {
        'X-Client-Info': 'FiveM-Tools-V7'
      }
    },
    db: {
      schema: 'public'
    }
  })
}

/**
 * Optimized function to get user session data
 */
export async function getCurrentUser() {
  const supabase = await createClient();
  
  const {
    data: { user },
    error
  } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Error getting current user:', error);
    return { user: null, error };
  }
  
  return { user, error: null };
}

/**
 * Optimized function to get user profile data
 */
export async function getCurrentUserProfile() {
  const supabase = await createClient();
  const { user, error } = await getCurrentUser();
  
  if (error || !user) {
    return { profile: null, error: error || new Error('No authenticated user') };
  }
  
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();
  
  if (profileError) {
    console.error('Error getting user profile:', profileError);
    return { profile: null, error: profileError };
  }
  
  return { profile, error: null };
}

// Aliases for backward compatibility
export const getSupabaseServerClient = createClient
export const getSupabaseAdminClient = createAdminClient

// Run validation in development
if (process.env.NODE_ENV !== 'production') {
  validateSupabaseConfig();
}