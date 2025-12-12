import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getSupabaseAdminClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const supabase = await getSupabaseAdminClient()

    const { data: replies, error } = await supabase
      .from("forum_replies")
      .select("*")
      .eq("thread_id", id)
      .eq("is_deleted", false)
      .order("created_at", { ascending: true })

    if (error) throw error

    const authorIds = [...new Set((replies || []).map((r) => r.author_id).filter(Boolean))]
    let authorsMap: Record<string, any> = {}

    if (authorIds.length > 0) {
      const { data: authors } = await supabase
        .from("users")
        .select("discord_id, username, avatar, membership")
        .in("discord_id", authorIds)

      if (authors) {
        authorsMap = authors.reduce(
          (acc, author) => {
            acc[author.discord_id] = author
            return acc
          },
          {} as Record<string, any>,
        )
      }
    }

    const formattedReplies = (replies || []).map((reply) => {
      const author = authorsMap[reply.author_id]
      return {
        id: reply.id,
        content: reply.content,
        authorId: reply.author_id,
        author: author
          ? {
              id: author.discord_id,
              username: author.username,
              avatar: author.avatar,
              membership: author.membership,
            }
          : null,
        likes: reply.likes,
        isEdited: reply.is_edited,
        createdAt: reply.created_at,
        updatedAt: reply.updated_at,
      }
    })

    return NextResponse.json({ replies: formattedReplies })
  } catch (error) {
    console.error("Get replies error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
    const { content } = await request.json()

    if (!content) {
      return NextResponse.json({ error: "Content required" }, { status: 400 })
    }

    const supabase = await getSupabaseAdminClient()

    // Check if thread exists and is not locked
    const { data: thread, error: threadError } = await supabase
      .from("forum_threads")
      .select("id, is_locked, author_id, title, replies_count")
      .eq("id", id)
      .single()

    if (threadError || !thread) {
      return NextResponse.json({ error: "Thread not found" }, { status: 404 })
    }

    if (thread.is_locked) {
      return NextResponse.json({ error: "Thread is locked" }, { status: 403 })
    }

    const { data: reply, error } = await supabase
      .from("forum_replies")
      .insert({
        content,
        thread_id: id,
        author_id: session.user.id,
      })
      .select("*")
      .single()

    if (error) throw error

    const { data: author } = await supabase
      .from("users")
      .select("discord_id, username, avatar, membership")
      .eq("discord_id", session.user.id)
      .single()

    // Update thread reply count and last reply info
    await supabase
      .from("forum_threads")
      .update({
        replies_count: thread.replies_count + 1,
        last_reply_at: new Date().toISOString(),
        last_reply_by: session.user.id,
      })
      .eq("id", id)

    // Notify thread author if different from replier
    if (thread.author_id !== session.user.id) {
      await supabase.from("notifications").insert({
        user_id: thread.author_id,
        type: "reply",
        title: "New Reply",
        message: `Someone replied to your thread: ${thread.title}`,
        link: `/forum/thread/${id}`,
      })
    }

    // Log activity
    await supabase.from("activities").insert({
      user_id: session.user.id,
      type: "reply",
      action: `replied to thread "${thread.title}"`,
      target_id: id,
    })

    const formattedReply = {
      id: reply.id,
      content: reply.content,
      authorId: reply.author_id,
      author: author
        ? {
            id: author.discord_id,
            username: author.username,
            avatar: author.avatar,
            membership: author.membership,
          }
        : null,
      likes: reply.likes,
      isEdited: reply.is_edited,
      createdAt: reply.created_at,
      updatedAt: reply.updated_at,
    }

    return NextResponse.json(formattedReply, { status: 201 })
  } catch (error) {
    console.error("Create reply error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
