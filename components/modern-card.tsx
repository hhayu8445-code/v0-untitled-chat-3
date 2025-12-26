"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModernCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  value?: string | number
  trend?: "up" | "down" | "neutral"
  className?: string
  onClick?: () => void
}

export function ModernCard({
  title,
  description,
  icon: Icon,
  value,
  trend,
  className,
  onClick,
}: ModernCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={cn(
          "glass-effect card-hover magnetic cursor-pointer overflow-hidden group relative neon-border",
          className
        )}
        onClick={onClick}
      >
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <p className="text-sm text-muted-foreground">{title}</p>
              {value && (
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-seasonal">{value}</p>
                  {trend && (
                    <span
                      className={cn(
                        "text-xs font-medium",
                        trend === "up" && "text-success",
                        trend === "down" && "text-destructive",
                        trend === "neutral" && "text-muted-foreground"
                      )}
                    >
                      {trend === "up" && "↑"}
                      {trend === "down" && "↓"}
                      {trend === "neutral" && "→"}
                    </span>
                  )}
                </div>
              )}
              {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
            </div>
            
            {Icon && (
              <div className="p-3 rounded-xl glass-effect group-hover:neon-glow transition-all">
                <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
            )}
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  )
}