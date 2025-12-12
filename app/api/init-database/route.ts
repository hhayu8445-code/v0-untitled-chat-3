import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/server"

// This endpoint auto-initializes database tables on first run
export async function GET() {
  try {
    const supabase = await createAdminClient()

    // Check and insert default prizes
    const { data: existingPrizes, error: prizesError } = await supabase.from("spin_wheel_prizes").select("id").limit(1)

    if (!prizesError && (!existingPrizes || existingPrizes.length === 0)) {
      const defaultPrizes = [
        { name: "5 Coins", coins: 5, probability: 25, color: "#4ade80", rarity: "common", is_active: true },
        { name: "10 Coins", coins: 10, probability: 20, color: "#22d3ee", rarity: "common", is_active: true },
        { name: "25 Coins", coins: 25, probability: 18, color: "#a78bfa", rarity: "uncommon", is_active: true },
        { name: "50 Coins", coins: 50, probability: 15, color: "#f472b6", rarity: "uncommon", is_active: true },
        { name: "100 Coins", coins: 100, probability: 10, color: "#fbbf24", rarity: "rare", is_active: true },
        { name: "250 Coins", coins: 250, probability: 7, color: "#f97316", rarity: "rare", is_active: true },
        { name: "500 Coins", coins: 500, probability: 4, color: "#ef4444", rarity: "epic", is_active: true },
        { name: "JACKPOT 1000", coins: 1000, probability: 1, color: "#eab308", rarity: "legendary", is_active: true },
      ]

      await supabase.from("spin_wheel_prizes").insert(defaultPrizes)
    }

    // Check and insert default settings
    const { data: existingSettings, error: settingsError } = await supabase
      .from("spin_wheel_settings")
      .select("id")
      .limit(1)

    if (!settingsError && (!existingSettings || existingSettings.length === 0)) {
      await supabase.from("spin_wheel_settings").insert({
        id: 1,
        daily_free_spins: 0,
        spin_cost_coins: 0,
        is_enabled: true,
        jackpot_threshold: 1000,
      })
    }

    // Check and insert sample testimonials
    const { data: existingTestimonials, error: testimonialsError } = await supabase
      .from("testimonials")
      .select("id")
      .limit(1)

    if (!testimonialsError && (!existingTestimonials || existingTestimonials.length === 0)) {
      const sampleTestimonials = [
        {
          username: "ServerOwner_Pro",
          avatar: "https://i.pravatar.cc/150?img=1",
          content:
            "Amazing upvote service! My server went from 50 to 500+ players in just one week. The boost is incredible and completely safe.",
          rating: 5,
          server_name: "Los Santos Roleplay",
          upvotes_received: 15000,
          is_featured: true,
          is_visible: true,
          is_verified: true,
          badge: "verified",
        },
        {
          username: "FiveM_Developer",
          avatar: "https://i.pravatar.cc/150?img=2",
          content:
            "Best tool I've ever used for my FiveM server. The upvotes are delivered fast and my server ranking improved significantly.",
          rating: 5,
          server_name: "Premium RP",
          upvotes_received: 25000,
          is_featured: true,
          is_visible: true,
          is_verified: true,
          badge: "pro",
        },
      ]

      await supabase.from("testimonials").insert(sampleTestimonials)
    }

    // Check and insert default announcement
    const { data: existingAnnouncements, error: announcementsError } = await supabase
      .from("announcements")
      .select("id")
      .limit(1)

    if (!announcementsError && (!existingAnnouncements || existingAnnouncements.length === 0)) {
      await supabase.from("announcements").insert({
        title: "Welcome!",
        message: "Welcome to FiveM Tools V7 - The #1 FiveM Resource Hub!",
        type: "promo",
        is_active: true,
        is_dismissible: true,
        sort_order: 0,
      })
    }

    // Check and insert default banner
    const { data: existingBanners, error: bannersError } = await supabase.from("banners").select("id").limit(1)

    if (!bannersError && (!existingBanners || existingBanners.length === 0)) {
      await supabase.from("banners").insert({
        title: "Welcome Banner",
        image_url: "/fivem-gaming-banner-dark-theme.jpg",
        link: "/assets",
        position: "top",
        sort_order: 0,
        is_active: true,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Database initialized successfully",
      tablesChecked: ["spin_wheel_prizes", "spin_wheel_settings", "testimonials", "announcements", "banners"],
    })
  } catch (error) {
    console.error("[v0] Database init error:", error)

    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    return NextResponse.json(
      {
        success: false,
        error: "Failed to initialize database",
        details: errorMessage,
        note: "Please run scripts/009_complete_auto_setup.sql once to create tables.",
      },
      { status: 500 },
    )
  }
}
