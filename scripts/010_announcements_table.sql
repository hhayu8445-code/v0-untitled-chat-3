-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200),
  message TEXT NOT NULL,
  link TEXT,
  link_text VARCHAR(100),
  type VARCHAR(20) DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error', 'promo')),
  is_active BOOLEAN DEFAULT true,
  is_dismissible BOOLEAN DEFAULT true,
  bg_color VARCHAR(50),
  text_color VARCHAR(50),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create banners table if not exists
CREATE TABLE IF NOT EXISTS banners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200),
  image_url TEXT NOT NULL,
  link TEXT,
  position VARCHAR(20) DEFAULT 'top' CHECK (position IN ('top', 'sidebar', 'footer')),
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;

-- RLS Policies for announcements
DROP POLICY IF EXISTS "Allow public read active announcements" ON announcements;
CREATE POLICY "Allow public read active announcements" ON announcements FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Allow service role all announcements" ON announcements;
CREATE POLICY "Allow service role all announcements" ON announcements FOR ALL USING (true);

-- RLS Policies for banners
DROP POLICY IF EXISTS "Allow public read active banners" ON banners;
CREATE POLICY "Allow public read active banners" ON banners FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Allow service role all banners" ON banners;
CREATE POLICY "Allow service role all banners" ON banners FOR ALL USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_announcements_active ON announcements(is_active, sort_order);
CREATE INDEX IF NOT EXISTS idx_banners_active ON banners(is_active, position, sort_order);

-- Insert sample announcement
INSERT INTO announcements (title, message, type, is_active, is_dismissible, sort_order)
SELECT 'Welcome!', 'Welcome to FiveM Tools V7 - The #1 FiveM Resource Hub!', 'promo', true, true, 0
WHERE NOT EXISTS (SELECT 1 FROM announcements LIMIT 1);
