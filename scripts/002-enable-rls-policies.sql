-- =====================================================
-- ROW LEVEL SECURITY POLICIES FOR FIVEMTII
-- =====================================================

-- Enable RLS on all tables
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

-- =====================================================
-- USERS POLICIES (Public read for profiles)
-- =====================================================
DROP POLICY IF EXISTS "users_select_all" ON users;
CREATE POLICY "users_select_all" ON users FOR SELECT USING (true);

DROP POLICY IF EXISTS "users_insert_service" ON users;
CREATE POLICY "users_insert_service" ON users FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "users_update_service" ON users;
CREATE POLICY "users_update_service" ON users FOR UPDATE USING (true);

DROP POLICY IF EXISTS "users_delete_service" ON users;
CREATE POLICY "users_delete_service" ON users FOR DELETE USING (true);

-- =====================================================
-- ASSETS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "assets_select_all" ON assets;
CREATE POLICY "assets_select_all" ON assets FOR SELECT USING (true);

DROP POLICY IF EXISTS "assets_insert_service" ON assets;
CREATE POLICY "assets_insert_service" ON assets FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "assets_update_service" ON assets;
CREATE POLICY "assets_update_service" ON assets FOR UPDATE USING (true);

DROP POLICY IF EXISTS "assets_delete_service" ON assets;
CREATE POLICY "assets_delete_service" ON assets FOR DELETE USING (true);

-- =====================================================
-- DOWNLOADS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "downloads_select_all" ON downloads;
CREATE POLICY "downloads_select_all" ON downloads FOR SELECT USING (true);

DROP POLICY IF EXISTS "downloads_insert_service" ON downloads;
CREATE POLICY "downloads_insert_service" ON downloads FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "downloads_delete_service" ON downloads;
CREATE POLICY "downloads_delete_service" ON downloads FOR DELETE USING (true);

-- =====================================================
-- FORUM CATEGORIES POLICIES
-- =====================================================
DROP POLICY IF EXISTS "forum_categories_select_all" ON forum_categories;
CREATE POLICY "forum_categories_select_all" ON forum_categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "forum_categories_insert_service" ON forum_categories;
CREATE POLICY "forum_categories_insert_service" ON forum_categories FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "forum_categories_update_service" ON forum_categories;
CREATE POLICY "forum_categories_update_service" ON forum_categories FOR UPDATE USING (true);

DROP POLICY IF EXISTS "forum_categories_delete_service" ON forum_categories;
CREATE POLICY "forum_categories_delete_service" ON forum_categories FOR DELETE USING (true);

-- =====================================================
-- FORUM THREADS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "forum_threads_select_all" ON forum_threads;
CREATE POLICY "forum_threads_select_all" ON forum_threads FOR SELECT USING (true);

DROP POLICY IF EXISTS "forum_threads_insert_service" ON forum_threads;
CREATE POLICY "forum_threads_insert_service" ON forum_threads FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "forum_threads_update_service" ON forum_threads;
CREATE POLICY "forum_threads_update_service" ON forum_threads FOR UPDATE USING (true);

DROP POLICY IF EXISTS "forum_threads_delete_service" ON forum_threads;
CREATE POLICY "forum_threads_delete_service" ON forum_threads FOR DELETE USING (true);

-- =====================================================
-- FORUM REPLIES POLICIES
-- =====================================================
DROP POLICY IF EXISTS "forum_replies_select_all" ON forum_replies;
CREATE POLICY "forum_replies_select_all" ON forum_replies FOR SELECT USING (true);

DROP POLICY IF EXISTS "forum_replies_insert_service" ON forum_replies;
CREATE POLICY "forum_replies_insert_service" ON forum_replies FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "forum_replies_update_service" ON forum_replies;
CREATE POLICY "forum_replies_update_service" ON forum_replies FOR UPDATE USING (true);

DROP POLICY IF EXISTS "forum_replies_delete_service" ON forum_replies;
CREATE POLICY "forum_replies_delete_service" ON forum_replies FOR DELETE USING (true);

