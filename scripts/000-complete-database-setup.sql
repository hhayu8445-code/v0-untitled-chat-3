-- Complete Database Setup for FiveM Supabase
-- This script ensures all tables exist with proper structure and RLS policies

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create or update all tables with proper schema
-- Note: Using CREATE TABLE IF NOT EXISTS to avoid errors if tables already exist

-- Users table (extended)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  discord_id TEXT UNIQUE,
  username TEXT,
  email TEXT,
  avatar TEXT,
  role VARCHAR DEFAULT 'user',
  is_admin BOOLEAN DEFAULT false,
  is_banned BOOLEAN DEFAULT false,
  ban_reason TEXT,
  membership TEXT DEFAULT 'free',
  coins INTEGER DEFAULT 0,
  points INTEGER DEFAULT 0,
  spin_tickets INTEGER DEFAULT 0,
  downloads INTEGER DEFAULT 0,
  reputation INTEGER DEFAULT 0,
  last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  message TEXT NOT NULL,
  type VARCHAR DEFAULT 'info',
  link TEXT,
  badge VARCHAR,
  bg_color VARCHAR,
  text_color VARCHAR,
  is_active BOOLEAN DEFAULT true,
  is_dismissible BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Banners table
CREATE TABLE IF NOT EXISTS banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  image_url TEXT NOT NULL,
  link TEXT,
  position TEXT DEFAULT 'top',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id TEXT NOT NULL,
  receiver_id TEXT NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Users
DROP POLICY IF EXISTS "Public can view users" ON users;
CREATE POLICY "Public can view users" ON users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON users;
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid()::text = id::text);

DROP POLICY IF EXISTS "Service role full access users" ON users;
CREATE POLICY "Service role full access users" ON users FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for Announcements
DROP POLICY IF EXISTS "Allow public read announcements" ON announcements;
CREATE POLICY "Allow public read announcements" ON announcements FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Allow service role all announcements" ON announcements;
CREATE POLICY "Allow service role all announcements" ON announcements FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for Banners
DROP POLICY IF EXISTS "Allow public read banners" ON banners;
CREATE POLICY "Allow public read banners" ON banners FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Allow service role all banners" ON banners;
CREATE POLICY "Allow service role all banners" ON banners FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for Messages
DROP POLICY IF EXISTS "Users can manage messages" ON messages;
CREATE POLICY "Users can manage messages" ON messages FOR ALL USING (
  sender_id = current_setting('app.current_user_id', true) OR 
  receiver_id = current_setting('app.current_user_id', true)
);

DROP POLICY IF EXISTS "Service role full access messages" ON messages;
CREATE POLICY "Service role full access messages" ON messages FOR ALL USING (auth.role() = 'service_role');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_discord_id ON users(discord_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_announcements_is_active ON announcements(is_active);
CREATE INDEX IF NOT EXISTS idx_banners_position_active ON banners(position, is_active);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_receiver ON messages(receiver_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);

-- Insert default admin user if not exists (optional)
INSERT INTO users (discord_id, username, email, role, is_admin, coins, points)
VALUES ('admin', 'Administrator', 'admin@fivem.local', 'admin', true, 10000, 10000)
ON CONFLICT (discord_id) DO NOTHING;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Database setup completed successfully!';
  RAISE NOTICE 'All tables created with proper RLS policies and indexes.';
END $$;
