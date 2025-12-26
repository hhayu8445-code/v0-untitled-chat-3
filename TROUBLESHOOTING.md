# 🔧 Troubleshooting Guide - FiveM Tools V7

## 🎯 Common Issues & Solutions

---

## ❄️ Snow Effect Issues

### Issue: Salju tidak muncul
**Symptoms**: Tidak ada salju di layar

**Solutions**:
1. **Check Date**
   ```typescript
   // Salju hanya muncul Dec 15-31
   const now = new Date()
   console.log("Current date:", now)
   // Pastikan dalam range Christmas
   ```

2. **Check Console**
   ```
   F12 → Console tab
   Look for errors related to:
   - snow-3d-effect.tsx
   - holiday-effects.tsx
   ```

3. **Check Import**
   ```typescript
   // Verify in app/layout.tsx or page.tsx
   import { HolidayEffects } from "@/components/holiday-effects"
   
   // Should be rendered
   <HolidayEffects />
   ```

4. **Clear Cache**
   ```
   Ctrl + Shift + R (Hard reload)
   Or
   Clear browser cache completely
   ```

---

### Issue: Salju lag/patah-patah
**Symptoms**: FPS rendah, animasi tidak smooth

**Solutions**:
1. **Check Performance Level**
   ```typescript
   import { getPerformanceLevel } from "@/lib/performance"
   console.log("Performance:", getPerformanceLevel())
   ```

2. **Reduce Particles**
   ```typescript
   // components/snow-3d-effect.tsx
   const maxSnowflakes = 50  // Reduce from 150
   ```

3. **Enable Hardware Acceleration**
   ```
   Chrome: Settings → System → Use hardware acceleration
   Firefox: about:config → layers.acceleration.force-enabled
   ```

4. **Close Other Tabs**
   ```
   Free up system resources
   Close unnecessary browser tabs
   ```

---

### Issue: Salju warna tidak putih
**Symptoms**: Salju berwarna abu-abu atau transparan

**Solutions**:
1. **Check CSS**
   ```typescript
   // components/snow-3d-effect.tsx
   ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
   // Pastikan RGB = 255, 255, 255 (putih)
   ```

2. **Check Mix Blend Mode**
   ```css
   /* Should be 'screen' for white effect */
   canvas {
     mix-blend-mode: screen;
   }
   ```

3. **Check Background**
   ```
   Salju putih lebih terlihat di background gelap
   Pastikan background tidak terlalu terang
   ```

---

## 💧 Hover Effect Issues

### Issue: Genangan tidak muncul saat hover
**Symptoms**: Tidak ada efek saat hover navbar

**Solutions**:
1. **Check CSS**
   ```css
   /* Verify in seasonal-navbar.tsx */
   .nav-link::before {
     content: "";
     position: absolute;
     bottom: -5px;
     opacity: 0;
     transition: all 0.4s ease;
   }
   
   .nav-link:hover::before {
     opacity: 1;
     bottom: 0;
   }
   ```

2. **Check Z-Index**
   ```css
   /* Pastikan tidak tertutup element lain */
   .nav-link {
     position: relative;
     z-index: 1;
   }
   ```

3. **Check Browser Support**
   ```
   Test di browser lain:
   - Chrome (recommended)
   - Firefox
   - Safari
   - Edge
   ```

---

### Issue: Genangan terlalu besar/kecil
**Symptoms**: Ukuran tidak sesuai

**Solutions**:
1. **Adjust Size**
   ```css
   .nav-link::before {
     height: 8px;  /* Adjust this */
     background: radial-gradient(
       ellipse at center,
       rgba(255, 255, 255, 0.4) 0%,
       transparent 70%  /* Adjust spread */
     );
   }
   ```

2. **Adjust Blur**
   ```css
   .nav-link::before {
     filter: blur(3px);  /* Adjust blur amount */
   }
   ```

---

## 🎯 Admin Dashboard Issues

### Issue: Dashboard tidak loading
**Symptoms**: Spinner terus muncul, stats tidak muncul

**Solutions**:
1. **Check Authentication**
   ```typescript
   // Verify user is logged in
   const { data: { user } } = await supabase.auth.getUser()
   console.log("User:", user)
   ```

