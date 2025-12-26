import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single()

    if (!profile?.is_admin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { data: threads, error } = await supabase
      .from("forum_threads")
      .select(`
        *,
        author:profiles!forum_threads_author_id_fkey(id, username, avatar, membership),
        category:forum_categories(id, name, color)
      `)
      .eq("status", "pending")
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ threads: threads || [] })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single()

    if (!profile?.is_admin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { threadId, action, reason } = await request.json()

    if (action === "approve") {
      const { error } = await supabase
        .from("forum_threads")
        .update({ status: "active" })
        .eq("id", threadId)

      if (error) throw error
    } else if (action === "reject") {
      const { error } = await supabase
        .from("forum_threads")
        .update({ status: "rejected", rejection_reason: reason })
        .eq("id", threadId)

      if (error) throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process" }, { status: 500 })
  }
}
