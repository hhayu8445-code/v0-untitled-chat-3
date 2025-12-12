-- COMPLETE AUTO SETUP - Run this once to create all tables

-- 1. Create exec_sql function for auto-init
CREATE OR REPLACE FUNCTION exec_sql(sql text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  EXECUTE sql;
END;
$$;

GRANT EXECUTE ON FUNCTION exec_sql(text) TO service_role;

-- 2. Drop existing testimonials table if it has wrong structure
DO $$
BEGIN
  -- Check if testimonials has user_id NOT NULL constraint and drop it
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' 
    AND column_name = 'user_id' 
    AND is_nullable = 'NO'
  ) THEN
    ALTER TABLE testimonials ALTER COLUMN user_id DROP NOT NULL;
  END IF;
EXCEPTION WHEN OTHERS THEN
  NULL;
END $$;

-- 3. Create spin_wheel_prizes table
CREATE TABLE IF NOT EXISTS spin_wheel_prizes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  coins INTEGER NOT NULL DEFAULT 0,
  probability DECIMAL(5,2) NOT NULL DEFAULT 0,
  color VARCHAR(20) DEFAULT '#4ade80',
  rarity VARCHAR(20) DEFAULT 'common',
  description TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create spin_wheel_settings table
CREATE TABLE IF NOT EXISTS spin_wheel_settings (
  id SERIAL PRIMARY KEY,
  daily_free_spins INTEGER DEFAULT 0,
  spin_cost_coins INTEGER DEFAULT 0,
  is_enabled BOOLEAN DEFAULT true,
  jackpot_threshold INTEGER DEFAULT 1000,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Create spin_history table
CREATE TABLE IF NOT EXISTS spin_history (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(100),
  discord_id VARCHAR(100),
  prize_id INTEGER,
  prize_name VARCHAR(100),
  coins_won INTEGER DEFAULT 0,
  spin_type VARCHAR(20) DEFAULT 'ticket',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Create daily_spin_tickets table
CREATE TABLE IF NOT EXISTS daily_spin_tickets (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(100),
  discord_id VARCHAR(100) NOT NULL,
  tickets INTEGER DEFAULT 0,
  last_claim TIMESTAMPTZ,
  streak INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Create testimonials table (user_id is nullable)
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  avatar TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  server_name VARCHAR(100),
  upvotes_received INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT true,
  is_visible BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  badge VARCHAR(20),
  image_url TEXT,
  user_id VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Add is_visible column if not exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'is_visible') THEN
    ALTER TABLE testimonials ADD COLUMN is_visible BOOLEAN DEFAULT true;
  END IF;
EXCEPTION WHEN OTHERS THEN
  NULL;
END $$;

-- 9. Insert default prizes if empty (no ON CONFLICT, just check first)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM spin_wheel_prizes LIMIT 1) THEN
    INSERT INTO spin_wheel_prizes (name, coins, probability, color, rarity, is_active) VALUES
      ('5 Coins', 5, 25, '#4ade80', 'common', true),
      ('10 Coins', 10, 20, '#22d3ee', 'common', true),
      ('25 Coins', 25, 18, '#a78bfa', 'uncommon', true),
      ('50 Coins', 50, 15, '#f472b6', 'uncommon', true),
      ('100 Coins', 100, 10, '#fbbf24', 'rare', true),
      ('250 Coins', 250, 7, '#f97316', 'rare', true),
      ('500 Coins', 500, 4, '#ef4444', 'epic', true),
      ('JACKPOT 1000', 1000, 1, '#eab308', 'legendary', true);
  END IF;
END $$;

-- 10. Insert default settings if empty
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM spin_wheel_settings LIMIT 1) THEN
    INSERT INTO spin_wheel_settings (daily_free_spins, spin_cost_coins, is_enabled, jackpot_threshold)
    VALUES (0, 0, true, 1000);
  END IF;
END $$;

-- 11. Insert sample testimonials if empty
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM testimonials LIMIT 1) THEN
    INSERT INTO testimonials (username, avatar, content, rating, server_name, upvotes_received, is_featured, is_visible, is_verified, badge) VALUES
      ('ServerOwner_Pro', 'https://i.pravatar.cc/150?img=1', 'Amazing upvote service! My server went from 50 to 500+ players in just one week.', 5, 'Los Santos Roleplay', 15000, true, true, true, 'verified'),
      ('FiveM_Developer', 'https://i.pravatar.cc/150?img=2', 'Best tool I have ever used for my FiveM server. Fast delivery and great results!', 5, 'Premium RP', 25000, true, true, true, 'pro'),
      ('RPCommunity', 'https://i.pravatar.cc/150?img=3', 'Finally a reliable upvote service. Customer support is amazing!', 5, 'City Life RP', 10000, true, true, true, NULL),
      ('GameServer_Admin', 'https://i.pravatar.cc/150?img=4', 'Our player count doubled after using this service. Highly recommend!', 5, 'Elite Roleplay', 8500, true, true, false, NULL);
  END IF;
END $$;

-- 12. Enable RLS
ALTER TABLE spin_wheel_prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_spin_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- 13. Create RLS Policies
DO $$
BEGIN
  -- spin_wheel_prizes policies
  DROP POLICY IF EXISTS "Allow public read spin_wheel_prizes" ON spin_wheel_prizes;
  CREATE POLICY "Allow public read spin_wheel_prizes" ON spin_wheel_prizes FOR SELECT USING (true);
  
  DROP POLICY IF EXISTS "Allow service role all spin_wheel_prizes" ON spin_wheel_prizes;
  CREATE POLICY "Allow service role all spin_wheel_prizes" ON spin_wheel_prizes FOR ALL USING (true);

  -- spin_wheel_settings policies
  DROP POLICY IF EXISTS "Allow public read spin_wheel_settings" ON spin_wheel_settings;
  CREATE POLICY "Allow public read spin_wheel_settings" ON spin_wheel_settings FOR SELECT USING (true);
  
  DROP POLICY IF EXISTS "Allow service role all spin_wheel_settings" ON spin_wheel_settings;
  CREATE POLICY "Allow service role all spin_wheel_settings" ON spin_wheel_settings FOR ALL USING (true);

  -- spin_history policies
  DROP POLICY IF EXISTS "Allow service role all spin_history" ON spin_history;
  CREATE POLICY "Allow service role all spin_history" ON spin_history FOR ALL USING (true);

  -- daily_spin_tickets policies
  DROP POLICY IF EXISTS "Allow service role all daily_spin_tickets" ON daily_spin_tickets;
  CREATE POLICY "Allow service role all daily_spin_tickets" ON daily_spin_tickets FOR ALL USING (true);

  -- testimonials policies
  DROP POLICY IF EXISTS "Allow public read testimonials" ON testimonials;
  CREATE POLICY "Allow public read testimonials" ON testimonials FOR SELECT USING (is_visible = true);
  
  DROP POLICY IF EXISTS "Allow service role all testimonials" ON testimonials;
  CREATE POLICY "Allow service role all testimonials" ON testimonials FOR ALL USING (true);

EXCEPTION WHEN OTHERS THEN
  NULL;
END $$;

-- Done!
SELECT 'Database setup complete!' as status;
