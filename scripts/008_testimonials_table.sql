-- Testimonials table setup

-- First, fix user_id constraint if exists
DO $$
BEGIN
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

-- Create testimonials table if not exists
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  avatar TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  server_name VARCHAR(255),
  upvotes_received INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT true,
  is_visible BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  badge VARCHAR(50),
  image_url TEXT,
  user_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'username') THEN
    ALTER TABLE testimonials ADD COLUMN username VARCHAR(255);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'avatar') THEN
    ALTER TABLE testimonials ADD COLUMN avatar TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'server_name') THEN
    ALTER TABLE testimonials ADD COLUMN server_name VARCHAR(255);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'upvotes_received') THEN
    ALTER TABLE testimonials ADD COLUMN upvotes_received INTEGER DEFAULT 0;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'is_verified') THEN
    ALTER TABLE testimonials ADD COLUMN is_verified BOOLEAN DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'is_visible') THEN
    ALTER TABLE testimonials ADD COLUMN is_visible BOOLEAN DEFAULT true;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'badge') THEN
    ALTER TABLE testimonials ADD COLUMN badge VARCHAR(50);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'image_url') THEN
    ALTER TABLE testimonials ADD COLUMN image_url TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'testimonials' AND column_name = 'updated_at') THEN
    ALTER TABLE testimonials ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
  END IF;
END $$;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_testimonials_is_featured ON testimonials(is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_is_visible ON testimonials(is_visible);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "testimonials_select_visible" ON testimonials;
CREATE POLICY "testimonials_select_visible" ON testimonials FOR SELECT USING (is_visible = true);

DROP POLICY IF EXISTS "testimonials_all_service" ON testimonials;
CREATE POLICY "testimonials_all_service" ON testimonials FOR ALL USING (true);

-- Insert sample testimonials if table is empty
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

SELECT 'Testimonials table setup complete!' as status;
