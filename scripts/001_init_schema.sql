-- FiveM Tools V7 - Complete Database Schema with RLS
-- This script creates all necessary tables for the FiveM Tools V7 application

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- USERS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  discord_id TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  discriminator TEXT,
  avatar TEXT,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'moderator', 'admin', 'superadmin')),
  coins INTEGER DEFAULT 0 CHECK (coins >= 0),
  is_banned BOOLEAN DEFAULT FALSE,
  ban_reason TEXT,
  banned_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users
CREATE POLICY "Users can view all profiles"
  ON public.users FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.users FOR UPDATE
  USING (discord_id = current_setting('app.current_user_id', true));

-- =============================================
-- ASSETS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('scripts', 'mlo', 'vehicles', 'eup', 'weapons', 'props', 'other')),
  framework TEXT CHECK (framework IN ('qbcore', 'esx', 'qbox', 'standalone', 'other')),
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  price INTEGER DEFAULT 0 CHECK (price >= 0),
  is_free BOOLEAN DEFAULT TRUE,
  download_url TEXT,
  image_url TEXT,
  preview_images TEXT[],
  tags TEXT[],
  version TEXT DEFAULT '1.0.0',
  downloads INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  file_size TEXT,
  requirements TEXT[],
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'archived')),
  featured BOOLEAN DEFAULT FALSE,
  trending BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;

