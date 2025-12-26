import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/spin-wheel/prizes
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (action === 'prizes') {
      const prizes = await db.spinWheel.getPrizes()
      return NextResponse.json({ success: true, data: prizes })
    }

    if (action === 'tickets') {
      const userId = searchParams.get('userId')
      if (!userId) {
        return NextResponse.json(
          { success: false, error: 'User ID required' },
          { status: 400 }
        )
      }
      const tickets = await db.spinWheel.getTickets(userId)
      return NextResponse.json({ success: true, data: tickets })
    }

    if (action === 'history') {
      const userId = searchParams.get('userId')
      if (!userId) {
        return NextResponse.json(
          { success: false, error: 'User ID required' },
          { status: 400 }
        )
      }
      const history = await db.spinWheel.getHistory(userId)
      return NextResponse.json({ success: true, data: history })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error in spin wheel GET:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
}

// POST /api/spin-wheel/spin
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId } = body

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID required' },
        { status: 400 }
      )
    }

    // Use ticket
    const ticketResult = await db.spinWheel.useTicket(userId)
    
    if (!ticketResult.success) {
      return NextResponse.json(
        { success: false, error: ticketResult.error },
        { status: 400 }
      )
    }

    // Get prizes
    const prizes = await db.spinWheel.getPrizes()
    
    // Calculate winner based on probability
    const random = Math.random() * 100
    let cumulative = 0
    let winner = prizes[0]

    for (const prize of prizes) {
      cumulative += parseFloat(prize.probability.toString())
      if (random <= cumulative) {
        winner = prize
        break
      }
    }

    // Record spin
    const spinRecord = await db.spinWheel.recordSpin({
      user_id: userId,
      prize_id: winner.id,
      prize_name: winner.name,
      prize_type: winner.type,
      prize_value: winner.value,
    })

    // Award prize
    if (winner.type === 'coins' && winner.value > 0) {
      await db.coins.addCoins({
        user_id: userId,
        amount: winner.value,
        type: 'spin',
        description: `Won ${winner.value} coins from spin wheel`,
      })
    } else if (winner.type === 'ticket') {
      await db.spinWheel.addTicket(userId, 'reward')
    }

    return NextResponse.json({
      success: true,
      data: {
        prize: winner,
        record: spinRecord[0],
      },
    })
  } catch (error) {
    console.error('Error spinning wheel:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to spin wheel' },
      { status: 500 }
    )
  }
}
