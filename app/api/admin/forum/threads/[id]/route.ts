import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getSupabaseAdminClient } from "@/lib/supabase/server"

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { title, content, categoryId, isPinned, isLocked } = body

    const supabase = await getSupabaseAdminClient()

    const updateData: Record<string, any> = {}
    if (title !== undefined) updateData.title = title
    if (content !== undefined) updateData.content = content
    if (categoryId !== undefined) updateData.category_id = categoryId
    if (isPinned !== undefined) updateData.is_pinned = isPinned
    if (isLocked !== undefined) updateData.is_locked = isLocked

    const { data: thread, error } = await supabase
      .from("forum_threads")
      .update(updateData)
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    // Log activity
    await supabase.from("activities").insert({
      user_id: session.user.id,
      type: "admin_action",
      action: `Updated thread "${title || id}"`,
      target_id: id,
    })

    return NextResponse.json({ success: true, thread })
  } catch (error) {
    console.error("Admin edit thread error:", error)
    return NextResponse.json({ error: "Failed to update thread" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const supabase = await getSupabaseAdminClient()

    // Soft delete by marking as deleted
    const { error } = await supabase.from("forum_threads").update({ is_deleted: true }).eq("id", id)

    if (error) throw error

    // Log activity
    await supabase.from("activities").insert({
      user_id: session.user.id,
      type: "admin_action",
      action: `Deleted thread ${id}`,
      target_id: id,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Admin delete thread error:", error)
    return NextResponse.json({ error: "Failed to delete thread" }, { status: 500 })
  }
}
