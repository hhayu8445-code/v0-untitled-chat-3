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
          className="fixed top-20 right-4 z-50 glass rounded-lg p-3 border border-primary/30"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${fps >= 55 ? "bg-success" : fps >= 30 ? "bg-warning" : "bg-destructive"}`} />
              <span className="text-muted-foreground">FPS:</span>
              <span className="font-bold text-foreground">{fps}</span>
            </div>
            <div className="text-muted-foreground text-[10px]">Press F12 to toggle</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
