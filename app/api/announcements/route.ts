import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const supabase = await createAdminClient()

    const { data: announcements, error } = await supabase
      .from("announcements")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ announcements: announcements || [] })
  } catch (error) {
    console.error("Error fetching announcements:", error)
    return NextResponse.json({ announcements: [] })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = await createAdminClient()

    // Verify admin
    const { data: user } = await supabase
      .from("users")
      .select("role, is_admin")
      .eq("discord_id", session.user.id)
      .single()

    if (!user?.is_admin && !["admin", "owner"].includes(user?.role || "")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await request.json()
    const { title, message, link, link_text, type, is_dismissible, bg_color, text_color, sort_order } = body

    const { data, error } = await supabase
      .from("announcements")
      .insert({
        title,
        message,
        link,
        link_text,
        type: type || "info",
        is_active: true,
        is_dismissible: is_dismissible !== false,
        bg_color,
        text_color,
        sort_order: sort_order || 0,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ announcement: data })
  } catch (error) {
    console.error("Error creating announcement:", error)
    return NextResponse.json({ error: "Failed to create announcement" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = await createAdminClient()

    // Verify admin
    const { data: user } = await supabase
      .from("users")
      .select("role, is_admin")
      .eq("discord_id", session.user.id)
      .single()

    if (!user?.is_admin && !["admin", "owner"].includes(user?.role || "")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await request.json()
    const { id, ...updates } = body

    const { data, error } = await supabase
      .from("announcements")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ announcement: data })
  } catch (error) {
    console.error("Error updating announcement:", error)
    return NextResponse.json({ error: "Failed to update announcement" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = await createAdminClient()

    // Verify admin
    const { data: user } = await supabase
      .from("users")
      .select("role, is_admin")
      .eq("discord_id", session.user.id)
      .single()

    if (!user?.is_admin && !["admin", "owner"].includes(user?.role || "")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Announcement ID required" }, { status: 400 })
    }

    const { error } = await supabase.from("announcements").delete().eq("id", id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting announcement:", error)
    return NextResponse.json({ error: "Failed to delete announcement" }, { status: 500 })
  }
}
