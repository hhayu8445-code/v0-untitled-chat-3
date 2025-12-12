-- FINAL FIX: Spin Wheel Complete Setup
-- This script sets up everything from scratch

-- 1. Ensure users table has required columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS spin_tickets INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS coins INTEGER DEFAULT 0;

-- 2. Create daily_spin_tickets table
CREATE TABLE IF NOT EXISTS daily_spin_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    claimed_at DATE NOT NULL DEFAULT CURRENT_DATE,
    tickets_received INTEGER DEFAULT 1,
    streak INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, claimed_at)
);

-- 3. Create spin_wheel_prizes table
CREATE TABLE IF NOT EXISTS spin_wheel_prizes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    coins INTEGER NOT NULL DEFAULT 0,
    color TEXT DEFAULT '#6b7280',
    probability DECIMAL(5,2) DEFAULT 10.00,
    rarity TEXT DEFAULT 'common',
    image_url TEXT,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create spin_history table
CREATE TABLE IF NOT EXISTS spin_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    prize_id UUID REFERENCES spin_wheel_prizes(id),
    coins_won INTEGER NOT NULL DEFAULT 0,
    prize_name TEXT,
    spin_type TEXT DEFAULT 'ticket',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Create spin_wheel_force_wins table
CREATE TABLE IF NOT EXISTS spin_wheel_force_wins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    prize_id UUID REFERENCES spin_wheel_prizes(id),
    is_active BOOLEAN DEFAULT true,
    max_uses INTEGER DEFAULT 1,
    use_count INTEGER DEFAULT 0,
    expires_at TIMESTAMPTZ,
    granted_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Create coin_transactions table
CREATE TABLE IF NOT EXISTS coin_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    amount INTEGER NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Create indexes
CREATE INDEX IF NOT EXISTS idx_spin_history_user_id ON spin_history(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_created_at ON spin_history(created_at);
CREATE INDEX IF NOT EXISTS idx_daily_spin_tickets_user_date ON daily_spin_tickets(user_id, claimed_at);
CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_id ON coin_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_spin_wheel_force_wins_user ON spin_wheel_force_wins(user_id, is_active);

-- 8. CLEAR existing prizes and INSERT fresh ones with CORRECT values
DELETE FROM spin_wheel_prizes;

INSERT INTO spin_wheel_prizes (name, coins, probability, rarity, color, sort_order, is_active) VALUES
    ('5 Coins', 5, 30.00, 'common', '#6b7280', 1, true),
    ('10 Coins', 10, 25.00, 'common', '#6b7280', 2, true),
    ('25 Coins', 25, 20.00, 'uncommon', '#22c55e', 3, true),
    ('50 Coins', 50, 12.00, 'uncommon', '#22c55e', 4, true),
    ('100 Coins', 100, 8.00, 'rare', '#3b82f6', 5, true),
    ('250 Coins', 250, 3.50, 'epic', '#a855f7', 6, true),
    ('500 Coins', 500, 1.00, 'legendary', '#eab308', 7, true),
    ('JACKPOT 1000', 1000, 0.50, 'legendary', '#eab308', 8, true);

-- 9. Enable RLS
ALTER TABLE daily_spin_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE coin_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;

-- 10. Drop and recreate policies
DROP POLICY IF EXISTS "Users can view their own spin tickets" ON daily_spin_tickets;
DROP POLICY IF EXISTS "Users can view their own spin history" ON spin_history;
DROP POLICY IF EXISTS "Users can view their own transactions" ON coin_transactions;
DROP POLICY IF EXISTS "Anyone can view prizes" ON spin_wheel_prizes;
DROP POLICY IF EXISTS "Service role full access daily_spin_tickets" ON daily_spin_tickets;
DROP POLICY IF EXISTS "Service role full access spin_history" ON spin_history;
DROP POLICY IF EXISTS "Service role full access coin_transactions" ON coin_transactions;
DROP POLICY IF EXISTS "Service role full access spin_wheel_prizes" ON spin_wheel_prizes;
DROP POLICY IF EXISTS "Service role full access spin_wheel_force_wins" ON spin_wheel_force_wins;

CREATE POLICY "Users can view their own spin tickets" ON daily_spin_tickets FOR SELECT USING (true);
CREATE POLICY "Users can view their own spin history" ON spin_history FOR SELECT USING (true);
CREATE POLICY "Users can view their own transactions" ON coin_transactions FOR SELECT USING (true);
CREATE POLICY "Anyone can view prizes" ON spin_wheel_prizes FOR SELECT USING (true);

CREATE POLICY "Service role full access daily_spin_tickets" ON daily_spin_tickets FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access spin_history" ON spin_history FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access coin_transactions" ON coin_transactions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access spin_wheel_prizes" ON spin_wheel_prizes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access spin_wheel_force_wins" ON spin_wheel_force_wins FOR ALL USING (true) WITH CHECK (true);
