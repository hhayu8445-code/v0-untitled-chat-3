-- =====================================================
-- COMPLETE SPIN WHEEL SETUP - ALL TABLES
-- Run this script to set up all spin wheel tables
-- =====================================================

-- 1. Create users table if not exists (with spin_tickets and coins)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  discord_id TEXT UNIQUE NOT NULL,
  username TEXT,
  email TEXT,
  avatar TEXT,
  membership TEXT DEFAULT 'free',
  role TEXT DEFAULT 'member',
  coins INTEGER DEFAULT 0,
  spin_tickets INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add columns if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'spin_tickets') THEN
    ALTER TABLE users ADD COLUMN spin_tickets INTEGER DEFAULT 0;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'coins') THEN
    ALTER TABLE users ADD COLUMN coins INTEGER DEFAULT 0;
  END IF;
END $$;

-- 2. Create spin_wheel_prizes table
CREATE TABLE IF NOT EXISTS spin_wheel_prizes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  coins INTEGER NOT NULL DEFAULT 0,
  color TEXT DEFAULT '#6b7280',
  probability DECIMAL(5,2) NOT NULL DEFAULT 10.00,
  rarity TEXT DEFAULT 'common',
  image_url TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add new columns to prizes if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_prizes' AND column_name = 'rarity') THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN rarity TEXT DEFAULT 'common';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_prizes' AND column_name = 'image_url') THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN image_url TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_prizes' AND column_name = 'description') THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN description TEXT;
  END IF;
END $$;

-- 3. Create spin_history table
CREATE TABLE IF NOT EXISTS spin_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  prize_id UUID REFERENCES spin_wheel_prizes(id),
  prize_name TEXT,
  coins_won INTEGER DEFAULT 0,
  spin_type TEXT DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add spin_type column if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_history' AND column_name = 'spin_type') THEN
    ALTER TABLE spin_history ADD COLUMN spin_type TEXT DEFAULT 'free';
  END IF;
END $$;

-- 4. Create daily_spin_tickets table
CREATE TABLE IF NOT EXISTS daily_spin_tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  claimed_at DATE NOT NULL,
  tickets_received INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, claimed_at)
);

-- 5. Create spin_wheel_eligible_users table (for bonus spins)
CREATE TABLE IF NOT EXISTS spin_wheel_eligible_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL UNIQUE,
  spins_remaining INTEGER DEFAULT 0,
  reason TEXT,
  granted_by TEXT,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Create spin_wheel_force_wins table (for rigged wins)
