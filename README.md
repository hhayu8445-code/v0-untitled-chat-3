# FiveM Tools V7

The ultimate platform for FiveM resources. Scripts, MLOs, vehicles, and more - all in one place with a modern pink-themed UI design.

## 🌟 Features

- **Forum System**: Supports categorized discussions, replies, reactions, image uploads, pinned/locked topics, etc.
- **Coins System**: Daily check-in rewards (100 coins), transaction records, balance tracking, admin management
- **Spin Wheel**: Daily lottery opportunities, 7 types of prizes, probability control, history records
- **Asset Marketplace**: Scripts, MLOs, vehicles, clothing and other resource display and download
- **Admin Panel**: User management, asset review, announcement publishing, banner management, data analysis
- **Modern UI**: Pink-themed design with glassmorphism, neon effects, holographic animations, and shimmer effects

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.1.3, React 19, TailwindCSS, Radix UI, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Supabase)
- **Auth**: NextAuth.js (Discord OAuth)
- **Deployment**: Vercel
- **Storage**: Supabase Storage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- PostgreSQL (via Supabase)
- Discord OAuth application credentials

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd fivem-tools-v7
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Then update `.env.local` with your own values:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
   - `DISCORD_CLIENT_ID` - Your Discord OAuth client ID
   - `DISCORD_CLIENT_SECRET` - Your Discord OAuth client secret
   - `NEXTAUTH_SECRET` - Secret for NextAuth

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint the code

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, feel free to join our Discord community or create an issue in this repository.

## 🙏 Acknowledgments

- Thanks to the Next.js team for the excellent framework
- Thanks to the Supabase team for the PostgreSQL database service
- Thanks to the FiveM community for inspiration and feedback
