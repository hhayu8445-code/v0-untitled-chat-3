# 🚀 Quick Reference - Developer Guide

## 📁 File Structure

```
New folder/
├── components/
│   ├── snow-3d-effect.tsx          ← NEW: 3D snow effect
│   ├── seasonal-navbar.tsx         ← MODIFIED: Snow puddle hover
│   └── holiday-effects.tsx         ← MODIFIED: Integrated 3D snow
├── app/
│   ├── admin/
│   │   └── page.tsx                ← MODIFIED: Enhanced dashboard
│   └── api/
│       └── admin/
│           └── dashboard-stats/
│               └── route.ts        ← NEW: Stats API
├── lib/
│   └── performance.ts              ← NEW: Performance utilities
└── docs/
    ├── ADMIN-FEATURES-COMPLETE.md  ← NEW: Admin docs
    ├── IMPLEMENTATION-COMPLETE.md  ← NEW: Implementation guide
    ├── TESTING-GUIDE.md            ← NEW: Testing guide
    ├── CHANGELOG-V7.md             ← NEW: Changelog
    └── FINAL-SUMMARY.md            ← NEW: Summary
```

---

## 🎯 Key Components

### 1. Snow3DEffect
```typescript
// components/snow-3d-effect.tsx
import { Snow3DEffect } from "@/components/snow-3d-effect"

// Usage
<Snow3DEffect />

// Features:
// - 3D white snowflakes
// - Adaptive performance
// - Reduced motion support
// - 60fps rendering
```

### 2. SeasonalNavbar
```typescript
// components/seasonal-navbar.tsx
import { SeasonalNavbar } from "@/components/seasonal-navbar"

// Usage
<SeasonalNavbar />

// Features:
// - Snow puddle hover effect
// - Seasonal theme integration
// - Responsive design
```

### 3. Admin Dashboard
```typescript
// app/admin/page.tsx
// Auto-imported when accessing /admin

// Features:
// - Real-time stats
// - Auto-refresh (30s)
// - Quick actions
// - System monitor
```

---

## 🔌 API Endpoints

### Dashboard Stats
```typescript
// GET /api/admin/dashboard-stats
// Auth: Required (Admin only)

// Response:
{
  totalUsers: number
  todayUsers: number
  weeklyGrowth: number
  totalBanners: number
  activeBanners: number
  totalAnnouncements: number
  activeAnnouncements: number
  forumCategories: number
  totalSpins: number
  totalCoinsWon: number
  pendingAssets: number
}
```

---

## ⚡ Performance Utilities

### Import
```typescript
import {
  getPerformanceLevel,
  getOptimalSnowflakeCount,
  prefersReducedMotion,
  debounce,
  throttle,
  memoize,
  cleanupAnimation
} from "@/lib/performance"
```

### Usage Examples

#### Adaptive Performance
```typescript
const level = getPerformanceLevel()
// Returns: 'high' | 'medium' | 'low'

const particles = getOptimalSnowflakeCount()
// Returns: 150 | 100 | 50 | 0
```

#### Reduced Motion
```typescript
if (prefersReducedMotion()) {
  // Skip animations
  return null
}
```

#### Debounce
```typescript
const debouncedSearch = debounce((query: string) => {
  // Search logic
}, 300)
```

#### Throttle
```typescript
const throttledScroll = throttle(() => {
  // Scroll logic
}, 100)
```

#### Memoize
```typescript
const expensiveCalc = memoize((n: number) => {
  // Expensive calculation
  return result
})
```

---

## 🎨 CSS Classes

### Glass Effects
```css
.glass              /* Glass morphism background */
.glass-hover        /* Hover effect */
```

### Animations
```css
.animate-slide-up   /* Entry animation */
.animate-pulse-glow /* Pulse effect */
.card-hover         /* Card hover effect */
.snow-puddle        /* Snow puddle animation */
```

### Utilities
```css
.gradient-text      /* Gradient text effect */
.glow               /* Glow shadow */
.glow-sm            /* Small glow */
.text-glow          /* Text glow */
```

---

## 🎯 Common Tasks

### Add New Admin Stat
```typescript
// 1. Update interface in app/admin/page.tsx
interface DashboardStats {
  // ... existing stats
  newStat: number  // Add this
}

// 2. Update API in app/api/admin/dashboard-stats/route.ts
const newStatResult = await supabase
  .from("table")
  .select("*", { count: "exact" })

return NextResponse.json({
  // ... existing stats
  newStat: newStatResult.count || 0
})

// 3. Add card in app/admin/page.tsx
<Card>
  <CardContent>
    <div className="flex items-center gap-4">
      <div className="p-4 rounded-xl bg-blue-500/20">
        <Icon className="h-7 w-7 text-blue-400" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">New Stat</p>
        <p className="text-3xl font-bold">{stats?.newStat || 0}</p>
      </div>
    </div>
  </CardContent>
</Card>
```

