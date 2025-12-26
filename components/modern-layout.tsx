'use client';

import { useState, useEffect } from 'react';
import { ModernHeader } from './modern-header';
import { ModernGrid } from './modern-grid';
import { ModernTitle } from './modern-title';
import { ModernButtons } from './modern-buttons';
import { CornerDecorations } from './corner-decorations';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { ScrollToTop } from './scroll-to-top';
import { AnnouncementBar } from './announcement-bar';
import { ModernHero } from './modern-hero';
import { SeasonalHero } from './seasonal-hero';
import { ModernStats } from './modern-stats';
import { ModernFeatures } from './modern-features';
import { TrendingSection } from './trending-section';
import { RecentAssets } from './recent-assets';
import { ActivityFeed } from './activity-feed';
import { LinkvertiseAd } from './linkvertise-ad';

export function ModernLayout({ children }: { children: React.ReactNode }) {
  const [showModernDesign, setShowModernDesign] = useState(false);
  
  useEffect(() => {
    // This can be changed based on your requirements - for now we'll default to the modern design on the homepage
    const currentPath = window.location.pathname;
    setShowModernDesign(currentPath === '/');
  }, []);

  return (
    <div className="min-h-screen relative">
      {showModernDesign ? (
        <>
          {/* Modern design elements */}
          <ModernHeader />
          <ModernGrid />
          <ModernTitle />
          <ModernButtons />
          <CornerDecorations />
          
          {/* Content area for additional components */}
          <main className="relative z-10 min-h-screen">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </main>
        </>
      ) : (
        <>
          {/* Traditional layout with sidebar */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <Sidebar />
          <main className="md:ml-72 transition-all duration-300 relative z-10">
            <AnnouncementBar />
            <Header />
            <div className="p-6 space-y-12">
              {children}
            </div>
          </main>
          
          <ScrollToTop />
        </>
      )}
    </div>
  );
}