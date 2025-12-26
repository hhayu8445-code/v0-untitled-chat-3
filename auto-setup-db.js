const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const DATABASE_URL = process.env.POSTGRES_URL_NON_POOLING || 'postgres://postgres.xnghnotodknxalkhzqvu:oRI6PkYpt8Pb0VpZ@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require';

async function runSetup() {
  const client = new Client({ 
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  
  try {
    console.log('🔗 Connecting to database...');
    await client.connect();
    console.log('✅ Connected!');
    
    const sqlFile = path.join(__dirname, 'scripts', 'COMPLETE-DATABASE-SETUP-FIXED.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');
    
    console.log('🚀 Running SQL setup...');
    await client.query(sql);
    
    console.log('✅ Setup complete!');
    
    const result = await client.query("SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public'");
    console.log(`📊 Total tables: ${result.rows[0].count}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.end();
  }
}

runSetup();
