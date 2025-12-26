const https = require('https');
const fs = require('fs');

const SUPABASE_URL = 'linnqtixdfjwbrixitrb.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbm5xdGl4ZGZqd2JyaXhpdHJiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTIxMjg1MiwiZXhwIjoyMDgwNzg4ODUyfQ.Rri9zq0S-Y4nRpwkuiHp1GsZJXAsL-6-xpqJ1fAP3KE';

async function executeSQL(sql) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query: sql });
    
    const options = {
      hostname: SUPABASE_URL,
      port: 443,
      path: '/rest/v1/rpc/exec_sql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Length': data.length
      }
    };
    
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve(body);
        } else {
          reject(new Error(`${res.statusCode}: ${body}`));
        }
      });
    });
    
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('🚀 Starting Supabase setup...\n');
  
  const sqlFile = fs.readFileSync('./scripts/COMPLETE-DATABASE-SETUP-FIXED.sql', 'utf8');
  
  // Split by major sections
  const sections = sqlFile.split(/-- ={40,}/);
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i].trim();
    if (!section || section.startsWith('--')) continue;
    
    const title = section.split('\n')[0].replace('--', '').trim();
    console.log(`📝 ${i}. ${title || 'Executing'}...`);
    
    try {
      await executeSQL(section);
      console.log(`✅ Done\n`);
    } catch (error) {
      console.error(`❌ Error: ${error.message}\n`);
    }
  }
  
  console.log('🎉 Setup complete!');
}

main().catch(console.error);
