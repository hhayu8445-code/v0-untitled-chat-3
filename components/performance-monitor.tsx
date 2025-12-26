"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PerformanceMonitor() {
  const [fps, setFps] = useState(60)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return

    let lastTime = performance.now()
    let frames = 0

    const measureFPS = () => {
      frames++
      const currentTime = performance.now()
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frames * 1000) / (currentTime - lastTime)))
        frames = 0
        lastTime = currentTime
      }
      requestAnimationFrame(measureFPS)
    }

    measureFPS()

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "F12") setShow(!show)
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [show])

  if (process.env.NODE_ENV !== "development") return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-20 right-4 z-50 glass rounded-xl p-4 border shadow-[0_0_30px_rgba(255,20,147,0.3)]"
          style={{ background: 'rgba(0, 0, 0, 0.9)', borderColor: 'var(--primary)' }}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${fps >= 55 ? "bg-green-500 shadow-green-500/50" : fps >= 30 ? "bg-yellow-500 shadow-yellow-500/50" : "bg-red-500 shadow-red-500/50"}`} />
              <span className="text-[var(--textDim)] text-sm font-medium">FPS:</span>
              <span className="font-bold text-2xl" style={{ color: 'var(--primary)' }}>{fps}</span>
            </div>
            <div className="text-[var(--textDim)] text-xs text-center pt-2 border-t border-white/10">
              Press F12 to toggle
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
