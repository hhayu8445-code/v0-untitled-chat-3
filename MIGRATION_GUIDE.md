# Database Migration Guide

## Memindahkan Data dari Database Lama ke Database Baru

### Prerequisites

1. Service Role Key dari database lama
2. Service Role Key sudah tersedia di environment variables untuk database baru

### Environment Variables yang Diperlukan

Tambahkan ke file `.env.local` Anda:

\`\`\`env
# Database Baru (Sudah Ada)
NEXT_PUBLIC_SUPABASE_URL=https://csnogkgzziimwvwhvrhb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-new-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-new-service-role-key

# Database Lama (Untuk Migration)
OLD_SUPABASE_SERVICE_ROLE_KEY=your-old-service-role-key
\`\`\`

### Cara Mendapatkan Service Role Key

1. Buka Supabase Dashboard database lama: https://supabase.com/dashboard/project/linnqtixdfjwbrixitrb
2. Pergi ke Settings > API
3. Copy **service_role key** (JANGAN gunakan anon key)
4. Paste ke `.env.local` sebagai `OLD_SUPABASE_SERVICE_ROLE_KEY`

### Menjalankan Migration

#### Opsi 1: Via Next.js (Recommended)

1. Pastikan semua environment variables sudah di set
2. Jalankan script migration:

\`\`\`bash
npx tsx scripts/migrate-from-old-database.ts
\`\`\`

#### Opsi 2: Via API Route

1. Buka browser dan akses:
\`\`\`
http://localhost:3000/api/database/migrate-old-data
\`\`\`

2. Endpoint akan otomatis memindahkan semua data

### Apa yang Akan Dimigrate?

Script akan memindahkan data dari tabel-tabel berikut (sesuai urutan):

1. **Core Tables**:
   - users
   - forum_categories
   - spin_wheel_prizes
   - spin_wheel_settings

2. **User-Dependent Tables**:
   - assets
   - announcements
   - banners
   - activities
   - notifications
   - coin_transactions
   - daily_rewards
   - testimonials
   - spin_wheel_eligible_users
   - spin_history

3. **Relationship Tables**:
   - downloads
   - likes
   - forum_threads
   - messages
   - spin_wheel_force_wins

4. **Forum Tables**:
   - forum_replies

5. **Public Tables**:
   - public_notifications

### Fitur Script Migration

- Batch processing (100 records per batch) untuk efisiensi
- Upsert dengan conflict resolution (tidak duplikat data)
- Logging real-time progress
- Summary report lengkap
- Error handling untuk setiap tabel
- Verifikasi jumlah data setelah migration

### Output yang Diharapkan

\`\`\`
============================================================
Starting Database Migration
============================================================
Old Database: https://linnqtixdfjwbrixitrb.supabase.co
New Database: https://csnogkgzziimwvwhvrhb.supabase.co
============================================================
[2024-01-15T10:30:00.000Z] Starting migration for table: users
[2024-01-15T10:30:01.000Z] Found 150 records in users
[2024-01-15T10:30:02.000Z] Migrated 100/150 records from users
[2024-01-15T10:30:03.000Z] Migrated 150/150 records from users
[2024-01-15T10:30:03.500Z] Completed migration for users: 150 migrated, 0 errors
...
============================================================
Migration Summary
============================================================
Table                         Old       New       Migrated    Errors
------------------------------------------------------------
users                         150       150       150         0
forum_categories              6         6         6           0
assets                        45        45        45          0
...
------------------------------------------------------------
Total: 1234 records migrated, 0 errors
============================================================
SUCCESS: All data migrated successfully!
\`\`\`

### Troubleshooting

#### Error: "Invalid API key"
- Pastikan Anda menggunakan **service_role** key, bukan anon key
- Service role key memiliki akses penuh ke database

#### Error: "Foreign key constraint violation"
- Script sudah mengatur urutan tabel dengan benar
- Jika masih error, cek apakah ada data yang referensinya tidak valid

#### Error: "Duplicate key value"
- Script menggunakan upsert, jadi duplicate seharusnya tidak terjadi
- Jika terjadi, cek apakah ada konflik pada constraint UNIQUE

#### Beberapa data tidak termigrate
- Cek error log untuk detail
- Pastikan schema di kedua database sama
- Verifikasi RLS policies tidak menghalangi insert

### Setelah Migration

1. Verifikasi jumlah data di kedua database match
2. Test aplikasi untuk memastikan semua fungsi berjalan normal
3. Backup database baru
4. Optional: Hapus data dari database lama setelah verifikasi lengkap

### Keamanan

**PENTING**: 
- JANGAN commit file .env.local ke git
- JANGAN share service role key
- Setelah migration selesai, pertimbangkan untuk rotate API keys
- Hapus OLD_SUPABASE_SERVICE_ROLE_KEY dari environment setelah migration

### Rollback

Jika perlu rollback:
1. Database lama masih utuh (script hanya read, tidak delete)
2. Bisa truncate tables di database baru:
\`\`\`sql
TRUNCATE TABLE 
  public_notifications,
  forum_replies,
  spin_wheel_force_wins,
  messages,
  forum_threads,
  likes,
  downloads,
  spin_history,
  spin_wheel_eligible_users,
  testimonials,
  daily_rewards,
  coin_transactions,
  notifications,
  activities,
  banners,
  announcements,
  assets,
  spin_wheel_settings,
  spin_wheel_prizes,
  forum_categories,
  users
CASCADE;
\`\`\`
3. Jalankan migration ulang

### Support

Jika mengalami masalah, cek:
1. Console logs untuk error details
2. Supabase Dashboard > Logs untuk database errors
3. Network tab di browser untuk API errors
