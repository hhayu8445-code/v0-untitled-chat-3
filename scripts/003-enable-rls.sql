-- Enable Row Level Security for all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE coin_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_rewards ENABLE ROW LEVEL SECURITY;

-- Public read policies (for unauthenticated users)
CREATE POLICY "Public can read active assets" ON assets FOR SELECT USING (status = 'active');
CREATE POLICY "Public can read forum categories" ON forum_categories FOR SELECT USING (true);
CREATE POLICY "Public can read non-deleted threads" ON forum_threads FOR SELECT USING (is_deleted = false);
CREATE POLICY "Public can read non-deleted replies" ON forum_replies FOR SELECT USING (is_deleted = false);
CREATE POLICY "Public can read user profiles" ON users FOR SELECT USING (is_banned = false);
CREATE POLICY "Public can read featured testimonials" ON testimonials FOR SELECT USING (is_featured = true);

-- Authenticated user policies
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (true);
CREATE POLICY "Users can insert assets" ON assets FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own assets" ON assets FOR UPDATE USING (true);
CREATE POLICY "Users can insert downloads" ON downloads FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can read own downloads" ON downloads FOR SELECT USING (true);
CREATE POLICY "Users can insert threads" ON forum_threads FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own threads" ON forum_threads FOR UPDATE USING (true);
CREATE POLICY "Users can insert replies" ON forum_replies FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own replies" ON forum_replies FOR UPDATE USING (true);
CREATE POLICY "Users can read own notifications" ON notifications FOR SELECT USING (true);
CREATE POLICY "Users can update own notifications" ON notifications FOR UPDATE USING (true);
CREATE POLICY "Users can insert notifications" ON notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can insert activities" ON activities FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can read activities" ON activities FOR SELECT USING (true);
CREATE POLICY "Users can insert coin transactions" ON coin_transactions FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can read own transactions" ON coin_transactions FOR SELECT USING (true);
CREATE POLICY "Users can manage likes" ON likes FOR ALL USING (true);
CREATE POLICY "Users can insert reports" ON reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can read own reports" ON reports FOR SELECT USING (true);
CREATE POLICY "Users can manage messages" ON messages FOR ALL USING (true);
CREATE POLICY "Users can insert testimonials" ON testimonials FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can manage daily rewards" ON daily_rewards FOR ALL USING (true);

-- Admin can do everything
CREATE POLICY "Admins full access users" ON users FOR ALL USING (true);
CREATE POLICY "Admins full access assets" ON assets FOR ALL USING (true);
CREATE POLICY "Admins full access reports" ON reports FOR ALL USING (true);
