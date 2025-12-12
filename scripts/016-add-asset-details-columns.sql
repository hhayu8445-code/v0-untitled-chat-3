-- Add missing columns to assets table for features, installation, and changelog
ALTER TABLE assets ADD COLUMN IF NOT EXISTS features TEXT;
ALTER TABLE assets ADD COLUMN IF NOT EXISTS installation TEXT;
ALTER TABLE assets ADD COLUMN IF NOT EXISTS changelog TEXT;

-- Add rating columns if not exists
ALTER TABLE assets ADD COLUMN IF NOT EXISTS rating DECIMAL(2,1) DEFAULT 5.0;
ALTER TABLE assets ADD COLUMN IF NOT EXISTS rating_count INTEGER DEFAULT 0;

-- Verify columns were added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'assets' 
AND column_name IN ('features', 'installation', 'changelog', 'rating', 'rating_count');
