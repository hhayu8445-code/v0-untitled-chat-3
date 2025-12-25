"use client"

import { useEffect, useState } from "react"
import { AssetCard } from "./asset-card"
import { TrendingUp, ChevronRight, Flame } from "lucide-react"
import Link from "next/link"
import type { Asset } from "@/lib/types"
import { motion } from "framer-motion"

export function TrendingSection() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetch("/api/assets?limit=4")
        if (res.ok) {
          const data = await res.json()
          const sorted = (data.items || []).sort((a: Asset, b: Asset) => b.downloads - a.downloads)
          setAssets(sorted.slice(0, 4))
        }
      } catch (error) {
        console.error("Failed to fetch trending:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTrending()
  }, [])

  return (
    <section className="mt-10">
      <motion.div 
        className="mb-6 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="h-10 w-10 rounded-xl bg-chart-5/20 flex items-center justify-center glow-sm relative"
            animate={{ 
              boxShadow: [
                "0 0 10px rgba(255, 100, 50, 0.3)",
                "0 0 20px rgba(255, 100, 50, 0.5)",
                "0 0 10px rgba(255, 100, 50, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="h-5 w-5 text-chart-5" />
          </motion.div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Trending this Week</h2>
            <p className="text-sm text-muted-foreground">Most downloaded resources</p>
          </div>
        </div>
        <Link
          href="/scripts"
          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </motion.div>

      {isLoading ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i} 
              className="glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="aspect-[16/10] bg-secondary/50 animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-1/3 bg-secondary/50 rounded animate-pulse" />
                <div className="h-5 w-2/3 bg-secondary/50 rounded animate-pulse" />
                <div className="h-4 w-full bg-secondary/50 rounded animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AssetCard asset={asset} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
