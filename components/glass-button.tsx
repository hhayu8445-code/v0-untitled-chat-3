"use client"

import { getCurrentHoliday } from "@/lib/holiday-theme"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function GlassButton({ children, onClick, className = "" }: { 
  children: React.ReactNode
  onClick?: () => void
  className?: string 
}) {
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setHoliday(getCurrentHoliday())
  }, [])

  const color = holiday ? holiday.theme.primary : "oklch(0.75 0.15 180)"

  return (
    <>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`glass-btn ${className} neon-border`}
        style={{ "--btn-color": color } as any}
      >
        {children}
      </motion.button>

      <style jsx>{`
        .glass-btn {
          background: radial-gradient(
              47.2% 50% at 50.39% 88.37%,
              rgba(255, 255, 255, 0.12) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            rgba(255, 255, 255, 0.04);
          position: relative;
          transition: all 0.3s ease;
          border-radius: 14px;
          padding: 12px 24px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .glass-btn:hover {
          background: radial-gradient(
              47.2% 50% at 50.39% 88.37%,
              rgba(255, 255, 255, 0.16) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .glass-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1px;
          background: linear-gradient(
            150deg,
            rgba(255, 255, 255, 0.48) 16.73%,
            rgba(255, 255, 255, 0.08) 30.2%,
            rgba(255, 255, 255, 0.08) 68.2%,
            rgba(255, 255, 255, 0.6) 81.89%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .glass-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: var(--btn-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          mix-blend-mode: overlay;
        }

        .glass-btn:hover::after {
          opacity: 0.2;
        }
        
        .neon-border {
          position: relative;
        }
        
        .neon-border::after {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff);
          border-radius: 15px;
          z-index: -1;
          filter: blur(5px);
          opacity: 0.7;
        }
        
        .neon-border:hover::after {
          opacity: 1;
        }
      `}</style>
    </>
  )
}