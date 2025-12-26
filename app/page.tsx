import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ModernHero } from "@/components/modern-hero"
import { SeasonalHero } from "@/components/seasonal-hero"
import { ModernStats } from "@/components/modern-stats"
import { ModernFeatures } from "@/components/modern-features"
import { TrendingSection } from "@/components/trending-section"
import { RecentAssets } from "@/components/recent-assets"
import { ActivityFeed } from "@/components/activity-feed"
import { LinkvertiseAd } from "@/components/linkvertise-ad"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "FiveM Tools V7 - Free Scripts, MLO, Vehicles, Decrypt CFX, Upvotes Bot",
  description:
    "Download Free FiveM Scripts, MLO Maps, Vehicles, EUP Clothing. CFX V7 Decrypt Tool, FiveM Upvotes Bot, Leak Scripts. QBCore, ESX, QBox Framework. #1 FiveM Resource Hub.",
  keywords: [
    "fivem tools",
    "fivem scripts free",
    "fivem mlo free",
    "fivem vehicles",
    "fivem decrypt",
    "cfx decrypt",
    "fivem upvotes",
    "fivem leak",
    "qbcore scripts",
    "esx scripts",
    "fivem resources",
    "fivem download",
    "gta v fivem",
    "fivem roleplay",
    "fivem server",
  ],
  openGraph: {
    title: "FiveM Tools V7 - #1 Free FiveM Resource Hub",
    description: "Free FiveM Scripts, MLO, Vehicles, EUP, Decrypt CFX V7, Upvotes. QBCore, ESX, QBox Resources.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-float-2025" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float-2025" style={{ animationDelay: "2s" }} />
      </div>

      <Sidebar />
      <main className="md:ml-72 transition-all duration-300 relative z-10">
        <AnnouncementBar />
        <Header />
        <div className="p-6 space-y-12">
          <SeasonalHero />
          <LinkvertiseAd />
          <ModernHero />
          <div className="glass-effect p-6 rounded-2xl backdrop-blur-8 bg-gray-900/30 border border-gray-700/50">
            <ModernStats />
          </div>
          <LinkvertiseAd />
          <div className="glass-effect p-6 rounded-2xl backdrop-blur-8 bg-gray-900/30 border border-gray-700/50">
            <ModernFeatures />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-effect p-6 rounded-2xl backdrop-blur-8 bg-gray-900/30 border border-gray-700/50">
                <TrendingSection />
              </div>
              <LinkvertiseAd />
              <div className="glass-effect p-6 rounded-2xl backdrop-blur-8 bg-gray-900/30 border border-gray-700/50">
                <RecentAssets />
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-2xl backdrop-blur-8 bg-gray-900/30 border border-gray-700/50 h-full">
                <ActivityFeed />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ScrollToTop />
    </div>
  )
}