-- TEST KONEKSI SUPABASE
-- Jalankan di Supabase SQL Editor untuk memastikan semua table ada

-- 1. CEK SEMUA TABLES
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- 2. CEK USER ADMIN
SELECT discord_id, username, is_admin, role, membership 
FROM users 
WHERE discord_id = '1047719075322810378';

-- 3. CEK ANNOUNCEMENTS
SELECT COUNT(*) as total_announcements FROM announcements;

-- 4. CEK BANNERS
SELECT COUNT(*) as total_banners FROM banners;

-- 5. CEK SPIN WHEEL PRIZES
SELECT COUNT(*) as total_prizes FROM spin_wheel_prizes;

-- 6. CEK FORUM THREADS
SELECT COUNT(*) as total_threads FROM forum_threads;

-- 7. CEK ASSETS
SELECT COUNT(*) as total_assets FROM assets;

-- JIKA ADA ERROR, JALANKAN INI UNTUK MEMBUAT TABLE:
-- CREATE TABLE IF NOT EXISTS announcements (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   title TEXT,
--   message TEXT NOT NULL,
--   type TEXT DEFAULT 'info',
--   is_active BOOLEAN DEFAULT true,
--   is_dismissible BOOLEAN DEFAULT true,
--   sort_order INTEGER DEFAULT 0,
--   link TEXT,
--   start_date TIMESTAMPTZ,
--   end_date TIMESTAMPTZ,
--   created_by TEXT,
--   created_at TIMESTAMPTZ DEFAULT NOW(),
--   updated_at TIMESTAMPTZ DEFAULT NOW()
-- );
