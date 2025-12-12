-- Create banners table
CREATE TABLE IF NOT EXISTS banners (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  image_url TEXT NOT NULL,
  link TEXT,
  position VARCHAR(20) DEFAULT 'top',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create announcements table  
CREATE TABLE IF NOT EXISTS announcements (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  message TEXT NOT NULL,
  link TEXT,
  link_text VARCHAR(100),
  type VARCHAR(20) DEFAULT 'info',
  bg_color VARCHAR(50),
  text_color VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  is_dismissible BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$
BEGIN
  DROP POLICY IF EXISTS "Allow public read banners" ON banners;
  DROP POLICY IF EXISTS "Allow service role all banners" ON banners;
  DROP POLICY IF EXISTS "Allow public read announcements" ON announcements;
  DROP POLICY IF EXISTS "Allow service role all announcements" ON announcements;
END $$;

-- Create RLS policies for banners
CREATE POLICY "Allow public read banners" ON banners FOR SELECT USING (is_active = true);
CREATE POLICY "Allow service role all banners" ON banners FOR ALL USING (true);

-- Create RLS policies for announcements
CREATE POLICY "Allow public read announcements" ON announcements FOR SELECT USING (is_active = true);
CREATE POLICY "Allow service role all announcements" ON announcements FOR ALL USING (true);

-- Insert default banner
INSERT INTO banners (title, image_url, link, position, sort_order, is_active)
SELECT 'Welcome Banner', '/placeholder.svg?height=200&width=1200', '/assets', 'top', 0, true
WHERE NOT EXISTS (SELECT 1 FROM banners LIMIT 1);

-- Insert default announcement
INSERT INTO announcements (title, message, type, is_active, is_dismissible, sort_order)
SELECT 'Welcome!', 'Welcome to FiveM Tools V7 - The #1 FiveM Resource Hub!', 'promo', true, true, 0
WHERE NOT EXISTS (SELECT 1 FROM announcements LIMIT 1);
