import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"
import { getSupabaseAdminClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const supabase = await getSupabaseAdminClient()

    const { data: user, error } = await supabase
      .from("users")
      .select("id, discord_id, is_admin, role, membership")
      .eq("discord_id", session.user.id)
      .single()

    if (error || !user) {
      console.error("[v0] Admin check - user not found:", error)
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Also accept role-based check as fallback
    const isAdmin =
      user.is_admin === true || ["admin", "owner"].includes(user.role || "") || user.membership === "admin"

    if (!isAdmin) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 })
    }

    return NextResponse.json({
      isAdmin: true,
      role: user.role || "admin",
      membership: user.membership,
    })
  } catch (error) {
    console.error("Admin check error:", error)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
