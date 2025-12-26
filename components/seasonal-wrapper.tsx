"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/seasonal-theme"
import { Snow3DEffect } from "@/components/snow-3d-effect"
import { SeasonalPile } from "@/components/seasonal-pile"

export function SeasonalWrapper({ children }: { children: React.ReactNode }) {
  const [season, setSeason] = useState(getCurrentHoliday())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setSeason(getCurrentHoliday())
    setMounted(true)
  }, [])

  const isWinterSeason = season?.name === "Christmas" || season?.name === "New Year"

  if (!mounted) return <>{children}</>

  return (
    <>
      {/* Winter Snow Effects */}
      {isWinterSeason && <Snow3DEffect />}

      {/* Seasonal Pile (All Seasons) */}
      <SeasonalPile />

      {/* Seasonal Particles */}
      {season && (
        <div className="seasonal-particles">
          {Array.from({ length: Math.min(season.particles.count || 12, 12) }).map((_, i) => (
            <div
              key={i}
              className="particle performance-optimized"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 4}s`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {season.effects[i % season.effects.length]}
            </div>
          ))}
        </div>
      )}

      {season && (
        <style jsx global>{`
          :root {
            --seasonal-primary: ${season.theme.primary};
            --seasonal-secondary: ${season.theme.secondary};
            --seasonal-accent: ${season.theme.accent};
          }

          .seasonal-particles {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
          }

          .particle {
            position: absolute;
            top: -50px;
            font-size: 18px;
            opacity: 0.7;
            animation: fall linear infinite;
            filter: drop-shadow(0 0 8px ${season.theme.primary});
            will-change: transform, opacity;
          }

          @keyframes fall {
            0% {
              transform: translateY(-50px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          /* Modern 2025 Seasonal Card Effects */
          .card, .modern-card, [class*="card"], .glass-effect {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            background: linear-gradient(135deg, 
              ${season.theme.primary}10, 
              ${season.theme.secondary}10) !important;
            border: 1px solid ${season.theme.primary}20 !important;
            position: relative;
            overflow: hidden;
          }

          .card::before, .modern-card::before, [class*="card"]::before, .glass-effect::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, 
              ${season.theme.primary}, 
              ${season.theme.secondary}, 
              ${season.theme.accent}, 
              ${season.theme.primary}) !important;
            border-radius: calc(var(--radius) + 2px);
            z-index: -1;
            animation: border-glow 3s linear infinite;
            background-size: 400% 400%;
          }

          @keyframes border-glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .card:hover, .modern-card:hover, [class*="card"]:hover, .glass-effect:hover {
            border-color: ${season.theme.primary}80 !important;
            box-shadow: 
              0 10px 30px -10px ${season.theme.primary}30,
              0 0 0 1px ${season.theme.primary}40,
              0 0 30px ${season.theme.accent}30 !important;
            transform: translateY(-5px) scale(1.02);
          }

          /* Seasonal Button Effects */
          .button-primary, [class*="btn-primary"], .modern-button {
            background: linear-gradient(135deg, 
              ${season.theme.primary}, 
              ${season.theme.secondary}) !important;
            border: none !important;
            position: relative;
            overflow: hidden;
          }

          .button-primary::after, [class*="btn-primary"]::after, .modern-button::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transition: 0.5s;
          }

          .button-primary:hover::after, [class*="btn-primary"]:hover::after, .modern-button:hover::after {
            left: 100%;
          }

          /* Seasonal Glow Effects */
          .accent-glow, .neon-glow {
            box-shadow: 
              0 0 15px ${season.theme.accent}40,
              0 0 30px ${season.theme.primary}30 !important;
          }

          /* Seasonal Background Gradients */
          .bg-seasonal {
            background: linear-gradient(
              135deg,
              ${season.theme.primary}10 0%,
              ${season.theme.secondary}10 50%,
              ${season.theme.accent}10 100%
            ) !important;
          }

          /* Seasonal Text Effects */
          .text-seasonal {
            background: linear-gradient(90deg, 
              ${season.theme.primary}, 
              ${season.theme.secondary}, 
              ${season.theme.accent});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: text-shimmer 3s infinite;
          }

          @keyframes text-shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          /* Seasonal Loading Effects */
          .loading-2025::before {
            background: linear-gradient(45deg, 
              ${season.theme.primary}, 
              ${season.theme.secondary}, 
              ${season.theme.accent}, 
              ${season.theme.primary});
          }
        `}</style>
      )}

      {children}
    </>
  )
}