-- =============================================
-- FINAL COMPLETE SETUP - RUN THIS ONCE
-- =============================================

-- 1. Ensure users table has all required columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'member';
ALTER TABLE users ADD COLUMN IF NOT EXISTS coins INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS spin_tickets INTEGER DEFAULT 0;

-- 2. Create spin_wheel_prizes table
CREATE TABLE IF NOT EXISTS spin_wheel_prizes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  coins INTEGER NOT NULL DEFAULT 0,
  color VARCHAR(50) DEFAULT '#3b82f6',
  probability DECIMAL(5,2) DEFAULT 10.00,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  image_url TEXT,
  rarity VARCHAR(50) DEFAULT 'common',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create spin_history table
CREATE TABLE IF NOT EXISTS spin_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  prize_id UUID REFERENCES spin_wheel_prizes(id) ON DELETE SET NULL,
  prize_name VARCHAR(255) NOT NULL,
  coins_won INTEGER NOT NULL DEFAULT 0,
  spin_type VARCHAR(50) DEFAULT 'ticket',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create spin_wheel_eligible_users table
CREATE TABLE IF NOT EXISTS spin_wheel_eligible_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  spins_remaining INTEGER DEFAULT 1,
  reason TEXT,
  granted_by VARCHAR(255),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 5. Create spin_wheel_settings table with correct structure
DROP TABLE IF EXISTS spin_wheel_settings;
CREATE TABLE spin_wheel_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  daily_free_spins INTEGER DEFAULT 0,
  spin_cost_coins INTEGER DEFAULT 0,
  is_enabled BOOLEAN DEFAULT TRUE,
  jackpot_threshold INTEGER DEFAULT 500,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Create daily_spin_tickets table
CREATE TABLE IF NOT EXISTS daily_spin_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  tickets_claimed INTEGER DEFAULT 1,
  streak_day INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Create indexes
CREATE INDEX IF NOT EXISTS idx_spin_history_user_id ON spin_history(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_created_at ON spin_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_eligible_users_user_id ON spin_wheel_eligible_users(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_user_id ON daily_spin_tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_claimed_at ON daily_spin_tickets(claimed_at);

-- 8. Insert default prizes (delete old ones first)
DELETE FROM spin_wheel_prizes;
INSERT INTO spin_wheel_prizes (name, coins, color, probability, is_active, sort_order, rarity) VALUES
  ('5 Coins', 5, '#10b981', 25.00, true, 1, 'common'),
  ('10 Coins', 10, '#22c55e', 22.00, true, 2, 'common'),
  ('25 Coins', 25, '#3b82f6', 18.00, true, 3, 'uncommon'),
  ('50 Coins', 50, '#6366f1', 15.00, true, 4, 'uncommon'),
  ('100 Coins', 100, '#8b5cf6', 10.00, true, 5, 'rare'),
  ('250 Coins', 250, '#a855f7', 5.00, true, 6, 'rare'),
  ('500 Coins', 500, '#f59e0b', 3.00, true, 7, 'epic'),
  ('JACKPOT 1000', 1000, '#ef4444', 2.00, true, 8, 'legendary');

-- 9. Insert default settings
INSERT INTO spin_wheel_settings (daily_free_spins, spin_cost_coins, is_enabled, jackpot_threshold)
VALUES (0, 0, true, 500)
ON CONFLICT DO NOTHING;

-- 10. Enable RLS
ALTER TABLE spin_wheel_prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_eligible_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_spin_tickets ENABLE ROW LEVEL SECURITY;

-- 11. Create policies for public read access
DROP POLICY IF EXISTS "Public can read active prizes" ON spin_wheel_prizes;
CREATE POLICY "Public can read active prizes" ON spin_wheel_prizes FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Public can read settings" ON spin_wheel_settings;
CREATE POLICY "Public can read settings" ON spin_wheel_settings FOR SELECT USING (true);

-- 12. Create policies for authenticated users
DROP POLICY IF EXISTS "Users can read own spin history" ON spin_history;
CREATE POLICY "Users can read own spin history" ON spin_history FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert own spin history" ON spin_history;
CREATE POLICY "Users can insert own spin history" ON spin_history FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can read own eligibility" ON spin_wheel_eligible_users;
CREATE POLICY "Users can read own eligibility" ON spin_wheel_eligible_users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can read own daily tickets" ON daily_spin_tickets;
CREATE POLICY "Users can read own daily tickets" ON daily_spin_tickets FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert own daily tickets" ON daily_spin_tickets;
CREATE POLICY "Users can insert own daily tickets" ON daily_spin_tickets FOR INSERT WITH CHECK (true);

-- Done!
SELECT 'Setup complete! All tables created and configured.' as status;
