-- Create asset_reviews table for storing reviews
CREATE TABLE IF NOT EXISTS asset_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(asset_id, user_id)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_asset_reviews_asset_id ON asset_reviews(asset_id);
CREATE INDEX IF NOT EXISTS idx_asset_reviews_user_id ON asset_reviews(user_id);

-- Enable RLS
ALTER TABLE asset_reviews ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view asset reviews" ON asset_reviews;
DROP POLICY IF EXISTS "Users can insert own reviews" ON asset_reviews;
DROP POLICY IF EXISTS "Users can update own reviews" ON asset_reviews;
DROP POLICY IF EXISTS "Users can delete own reviews" ON asset_reviews;

-- Policy: Anyone can view reviews
CREATE POLICY "Anyone can view asset reviews" ON asset_reviews
  FOR SELECT USING (true);

-- Policy: Authenticated users can insert their own reviews
CREATE POLICY "Users can insert own reviews" ON asset_reviews
  FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- Policy: Users can update their own reviews
CREATE POLICY "Users can update own reviews" ON asset_reviews
  FOR UPDATE USING (auth.uid()::text = user_id);

-- Policy: Users can delete their own reviews
CREATE POLICY "Users can delete own reviews" ON asset_reviews
  FOR DELETE USING (auth.uid()::text = user_id);
