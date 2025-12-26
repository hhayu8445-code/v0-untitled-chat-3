"use client"

import Link from "next/link"
import { Code, MapPin, Car, Shirt, ChevronRight, Sparkles } from "lucide-react"
import { useStatsStore } from "@/lib/store"
import { motion } from "framer-motion"
import { SnowPile } from "@/components/snow-pile"

const categories = [
  {
    name: "Scripts",
    description: "Lua scripts for your server",
    icon: Code,
    href: "/scripts",
  },
  {
    name: "Maps & MLO",
    description: "Custom interiors and maps",
    icon: MapPin,
    href: "/mlo",
  },
  {
    name: "Vehicles",
    description: "Cars, bikes, and more",
    icon: Car,
    href: "/vehicles",
  },
  {
    name: "EUP & Clothing",
    description: "Uniforms and outfits",
    icon: Shirt,
    href: "/clothing",
  },
]

export function CategoriesSection() {
  const { stats } = useStatsStore()

  const assetCounts = {
    Scripts: Math.floor(stats.totalAssets * 0.35),
    "Maps & MLO": Math.floor(stats.totalAssets * 0.15),
    Vehicles: Math.floor(stats.totalAssets * 0.3),
    "EUP & Clothing": Math.floor(stats.totalAssets * 0.2),
  }

  return (
    <section>
      <motion.div 
        className="mb-5 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="h-10 w-10 rounded-xl flex items-center justify-center glow-sm"
            style={{ background: 'rgba(236, 72, 153, 0.2)' }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="h-5 w-5 text-[var(--primary)]" />
          </motion.div>
          <div>
            <h2 className="text-xl font-bold text-[var(--text)]">Browse Categories</h2>
            <p className="text-sm text-[var(--textDim)]">Find the perfect resource</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={category.href}
              className="group relative overflow-hidden rounded-2xl glass p-5 card-hover border border-white/10 hover:border-[var(--primary)]/40 block"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <SnowPile size="sm" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              />

              <div className="relative flex items-center gap-4">
                <motion.div 
                  className="h-14 w-14 rounded-xl glass backdrop-blur flex items-center justify-center"
                  style={{ background: 'rgba(236, 72, 153, 0.2)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="h-7 w-7 text-[var(--primary)]" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                      {category.name}
                    </h3>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-5 w-5 text-[var(--textDim)] group-hover:text-[var(--primary)] transition-all" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-[var(--textDim)] mt-0.5">{category.description}</p>
                  <p className="text-xs text-[var(--textDim)] mt-2">
                    <span className="font-semibold text-[var(--text)]">
                      {assetCounts[category.name as keyof typeof assetCounts] || 0}+
                    </span>{" "}
                    resources
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
