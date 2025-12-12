-- Add rating column to assets table
ALTER TABLE assets ADD COLUMN IF NOT EXISTS rating DECIMAL(2,1) DEFAULT 5.0;
ALTER TABLE assets ADD COLUMN IF NOT EXISTS rating_count INTEGER DEFAULT 0;

-- Create asset_ratings table for individual ratings
CREATE TABLE IF NOT EXISTS asset_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID REFERENCES assets(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(asset_id, user_id)
);

-- Enable RLS
ALTER TABLE asset_ratings ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Public can view ratings" ON asset_ratings FOR SELECT USING (true);
CREATE POLICY "Service role full access ratings" ON asset_ratings FOR ALL USING (true);

-- Update existing assets to have 5.0 rating
UPDATE assets SET rating = 5.0, rating_count = 0 WHERE rating IS NULL;
