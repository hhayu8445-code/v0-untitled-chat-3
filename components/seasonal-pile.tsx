"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/seasonal-theme"

export function SeasonalPile() {
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setHoliday(getCurrentHoliday())
  }, [])

  if (!holiday) return null

  const getPileSVG = () => {
    switch (holiday.name) {
      case "Christmas":
      case "New Year":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="snow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M0,60 Q50,40 100,50 T200,55 T300,45 T400,50 T500,48 T600,52 T700,47 T800,50 T900,48 T1000,52 T1100,48 T1200,50 L1200,120 L0,120 Z" 
              fill="url(#snow)" opacity="0.8" />
            <ellipse cx="150" cy="55" rx="30" ry="8" fill="#fff" opacity="0.6" />
            <ellipse cx="450" cy="50" rx="35" ry="9" fill="#fff" opacity="0.5" />
            <ellipse cx="750" cy="52" rx="28" ry="7" fill="#fff" opacity="0.6" />
            <ellipse cx="1050" cy="48" rx="32" ry="8" fill="#fff" opacity="0.5" />
          </svg>
        )

      case "Valentine":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="hearts" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fecdd3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path d="M0,70 Q100,50 200,60 T400,55 T600,58 T800,55 T1000,58 T1200,55 L1200,120 L0,120 Z" 
              fill="url(#hearts)" opacity="0.7" />
            <path d="M150,60 Q150,50 160,50 Q170,50 170,60 Q170,70 160,80 Q150,70 150,60 Z" fill="#f43f5e" opacity="0.8" />
            <path d="M450,55 Q450,45 460,45 Q470,45 470,55 Q470,65 460,75 Q450,65 450,55 Z" fill="#ec4899" opacity="0.8" />
            <path d="M850,58 Q850,48 860,48 Q870,48 870,58 Q870,68 860,78 Q850,68 850,58 Z" fill="#f43f5e" opacity="0.8" />
          </svg>
        )

      case "Halloween":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="spooky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path d="M0,65 Q80,45 160,55 T320,50 T480,55 T640,50 T800,55 T960,50 T1200,55 L1200,120 L0,120 Z" 
              fill="url(#spooky)" opacity="0.8" />
            <circle cx="200" cy="55" r="15" fill="#f97316" opacity="0.9" />
            <circle cx="600" cy="52" r="18" fill="#f97316" opacity="0.9" />
            <circle cx="1000" cy="54" r="16" fill="#f97316" opacity="0.9" />
            <path d="M195,50 L200,45 L205,50 M195,60 Q200,55 205,60" stroke="#000" strokeWidth="2" fill="none" />
          </svg>
        )

      case "Easter":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="spring" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#86efac" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path d="M0,68 Q90,48 180,58 T360,53 T540,58 T720,53 T900,58 T1200,55 L1200,120 L0,120 Z" 
              fill="url(#spring)" opacity="0.7" />
            <ellipse cx="180" cy="55" rx="12" ry="16" fill="#fbbf24" opacity="0.9" />
            <ellipse cx="540" cy="53" rx="14" ry="18" fill="#ec4899" opacity="0.9" />
            <ellipse cx="900" cy="55" rx="13" ry="17" fill="#3b82f6" opacity="0.9" />
            <path d="M175,50 L180,45 L185,50" stroke="#fff" strokeWidth="1.5" fill="none" />
          </svg>
        )

      case "St Patrick":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="irish" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M0,66 Q85,46 170,56 T340,51 T510,56 T680,51 T850,56 T1200,53 L1200,120 L0,120 Z" 
              fill="url(#irish)" opacity="0.75" />
            <path d="M250,55 Q250,50 255,50 Q260,50 260,55 Q260,50 265,50 Q270,50 270,55 Q270,50 275,50 Q280,50 280,55 L265,70 Z" 
              fill="#10b981" opacity="0.9" />
            <path d="M650,53 Q650,48 655,48 Q660,48 660,53 Q660,48 665,48 Q670,48 670,53 Q670,48 675,48 Q680,48 680,53 L665,68 Z" 
              fill="#059669" opacity="0.9" />
          </svg>
        )

      case "Independence Day":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="usa" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M0,64 Q95,44 190,54 T380,49 T570,54 T760,49 T950,54 T1200,51 L1200,120 L0,120 Z" 
              fill="url(#usa)" opacity="0.8" />
            <polygon points="200,50 205,60 215,60 207,66 210,76 200,70 190,76 193,66 185,60 195,60" 
              fill="#fbbf24" opacity="0.9" />
            <polygon points="600,48 605,58 615,58 607,64 610,74 600,68 590,74 593,64 585,58 595,58" 
              fill="#fbbf24" opacity="0.9" />
          </svg>
        )

      case "Thanksgiving":
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="autumn" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M0,67 Q88,47 176,57 T352,52 T528,57 T704,52 T880,57 T1200,54 L1200,120 L0,120 Z" 
              fill="url(#autumn)" opacity="0.75" />
            <path d="M220,55 Q215,50 220,45 Q225,50 230,45 Q235,50 240,48 Q238,55 235,60 Q230,58 225,60 Q222,58 220,55 Z" 
              fill="#dc2626" opacity="0.8" />
            <path d="M620,53 Q615,48 620,43 Q625,48 630,43 Q635,48 640,46 Q638,53 635,58 Q630,56 625,58 Q622,56 620,53 Z" 
              fill="#f97316" opacity="0.8" />
          </svg>
        )

      default:
        return (
          <svg viewBox="0 0 1200 120" className="pile-svg">
            <defs>
              <linearGradient id="default" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={holiday.theme.primary} stopOpacity="0.6" />
                <stop offset="100%" stopColor={holiday.theme.secondary} stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M0,65 Q100,45 200,55 T400,50 T600,55 T800,50 T1000,55 T1200,52 L1200,120 L0,120 Z" 
              fill="url(#default)" opacity="0.7" />
          </svg>
        )
    }
  }

  return (
    <>
      <div className="seasonal-pile-bottom">
        {getPileSVG()}
      </div>

      <style jsx>{`
        .seasonal-pile-bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          pointer-events: none;
          z-index: 40;
          overflow: hidden;
        }

        .pile-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 -2px 8px ${holiday.theme.primary}40);
        }

        @media (max-width: 768px) {
          .seasonal-pile-bottom {
            height: 80px;
          }
        }
      `}</style>
    </>
  )
}
