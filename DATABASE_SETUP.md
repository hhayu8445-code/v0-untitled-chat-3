# FiveM Tools V7 - Database Setup Guide

This guide will help you set up the Supabase database for FiveM Tools V7.

## Quick Setup (Recommended)

The easiest way to set up your database is through the web interface:

1. Visit `/database-setup` on your deployed application
2. Click "Run Database Migration"
3. Wait for the process to complete
4. Your database is ready!

## What Gets Created

The migration creates a complete database schema including:

### Core Tables
- **users** - User profiles and authentication data
- **assets** - FiveM resources (scripts, MLOs, vehicles, etc.)
- **downloads** - Download history and tracking
- **likes** - Like system for assets and forum posts

### Forum System
- **forum_categories** - Forum category organization
- **forum_threads** - Discussion threads
- **forum_replies** - Thread replies

### Engagement Features
- **activities** - User activity feed
- **notifications** - User notifications
- **public_notifications** - Site-wide announcements
- **announcements** - Admin announcements
- **messages** - Direct messaging system

### Economy System
- **coin_transactions** - Coin transaction history
- **daily_rewards** - Daily reward claims
- **spin_wheel_prizes** - Spin wheel prize definitions
- **spin_wheel_settings** - Spin wheel configuration
- **spin_history** - Spin history tracking
- **spin_wheel_eligible_users** - Eligible users for spinning
- **spin_wheel_force_wins** - Forced prize wins

### Additional Tables
- **banners** - Homepage banners
- **testimonials** - User testimonials

## Security Features

All tables include:
- **Row Level Security (RLS)** - Automatic data access control
- **Proper foreign key relationships** - Data integrity
- **Performance indexes** - Fast query execution
- **Timestamp tracking** - Created/updated timestamps

## Manual SQL Execution

If you prefer to run the SQL manually:

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy the contents from `scripts/001_init_schema.sql`
4. Execute the script
5. Copy and execute `scripts/002_seed_data.sql`

## Verification

After setup, verify your database:

\`\`\`sql
-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Check RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';
\`\`\`

## Troubleshooting

### Tables Already Exist
If tables already exist, the migration will skip them. This is safe and expected.

### Permission Errors
Make sure your `SUPABASE_SERVICE_ROLE_KEY` environment variable is set correctly.

### RLS Blocking Access
The app uses admin client for most operations, which bypasses RLS. User-facing operations use proper RLS policies.

## Environment Variables Required

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

## Next Steps

After database setup:

1. Configure Discord OAuth in NextAuth
2. Set up file storage (Vercel Blob)
3. Configure environment variables
4. Deploy your application

## Support

For issues or questions:
- Check Supabase logs in your dashboard
- Review the migration output in browser console
- Contact support via Discord
