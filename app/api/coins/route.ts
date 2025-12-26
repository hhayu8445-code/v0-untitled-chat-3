import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/coins/balance?userId=xxx
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID required' },
        { status: 400 }
      )
    }

    const balance = await db.coins.getUserBalance(userId)

    return NextResponse.json({
      success: true,
      data: { balance },
    })
  } catch (error) {
    console.error('Error fetching balance:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch balance' },
      { status: 500 }
    )
  }
}

// POST /api/coins/claim-daily
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, claimType = 'coins', amount = 100 } = body

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID required' },
        { status: 400 }
      )
    }

    // Check if can claim
    const canClaim = await db.coins.canClaimDaily(userId, claimType)
    
    if (!canClaim) {
      return NextResponse.json(
        { success: false, error: 'Already claimed today' },
        { status: 400 }
      )
    }

    // Claim reward
    const result = await db.coins.claimDailyReward(userId, claimType, amount)

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error claiming daily:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to claim daily reward' },
      { status: 500 }
    )
  }
}
