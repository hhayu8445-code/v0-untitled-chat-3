const { execSync } = require('child_process');
const fs = require('fs');

// Read .env.local file
const envContent = fs.readFileSync('.env.local', 'utf8');
const envLines = envContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));

console.log('🚀 Setting environment variables in Vercel...');

envLines.forEach(line => {
  const [key, ...valueParts] = line.split('=');
  const value = valueParts.join('=').replace(/"/g, '');
  
  if (key && value) {
    try {
      console.log(`Setting ${key}...`);
      execSync(`echo "${value}" | vercel env add ${key} production`, { stdio: 'inherit' });
    } catch (error) {
      console.log(`Skipping ${key} (might already exist)`);
    }
  }
});

console.log('✅ Environment variables setup complete!');
