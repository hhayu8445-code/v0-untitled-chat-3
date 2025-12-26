"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getCurrentHoliday } from "@/lib/holiday-theme"

export function ModernParticles() {
  const [mounted, setMounted] = useState(false)
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setMounted(true)
    setHoliday(getCurrentHoliday())
  }, [])

  if (!mounted || !holiday) return null

  const color = holiday.theme.primary

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ 
            background: color,
            boxShadow: `0 0 10px ${color}`
          }}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: -50,
            opacity: 0.6
          }}
          animate={{
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}
