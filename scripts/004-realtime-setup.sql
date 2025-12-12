-- =====================================================
-- REALTIME SETUP FOR FIVEMTII
-- Enable realtime for specific tables
-- =====================================================

-- Enable realtime for notifications (for live notification updates)
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;

-- Enable realtime for messages (for live chat)
ALTER PUBLICATION supabase_realtime ADD TABLE messages;

-- Enable realtime for activities (for live activity feed)
ALTER PUBLICATION supabase_realtime ADD TABLE activities;

-- Enable realtime for forum_threads (for live forum updates)
ALTER PUBLICATION supabase_realtime ADD TABLE forum_threads;

-- Enable realtime for forum_replies (for live reply updates)
ALTER PUBLICATION supabase_realtime ADD TABLE forum_replies;

-- Enable realtime for assets (for live asset updates)
ALTER PUBLICATION supabase_realtime ADD TABLE assets;
