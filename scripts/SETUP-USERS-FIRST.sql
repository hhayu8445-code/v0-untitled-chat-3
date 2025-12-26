-- ============================================
-- COMPLETE SETUP WITH USERS TABLE
-- ============================================

-- Create users table first
CREATE TABLE IF NOT EXISTS users (
  discord_id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  avatar TEXT,
  email TEXT,
  coins INTEGER DEFAULT 0,
  membership TEXT DEFAULT 'free',
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_admin ON users(is_admin) WHERE is_admin = true;
CREATE INDEX IF NOT EXISTS idx_users_membership ON users(membership);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view users" ON users FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (discord_id = auth.uid()::text);

-- Now run MASTER-SETUP.sql
-- Then verify with:
SELECT 
  (SELECT COUNT(*) FROM forum_categories) as categories,
  (SELECT COUNT(*) FROM spin_wheel_prizes) as prizes,
  (SELECT COUNT(*) FROM users) as users;
