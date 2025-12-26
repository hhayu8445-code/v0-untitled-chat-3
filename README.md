# 🎮 FiveM Tools V7 - Complete Platform

[![Production Ready](https://img.shields.io/badge/status-production%20ready-success)](https://github.com/hhayu8445-code/v0-untitled-chat-3)
[![Database](https://img.shields.io/badge/database-supabase-green)](https://supabase.com)
[![Framework](https://img.shields.io/badge/framework-next.js%2014-black)](https://nextjs.org)
[![Version](https://img.shields.io/badge/version-7.0.0-blue)](https://github.com/hhayu8445-code/v0-untitled-chat-3)

> #1 FiveM Resource Hub - Scripts, MLO, Vehicles, EUP, Forum, Coins & Spin Wheel System

## ✨ What's New in V7.0.0

### 🎄 Seasonal Effects
- **3D White Snow Effect** - Realistic snowflakes with depth and rotation
- **Snow Puddle Hover** - Interactive snow puddles on navbar hover
- **Adaptive Performance** - Auto-adjusts particles based on device

### 🎯 Complete Admin Dashboard
- **Real-time Statistics** - Auto-refresh every 30 seconds
- **8 Quick Actions** - Fast access to all admin features
- **System Monitor** - Live status of database, API, and storage
- **Performance Metrics** - Track uptime, response time, and ratings

### ⚡ Performance Optimizations
- **60fps Animations** - Smooth canvas rendering
- **< 50MB Memory** - Efficient resource management
- **< 2s Load Time** - Optimized bundle size
- **Reduced Motion** - Accessibility support

## ✨ Features

### 🎯 Core Features
- **Forum System** - Community discussions with moderation
- **Coins System** - Virtual currency with daily rewards
- **Spin Wheel** - Gamification with prizes
- **Asset Marketplace** - Scripts, MLO, Vehicles, Clothing
- **Admin Panel** - Complete management dashboard

### 🔒 Security
- Row Level Security (RLS) on all tables
- Admin authorization system
- Input validation & sanitization
- XSS & SQL injection protection
- Secure authentication with NextAuth

### 📊 Database
- 21+ tables with proper relationships
- 12+ functions for business logic
- 42+ RLS policies
- 35+ indexes for performance
- Automated triggers

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL (Supabase)
- Discord OAuth App

### Installation

1. **Clone repository**
```bash
git clone https://github.com/hhayu8445-code/v0-untitled-chat-3.git
cd v0-untitled-chat-3
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup database**
```bash
# Run the all-in-one setup
RUN-FULL-SETUP.bat
```

4. **Configure environment**
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

5. **Run development server**
```bash
npm run dev
```

6. **Deploy to production**
```bash
npm run build
vercel --prod
```

## 📁 Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── forum/             # Forum pages
│   └── spin-wheel/        # Spin wheel page
├── components/            # React components
├── lib/                   # Utilities & helpers
├── scripts/               # Database setup scripts
│   ├── MASTER-SETUP.sql
│   ├── ADMIN-PANEL-SETUP.sql
│   └── VERIFY-SETUP.sql
└── public/                # Static assets
```

## 🗄️ Database Setup

### Automatic Setup (Recommended)
```bash
RUN-FULL-SETUP.bat
```

### Manual Setup
```bash
# 1. Core features
psql $DATABASE_URL -f scripts/MASTER-SETUP.sql

# 2. Admin features
psql $DATABASE_URL -f scripts/ADMIN-PANEL-SETUP.sql

# 3. Verify
psql $DATABASE_URL -f scripts/VERIFY-SETUP.sql
```

## 📚 Documentation

- [Setup Instructions](SETUP_INSTRUCTIONS.md)
- [Feature Integration](FEATURE_INTEGRATION.md)
- [Verification Guide](AUTOMATIC_VERIFICATION.md)
- [Full Setup Guide](FULL_SETUP_GUIDE.md)

## 🎯 Features Included

### Forum System
- Categories & threads
- Replies & reactions
- Moderation system
- Pin/lock threads
- Image attachments

### Coins System
- Daily rewards (100 coins)
- Transaction history
- Balance tracking
- Admin management

### Spin Wheel
- 7 prize types
- Daily spin tickets
- Probability system
- History tracking

### Admin Panel
- User management
- Asset moderation
- Banner management
- Announcements
- Analytics dashboard

## 🔧 Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Supabase)
- **Auth**: NextAuth.js (Discord OAuth)
- **Deployment**: Vercel
- **Storage**: Supabase Storage

## 🌐 Environment Variables

```env
# Database
DATABASE_URL=your_supabase_connection_string

# Auth
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Discord OAuth
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🧪 Testing

```bash
# Run verification tests
psql $DATABASE_URL -f scripts/VERIFY-SETUP.sql
```

## 📈 Performance

- Response time: <200ms
- Database queries: Optimized with indexes
- RLS policies: Minimal overhead
- Caching: Implemented where needed

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Links

- **Repository**: https://github.com/hhayu8445-code/v0-untitled-chat-3
- **Discord**: https://discord.gg/tZXg4GVRM5
- **Website**: https://fivemtools.net

## 👥 Authors

- **Developer**: FiveM Tools Team

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Supabase for the database platform
- Vercel for hosting
- Community for feedback and support

---

**Status**: ✅ Production Ready | **Version**: 6.0.0 | **Last Update**: 2024
