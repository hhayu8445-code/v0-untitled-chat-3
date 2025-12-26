import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/forum/threads - Get all threads
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    const threads = await db.forum.getThreads(categoryId || undefined, limit, offset)

    return NextResponse.json({
      success: true,
      data: threads,
      total: threads.length,
    })
  } catch (error) {
    console.error('Error fetching threads:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch threads' },
      { status: 500 }
    )
  }
}

// POST /api/forum/threads - Create new thread
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, category_id, author_id, images } = body

    // Validation
    if (!title || title.length < 1 || title.length > 200) {
      return NextResponse.json(
        { success: false, error: 'Title must be 1-200 characters' },
        { status: 400 }
      )
    }

    if (!content || content.length < 10 || content.length > 50000) {
      return NextResponse.json(
        { success: false, error: 'Content must be 10-50000 characters' },
        { status: 400 }
      )
    }

    const thread = await db.forum.createThread({
      title,
      content,
      category_id,
      author_id,
      images: images || [],
    })

    return NextResponse.json({
      success: true,
      data: thread[0],
    })
  } catch (error) {
    console.error('Error creating thread:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create thread' },
      { status: 500 }
    )
  }
}
