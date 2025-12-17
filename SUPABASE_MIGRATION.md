# 🚀 MIGRASI KE SUPABASE DATABASE

## 📋 LANGKAH-LANGKAH MIGRASI

### **1. Buat Project Supabase**
1. Buka https://supabase.com/dashboard
2. Klik **New Project**
3. Isi:
   - **Name**: fivem-tools-v7
   - **Database Password**: (buat password kuat)
   - **Region**: pilih terdekat (Singapore/Tokyo)
4. Klik **Create new project**
5. Tunggu ~2 menit sampai project ready

### **2. Dapatkan Database Credentials**
1. Di Supabase Dashboard, buka **Settings** → **Database**
2. Scroll ke **Connection string**
3. Pilih **Connection pooling** (untuk Vercel)
4. Copy **Connection string** dengan mode **Transaction**
5. Ganti `[YOUR-PASSWORD]` dengan password yang Anda buat

**Format Connection String:**
\`\`\`
postgresql://postgres.xxxxx:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true
\`\`\`

### **3. Update Environment Variables**

**Local (.env.local):**
\`\`\`bash
# Supabase Connection Pooler (for Vercel/serverless)
DATABASE_URL="postgresql://postgres.xxxxx:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct Connection (for migrations)
DIRECT_URL="postgresql://postgres.xxxxx:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
\`\`\`

**Vercel Environment Variables:**
1. Buka https://vercel.com/vip-fb4ec46b/noname-menugang/settings/environment-variables
2. Update/Add:
   - `DATABASE_URL` = (connection pooler string)
   - `DIRECT_URL` = (direct connection string)
3. Apply to: **Production, Preview, Development**

### **4. Run Database Migration**

\`\`\`bash
# Generate Prisma Client
npx prisma generate

# Push schema to Supabase
npx prisma db push

# Seed database
npx tsx prisma/seed.ts
\`\`\`

### **5. Verify Migration**

\`\`\`bash
# Open Prisma Studio
npx prisma studio

# Or check in Supabase Dashboard
# Settings → Database → Tables
\`\`\`

### **6. Deploy to Vercel**

\`\`\`bash
npx vercel --prod
\`\`\`

---

## ✅ KEUNTUNGAN SUPABASE

1. ✅ **Free Tier Generous**
   - 500MB database
   - Unlimited API requests
   - 2GB bandwidth

2. ✅ **Built-in Features**
   - Real-time subscriptions
   - Row Level Security (RLS)
   - Auto-generated REST API
   - Storage for files
   - Authentication (optional)

3. ✅ **Better Performance**
   - Connection pooling built-in
   - Global CDN
   - Auto-scaling

4. ✅ **Developer Experience**
   - SQL Editor
   - Table Editor
   - Database backups
   - Logs & monitoring

---

## 🔧 TROUBLESHOOTING

### **Error: Connection timeout**
- Pastikan menggunakan **Connection pooling** URL (port 6543)
- Bukan direct connection (port 5432) untuk Vercel

### **Error: SSL required**
- Tambahkan `?sslmode=require` di akhir connection string

### **Error: Too many connections**
- Gunakan connection pooler URL
- Supabase otomatis handle connection pooling

---

## 📊 MIGRATION CHECKLIST

- [ ] Buat Supabase project
- [ ] Copy connection strings
- [ ] Update .env.local
- [ ] Update Vercel environment variables
- [ ] Run `npx prisma db push`
- [ ] Run `npx tsx prisma/seed.ts`
- [ ] Verify data di Prisma Studio
- [ ] Deploy ke Vercel
- [ ] Test semua features

---

## 🎯 SETELAH MIGRASI

**Database Anda akan:**
- ✅ Lebih cepat (connection pooling)
- ✅ Lebih reliable (managed service)
- ✅ Lebih mudah di-manage (Supabase Dashboard)
- ✅ Gratis untuk 500MB data
- ✅ Auto-backup daily

**Semua features tetap berfungsi 100%!**
