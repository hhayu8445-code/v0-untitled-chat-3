import queries from '../lib/db/queries'

async function testDatabase() {
  console.log('🧪 Testing Database...\n')

  try {
    console.log('1️⃣ Testing Forum...')
    const categories = await queries.forum.getCategories()
    console.log(`✅ Categories: ${categories.length}`)

    console.log('\n2️⃣ Testing Coins...')
    const balance = await queries.coins.getUserBalance('test-user')
    console.log(`✅ Balance: ${balance}`)

    console.log('\n3️⃣ Testing Spin Wheel...')
    const prizes = await queries.spinWheel.getPrizes()
    console.log(`✅ Prizes: ${prizes.length}`)

    console.log('\n4️⃣ Testing Admin...')
    const stats = await queries.admin.getStats()
    console.log(`✅ Stats:`, stats)

    console.log('\n✅ All tests passed!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Test failed:', error)
    process.exit(1)
  }
}

testDatabase()