### Customize Snow Effect
```typescript
// components/snow-3d-effect.tsx

// Change particle count
const maxSnowflakes = 200  // Default: 150

// Change speed
vy: Math.random() * 2 + 1  // Default: 1 + 0.5

// Change size
size: Math.random() * 5 + 3  // Default: 3 + 2

// Change color
ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`  // Blue tint
```

### Add Quick Action
```typescript
// app/admin/page.tsx

const quickLinks = [
  // ... existing links
  {
    title: "New Action",
    href: "/admin/new-action",
    icon: NewIcon,
    color: "purple",
    desc: "Description"
  }
]
```

---

## 🔧 Configuration

### Environment Variables
```env
# Required
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### Performance Settings
```typescript
// lib/performance.ts

// Adjust thresholds
export function getPerformanceLevel() {
  const memory = (performance as any).memory
  const cores = navigator.hardwareConcurrency || 2

  if (memory && memory.jsHeapSizeLimit < 1000000000) return "low"
  if (cores < 4) return "medium"
  return "high"
}
```

---

## 🐛 Debugging

### Enable Console Logs
```typescript
// Add to components
console.log("Snow particles:", snowflakes.length)
console.log("Performance level:", getPerformanceLevel())
console.log("Stats:", stats)
```

### Check Performance
```typescript
// Monitor FPS
let lastTime = performance.now()
const animate = () => {
  const now = performance.now()
  const fps = 1000 / (now - lastTime)
  console.log("FPS:", fps)
  lastTime = now
  // ... animation code
}
```

### Debug API
```typescript
// app/api/admin/dashboard-stats/route.ts
console.log("User:", user)
console.log("Profile:", profile)
console.log("Stats:", stats)
```

---

## 📊 Performance Monitoring

### Browser DevTools
```
1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Interact with page
5. Stop recording
6. Analyze results
```

### Key Metrics
- **FPS**: Should be 60fps
- **Memory**: Should be < 50MB
- **Load Time**: Should be < 2s
- **API Response**: Should be < 200ms

---

## 🧪 Testing

### Run Tests
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Type check
npm run type-check

# Lint
npm run lint
```

### Manual Testing
```bash
# Start dev server
npm run dev

# Test in browser
# 1. Check snow effect
# 2. Test hover effects
# 3. Access /admin
# 4. Check all features
```

---

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Other Platforms
```bash
# Netlify
netlify deploy --prod

# Custom server
npm start
```

---

## 📝 Code Style

### TypeScript
```typescript
// Use strict types
interface Props {
  title: string
  count: number
}

// Use async/await
async function fetchData() {
  const data = await fetch("/api/data")
  return data.json()
}

// Use optional chaining
const value = data?.nested?.value ?? "default"
```

### React
```typescript
// Use functional components
export function Component() {
  return <div>Content</div>
}

// Use hooks
const [state, setState] = useState(initial)
useEffect(() => {
  // Effect logic
}, [dependencies])

// Use memo for expensive calculations
const value = useMemo(() => {
  return expensiveCalculation()
}, [dependencies])
```

---

## 🔗 Useful Links

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Supabase Docs](https://supabase.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

### Tools
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Supabase Dashboard](https://app.supabase.com)
- [GitHub Repo](https://github.com/hhayu8445-code/v0-untitled-chat-3)

---

## 💡 Tips & Tricks

### Performance
- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers
- Lazy load components with `React.lazy()`
- Optimize images with Next.js Image component

### Debugging
- Use React DevTools
- Use Redux DevTools (if using Redux)
- Use console.log strategically
- Use breakpoints in DevTools

### Best Practices
- Keep components small and focused
- Use TypeScript for type safety
- Write tests for critical features
- Document complex logic
- Follow naming conventions

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Testing
npm test             # Run tests
npm run lint         # Run linter
npm run type-check   # Check types

# Deployment
vercel --prod        # Deploy to Vercel
npm run deploy       # Custom deploy script

# Database
npm run migrate      # Run migrations
npm run seed         # Seed database
```

---

**Quick Reference Version**: 1.0.0
**Last Updated**: 2024
**For**: FiveM Tools V7.0.0
