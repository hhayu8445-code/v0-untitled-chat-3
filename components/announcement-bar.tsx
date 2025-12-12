"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Zap, Gift, AlertTriangle, Info, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Announcement {
  id: string
  title: string
  message: string
  link?: string
  link_text?: string
  type: "info" | "success" | "warning" | "error" | "promo"
  is_active: boolean
  is_dismissible: boolean
  bg_color?: string
  text_color?: string
  created_at: string
}

const typeConfig = {
  info: {
    bg: "from-[#0d1f2d] via-[#0f2a3d] to-[#0d1f2d]",
    border: "border-cyan-500/20",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    icon: Info,
    iconBg: "bg-cyan-500/20 text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
  success: {
    bg: "from-[#0d2d1f] via-[#0f3d2a] to-[#0d2d1f]",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    icon: Zap,
    iconBg: "bg-emerald-500/20 text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  warning: {
    bg: "from-[#2d2a0d] via-[#3d3510] to-[#2d2a0d]",
    border: "border-amber-500/20",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    icon: AlertTriangle,
    iconBg: "bg-amber-500/20 text-amber-400",
    badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  error: {
    bg: "from-[#2d0d1a] via-[#3d0f22] to-[#2d0d1a]",
    border: "border-red-500/20",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    icon: AlertTriangle,
    iconBg: "bg-red-500/20 text-red-400",
    badge: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  promo: {
    bg: "from-[#0d1a2d] via-[#142640] to-[#0d1a2d]",
    border: "border-primary/30",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.2)]",
    icon: Gift,
    iconBg: "bg-gradient-to-br from-cyan-500/30 to-teal-500/30 text-cyan-300",
    badge: "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-500/30",
  },
}

export function AnnouncementBar() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dismissed, setDismissed] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch("/api/announcements")
        const data = await res.json()
        if (data.announcements) {
          setAnnouncements(data.announcements)
        }
      } catch (error) {
        console.error("Failed to fetch announcements:", error)
      } finally {
        setIsLoaded(true)
      }
    }

    fetchAnnouncements()

    const savedDismissed = localStorage.getItem("dismissed_announcements")
    if (savedDismissed) {
      setDismissed(JSON.parse(savedDismissed))
    }
  }, [])

  useEffect(() => {
    const visibleAnnouncements = announcements.filter((a) => !dismissed.includes(a.id))
    if (visibleAnnouncements.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visibleAnnouncements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [announcements, dismissed, isHovered])

  const handleDismiss = (id: string) => {
    const newDismissed = [...dismissed, id]
    setDismissed(newDismissed)
    localStorage.setItem("dismissed_announcements", JSON.stringify(newDismissed))
  }

  const visibleAnnouncements = announcements.filter((a) => !dismissed.includes(a.id))

  if (!isLoaded || visibleAnnouncements.length === 0) return null

  const current = visibleAnnouncements[currentIndex % visibleAnnouncements.length]
  const config = typeConfig[current.type]
  const IconComponent = config.icon

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-r",
        current.bg_color ? "" : config.bg,
        "border-b",
        config.border,
        config.glow,
        "transition-all duration-500 ease-out",
      )}
      style={
        current.bg_color
          ? {
              backgroundColor: current.bg_color,
              color: current.text_color || "#ffffff",
            }
          : undefined
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Floating particles for promo type */}
        {current.type === "promo" && (
          <>
            <div className="absolute top-1/2 left-[10%] w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-[30%] w-1.5 h-1.5 bg-teal-400/30 rounded-full animate-pulse delay-150" />
            <div className="absolute top-2/3 left-[70%] w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse delay-300" />
            <div className="absolute top-1/4 right-[20%] w-1 h-1 bg-teal-300/30 rounded-full animate-pulse delay-500" />
            {/* Subtle shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" />
          </>
        )}

        {/* Gradient mesh background */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {/* Icon container with modern styling */}
          <div
            className={cn(
              "flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg",
              "border border-white/10 backdrop-blur-sm",
              "transition-all duration-300",
              config.iconBg,
              isHovered && "scale-110 rotate-3",
            )}
          >
            {current.type === "promo" ? (
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            ) : (
              <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            )}
          </div>

          {/* Content area */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-center min-w-0">
            {/* Title badge */}
            {current.title && (
              <span
                className={cn(
                  "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs sm:text-sm font-semibold",
                  "border backdrop-blur-sm",
                  "transition-all duration-300",
                  config.badge,
                  isHovered && "scale-105",
                )}
              >
                {current.title}
              </span>
            )}

            {/* Message text */}
            <span className="text-gray-200 text-xs sm:text-sm font-medium">{current.message}</span>

            {/* Action link */}
            {current.link && (
              <Link
                href={current.link}
                target={current.link.startsWith("http") ? "_blank" : undefined}
                rel={current.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg",
                  "bg-white/5 hover:bg-white/10",
                  "border border-white/10 hover:border-cyan-500/30",
                  "font-medium text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm",
                  "transition-all duration-300 hover:scale-105",
                  "backdrop-blur-sm",
                )}
              >
                {current.link_text || "Learn more"}
                {current.link.startsWith("http") ? (
                  <ExternalLink className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Link>
            )}
          </div>

          {/* Dismiss button */}
          {current.is_dismissible && (
            <button
              onClick={() => handleDismiss(current.id)}
              className={cn(
                "flex-shrink-0 p-1.5 rounded-lg",
                "bg-white/5 hover:bg-white/10",
                "border border-white/10 hover:border-red-500/30",
                "text-gray-400 hover:text-red-400",
                "transition-all duration-300 hover:scale-110",
                "backdrop-blur-sm",
              )}
              aria-label="Dismiss announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Multiple announcements indicator */}
        {visibleAnnouncements.length > 1 && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
            {visibleAnnouncements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === currentIndex % visibleAnnouncements.length
                    ? "w-5 h-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    : "w-1 h-1 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
