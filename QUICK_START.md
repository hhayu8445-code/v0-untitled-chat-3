# 🚀 Quick Start Guide - FiveM Tools V7 Modern UI

## ⚡ Instant Setup (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
LINKVERTISE_AUTH_TOKEN=your_token
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Setup Database
```bash
# Run Linkvertise setup
psql $DATABASE_URL -f scripts/LINKVERTISE-SETUP.sql

# Or use the batch file
setup-linkvertise.bat
```

### 4. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🎨 Modern UI Features

### Background Images
- `public/back1.png` - Main background
- `public/banner1.png` - Featured banner

### Key Components
```tsx
// Glass effect
<div className="glass rounded-xl p-4">Content</div>

// Glow effect
<Button className="glow-sm">Click</Button>

// Gradient text
<h1 className="gradient-text">Title</h1>

// Animations
<motion.div whileHover={{ scale: 1.05 }}>
  Animated
</motion.div>
```

---

## 🎭 Animation System

### Framer Motion
```tsx
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### CSS Animations
```css
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
.animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
```

---

## 🔧 Customization

### Colors (globals.css)
```css
--primary: oklch(0.75 0.15 180);
--accent: oklch(0.7 0.18 160);
--success: oklch(0.7 0.18 160);
```

### Animations
```css
@keyframes custom-animation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
```

---

## 📱 Components Usage

### Linkvertise Download
```tsx
import { LinkvertiseDownload } from "@/components/linkvertise-download"

<LinkvertiseDownload
  assetId="asset-id"
  linkvertiseUrl="https://link-to.net/..."
  fileName="asset.zip"
/>
```

### Loading Screen
```tsx
import { LoadingScreen } from "@/components/loading-screen"

{isLoading && <LoadingScreen />}
```

### Scroll to Top
```tsx
import { ScrollToTop } from "@/components/scroll-to-top"

<ScrollToTop />
```

---

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Load**: Use `loading="lazy"` on images
3. **Code Split**: Dynamic imports for heavy components
4. **Debounce**: Use for search and scroll events

---

## 🐛 Debugging

### Performance Monitor
Press `F12` in development mode to see FPS counter

### Console Logs
```tsx
console.log("Debug:", data)
```

### React DevTools
Install React DevTools extension

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### Environment Variables
Set in Vercel dashboard:
- `DATABASE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `LINKVERTISE_AUTH_TOKEN`

---

## ✅ Checklist

- [ ] Dependencies installed
- [ ] Environment configured
- [ ] Database setup complete
- [ ] Development server running
- [ ] Images in public folder
- [ ] Linkvertise configured
- [ ] Admin account created
- [ ] Production build tested

---

## 🆘 Common Issues

### Issue: Animations not working
**Solution**: Check if Framer Motion is installed
```bash
npm install framer-motion
```

### Issue: Images not loading
**Solution**: Check public folder and file names

### Issue: Database connection failed
**Solution**: Verify DATABASE_URL in .env.local

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)

---

**Ready to build! 🚀**
