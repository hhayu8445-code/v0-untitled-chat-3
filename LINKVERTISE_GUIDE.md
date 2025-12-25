# 🔗 Linkvertise Integration Guide

## Setup Lengkap Linkvertise untuk FiveM Tools V7

### 1. Database Setup

Jalankan script SQL untuk membuat tabel dan fungsi:

```bash
psql $DATABASE_URL -f scripts/LINKVERTISE-SETUP.sql
```

Atau jalankan manual di Supabase SQL Editor:
- Buka Supabase Dashboard → SQL Editor
- Copy paste isi file `scripts/LINKVERTISE-SETUP.sql`
- Klik Run

### 2. Dapatkan Linkvertise Credentials

1. **Daftar di Linkvertise**
   - Kunjungi: https://publisher.linkvertise.com/
   - Buat akun publisher

2. **Dapatkan User ID**
   - Login ke dashboard
   - User ID ada di URL: `https://publisher.linkvertise.com/user/123456`
   - Atau di Settings → Account

3. **Dapatkan Auth Token**
   - Buka: https://publisher.linkvertise.com/api
   - Generate API Token (64 karakter)
   - Copy token ini

### 3. Konfigurasi Environment

Tambahkan ke `.env.local`:

```env
# Linkvertise Configuration
LINKVERTISE_AUTH_TOKEN=your_64_character_token_here
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### 4. Konfigurasi Admin Panel

1. Login sebagai admin
2. Buka: `/admin/linkvertise`
3. Isi form:
   - Enable Linkvertise Protection: ON
   - Linkvertise User ID: `123456`
   - API Auth Token: `your_token_here`
4. Klik Save Settings

### 5. Cara Menggunakan di Asset

#### Option A: Saat Upload Asset

```tsx
// Di upload form, tambahkan checkbox
<div className="flex items-center space-x-2">
  <Switch
    checked={requireLinkvertise}
    onCheckedChange={setRequireLinkvertise}
  />
  <Label>Require Linkvertise Protection</Label>
</div>

<Input
  placeholder="Linkvertise URL (optional)"
  value={linkvertiseUrl}
  onChange={(e) => setLinkvertiseUrl(e.target.value)}
/>
```

#### Option B: Update Existing Asset

```sql
UPDATE assets 
SET 
  require_linkvertise = true,
  linkvertise_url = 'https://link-to.net/123456/...'
WHERE id = 'asset-id-here';
```

### 6. Implementasi di Asset Page

```tsx
import { LinkvertiseDownload } from '@/components/linkvertise-download';

// Di asset detail page
{asset.require_linkvertise ? (
  <LinkvertiseDownload
    assetId={asset.id}
    linkvertiseUrl={asset.linkvertise_url}
    fileName={asset.file_name}
  />
) : (
  <Button onClick={() => window.location.href = `/api/download/${asset.id}`}>
    Download
  </Button>
)}
```

### 7. Flow Diagram

```
User clicks Download
    ↓
Check if require_linkvertise = true
    ↓
YES → Redirect to Linkvertise URL
    ↓
User completes Linkvertise
    ↓
Linkvertise redirects with ?hash=xxx
    ↓
Verify hash via API
    ↓
Valid → Allow download
    ↓
Log to linkvertise_downloads table
```

### 8. API Endpoints

- `POST /api/linkvertise/verify` - Verify hash
- `GET /api/linkvertise/download/[id]` - Protected download
- `POST /api/linkvertise/generate` - Generate Linkvertise URL
- `GET /api/linkvertise/callback` - Handle redirect
- `GET /api/admin/linkvertise` - Get settings (admin)
- `POST /api/admin/linkvertise` - Update settings (admin)

### 9. Testing

```bash
# Test 1: Generate Linkvertise URL
curl -X POST http://localhost:3000/api/linkvertise/generate \
  -H "Content-Type: application/json" \
  -d '{"assetId":"test-id"}'

# Test 2: Verify hash
curl -X POST http://localhost:3000/api/linkvertise/verify \
  -H "Content-Type: application/json" \
  -d '{"hash":"valid_64_char_hash"}'

# Test 3: Download with hash
curl "http://localhost:3000/api/linkvertise/download/asset-id?hash=xxx"
```

### 10. Monitoring

Query untuk melihat statistik:

```sql
-- Total downloads per asset
SELECT 
  a.title,
  COUNT(*) as total_downloads,
  COUNT(*) FILTER (WHERE verified = true) as verified_downloads
FROM linkvertise_downloads ld
JOIN assets a ON a.id = ld.asset_id
GROUP BY a.id, a.title
ORDER BY total_downloads DESC;

-- Recent download attempts
SELECT 
  u.username,
  a.title,
  ld.verified,
  ld.created_at
FROM linkvertise_downloads ld
JOIN users u ON u.id = ld.user_id
JOIN assets a ON a.id = ld.asset_id
ORDER BY ld.created_at DESC
LIMIT 50;
```

### 11. Troubleshooting

**Hash tidak valid:**
- Pastikan LINKVERTISE_AUTH_TOKEN benar
- Hash harus 64 karakter
- Hash hanya valid 1x pakai

**Redirect tidak bekerja:**
- Cek NEXT_PUBLIC_APP_URL di .env
- Pastikan callback route ada
- Cek Linkvertise dashboard untuk errors

**Download gagal:**
- Cek RLS policies di Supabase
- Pastikan user sudah login
- Cek logs di linkvertise_downloads table

### 12. Security Notes

- Hash hanya valid untuk 1 download
- IP address dan user agent dicatat
- RLS policies melindungi data
- Auth token disimpan server-side only
- Tidak ada bypass mechanism

### 13. Revenue Optimization

Tips untuk maximize earnings:
- Set competitive CPM rates di Linkvertise dashboard
- Target geo-locations dengan CPM tinggi
- Monitor conversion rates
- A/B test different link types
- Use custom domains untuk trust

---

✅ **Status**: Production Ready
📅 **Last Updated**: 2024
🔒 **Security**: Enterprise Grade
