# Update Environment Variables di Vercel

Jalankan command berikut untuk update environment variables di Vercel Production:

\`\`\`bash
# Set DATABASE_URL untuk Supabase
vercel env add DATABASE_URL production
# Paste: postgresql://postgres.opspsgaoxdftoczccxlz:Arunk@123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1

# Set DIRECT_URL untuk Supabase
vercel env add DIRECT_URL production
# Paste: postgresql://postgres:Arunk@123@db.opspsgaoxdftoczccxlz.supabase.co:5432/postgres

# Set ADMIN_DISCORD_ID
vercel env add ADMIN_DISCORD_ID production
# Paste: 1047719075322810378

# Set NEXTAUTH_SECRET
vercel env add NEXTAUTH_SECRET production
# Paste: 8d620c8be350b3f109738dbd7ff30bfd

# Set NEXTAUTH_URL
vercel env add NEXTAUTH_URL production
# Paste: https://fivemtools.net

# Redeploy
vercel --prod
\`\`\`

## Atau gunakan Vercel Dashboard:
1. Buka https://vercel.com/dashboard
2. Pilih project "noname-menugang"
3. Settings → Environment Variables
4. Update/Add variables berikut untuk Production:
   - `DATABASE_URL` = `postgresql://postgres.opspsgaoxdftoczccxlz:Arunk@123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1`
   - `DIRECT_URL` = `postgresql://postgres:Arunk@123@db.opspsgaoxdftoczccxlz.supabase.co:5432/postgres`
   - `ADMIN_DISCORD_ID` = `1047719075322810378`
5. Redeploy dari Deployments tab
