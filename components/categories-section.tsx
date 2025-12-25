"use client"

import Link from "next/link"
import { Code, MapPin, Car, Shirt, ChevronRight, Sparkles } from "lucide-react"
import { useStatsStore } from "@/lib/store"
import { motion } from "framer-motion"

const categories = [
  {
    name: "Scripts",
    description: "Lua scripts for your server",
    icon: Code,
    href: "/scripts",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/20 hover:border-primary/40",
  },
  {
    name: "Maps & MLO",
    description: "Custom interiors and maps",
    icon: MapPin,
    href: "/mlo",
    color: "from-chart-5/20 to-chart-5/5",
    iconColor: "text-chart-5",
    borderColor: "border-chart-5/20 hover:border-chart-5/40",
  },
  {
    name: "Vehicles",
    description: "Cars, bikes, and more",
    icon: Car,
    href: "/vehicles",
    color: "from-info/20 to-info/5",
    iconColor: "text-info",
    borderColor: "border-info/20 hover:border-info/40",
  },
  {
    name: "EUP & Clothing",
    description: "Uniforms and outfits",
    icon: Shirt,
    href: "/clothing",
    color: "from-warning/20 to-warning/5",
    iconColor: "text-warning",
    borderColor: "border-warning/20 hover:border-warning/40",
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
            className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center glow-sm"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="h-5 w-5 text-accent" />
          </motion.div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Browse Categories</h2>
            <p className="text-sm text-muted-foreground">Find the perfect resource</p>
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
              className={`group relative overflow-hidden rounded-2xl glass p-5 card-hover ${category.borderColor} block`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-80 transition-opacity`}
              />

              <div className="relative flex items-center gap-4">
                <motion.div 
                  className="h-14 w-14 rounded-xl glass backdrop-blur flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className={`h-7 w-7 ${category.iconColor}`} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{category.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-semibold text-foreground">
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
