-- ============================================
-- ASSETS SYSTEM SETUP
-- ============================================

CREATE TABLE IF NOT EXISTS assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('scripts', 'mlo', 'vehicles', 'clothing', 'eup')),
  framework TEXT DEFAULT 'standalone' CHECK (framework IN ('standalone', 'esx', 'qbcore', 'vrp')),
  version TEXT DEFAULT '1.0.0',
  coin_price INTEGER DEFAULT 0,
  thumbnail TEXT,
  download_link TEXT,
  file_size TEXT,
  tags TEXT[] DEFAULT '{}',
  author_id TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected')),
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  downloads INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_assets_category ON assets(category);
CREATE INDEX idx_assets_framework ON assets(framework);
CREATE INDEX idx_assets_author ON assets(author_id);
CREATE INDEX idx_assets_status ON assets(status);
CREATE INDEX idx_assets_created ON assets(created_at DESC);

ALTER TABLE assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active assets" ON assets
  FOR SELECT USING (status = 'active');

CREATE POLICY "Users can create assets" ON assets
  FOR INSERT WITH CHECK (auth.uid()::text = author_id);

CREATE POLICY "Authors can update own assets" ON assets
  FOR UPDATE USING (author_id = auth.uid()::text);

CREATE POLICY "Admins can manage all assets" ON assets
  FOR ALL USING (is_admin());

-- Insert sample data
INSERT INTO assets (title, description, category, framework, coin_price, thumbnail, author_id, status)
VALUES
  ('Police Job Script', 'Complete police job with all features', 'scripts', 'esx', 0, '/placeholder.jpg', 'system', 'active'),
  ('Modern House MLO', 'Luxury modern house interior', 'mlo', 'standalone', 500, '/placeholder.jpg', 'system', 'active'),
  ('Sports Car Pack', '10 high quality sports cars', 'vehicles', 'standalone', 1000, '/placeholder.jpg', 'system', 'active'),
  ('Police Uniform EUP', 'Complete police uniform pack', 'eup', 'standalone', 250, '/placeholder.jpg', 'system', 'active')
ON CONFLICT DO NOTHING;

SELECT 'Assets table created successfully!' as status;