2. **Check Admin Role**
   ```typescript
   // Verify user is admin
   const { data: profile } = await supabase
     .from("profiles")
     .select("is_admin")
     .eq("id", user.id)
     .single()
   console.log("Is Admin:", profile?.is_admin)
   ```

3. **Check API Endpoint**
   ```
   F12 → Network tab
   Look for: /api/admin/dashboard-stats
   Status should be: 200 OK
   ```

4. **Check Supabase Connection**
   ```typescript
   // Test connection
   const { data, error } = await supabase
     .from("profiles")
     .select("count")
   console.log("Connection:", error ? "Failed" : "OK")
   ```

---

### Issue: Stats tidak akurat
**Symptoms**: Angka tidak sesuai dengan database

**Solutions**:
1. **Check Query**
   ```typescript
   // app/api/admin/dashboard-stats/route.ts
   // Verify all queries are correct
   const { count } = await supabase
     .from("table")
     .select("*", { count: "exact", head: true })
   ```

2. **Check RLS Policies**
   ```sql
   -- Verify admin can read all data
   SELECT * FROM profiles WHERE is_admin = true;
   ```

3. **Manual Refresh**
   ```
   Click refresh button in dashboard
   Or wait for auto-refresh (30s)
   ```

---

### Issue: Auto-refresh tidak bekerja
**Symptoms**: Stats tidak update otomatis

**Solutions**:
1. **Check Interval**
   ```typescript
   // app/admin/page.tsx
   useEffect(() => {
     fetchStats()
     const interval = setInterval(fetchStats, 30000)
     return () => clearInterval(interval)  // Cleanup
   }, [])
   ```

2. **Check Console**
   ```
   Look for errors in console
   Verify fetchStats is being called
   ```

---

## 🔌 API Issues

### Issue: 401 Unauthorized
**Symptoms**: API returns 401 error

**Solutions**:
1. **Check Session**
   ```typescript
   // Verify user is logged in
   const session = await getServerSession()
   console.log("Session:", session)
   ```

2. **Check Cookies**
   ```
   F12 → Application → Cookies
   Verify session cookie exists
   ```

3. **Re-login**
   ```
   Logout and login again
   Clear cookies if needed
   ```

---

### Issue: 403 Forbidden
**Symptoms**: API returns 403 error

**Solutions**:
1. **Check Admin Role**
   ```sql
   -- In Supabase SQL Editor
   SELECT id, email, is_admin 
   FROM profiles 
   WHERE email = 'your-email@example.com';
   ```

2. **Set Admin Role**
   ```sql
   -- If not admin, set it
   UPDATE profiles 
   SET is_admin = true 
   WHERE email = 'your-email@example.com';
   ```

---

### Issue: 500 Internal Server Error
**Symptoms**: API returns 500 error

**Solutions**:
1. **Check Server Logs**
   ```
   Vercel: Dashboard → Logs
   Local: Terminal output
   ```

2. **Check Database Connection**
   ```typescript
   // Test Supabase connection
   const { error } = await supabase.from("profiles").select("count")
   console.log("DB Error:", error)
   ```

3. **Check Environment Variables**
   ```bash
   # Verify all required env vars are set
   echo $DATABASE_URL
   echo $SUPABASE_SERVICE_ROLE_KEY
   ```

---

## ⚡ Performance Issues

### Issue: Slow loading
**Symptoms**: Page takes > 5s to load

**Solutions**:
1. **Check Bundle Size**
   ```bash
   npm run build
   # Check output for large bundles
   ```

2. **Optimize Images**
   ```typescript
   // Use Next.js Image component
   import Image from "next/image"
   <Image src="/image.jpg" width={500} height={300} />
   ```

3. **Enable Caching**
   ```typescript
   // Add cache headers
   export const revalidate = 60  // Revalidate every 60s
   ```

---

### Issue: High memory usage
**Symptoms**: Browser uses > 500MB RAM

**Solutions**:
1. **Reduce Particles**
   ```typescript
   const maxSnowflakes = 50  // Reduce from 150
   ```

