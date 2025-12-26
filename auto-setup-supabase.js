const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase credentials
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xnghnotodknxalkhzqvu.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZ2hub3RvZGtueGFsa2h6cXZ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQyOTAwMSwiZXhwIjoyMDgxMDA1MDAxfQ.ItOU-S7Mt6w_dYA-sQgWKy1TZqHXGsMUUOb-nyL75Y4';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function runSQL(sqlContent) {
  try {
    console.log('🚀 Running SQL...');
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sqlContent });
    
    if (error) throw error;
    
    console.log('✅ SQL executed successfully!');
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

async function main() {
  const sqlFile = path.join(__dirname, 'scripts', 'COMPLETE-DATABASE-SETUP-FIXED.sql');
  
  if (!fs.existsSync(sqlFile)) {
    console.error('❌ SQL file not found:', sqlFile);
    process.exit(1);
  }
  
  const sqlContent = fs.readFileSync(sqlFile, 'utf8');
  
  console.log('📄 SQL file loaded');
  console.log('🔗 Connecting to:', SUPABASE_URL);
  
  await runSQL(sqlContent);
  
  console.log('🎉 Database setup complete!');
}

main().catch(console.error);
