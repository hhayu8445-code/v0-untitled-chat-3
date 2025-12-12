-- Seed sample assets (run after creating admin user)
-- This script should be run after the user has logged in with Discord

-- Note: This will only work if there's at least one user in the database
-- The assets will be assigned to the first admin user found

DO $$
DECLARE
    admin_id TEXT;
    category_id UUID;
BEGIN
    -- Get the first admin user's discord_id
    SELECT discord_id INTO admin_id FROM users WHERE is_admin = true LIMIT 1;
    
    -- If no admin, get any user
    IF admin_id IS NULL THEN
        SELECT discord_id INTO admin_id FROM users LIMIT 1;
    END IF;
    
    -- Only proceed if we have a user
    IF admin_id IS NOT NULL THEN
        -- Insert sample assets if none exist
        IF NOT EXISTS (SELECT 1 FROM assets LIMIT 1) THEN
            INSERT INTO assets (title, description, category, framework, coin_price, thumbnail, downloads, tags, status, is_verified, author_id, download_link) VALUES
            ('QBCore Banking System', 'Complete banking system with ATM, bank robberies, and account management. Fully optimized and easy to configure.', 'scripts', 'qbcore', 0, '/banking-system-ui-dark-theme.jpg', 1250, ARRAY['banking', 'economy', 'qbcore'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/qbcore-banking.zip'),
            ('BMW M5 F90', 'High quality BMW M5 F90 with custom handling, realistic sounds, and tuning options.', 'vehicles', 'standalone', 50, '/bmw-m5-f90-gta-style.jpg', 890, ARRAY['bmw', 'vehicle', 'car', 'addon'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/bmw-m5.zip'),
            ('Hospital MLO', 'Detailed hospital interior MLO with multiple floors, emergency room, and surgery areas.', 'mlo', 'standalone', 100, '/hospital-interior-gta-mlo.jpg', 456, ARRAY['hospital', 'mlo', 'interior', 'medical'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/hospital-mlo.zip'),
            ('Police Uniform Pack', 'Complete police uniform pack with multiple departments and ranks included.', 'clothing', 'standalone', 40, '/police-uniform-gta-roleplay.jpg', 1100, ARRAY['police', 'uniform', 'eup', 'lspd'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/police-uniform.zip'),
            ('ESX Drug System', 'Advanced drug system with growing, processing, and selling mechanics.', 'scripts', 'esx', 75, '/drug-system-dark-ui.jpg', 2300, ARRAY['drugs', 'esx', 'economy', 'illegal'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/esx-drugs.zip'),
            ('Character Customization', 'Full character customization menu with clothing, tattoos, and accessories.', 'scripts', 'standalone', 0, '/character-customization-ui.jpg', 3400, ARRAY['character', 'customization', 'ui', 'menu'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/character-customization.zip'),
            ('Mercedes AMG GT', 'Premium Mercedes AMG GT with HQ interior and exterior.', 'vehicles', 'standalone', 75, '/mercedes-amg-gt-gta.jpg', 750, ARRAY['mercedes', 'amg', 'vehicle', 'sports'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/mercedes-amg.zip'),
            ('Police Station MLO', 'Detailed LSPD police station interior with cells, offices, and garage.', 'mlo', 'standalone', 150, '/police-station-mlo.jpg', 890, ARRAY['police', 'mlo', 'lspd', 'station'], 'active', true, admin_id, 'https://github.com/fivem-tools/releases/download/v1.0/police-station-mlo.zip');
        END IF;
        
        -- Get first forum category
        SELECT id INTO category_id FROM forum_categories LIMIT 1;
        
        -- Insert sample forum threads if none exist
        IF NOT EXISTS (SELECT 1 FROM forum_threads LIMIT 1) AND category_id IS NOT NULL THEN
            INSERT INTO forum_threads (title, content, category_id, author_id, views, likes) VALUES
            ('Welcome to FiveM Tools Community!', 'Welcome everyone to our new community forum! This is the place to discuss FiveM development, share your creations, and get help from fellow developers. Please read the rules and enjoy your stay!', category_id, admin_id, 450, 25),
            ('Best practices for script optimization', 'Hey everyone, I wanted to share some tips for optimizing your FiveM scripts: 1. Use client-side checks when possible 2. Minimize network events 3. Use proper SQL queries 4. Cache frequently accessed data', category_id, admin_id, 320, 18);
        END IF;
    END IF;
END $$;
