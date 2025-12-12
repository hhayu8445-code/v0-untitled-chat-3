"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, AlertTriangle, CheckCircle, Info, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Announcement {
  id: string
  title?: string
  message: string
  type: "info" | "success" | "warning" | "error" | "promo"
  link?: string
  badge?: string
  bg_color?: string
  text_color?: string
  is_active: boolean
}

export function AnnouncementBar() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  // Auto-rotate announcements
  useEffect(() => {
    if (announcements.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [announcements.length])

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch("/api/announcements")
      const data = await res.json()
      setAnnouncements(data.announcements || [])
    } catch (error) {
      console.error("Failed to fetch announcements:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDismiss = (id: string) => {
    setDismissed((prev) => new Set(prev).add(id))
  }

  const visibleAnnouncements = announcements.filter((a) => !dismissed.has(a.id))

  if (isLoading || visibleAnnouncements.length === 0) return null

  const current = visibleAnnouncements[currentIndex % visibleAnnouncements.length]
  if (!current) return null

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "success":
        return {
          bg: "from-emerald-600/90 via-teal-600/90 to-cyan-600/90",
          icon: CheckCircle,
          iconColor: "text-emerald-200",
        }
      case "warning":
        return {
          bg: "from-amber-600/90 via-orange-600/90 to-yellow-600/90",
          icon: AlertTriangle,
          iconColor: "text-amber-200",
        }
      case "error":
        return {
          bg: "from-red-600/90 via-rose-600/90 to-pink-600/90",
          icon: AlertTriangle,
          iconColor: "text-red-200",
        }
      case "promo":
        return {
          bg: "from-cyan-600/90 via-teal-500/90 to-emerald-500/90",
          icon: Sparkles,
          iconColor: "text-cyan-200",
        }
      default:
        return {
          bg: "from-cyan-600/90 via-teal-600/90 to-cyan-700/90",
          icon: Info,
          iconColor: "text-cyan-200",
        }
    }
  }

  const typeStyles = getTypeStyles(current.type)
  const IconComponent = typeStyles.icon

  return (
    <div
      className={cn("relative w-full overflow-hidden", "bg-gradient-to-r", current.bg_color || typeStyles.bg)}
      style={current.bg_color ? { background: current.bg_color } : undefined}
    >
      {/* Animated background shimmer for promo */}
      {current.type === "promo" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>
      )}

      <div className="relative flex items-center justify-center gap-3 px-4 py-2.5 md:py-3">
        {/* Navigation arrows for multiple announcements */}
        {visibleAnnouncements.length > 1 && (
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + visibleAnnouncements.length) % visibleAnnouncements.length)
            }
            className="absolute left-2 p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-white/70" />
          </button>
        )}

        {/* Icon */}
        <div className={cn("flex-shrink-0 p-1.5 rounded-full bg-white/10 backdrop-blur-sm", typeStyles.iconColor)}>
          <IconComponent className="w-4 h-4" />
        </div>

        {/* Badge */}
        {current.badge && (
          <span className="hidden sm:inline-flex px-2 py-0.5 text-xs font-bold rounded-full bg-white/20 text-white uppercase tracking-wide">
            {current.badge}
          </span>
        )}

        {/* Message */}
        <p
          className={cn(
            "text-sm md:text-base font-medium text-center line-clamp-1",
            current.text_color || "text-white",
          )}
          style={current.text_color ? { color: current.text_color } : undefined}
        >
          {current.title && <span className="font-bold mr-1">{current.title}</span>}
          {current.message}
        </p>

        {/* Link */}
        {current.link && (
          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
          >
            Learn More
            <ExternalLink className="w-3 h-3" />
          </a>
        )}

        {/* Navigation arrows for multiple announcements */}
        {visibleAnnouncements.length > 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % visibleAnnouncements.length)}
            className="absolute right-10 p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-white/70" />
          </button>
        )}

        {/* Close button */}
        <button
          onClick={() => handleDismiss(current.id)}
          className="absolute right-2 p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4 text-white/70 hover:text-white" />
        </button>
      </div>

      {/* Pagination dots */}
      {visibleAnnouncements.length > 1 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
          {visibleAnnouncements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                idx === currentIndex % visibleAnnouncements.length ? "bg-white w-3" : "bg-white/40 hover:bg-white/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