2. **Check Memory Leaks**
   ```typescript
   // Ensure cleanup in useEffect
   useEffect(() => {
     // Setup
     return () => {
       // Cleanup
       cancelAnimationFrame(animationId)
       window.removeEventListener("resize", resize)
     }
   }, [])
   ```

3. **Close DevTools**
   ```
   DevTools can increase memory usage
   Close when not debugging
   ```

---

## 📱 Mobile Issues

### Issue: Layout broken on mobile
**Symptoms**: Elements overlap or cut off

**Solutions**:
1. **Check Responsive Classes**
   ```typescript
   // Use Tailwind responsive classes
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
   ```

2. **Test Different Sizes**
   ```
   F12 → Toggle device toolbar
   Test: iPhone, iPad, Android
   ```

3. **Check Viewport**
   ```html
   <!-- Verify in layout.tsx -->
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

---

### Issue: Touch not working
**Symptoms**: Buttons tidak respond di mobile

**Solutions**:
1. **Check Touch Targets**
   ```css
   /* Minimum 44px for touch */
   button {
     min-height: 44px;
     min-width: 44px;
   }
   ```

2. **Remove Hover-Only Effects**
   ```css
   /* Use @media (hover: hover) */
   @media (hover: hover) {
     .element:hover {
       /* Hover effects */
     }
   }
   ```

---

## 🔒 Security Issues

### Issue: CORS errors
**Symptoms**: API calls blocked by CORS

**Solutions**:
1. **Check API Route**
   ```typescript
   // Add CORS headers if needed
   export async function GET(request: Request) {
     const response = NextResponse.json(data)
     response.headers.set("Access-Control-Allow-Origin", "*")
     return response
   }
   ```

2. **Check Supabase Config**
   ```
   Supabase Dashboard → Settings → API
   Verify allowed origins
   ```

---

### Issue: XSS vulnerability
**Symptoms**: User input not sanitized

**Solutions**:
1. **Sanitize Input**
   ```typescript
   import { sanitize } from "@/lib/sanitize"
   const clean = sanitize(userInput)
   ```

2. **Use dangerouslySetInnerHTML Carefully**
   ```typescript
   // Avoid if possible
   // If needed, sanitize first
   <div dangerouslySetInnerHTML={{ __html: sanitized }} />
   ```

---

## 🐛 Debug Tools

### Browser DevTools
```
F12 or Ctrl+Shift+I
- Console: Check errors
- Network: Check API calls
- Performance: Check FPS
- Application: Check storage
```

### React DevTools
```
Install: React Developer Tools extension
Use: Inspect component tree
```

### Vercel Logs
```
Dashboard → Project → Logs
Real-time server logs
```

### Supabase Logs
```
Dashboard → Logs
Database query logs
```

---

## 📞 Getting Help

### Before Asking
1. Check this troubleshooting guide
2. Check console for errors
3. Check network tab for failed requests
4. Try in incognito mode
5. Try different browser

### Where to Ask
- **GitHub Issues**: Bug reports
- **Discord**: Quick questions
- **Email**: support@fivemtools.net

### What to Include
```
1. Error message (full text)
2. Browser & version
3. OS & version
4. Steps to reproduce
5. Screenshots if applicable
6. Console logs
7. Network tab screenshot
```

---

## ✅ Quick Fixes

### Clear Everything
```bash
# Clear cache
rm -rf .next
rm -rf node_modules

# Reinstall
npm install

# Rebuild
npm run build
```

### Reset Database
```sql
-- Backup first!
-- Then reset tables if needed
TRUNCATE table_name CASCADE;
```

### Reset Environment
```bash
# Copy from example
cp .env.example .env.local

# Edit with your values
nano .env.local
```

---

## 🎯 Prevention Tips

### Development
- Always test in multiple browsers
- Test responsive design
- Check console regularly
- Use TypeScript strict mode
- Write tests for critical features

### Deployment
- Test production build locally
- Check environment variables
- Verify database migrations
- Monitor error logs
- Set up alerts

### Maintenance
- Keep dependencies updated
- Monitor performance
- Review security advisories
- Backup database regularly
- Document changes

---

**Troubleshooting Guide Version**: 1.0.0
**Last Updated**: 2024
**For**: FiveM Tools V7.0.0

---

**Jika masalah masih berlanjut, hubungi support! 📞**
