-- Create spin_wheel_force_wins table for rigged/guaranteed wins
CREATE TABLE IF NOT EXISTS spin_wheel_force_wins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  prize_id UUID NOT NULL REFERENCES spin_wheel_prizes(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  use_count INTEGER DEFAULT 0,
  max_uses INTEGER DEFAULT NULL,
  expires_at TIMESTAMPTZ DEFAULT NULL,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for quick lookups
CREATE INDEX IF NOT EXISTS idx_force_wins_user_active ON spin_wheel_force_wins(user_id, is_active);
CREATE INDEX IF NOT EXISTS idx_force_wins_active ON spin_wheel_force_wins(is_active);

-- Create spin_wheel_settings table for global wheel configuration
CREATE TABLE IF NOT EXISTS spin_wheel_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  daily_free_spins INTEGER DEFAULT 1,
  spin_cost_coins INTEGER DEFAULT 50,
  is_enabled BOOLEAN DEFAULT true,
  jackpot_threshold INTEGER DEFAULT 500,
  min_probability DECIMAL(5,2) DEFAULT 0.1,
  max_probability DECIMAL(5,2) DEFAULT 50,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default settings if not exists
INSERT INTO spin_wheel_settings (daily_free_spins, spin_cost_coins, is_enabled, jackpot_threshold)
SELECT 1, 50, true, 500
WHERE NOT EXISTS (SELECT 1 FROM spin_wheel_settings);

-- Add description column to spin_wheel_prizes if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'spin_wheel_prizes' AND column_name = 'description'
  ) THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN description TEXT;
  END IF;
END $$;

-- Add image_url column to spin_wheel_prizes if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'spin_wheel_prizes' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN image_url TEXT;
  END IF;
END $$;

-- Add rarity column to spin_wheel_prizes if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'spin_wheel_prizes' AND column_name = 'rarity'
  ) THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN rarity TEXT DEFAULT 'common';
  END IF;
END $$;

-- Add updated_at column to spin_wheel_prizes if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'spin_wheel_prizes' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE spin_wheel_prizes ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
  END IF;
END $$;

-- Enable RLS on new tables
ALTER TABLE spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for force_wins (admin only)
DROP POLICY IF EXISTS "Admin can manage force wins" ON spin_wheel_force_wins;
CREATE POLICY "Admin can manage force wins" ON spin_wheel_force_wins
  FOR ALL USING (true);

-- Create policies for settings (admin only)
DROP POLICY IF EXISTS "Admin can manage settings" ON spin_wheel_settings;
CREATE POLICY "Admin can manage settings" ON spin_wheel_settings
  FOR ALL USING (true);
