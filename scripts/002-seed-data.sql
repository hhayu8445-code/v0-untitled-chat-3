-- Seed initial data for FiveM Tools

-- Insert default forum categories
INSERT INTO forum_categories (name, description, icon, color, sort_order) VALUES
  ('General Discussion', 'General talk about FiveM development and community', 'MessageSquare', '#3b82f6', 1),
  ('Script Support', 'Get help with scripts and coding issues', 'Code', '#10b981', 2),
  ('Showcase', 'Show off your latest creations and projects', 'Star', '#f59e0b', 3),
  ('Tutorials', 'Share and find tutorials for FiveM development', 'BookOpen', '#8b5cf6', 4),
  ('Bug Reports', 'Report bugs and issues with assets', 'Bug', '#ef4444', 5),
  ('Feature Requests', 'Suggest new features and improvements', 'Lightbulb', '#06b6d4', 6)
ON CONFLICT DO NOTHING;
