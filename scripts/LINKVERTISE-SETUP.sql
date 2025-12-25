-- Add Linkvertise fields to assets table
ALTER TABLE assets ADD COLUMN IF NOT EXISTS linkvertise_url TEXT;
ALTER TABLE assets ADD COLUMN IF NOT EXISTS require_linkvertise BOOLEAN DEFAULT false;

-- Create table to track Linkvertise downloads
CREATE TABLE IF NOT EXISTS linkvertise_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID REFERENCES assets(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  hash TEXT NOT NULL,
  verified BOOLEAN DEFAULT false,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  verified_at TIMESTAMPTZ
);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_linkvertise_downloads_asset ON linkvertise_downloads(asset_id);
CREATE INDEX IF NOT EXISTS idx_linkvertise_downloads_user ON linkvertise_downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_linkvertise_downloads_hash ON linkvertise_downloads(hash);

-- RLS policies
ALTER TABLE linkvertise_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own downloads"
  ON linkvertise_downloads FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "System can insert downloads"
  ON linkvertise_downloads FOR INSERT
  WITH CHECK (true);

-- Function to log download attempts
CREATE OR REPLACE FUNCTION log_linkvertise_download(
  p_asset_id UUID,
  p_user_id UUID,
  p_hash TEXT,
  p_verified BOOLEAN,
  p_ip_address TEXT,
  p_user_agent TEXT
) RETURNS UUID AS $$
DECLARE
  v_download_id UUID;
BEGIN
  INSERT INTO linkvertise_downloads (
    asset_id, user_id, hash, verified, ip_address, user_agent, verified_at
  ) VALUES (
    p_asset_id, p_user_id, p_hash, p_verified, p_ip_address, p_user_agent,
    CASE WHEN p_verified THEN NOW() ELSE NULL END
  ) RETURNING id INTO v_download_id;
  
  RETURN v_download_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
