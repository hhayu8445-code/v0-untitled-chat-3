import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { HeroSection } from "@/components/hero-section"
import { TrendingSection } from "@/components/trending-section"
import { StatsSection } from "@/components/stats-section"
import { CategoriesSection } from "@/components/categories-section"
import { RecentAssets } from "@/components/recent-assets"
import { ActivityFeed } from "@/components/activity-feed"
import { SponsorBanner } from "@/components/sponsor-banner"

export const metadata = {
  title: "FiveM Tools V7 - Free Scripts, MLO, Vehicles, Decrypt CFX, Upvotes Bot",
  description:
    "Download Free FiveM Scripts, MLO Maps, Vehicles, EUP Clothing. CFX V7 Decrypt Tool, FiveM Upvotes Bot, Leak Scripts. QBCore, ESX, QBox Framework. #1 FiveM Resource Hub.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-0 md:ml-72 transition-all duration-300">
        <AnnouncementBar />
        <Header />
        <div className="p-4 md:p-6 space-y-6">
          <SponsorBanner />
          <HeroSection />
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <CategoriesSection />
              <TrendingSection />
              <RecentAssets />
            </div>
            <div className="space-y-6">
              <StatsSection />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
