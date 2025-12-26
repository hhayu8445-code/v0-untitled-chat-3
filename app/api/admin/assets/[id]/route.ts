import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendDiscordNotification } from "@/lib/discord-webhook"

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: assetId } = await params
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

    const body = await request.json()
    const updates = body

    const { data, error } = await supabase
      .from("assets")
      .update(updates)
      .eq("id", assetId)
      .select(`
        *,
        author:profiles!assets_author_id_fkey(username, avatar)
      `)
      .single()

    if (error) throw error

    // Send Discord notification if status changed to active
    if (updates.status === "active" && data) {
      await sendDiscordNotification({
        title: data.title,
        description: data.description,
        category: data.category,
        thumbnail: data.thumbnail,
        author: data.author,
        id: data.id
      })
    }

    return NextResponse.json({ asset: data })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
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

    const { error } = await supabase
      .from("assets")
      .delete()
      .eq("id", id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
  }
}