-- =====================================================
-- NOTIFICATIONS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "notifications_select_all" ON notifications;
CREATE POLICY "notifications_select_all" ON notifications FOR SELECT USING (true);

DROP POLICY IF EXISTS "notifications_insert_service" ON notifications;
CREATE POLICY "notifications_insert_service" ON notifications FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "notifications_update_service" ON notifications;
CREATE POLICY "notifications_update_service" ON notifications FOR UPDATE USING (true);

DROP POLICY IF EXISTS "notifications_delete_service" ON notifications;
CREATE POLICY "notifications_delete_service" ON notifications FOR DELETE USING (true);

-- =====================================================
-- ACTIVITIES POLICIES
-- =====================================================
DROP POLICY IF EXISTS "activities_select_all" ON activities;
CREATE POLICY "activities_select_all" ON activities FOR SELECT USING (true);

DROP POLICY IF EXISTS "activities_insert_service" ON activities;
CREATE POLICY "activities_insert_service" ON activities FOR INSERT WITH CHECK (true);

-- =====================================================
-- COIN TRANSACTIONS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "coin_transactions_select_all" ON coin_transactions;
CREATE POLICY "coin_transactions_select_all" ON coin_transactions FOR SELECT USING (true);

DROP POLICY IF EXISTS "coin_transactions_insert_service" ON coin_transactions;
CREATE POLICY "coin_transactions_insert_service" ON coin_transactions FOR INSERT WITH CHECK (true);

-- =====================================================
-- LIKES POLICIES
-- =====================================================
DROP POLICY IF EXISTS "likes_select_all" ON likes;
CREATE POLICY "likes_select_all" ON likes FOR SELECT USING (true);

DROP POLICY IF EXISTS "likes_insert_service" ON likes;
CREATE POLICY "likes_insert_service" ON likes FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "likes_delete_service" ON likes;
CREATE POLICY "likes_delete_service" ON likes FOR DELETE USING (true);

-- =====================================================
-- REPORTS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "reports_select_all" ON reports;
CREATE POLICY "reports_select_all" ON reports FOR SELECT USING (true);

DROP POLICY IF EXISTS "reports_insert_service" ON reports;
CREATE POLICY "reports_insert_service" ON reports FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "reports_update_service" ON reports;
CREATE POLICY "reports_update_service" ON reports FOR UPDATE USING (true);

-- =====================================================
-- MESSAGES POLICIES
-- =====================================================
DROP POLICY IF EXISTS "messages_select_all" ON messages;
CREATE POLICY "messages_select_all" ON messages FOR SELECT USING (true);

DROP POLICY IF EXISTS "messages_insert_service" ON messages;
CREATE POLICY "messages_insert_service" ON messages FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "messages_update_service" ON messages;
CREATE POLICY "messages_update_service" ON messages FOR UPDATE USING (true);

DROP POLICY IF EXISTS "messages_delete_service" ON messages;
CREATE POLICY "messages_delete_service" ON messages FOR DELETE USING (true);

-- =====================================================
-- TESTIMONIALS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "testimonials_select_all" ON testimonials;
CREATE POLICY "testimonials_select_all" ON testimonials FOR SELECT USING (true);

DROP POLICY IF EXISTS "testimonials_insert_service" ON testimonials;
CREATE POLICY "testimonials_insert_service" ON testimonials FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "testimonials_update_service" ON testimonials;
CREATE POLICY "testimonials_update_service" ON testimonials FOR UPDATE USING (true);

DROP POLICY IF EXISTS "testimonials_delete_service" ON testimonials;
CREATE POLICY "testimonials_delete_service" ON testimonials FOR DELETE USING (true);

-- =====================================================
-- DAILY REWARDS POLICIES
-- =====================================================
DROP POLICY IF EXISTS "daily_rewards_select_all" ON daily_rewards;
CREATE POLICY "daily_rewards_select_all" ON daily_rewards FOR SELECT USING (true);

DROP POLICY IF EXISTS "daily_rewards_insert_service" ON daily_rewards;
CREATE POLICY "daily_rewards_insert_service" ON daily_rewards FOR INSERT WITH CHECK (true);
