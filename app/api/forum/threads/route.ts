import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getSupabaseAdminClient } from "@/lib/supabase/server"
import { logger } from "@/lib/logger"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get("categoryId")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const offset = (page - 1) * limit
    const showPending = searchParams.get("showPending") === "true"

    const supabase = await getSupabaseAdminClient()

    let query = supabase
      .from("forum_threads")
      .select("*", { count: "exact" })
      .eq("is_deleted", false)
      .order("is_pinned", { ascending: false })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (!showPending) {
      query = query.eq("status", "approved")
    }

    if (categoryId) {
      query = query.eq("category_id", categoryId)
    }

    const { data: threads, count, error } = await query

    if (error) throw error

    // Fetch authors in bulk
    const authorIds = [...new Set((threads || []).map((t) => t.author_id).filter(Boolean))]
    let authorsMap: Record<string, any> = {}
    if (authorIds.length > 0) {
      const { data: authors } = await supabase
        .from("users")
        .select("discord_id, username, avatar, membership")
        .in("discord_id", authorIds)
      authorsMap = (authors || []).reduce(
        (acc, a) => {
          acc[a.discord_id] = a
          return acc
        },
        {} as Record<string, any>,
      )
    }

    // Fetch categories in bulk
    const categoryIds = [...new Set((threads || []).map((t) => t.category_id).filter(Boolean))]
    let categoriesMap: Record<string, any> = {}
    if (categoryIds.length > 0) {
      const { data: categories } = await supabase
        .from("forum_categories")
        .select("id, name, color, icon")
        .in("id", categoryIds)
      categoriesMap = (categories || []).reduce(
        (acc, c) => {
          acc[c.id] = c
          return acc
        },
        {} as Record<string, any>,
      )
    }

    const formattedThreads = (threads || []).map((thread) => {
      const author = authorsMap[thread.author_id]
      const category = categoriesMap[thread.category_id]
      return {
        id: thread.id,
        title: thread.title,
        content: thread.content,
        categoryId: thread.category_id,
        category: category?.name || "General",
        authorId: thread.author_id,
        author: author
          ? {
              id: author.discord_id,
              username: author.username,
              avatar: author.avatar,
              membership: author.membership,
            }
          : null,
        replies: thread.replies_count,
        likes: thread.likes,
        views: thread.views,
        isPinned: thread.is_pinned,
        isLocked: thread.is_locked,
        status: thread.status,
        images: thread.images || [],
        createdAt: thread.created_at,
        updatedAt: thread.updated_at,
        lastReplyAt: thread.last_reply_at,
      }
    })

    return NextResponse.json({
      threads: formattedThreads,
      pagination: {
        page,
        limit,
        total: count || 0,
        pages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error: any) {
    logger.error("Fetch threads error", error, {
      endpoint: "/api/forum/threads",
    })
    return NextResponse.json({ threads: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, content, categoryId, images } = await request.json()

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
    }

    const supabase = await getSupabaseAdminClient()

    const { data: user } = await supabase
      .from("users")
      .select("membership, is_admin")
      .eq("discord_id", session.user.id)
      .single()

    const isAdmin = user?.is_admin || user?.membership === "admin"
    const threadStatus = isAdmin ? "approved" : "pending"

    const { data: thread, error } = await supabase
      .from("forum_threads")
      .insert({
        title,
        content,
        category_id: categoryId || null,
        author_id: session.user.id,
        status: threadStatus,
        images: images || [],
        approved_at: isAdmin ? new Date().toISOString() : null,
        approved_by: isAdmin ? session.user.id : null,
      })
      .select("*")
      .single()

    if (error) throw error

    // Fetch author separately
    const { data: author } = await supabase
      .from("users")
      .select("discord_id, username, avatar, membership")
      .eq("discord_id", session.user.id)
      .single()

    await supabase.from("activities").insert({
      user_id: session.user.id,
      type: "post",
      action: `created thread "${title}"`,
      target_id: thread.id,
    })

    return NextResponse.json(
      {
        ...thread,
        images: thread.images || [],
        author: author
          ? {
              id: author.discord_id,
              username: author.username,
              avatar: author.avatar,
              membership: author.membership,
            }
          : null,
        message: isAdmin ? "Thread published successfully" : "Thread submitted for admin approval",
      },
      { status: 201 },
    )
  } catch (error: any) {
    logger.error("Create thread error", error, {
      endpoint: "/api/forum/threads",
    })
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
