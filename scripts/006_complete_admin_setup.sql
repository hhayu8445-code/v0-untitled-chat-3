-- Complete Spin Wheel Admin Setup
-- This script sets up all required tables for admin spin wheel functionality

-- 1. Drop old spin_wheel_settings table if it has wrong structure
DO $$
BEGIN
  -- Check if spin_wheel_settings has 'key' column (old structure)
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_settings' AND column_name = 'key') THEN
    DROP TABLE spin_wheel_settings CASCADE;
  END IF;
END $$;

-- 2. Ensure spin_wheel_prizes table exists with all columns
CREATE TABLE IF NOT EXISTS spin_wheel_prizes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  coins INTEGER NOT NULL DEFAULT 0,
  color VARCHAR(50) NOT NULL DEFAULT '#3b82f6',
  probability DECIMAL(5,2) NOT NULL DEFAULT 10,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  image_url TEXT,
  rarity VARCHAR(50) DEFAULT 'common',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Ensure spin_history table exists
CREATE TABLE IF NOT EXISTS spin_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  prize_id UUID REFERENCES spin_wheel_prizes(id) ON DELETE SET NULL,
  prize_name VARCHAR(255) NOT NULL,
  coins_won INTEGER NOT NULL DEFAULT 0,
  spin_type VARCHAR(50) DEFAULT 'ticket',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Ensure spin_wheel_eligible_users table exists
CREATE TABLE IF NOT EXISTS spin_wheel_eligible_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL UNIQUE,
  spins_remaining INTEGER NOT NULL DEFAULT 0,
  reason TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  granted_by VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Ensure spin_wheel_force_wins table exists
CREATE TABLE IF NOT EXISTS spin_wheel_force_wins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  prize_id UUID NOT NULL REFERENCES spin_wheel_prizes(id) ON DELETE CASCADE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  use_count INTEGER NOT NULL DEFAULT 0,
  max_uses INTEGER,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_by VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Create spin_wheel_settings table with correct structure
CREATE TABLE IF NOT EXISTS spin_wheel_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  daily_free_spins INTEGER NOT NULL DEFAULT 0,
  spin_cost_coins INTEGER NOT NULL DEFAULT 0,
  is_enabled BOOLEAN NOT NULL DEFAULT true,
  jackpot_threshold INTEGER NOT NULL DEFAULT 500,
  min_probability DECIMAL(5,2) DEFAULT 0.1,
  max_probability DECIMAL(5,2) DEFAULT 50,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Ensure daily_spin_tickets table exists
CREATE TABLE IF NOT EXISTS daily_spin_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  tickets_received INTEGER NOT NULL DEFAULT 1,
  streak_day INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Add missing columns to existing tables
DO $$
BEGIN
  -- Add columns to spin_wheel_prizes
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_prizes' AND column_name = 'image_url') THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN image_url TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_prizes' AND column_name = 'rarity') THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN rarity VARCHAR(50) DEFAULT 'common';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_wheel_prizes' AND column_name = 'description') THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN description TEXT;
  END IF;

  -- Add spin_type to spin_history
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'spin_history' AND column_name = 'spin_type') THEN
    ALTER TABLE spin_history ADD COLUMN spin_type VARCHAR(50) DEFAULT 'ticket';
  END IF;
END $$;

-- 9. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_spin_history_user_id ON spin_history(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_created_at ON spin_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_eligible_users_user_id ON spin_wheel_eligible_users(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_force_wins_user_id ON spin_wheel_force_wins(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_force_wins_active ON spin_wheel_force_wins(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_user_id ON daily_spin_tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_claimed_at ON daily_spin_tickets(claimed_at DESC);

-- 10. Clear and insert default prizes
DELETE FROM spin_wheel_prizes;
INSERT INTO spin_wheel_prizes (name, coins, color, probability, is_active, sort_order, rarity) VALUES
  ('5 Coins', 5, '#22c55e', 30.00, true, 1, 'common'),
  ('10 Coins', 10, '#3b82f6', 25.00, true, 2, 'common'),
  ('25 Coins', 25, '#8b5cf6', 18.00, true, 3, 'uncommon'),
  ('50 Coins', 50, '#f59e0b', 12.00, true, 4, 'uncommon'),
  ('100 Coins', 100, '#ef4444', 8.00, true, 5, 'rare'),
  ('250 Coins', 250, '#ec4899', 4.00, true, 6, 'epic'),
  ('500 Coins', 500, '#14b8a6', 2.00, true, 7, 'epic'),
  ('JACKPOT 1000', 1000, '#fbbf24', 1.00, true, 8, 'legendary');

-- 11. Insert default settings
INSERT INTO spin_wheel_settings (daily_free_spins, spin_cost_coins, is_enabled, jackpot_threshold, description)
SELECT 0, 0, true, 500, 'Default spin wheel settings'
WHERE NOT EXISTS (SELECT 1 FROM spin_wheel_settings LIMIT 1);

-- 12. Enable RLS on all tables
ALTER TABLE spin_wheel_prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_eligible_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_spin_tickets ENABLE ROW LEVEL SECURITY;

-- 13. Drop existing policies first
DROP POLICY IF EXISTS "Public read prizes" ON spin_wheel_prizes;
DROP POLICY IF EXISTS "Service role prizes" ON spin_wheel_prizes;
DROP POLICY IF EXISTS "Service role history" ON spin_history;
DROP POLICY IF EXISTS "Service role eligible" ON spin_wheel_eligible_users;
DROP POLICY IF EXISTS "Service role force_wins" ON spin_wheel_force_wins;
DROP POLICY IF EXISTS "Service role settings" ON spin_wheel_settings;
DROP POLICY IF EXISTS "Public read settings" ON spin_wheel_settings;
DROP POLICY IF EXISTS "Service role daily_tickets" ON daily_spin_tickets;

-- 14. Create RLS policies
CREATE POLICY "Public read prizes" ON spin_wheel_prizes
  FOR SELECT USING (is_active = true);

CREATE POLICY "Service role prizes" ON spin_wheel_prizes
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role history" ON spin_history
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role eligible" ON spin_wheel_eligible_users
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role force_wins" ON spin_wheel_force_wins
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role settings" ON spin_wheel_settings
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Public read settings" ON spin_wheel_settings
  FOR SELECT USING (true);

CREATE POLICY "Service role daily_tickets" ON daily_spin_tickets
  FOR ALL USING (auth.role() = 'service_role');
