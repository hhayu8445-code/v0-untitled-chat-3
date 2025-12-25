import type { Metadata } from "next"
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
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingParticles } from "@/components/floating-particles"
import { AudioVisualizer } from "@/components/audio-visualizer"
import { PerformanceMonitor } from "@/components/performance-monitor"

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
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/back1.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Visual Effects */}
      <FloatingParticles />
      <AudioVisualizer />

      <Sidebar />
      <main className="md:ml-72 transition-all duration-300 relative z-10">
        <AnnouncementBar />
        <Header />
        <div className="p-6">
          <SponsorBanner />
          <HeroSection />
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
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
      
      {/* UI Enhancements */}
      <ScrollToTop />
      <PerformanceMonitor />
    </div>
  )
}
