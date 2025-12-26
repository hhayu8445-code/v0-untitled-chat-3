/* Modern Pink Design Styles */
.grid-bg {
  background: linear-gradient(to right, #f8f0ff, #ffe6f0);
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  animation: moveGrid 20s linear infinite;
}

@keyframes moveGrid {
  0% { transform: translate(0, 0); }
  100% { transform: translate(25%, 25%); }
}

.modern-title {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: bold;
  display: inline-block;
  position: relative;
  z-index: 10;
}

.modern-title span {
  display: block;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.modern-title .first {
  color: #ff6ec7;
  animation-delay: 0.2s;
}

.modern-title .second {
  color: #f72585;
  animation-delay: 0.4s;
}

.modern-title .third {
  color: #7209b7;
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.modern-action-button {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  display: inline-block;
}

.modern-action-button.primary {
  background-color: #ff6ec7;
  color: white;
}

.modern-action-button.accent {
  background-color: #f72585;
  color: white;
}

.modern-action-button.secondary {
  background-color: transparent;
  border: 2px solid #7209b7;
  color: #7209b7;
}

.modern-action-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(247, 37, 133, 0.3);
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}
import type { Metadata } from "next"
import "@/styles/modern-pink.css"
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
    <ModernLayout>
      <div className="mt-24 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">FiveM Tools V7</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Download Free FiveM Scripts, MLO Maps, Vehicles, EUP Clothing. CFX V7 Decrypt Tool, FiveM Upvotes Bot, Leak Scripts. QBCore, ESX, QBox Framework.
        </p>
        
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <TrendingSection />
            <LinkvertiseAd />
            <RecentAssets />
          </div>
          <div className="space-y-6">
            <ActivityFeed />
          </div>
        </div>
        
        <div className="mt-12">
          <ModernStats />
          <LinkvertiseAd />
          <ModernFeatures />
        </div>
      </div>
    </ModernLayout>
  )
}