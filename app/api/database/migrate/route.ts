import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/server"

export async function POST() {
  try {
    console.log("🚀 Starting database migration...")

    const supabase = await createAdminClient()

    // Check if tables already exist
    const { data: existingTables } = await supabase
      .from("information_schema.tables")
      .select("table_name")
      .eq("table_schema", "public")

    console.log("📊 Checking existing tables...")

    // Schema SQL
    const schemaSQL = `
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  discord_id TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  discriminator TEXT,
  avatar TEXT,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'moderator', 'admin', 'superadmin')),
  coins INTEGER DEFAULT 0 CHECK (coins >= 0),
  is_banned BOOLEAN DEFAULT FALSE,
  ban_reason TEXT,
  banned_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assets Table
CREATE TABLE IF NOT EXISTS public.assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('scripts', 'mlo', 'vehicles', 'eup', 'weapons', 'props', 'other')),
  framework TEXT CHECK (framework IN ('qbcore', 'esx', 'qbox', 'standalone', 'other')),
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  price INTEGER DEFAULT 0 CHECK (price >= 0),
  is_free BOOLEAN DEFAULT TRUE,
  download_url TEXT,
  image_url TEXT,
  preview_images TEXT[],
  tags TEXT[],
  version TEXT DEFAULT '1.0.0',
  downloads INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  file_size TEXT,
  requirements TEXT[],
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'archived')),
  featured BOOLEAN DEFAULT FALSE,
  trending BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Downloads Table
CREATE TABLE IF NOT EXISTS public.downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_id UUID REFERENCES public.assets(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  coins_spent INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(asset_id, user_id)
);

-- Likes Table
CREATE TABLE IF NOT EXISTS public.likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  target_id UUID NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('asset', 'thread', 'reply')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, target_id, target_type)
);

-- Forum Categories Table
CREATE TABLE IF NOT EXISTS public.forum_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  color TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forum Threads Table
CREATE TABLE IF NOT EXISTS public.forum_threads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES public.forum_categories(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  is_deleted BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  last_reply_at TIMESTAMP WITH TIME ZONE,
  last_reply_by UUID REFERENCES public.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forum Replies Table
CREATE TABLE IF NOT EXISTS public.forum_replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  thread_id UUID REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_deleted BOOLEAN DEFAULT FALSE,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activities Table
CREATE TABLE IF NOT EXISTS public.activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  avatar TEXT,
  action TEXT NOT NULL,
  target TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications Table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_read BOOLEAN DEFAULT FALSE,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Public Notifications Table
CREATE TABLE IF NOT EXISTS public.public_notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Announcements Table
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Banners Table
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  link_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coin Transactions Table
CREATE TABLE IF NOT EXISTS public.coin_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('earn', 'spend', 'admin_add', 'admin_remove', 'daily_reward', 'spin_win')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Daily Rewards Table
CREATE TABLE IF NOT EXISTS public.daily_rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reward_amount INTEGER NOT NULL,
  UNIQUE(user_id, claimed_at::DATE)
);

-- Messages Table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  recipient_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Spin Wheel Tables
CREATE TABLE IF NOT EXISTS public.spin_wheel_prizes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('coins', 'item', 'custom')),
  value INTEGER,
  description TEXT,
  color TEXT DEFAULT '#3b82f6',
  probability NUMERIC(5,2) DEFAULT 10.00 CHECK (probability >= 0 AND probability <= 100),
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.spin_wheel_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  spins_per_day INTEGER DEFAULT 1 CHECK (spins_per_day > 0),
  is_enabled BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.spin_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  prize_id UUID REFERENCES public.spin_wheel_prizes(id) ON DELETE SET NULL,
  prize_name TEXT NOT NULL,
  coins_won INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.spin_wheel_eligible_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  spins_remaining INTEGER DEFAULT 1,
  last_spin_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

CREATE TABLE IF NOT EXISTS public.spin_wheel_force_wins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  prize_id UUID REFERENCES public.spin_wheel_prizes(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT TRUE,
  used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  avatar TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_users_discord_id ON public.users(discord_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_assets_author_id ON public.assets(author_id);
CREATE INDEX IF NOT EXISTS idx_assets_category ON public.assets(category);
CREATE INDEX IF NOT EXISTS idx_assets_status ON public.assets(status);
CREATE INDEX IF NOT EXISTS idx_downloads_asset_id ON public.downloads(asset_id);
CREATE INDEX IF NOT EXISTS idx_downloads_user_id ON public.downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_likes_target ON public.likes(target_id, target_type);
CREATE INDEX IF NOT EXISTS idx_forum_threads_category ON public.forum_threads(category_id);
CREATE INDEX IF NOT EXISTS idx_forum_threads_author ON public.forum_threads(author_id);
CREATE INDEX IF NOT EXISTS idx_forum_replies_thread ON public.forum_replies(thread_id);
CREATE INDEX IF NOT EXISTS idx_activities_user ON public.activities(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_coin_transactions_user ON public.coin_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON public.messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_recipient ON public.messages(recipient_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_user ON public.spin_history(user_id);
`

    // Execute schema creation
    const statements = schemaSQL
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    for (const statement of statements) {
      const { error } = await supabase.rpc("exec_sql", { sql: statement })
      if (error && !error.message.includes("already exists")) {
        console.error("Error executing statement:", error)
      }
    }

    console.log("✅ Schema created successfully")

    // Enable RLS and create policies
    await enableRLS(supabase)

    // Insert seed data
    await seedData(supabase)

    console.log("🎉 Database migration completed!")

    return NextResponse.json({
      success: true,
      message: "Database migrated successfully",
    })
  } catch (error) {
    console.error("❌ Migration error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

async function enableRLS(supabase: any) {
  console.log("🔒 Enabling Row Level Security...")

  const rlsStatements = [
    "ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.forum_categories ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.public_notifications ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.coin_transactions ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.daily_rewards ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.spin_wheel_prizes ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.spin_wheel_settings ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.spin_history ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.spin_wheel_eligible_users ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;",
  ]

  for (const statement of rlsStatements) {
    await supabase.rpc("exec_sql", { sql: statement })
  }

  console.log("✅ RLS enabled")
}

async function seedData(supabase: any) {
  console.log("🌱 Seeding data...")

  // Insert forum categories
  const { error: catError } = await supabase.from("forum_categories").upsert(
    [
      {
        name: "General Discussion",
        description: "General FiveM discussions and community chat",
        icon: "💬",
        color: "#3b82f6",
        sort_order: 1,
      },
      {
        name: "Script Help",
        description: "Get help with FiveM scripts and development",
        icon: "🔧",
        color: "#10b981",
        sort_order: 2,
      },
      {
        name: "Server Showcase",
        description: "Show off your FiveM server",
        icon: "🎮",
        color: "#8b5cf6",
        sort_order: 3,
      },
      {
        name: "Trading & Sales",
        description: "Buy, sell, and trade FiveM resources",
        icon: "💰",
        color: "#f59e0b",
        sort_order: 4,
      },
      {
        name: "Suggestions",
        description: "Suggest new features and improvements",
        icon: "💡",
        color: "#06b6d4",
        sort_order: 5,
      },
      {
        name: "Bug Reports",
        description: "Report bugs and technical issues",
        icon: "🐛",
        color: "#ef4444",
        sort_order: 6,
      },
    ],
    { onConflict: "name" },
  )

  if (catError) console.log("Forum categories already exist or error:", catError.message)

  // Insert spin wheel prizes
  const { data: existingPrizes } = await supabase.from("spin_wheel_prizes").select("id").limit(1)

  if (!existingPrizes || existingPrizes.length === 0) {
    await supabase.from("spin_wheel_prizes").insert([
      { name: "50 Coins", type: "coins", value: 50, color: "#fbbf24", probability: 25.0, sort_order: 1 },
      { name: "100 Coins", type: "coins", value: 100, color: "#f59e0b", probability: 20.0, sort_order: 2 },
      { name: "250 Coins", type: "coins", value: 250, color: "#3b82f6", probability: 15.0, sort_order: 3 },
      { name: "500 Coins", type: "coins", value: 500, color: "#8b5cf6", probability: 10.0, sort_order: 4 },
      { name: "1000 Coins", type: "coins", value: 1000, color: "#10b981", probability: 5.0, sort_order: 5 },
      { name: "Better Luck", type: "custom", value: 0, color: "#6b7280", probability: 25.0, sort_order: 6 },
    ])
  }

  // Insert spin wheel settings
  const { data: existingSettings } = await supabase.from("spin_wheel_settings").select("id").limit(1)

  if (!existingSettings || existingSettings.length === 0) {
    await supabase.from("spin_wheel_settings").insert({
      spins_per_day: 1,
      is_enabled: true,
    })
  }

  console.log("✅ Seed data inserted")
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST to run migrations",
  })
}
