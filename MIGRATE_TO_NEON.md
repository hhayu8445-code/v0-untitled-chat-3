# Migrasi ke Neon PostgreSQL (100% Free)

## Kenapa Neon?
- ✅ 100% Free forever
- ✅ Unlimited projects
- ✅ Kompatibel sempurna dengan Vercel
- ✅ Serverless PostgreSQL
- ✅ Auto-scaling
- ✅ Tidak perlu IPv4 add-on

## Langkah Setup:

### 1. Buat Akun Neon
- Buka: https://neon.tech
- Sign up dengan GitHub/Google
- Gratis, tidak perlu kartu kredit

### 2. Buat Database Baru
- Klik "Create Project"
- Nama: fivemtools
- Region: pilih yang terdekat (US East recommended)
- PostgreSQL version: 16

### 3. Copy Connection String
Setelah project dibuat, copy connection string dari dashboard:
- Format: `postgresql://[user]:[password]@[host]/[database]?sslmode=require`

### 4. Update Environment Variables
Jalankan command ini (ganti [CONNECTION_STRING] dengan string dari Neon):

\`\`\`bash
# Hapus Supabase
vercel env rm DATABASE_URL production -y
vercel env rm DIRECT_URL production -y

# Tambah Neon
echo [CONNECTION_STRING] | vercel env add DATABASE_URL production
echo [CONNECTION_STRING] | vercel env add DIRECT_URL production

# Redeploy
vercel --prod
\`\`\`

### 5. Run Migrations
\`\`\`bash
npx prisma migrate deploy
\`\`\`

## Selesai!
Database akan langsung berfungsi tanpa masalah IPv4 atau tenant.
