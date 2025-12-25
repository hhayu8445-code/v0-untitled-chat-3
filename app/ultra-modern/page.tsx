import { DynamicBackground } from "@/components/dynamic-background"
import { SeasonalNavbar } from "@/components/seasonal-navbar"
import { ElectricCard } from "@/components/electric-card"
import { GlassButton } from "@/components/glass-button"
import { ModernForm, ModernInput } from "@/components/modern-form"
import { SeasonalFooter } from "@/components/seasonal-footer"
import { ModernParticles } from "@/components/modern-particles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Template - FiveM Tools V7",
  description: "Modern 2025 design with seasonal themes and 3D effects",
}

export default function UltraModernPage() {
  return (
    <div className="min-h-screen relative">
      <DynamicBackground />
      <ModernParticles />
      <SeasonalNavbar />
      
      <main className="container mx-auto px-4 py-12 space-y-8">
        <ElectricCard className="p-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm font-semibold uppercase tracking-wider">Modern 2025</span>
            </div>
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                Ultra Modern
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                FiveM Tools
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Experience the future of FiveM resources with cutting-edge platform featuring seasonal themes, 3D effects, and lightning-fast performance.
            </p>
            <div className="flex gap-4">
              <GlassButton>Get Started</GlassButton>
              <GlassButton>Learn More</GlassButton>
            </div>
          </div>
        </ElectricCard>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Lightning Fast", desc: "Optimized for maximum performance" },
            { title: "Seasonal Themes", desc: "Auto-changing colors for holidays" },
            { title: "3D Effects", desc: "Modern animations and transitions" },
          ].map((feature, i) => (
            <ElectricCard key={i}>
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </div>
            </ElectricCard>
          ))}
        </div>

        <ElectricCard>
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <ModernForm>
              <div className="space-y-4">
                <ModernInput placeholder="Your Name" />
                <ModernInput type="email" placeholder="Your Email" />
                <ModernInput placeholder="Subject" />
                <div className="pt-4">
                  <GlassButton>Send Message</GlassButton>
                </div>
              </div>
            </ModernForm>
          </div>
        </ElectricCard>
      </main>
      
      <SeasonalFooter />
    </div>
  )
}
