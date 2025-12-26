"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ModernCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  value?: string | number
  trend?: "up" | "down" | "neutral"
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

export function ModernCard({
  title,
  description,
  icon: Icon,
  value,
  trend,
  className,
  onClick,
  children,
}: ModernCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className={cn(
          "glass card-hover magnetic cursor-pointer overflow-hidden group relative border border-white/10 backdrop-blur-xl",
          className
        )}
        onClick={onClick}
        style={{
          background: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <p className="text-sm text-[var(--textDim)] font-medium">{title}</p>
              {value && (
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold gradient-text">{value}</p>
                  {trend && (
                    <span
                      className={cn(
                        "text-xs font-medium",
                        trend === "up" && "text-green-500",
                        trend === "down" && "text-red-500",
                        trend === "neutral" && "text-[var(--textDim)]"
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
                <p className="text-xs text-[var(--textDim)]">{description}</p>
              )}
              {children}
            </div>
            
            {Icon && (
              <div className="p-3 rounded-xl glass group-hover:glow-sm transition-all" style={{ background: "rgba(236, 72, 153, 0.1)" }}>
                <Icon className="h-6 w-6 text-[var(--primary)] group-hover:scale-110 transition-transform" />
              </div>
            )}
          </div>
        </CardContent>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        {/* Glow Effect on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          }}
        />
      </Card>
    </motion.div>
  )
}
