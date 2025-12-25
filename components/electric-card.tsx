"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/holiday-theme"

export function ElectricCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setHoliday(getCurrentHoliday())
  }, [])

  const getSeasonalColor = () => {
    if (!holiday) return "#dd8448"
    
    const colors: Record<string, string> = {
      "New Year": "#8b5cf6",
      "Valentine": "#ec4899",
      "St Patrick": "#10b981",
      "Easter": "#f59e0b",
      "Earth Day": "#059669",
      "Cinco de Mayo": "#ef4444",
      "Pride Month": "#a855f7",
      "Independence Day": "#3b82f6",
      "Indonesia Independence": "#dc2626",
      "Halloween": "#f97316",
      "Thanksgiving": "#d97706",
      "Christmas": "#dc2626"
    }
    
    return colors[holiday.name] || "#dd8448"
  }

  const getSeasonalText = () => {
    if (!holiday) return "FiveM Tools V7"
    return holiday.name
  }

  const color = getSeasonalColor()

  return (
    <>
      <svg className="absolute">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className={`electric-card-container ${className}`} style={{ "--electric-color": color } as any}>
        <div className="electric-inner">
          <div className="electric-border-outer">
            <div className="electric-main-card" />
          </div>
          <div className="electric-glow-1" />
          <div className="electric-glow-2" />
        </div>

        <div className="electric-overlay-1" />
        <div className="electric-overlay-2" />
        <div className="electric-bg-glow" />

        <div className="electric-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        .electric-card-container {
          padding: 2px;
          border-radius: 24px;
          position: relative;
          background: linear-gradient(
              -30deg,
              color-mix(in oklch, var(--electric-color) 40%, transparent),
              transparent,
              color-mix(in oklch, var(--electric-color) 40%, transparent)
            ),
            linear-gradient(to bottom, oklch(0.185 0 0), oklch(0.185 0 0));
        }

        .electric-inner {
          position: relative;
        }

        .electric-border-outer {
          border: 2px solid color-mix(in oklch, var(--electric-color) 50%, transparent);
          border-radius: 24px;
          padding-right: 4px;
          padding-bottom: 4px;
        }

        .electric-main-card {
          width: 100%;
          min-height: 200px;
          border-radius: 24px;
          border: 2px solid var(--electric-color);
          margin-top: -4px;
          margin-left: -4px;
          filter: url(#turbulent-displace);
        }

        .electric-glow-1 {
          border: 2px solid color-mix(in oklch, var(--electric-color) 60%, transparent);
          border-radius: 24px;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          filter: blur(1px);
        }

        .electric-glow-2 {
          border: 2px solid var(--electric-color);
          border-radius: 24px;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          filter: blur(4px);
        }

        .electric-overlay-1 {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 24px;
          opacity: 1;
          mix-blend-mode: overlay;
          transform: scale(1.1);
          filter: blur(16px);
          background: linear-gradient(-30deg, white, transparent 30%, transparent 70%, white);
        }

        .electric-overlay-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 24px;
          opacity: 0.5;
          mix-blend-mode: overlay;
          transform: scale(1.1);
          filter: blur(16px);
          background: linear-gradient(-30deg, white, transparent 30%, transparent 70%, white);
        }

        .electric-bg-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 24px;
          filter: blur(32px);
          transform: scale(1.1);
          opacity: 0.3;
          z-index: -1;
          background: linear-gradient(-30deg, var(--electric-color), transparent, var(--electric-color));
        }

        .electric-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }
      `}</style>
    </>
  )
}
