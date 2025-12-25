"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Users, Star, Sparkles, Zap } from "lucide-react"
import { SITE_LOGO, FRAMEWORKS } from "@/lib/constants"
import { useStatsStore } from "@/lib/store"
import Link from "next/link"
import { motion } from "framer-motion"

function formatStatNumber(num: number, suffix = ""): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M${suffix}`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K${suffix}`
  }
  if (num > 0) {
    return `${num}${suffix}`
  }
  return `0${suffix}`
}

export function HeroSection() {
  const { stats } = useStatsStore()

  return (
    <section className="relative overflow-hidden rounded-2xl glass border-primary/20 mb-8">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            {/* Badge with Logo */}
            <motion.div 
              className="mb-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={SITE_LOGO || "/placeholder.svg"} 
                alt="FiveM Tools V7" 
                className="h-16 w-16 object-contain"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary border border-primary/30 glow-sm">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="font-medium">The #1 FiveM Resource Hub</span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full animate-pulse">
                  2025
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-4 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Premium Assets for <span className="gradient-text glow-text">Next-Gen Servers</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground md:text-xl max-w-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Access thousands of curated Scripts, MLOs, Vehicles, and EUPs. Optimized for all major frameworks.
            </motion.p>

            {/* Framework Logos */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-sm text-muted-foreground">Supported:</span>
              <div className="flex items-center gap-3">
                {FRAMEWORKS.filter((f) => f.id !== "standalone").map((framework, i) => (
                  <motion.div
                    key={framework.id}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-border/50 card-hover"
                    title={framework.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={framework.logo || "/placeholder.svg"}
                      alt={framework.name}
                      className="h-6 w-6 object-contain rounded"
                    />
                    <span className="text-sm font-medium text-foreground hidden sm:inline">{framework.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/scripts">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-xl h-12 px-6 glow relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                    <Zap className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">Browse All Assets</span>
                    <ArrowRight className="h-4 w-4 relative z-10" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/membership">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary rounded-xl h-12 px-6 glass-hover"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Premium Access
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-3 lg:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { icon: Download, label: "Downloads", value: stats.totalDownloads, color: "text-primary", suffix: "+" },
              { icon: Users, label: "Members", value: stats.totalMembers, color: "text-accent" },
              { icon: Zap, label: "Assets", value: stats.totalAssets, color: "text-chart-4", suffix: "+" },
              { icon: Star, label: "Rating", value: 4.9, color: "text-chart-5", isRating: true }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-4 text-center card-hover relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2 relative z-10`} />
                <p className="text-2xl font-bold text-foreground relative z-10">
                  {stat.isRating ? stat.value : (stat.value > 0 ? formatStatNumber(stat.value, stat.suffix) : `0${stat.suffix || ""}`)}
                </p>
                <p className="text-xs text-muted-foreground relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
