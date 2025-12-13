-- FiveM Tools V7 - Sample Data
-- This script inserts sample data for testing and initial setup

-- Insert default forum categories
INSERT INTO public.forum_categories (name, description, icon, color, sort_order) VALUES
  ('General Discussion', 'General FiveM discussions and community chat', '💬', '#3b82f6', 1),
  ('Script Help', 'Get help with FiveM scripts and development', '🔧', '#10b981', 2),
  ('Server Showcase', 'Show off your FiveM server', '🎮', '#8b5cf6', 3),
  ('Trading & Sales', 'Buy, sell, and trade FiveM resources', '💰', '#f59e0b', 4),
  ('Suggestions', 'Suggest new features and improvements', '💡', '#06b6d4', 5),
  ('Bug Reports', 'Report bugs and technical issues', '🐛', '#ef4444', 6)
ON CONFLICT (name) DO NOTHING;

-- Insert default spin wheel prizes
INSERT INTO public.spin_wheel_prizes (name, type, value, description, color, probability, sort_order) VALUES
  ('50 Coins', 'coins', 50, 'Win 50 coins!', '#fbbf24', 25.00, 1),
  ('100 Coins', 'coins', 100, 'Win 100 coins!', '#f59e0b', 20.00, 2),
  ('250 Coins', 'coins', 250, 'Win 250 coins!', '#3b82f6', 15.00, 3),
  ('500 Coins', 'coins', 500, 'Win 500 coins!', '#8b5cf6', 10.00, 4),
  ('1000 Coins', 'coins', 1000, 'Win 1000 coins!', '#10b981', 5.00, 5),
  ('Better Luck', 'custom', 0, 'Try again next time!', '#6b7280', 25.00, 6)
ON CONFLICT (id) DO NOTHING;

-- Insert default spin wheel settings
INSERT INTO public.spin_wheel_settings (spins_per_day, is_enabled)
SELECT 1, TRUE
WHERE NOT EXISTS (SELECT 1 FROM public.spin_wheel_settings LIMIT 1);

-- Insert sample testimonials
INSERT INTO public.testimonials (username, avatar, content, rating, is_featured, is_approved) VALUES
  ('JohnDoe', 'https://cdn.discordapp.com/embed/avatars/0.png', 'Amazing platform! Found everything I needed for my FiveM server. Highly recommended! 🔥', 5, TRUE, TRUE),
  ('SarahGaming', 'https://cdn.discordapp.com/embed/avatars/1.png', 'The decrypt tool saved me hours of work. Best FiveM resource hub ever!', 5, TRUE, TRUE),
  ('DevMaster', 'https://cdn.discordapp.com/embed/avatars/2.png', 'Great collection of free scripts and MLOs. The community is very helpful too!', 5, TRUE, TRUE),
  ('ServerOwner99', 'https://cdn.discordapp.com/embed/avatars/3.png', 'I ve been using FiveM Tools for months now. Quality resources and fast downloads!', 5, FALSE, TRUE),
  ('CodeWizard', 'https://cdn.discordapp.com/embed/avatars/4.png', 'The upvotes bot really helped grow my server. Thank you FiveM Tools! 🚀', 5, FALSE, TRUE)
ON CONFLICT (id) DO NOTHING;

-- Insert sample banner
INSERT INTO public.banners (title, description, image_url, link_url, sort_order, is_active) VALUES
  ('Welcome to FiveM Tools V7', 'Download free scripts, MLOs, vehicles, and more!', 'https://r2.fivemanage.com/GTB2ekcdxMdnkeOh40eMi/fivembanner.gif', '/', 1, TRUE)
ON CONFLICT (id) DO NOTHING;

-- Insert sample announcement
INSERT INTO public.announcements (title, content, is_pinned) VALUES
  ('Welcome to FiveM Tools V7! 🎉', 'We are excited to announce the launch of FiveM Tools V7! Enjoy free scripts, MLOs, vehicles, decrypt tools, and more. Join our Discord community for support and updates!', TRUE)
ON CONFLICT (id) DO NOTHING;