CREATE TABLE IF NOT EXISTS spin_wheel_force_wins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  prize_id UUID REFERENCES spin_wheel_prizes(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  max_uses INTEGER DEFAULT 1,
  use_count INTEGER DEFAULT 0,
  reason TEXT,
  granted_by TEXT,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Create spin_wheel_settings table
CREATE TABLE IF NOT EXISTS spin_wheel_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add description column to spin_wheel_settings if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_settings' AND column_name = 'description') THEN
    ALTER TABLE spin_wheel_settings ADD COLUMN description TEXT;
  END IF;
END $$;

-- 8. Create coin_transactions table
CREATE TABLE IF NOT EXISTS coin_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- CREATE INDEXES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_spin_history_user_id ON spin_history(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_created_at ON spin_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_user_id ON daily_spin_tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_claimed_at ON daily_spin_tickets(claimed_at);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_force_wins_user_id ON spin_wheel_force_wins(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_force_wins_active ON spin_wheel_force_wins(is_active);
CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_id ON coin_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_users_discord_id ON users(discord_id);

-- =====================================================
-- INSERT DEFAULT PRIZES (if empty)
-- =====================================================

INSERT INTO spin_wheel_prizes (name, coins, color, probability, rarity, sort_order, is_active)
SELECT * FROM (VALUES
  ('5 Coins', 5, '#6b7280', 25.00, 'common', 1, true),
  ('10 Coins', 10, '#6b7280', 20.00, 'common', 2, true),
  ('25 Coins', 25, '#22c55e', 18.00, 'uncommon', 3, true),
  ('50 Coins', 50, '#22c55e', 15.00, 'uncommon', 4, true),
  ('100 Coins', 100, '#3b82f6', 10.00, 'rare', 5, true),
  ('250 Coins', 250, '#a855f7', 7.00, 'epic', 6, true),
  ('500 Coins', 500, '#eab308', 4.00, 'legendary', 7, true),
  ('1000 Coins', 1000, '#eab308', 1.00, 'legendary', 8, true)
) AS v(name, coins, color, probability, rarity, sort_order, is_active)
WHERE NOT EXISTS (SELECT 1 FROM spin_wheel_prizes LIMIT 1);

-- =====================================================
-- INSERT DEFAULT SETTINGS
-- =====================================================

INSERT INTO spin_wheel_settings (key, value, description)
VALUES 
  ('daily_free_spins', '1', 'Number of free spins per day'),
  ('coin_spin_cost', '50', 'Cost in coins for one spin'),
  ('jackpot_threshold', '500', 'Minimum coins to be considered jackpot'),
  ('wheel_enabled', 'true', 'Is the spin wheel enabled')
ON CONFLICT (key) DO NOTHING;

-- =====================================================
-- ENABLE ROW LEVEL SECURITY
-- =====================================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_spin_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_eligible_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE coin_transactions ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- CREATE RLS POLICIES
-- =====================================================

-- Users table policies
DROP POLICY IF EXISTS "Users can view own data" ON users;
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage users" ON users;
CREATE POLICY "Service role can manage users" ON users FOR ALL USING (true);

-- Prizes table policies (public read)
DROP POLICY IF EXISTS "Anyone can view active prizes" ON spin_wheel_prizes;
CREATE POLICY "Anyone can view active prizes" ON spin_wheel_prizes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage prizes" ON spin_wheel_prizes;
CREATE POLICY "Service role can manage prizes" ON spin_wheel_prizes FOR ALL USING (true);

-- Spin history policies
DROP POLICY IF EXISTS "Users can view own history" ON spin_history;
CREATE POLICY "Users can view own history" ON spin_history FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage history" ON spin_history;
CREATE POLICY "Service role can manage history" ON spin_history FOR ALL USING (true);

-- Daily spin tickets policies
DROP POLICY IF EXISTS "Users can view own tickets" ON daily_spin_tickets;
CREATE POLICY "Users can view own tickets" ON daily_spin_tickets FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage tickets" ON daily_spin_tickets;
CREATE POLICY "Service role can manage tickets" ON daily_spin_tickets FOR ALL USING (true);

-- Eligible users policies
DROP POLICY IF EXISTS "Service role can manage eligible users" ON spin_wheel_eligible_users;
CREATE POLICY "Service role can manage eligible users" ON spin_wheel_eligible_users FOR ALL USING (true);

-- Force wins policies
DROP POLICY IF EXISTS "Service role can manage force wins" ON spin_wheel_force_wins;
CREATE POLICY "Service role can manage force wins" ON spin_wheel_force_wins FOR ALL USING (true);

-- Settings policies
DROP POLICY IF EXISTS "Anyone can view settings" ON spin_wheel_settings;
CREATE POLICY "Anyone can view settings" ON spin_wheel_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage settings" ON spin_wheel_settings;
CREATE POLICY "Service role can manage settings" ON spin_wheel_settings FOR ALL USING (true);

-- Coin transactions policies
DROP POLICY IF EXISTS "Users can view own transactions" ON coin_transactions;
CREATE POLICY "Users can view own transactions" ON coin_transactions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role can manage transactions" ON coin_transactions;
CREATE POLICY "Service role can manage transactions" ON coin_transactions FOR ALL USING (true);

-- =====================================================
-- DONE! All tables created successfully
-- =====================================================
