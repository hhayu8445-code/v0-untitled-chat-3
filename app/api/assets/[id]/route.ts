import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createClient()

    const { data: asset, error } = await supabase
      .from("assets")
      .select(`
        *,
        author:profiles!assets_author_id_fkey(
          id,
          username,
          avatar,
          membership
        )
      `)
      .eq("id", params.id)
      .single()

    if (error || !asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 })
    }

    // Increment views
    await supabase
      .from("assets")
      .update({ views: (asset.views || 0) + 1 })
      .eq("id", params.id)

    return NextResponse.json({ asset })
  } catch (error) {
    console.error("Asset fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
