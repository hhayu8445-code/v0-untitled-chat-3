import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/server"

// GET - Fetch all announcements for admin
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = await createAdminClient()

    const { data: user } = await supabase
      .from("users")
      .select("role")
      .eq("discord_id", (session.user as any).discord_id || session.user.id)
      .single()

    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const all = searchParams.get("all")

    let query = supabase.from("announcements").select("*").order("created_at", { ascending: false })

    if (all !== "true") {
      query = query.eq("is_active", true)
    }

    const { data: announcements, error } = await query

    if (error) throw error

    return NextResponse.json({ announcements: announcements || [] })
  } catch (error) {
    return NextResponse.json({ announcements: [], error: String(error) })
  }
}
