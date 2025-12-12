-- =====================================================
-- SEED INITIAL DATA FOR FIVEMTII
-- =====================================================

-- Insert forum categories
INSERT INTO forum_categories (name, description, icon, color, sort_order) VALUES
('Announcements', 'Official announcements and updates', 'Megaphone', '#ef4444', 1),
('General Discussion', 'General FiveM and GTA V discussions', 'MessageSquare', '#3b82f6', 2),
('Help & Support', 'Get help with scripts and resources', 'HelpCircle', '#22c55e', 3),
('Showcase', 'Show off your creations', 'Star', '#f59e0b', 4),
('Tutorials', 'Guides and tutorials', 'BookOpen', '#8b5cf6', 5),
('Off-Topic', 'Non-FiveM related discussions', 'Coffee', '#6b7280', 6)
ON CONFLICT DO NOTHING;

-- Insert sample admin user (Discord ID will be replaced with real one)
INSERT INTO users (discord_id, username, email, avatar, membership, coins, is_admin) VALUES
('admin_001', 'Admin', 'admin@fivemtii.com', '/admin-avatar.png', 'admin', 99999, true)
ON CONFLICT (discord_id) DO NOTHING;

-- Insert sample assets for each category
INSERT INTO assets (title, description, category, framework, version, coin_price, thumbnail, download_link, file_size, downloads, status, is_verified, is_featured, author_id) VALUES
('Advanced Banking System', 'Complete banking system with ATMs, transfers, and loans', 'scripts', 'qbcore', '2.1.0', 0, '/banking-system-ui-dark-theme.jpg', 'https://example.com/download/banking', '2.4 MB', 15420, 'active', true, true, 'admin_001'),
('Luxury Car Pack V3', 'Premium vehicle pack with 50+ luxury cars', 'vehicles', 'standalone', '3.0.0', 500, '/bmw-m5-f90-gta-style.jpg', 'https://example.com/download/cars', '450 MB', 8930, 'active', true, true, 'admin_001'),
('Police Station MLO', 'Detailed police station interior with cells and offices', 'mlo', 'standalone', '1.5.0', 250, '/police-station-mlo.jpg', 'https://example.com/download/pd-mlo', '85 MB', 12100, 'active', true, false, 'admin_001'),
('EUP Police Pack', 'Complete police uniform pack with multiple departments', 'clothing', 'standalone', '4.2.0', 0, '/character-customization-ui.jpg', 'https://example.com/download/eup', '120 MB', 22500, 'active', true, true, 'admin_001'),
('Drug System Pro', 'Advanced drug production and selling system', 'scripts', 'esx', '1.8.0', 350, '/drug-system-dark-ui.jpg', 'https://example.com/download/drugs', '1.8 MB', 9870, 'active', true, false, 'admin_001'),
('Hospital MLO Interior', 'Fully detailed hospital interior with multiple floors', 'mlo', 'standalone', '2.0.0', 400, '/hospital-mlo.jpg', 'https://example.com/download/hospital', '95 MB', 7650, 'active', true, false, 'admin_001'),
('Racing System', 'Complete street racing system with leaderboards', 'scripts', 'qbcore', '1.3.0', 0, '/racing-system.jpg', 'https://example.com/download/racing', '3.2 MB', 18200, 'active', true, true, 'admin_001'),
('Supercar Pack', 'Collection of 30 supercars with custom handling', 'vehicles', 'standalone', '2.5.0', 300, '/supercar-pack.jpg', 'https://example.com/download/supercars', '380 MB', 11400, 'active', true, false, 'admin_001')
ON CONFLICT DO NOTHING;

-- Insert sample forum threads
INSERT INTO forum_threads (title, content, category_id, author_id, replies_count, likes, views, is_pinned)
SELECT 
  'Welcome to FiveMTii Community!',
  'Welcome to our community! Please read the rules before posting.',
  id,
  'admin_001',
  5,
  25,
  1520,
  true
FROM forum_categories WHERE name = 'Announcements'
ON CONFLICT DO NOTHING;

INSERT INTO forum_threads (title, content, category_id, author_id, replies_count, likes, views)
SELECT 
  'Best practices for QBCore development',
  'Here are some tips for developing scripts on QBCore framework...',
  id,
  'admin_001',
  12,
  45,
  2340
FROM forum_categories WHERE name = 'Tutorials'
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (user_id, content, rating, is_featured) VALUES
('admin_001', 'Best FiveM resource marketplace! The quality of scripts here is amazing.', 5, true),
('admin_001', 'Fast downloads and great customer support. Highly recommended!', 5, true)
ON CONFLICT DO NOTHING;