-- RLS Policies for assets
CREATE POLICY "Anyone can view approved assets"
  ON public.assets FOR SELECT
  USING (status = 'approved' OR author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert their own assets"
  ON public.assets FOR INSERT
  WITH CHECK (author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can update their own assets"
  ON public.assets FOR UPDATE
  USING (author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can delete their own assets"
  ON public.assets FOR DELETE
  USING (author_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- DOWNLOADS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_id UUID REFERENCES public.assets(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  coins_spent INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(asset_id, user_id)
);

-- Enable RLS
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- RLS Policies for downloads
CREATE POLICY "Users can view their own downloads"
  ON public.downloads FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert their own downloads"
  ON public.downloads FOR INSERT
  WITH CHECK (user_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- LIKES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  target_id UUID NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('asset', 'thread', 'reply')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, target_id, target_type)
);

-- Enable RLS
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;

-- RLS Policies for likes
CREATE POLICY "Anyone can view likes"
  ON public.likes FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own likes"
  ON public.likes FOR INSERT
  WITH CHECK (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can delete their own likes"
  ON public.likes FOR DELETE
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- FORUM CATEGORIES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.forum_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  color TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.forum_categories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for forum categories
CREATE POLICY "Anyone can view forum categories"
  ON public.forum_categories FOR SELECT
  USING (true);

-- =============================================
-- FORUM THREADS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.forum_threads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES public.forum_categories(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  is_deleted BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  last_reply_at TIMESTAMP WITH TIME ZONE,
  last_reply_by UUID REFERENCES public.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;

-- RLS Policies for forum threads
CREATE POLICY "Anyone can view approved non-deleted threads"
  ON public.forum_threads FOR SELECT
  USING (status = 'approved' AND is_deleted = FALSE OR author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert their own threads"
  ON public.forum_threads FOR INSERT
  WITH CHECK (author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can update their own threads"
  ON public.forum_threads FOR UPDATE
  USING (author_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- FORUM REPLIES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.forum_replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  thread_id UUID REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_deleted BOOLEAN DEFAULT FALSE,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;

-- RLS Policies for forum replies
CREATE POLICY "Anyone can view non-deleted replies"
  ON public.forum_replies FOR SELECT
  USING (is_deleted = FALSE OR author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert their own replies"
  ON public.forum_replies FOR INSERT
  WITH CHECK (author_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can update their own replies"
  ON public.forum_replies FOR UPDATE
  USING (author_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- ACTIVITIES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  avatar TEXT,
  action TEXT NOT NULL,
  target TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

-- RLS Policies for activities
CREATE POLICY "Anyone can view recent activities"
  ON public.activities FOR SELECT
  USING (true);

-- =============================================
-- NOTIFICATIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_read BOOLEAN DEFAULT FALSE,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notifications
CREATE POLICY "Users can view their own notifications"
  ON public.notifications FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can update their own notifications"
  ON public.notifications FOR UPDATE
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- PUBLIC NOTIFICATIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.public_notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.public_notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public notifications
CREATE POLICY "Anyone can view active public notifications"
  ON public.public_notifications FOR SELECT
  USING (is_active = TRUE);

-- =============================================
-- ANNOUNCEMENTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for announcements
CREATE POLICY "Anyone can view announcements"
  ON public.announcements FOR SELECT
  USING (true);

-- =============================================
-- BANNERS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  link_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;

-- RLS Policies for banners
CREATE POLICY "Anyone can view active banners"
  ON public.banners FOR SELECT
  USING (is_active = TRUE);

-- =============================================
-- COIN TRANSACTIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.coin_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('earn', 'spend', 'admin_add', 'admin_remove', 'daily_reward', 'spin_win')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.coin_transactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for coin transactions
CREATE POLICY "Users can view their own transactions"
  ON public.coin_transactions FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- DAILY REWARDS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.daily_rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reward_amount INTEGER NOT NULL,
  UNIQUE(user_id, claimed_at::DATE)
);

-- Enable RLS
ALTER TABLE public.daily_rewards ENABLE ROW LEVEL SECURITY;

-- RLS Policies for daily rewards
CREATE POLICY "Users can view their own daily rewards"
  ON public.daily_rewards FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert their own daily rewards"
  ON public.daily_rewards FOR INSERT
  WITH CHECK (user_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- MESSAGES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  recipient_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for messages
CREATE POLICY "Users can view their own messages"
  ON public.messages FOR SELECT
  USING (sender_id::TEXT = current_setting('app.current_user_id', true) OR recipient_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert messages they send"
  ON public.messages FOR INSERT
  WITH CHECK (sender_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can update messages they receive"
  ON public.messages FOR UPDATE
  USING (recipient_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- SPIN WHEEL TABLES
-- =============================================
CREATE TABLE IF NOT EXISTS public.spin_wheel_prizes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('coins', 'item', 'custom')),
  value INTEGER,
  description TEXT,
  color TEXT DEFAULT '#3b82f6',
  probability NUMERIC(5,2) DEFAULT 10.00 CHECK (probability >= 0 AND probability <= 100),
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.spin_wheel_prizes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active prizes"
  ON public.spin_wheel_prizes FOR SELECT
  USING (is_active = TRUE);

CREATE TABLE IF NOT EXISTS public.spin_wheel_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  spins_per_day INTEGER DEFAULT 1 CHECK (spins_per_day > 0),
  is_enabled BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.spin_wheel_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view spin wheel settings"
  ON public.spin_wheel_settings FOR SELECT
  USING (true);

CREATE TABLE IF NOT EXISTS public.spin_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  prize_id UUID REFERENCES public.spin_wheel_prizes(id) ON DELETE SET NULL,
  prize_name TEXT NOT NULL,
  coins_won INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.spin_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own spin history"
  ON public.spin_history FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert their own spin history"
  ON public.spin_history FOR INSERT
  WITH CHECK (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE TABLE IF NOT EXISTS public.spin_wheel_eligible_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  spins_remaining INTEGER DEFAULT 1,
  last_spin_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.spin_wheel_eligible_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own eligibility"
  ON public.spin_wheel_eligible_users FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

CREATE TABLE IF NOT EXISTS public.spin_wheel_force_wins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  prize_id UUID REFERENCES public.spin_wheel_prizes(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT TRUE,
  used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own force wins"
  ON public.spin_wheel_force_wins FOR SELECT
  USING (user_id::TEXT = current_setting('app.current_user_id', true));

-- =============================================
-- TESTIMONIALS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  avatar TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON public.testimonials FOR SELECT
  USING (is_approved = TRUE);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================
CREATE INDEX IF NOT EXISTS idx_users_discord_id ON public.users(discord_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_assets_author_id ON public.assets(author_id);
CREATE INDEX IF NOT EXISTS idx_assets_category ON public.assets(category);
CREATE INDEX IF NOT EXISTS idx_assets_status ON public.assets(status);
CREATE INDEX IF NOT EXISTS idx_assets_featured ON public.assets(featured) WHERE featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_assets_trending ON public.assets(trending) WHERE trending = TRUE;
CREATE INDEX IF NOT EXISTS idx_downloads_asset_id ON public.downloads(asset_id);
CREATE INDEX IF NOT EXISTS idx_downloads_user_id ON public.downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_likes_target ON public.likes(target_id, target_type);
CREATE INDEX IF NOT EXISTS idx_forum_threads_category ON public.forum_threads(category_id);
CREATE INDEX IF NOT EXISTS idx_forum_threads_author ON public.forum_threads(author_id);
CREATE INDEX IF NOT EXISTS idx_forum_threads_status ON public.forum_threads(status);
CREATE INDEX IF NOT EXISTS idx_forum_replies_thread ON public.forum_replies(thread_id);
CREATE INDEX IF NOT EXISTS idx_forum_replies_author ON public.forum_replies(author_id);
CREATE INDEX IF NOT EXISTS idx_activities_user ON public.activities(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON public.notifications(user_id, is_read) WHERE is_read = FALSE;
CREATE INDEX IF NOT EXISTS idx_coin_transactions_user ON public.coin_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON public.messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_recipient ON public.messages(recipient_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_user ON public.spin_history(user_id);

-- =============================================
-- UPDATED_AT TRIGGER FUNCTION
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assets_updated_at BEFORE UPDATE ON public.assets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_forum_threads_updated_at BEFORE UPDATE ON public.forum_threads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_forum_replies_updated_at BEFORE UPDATE ON public.forum_replies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_announcements_updated_at BEFORE UPDATE ON public.announcements
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
