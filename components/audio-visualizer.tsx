"use client"

import { useEffect, useRef } from "react"

export function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 100

    const bars = 50
    const barWidth = canvas.width / bars

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const height = Math.random() * 50 + 10
        const x = i * barWidth
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.8)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0.2)")
        
        ctx.fillStyle = gradient
        ctx.fillRect(x, canvas.height - height, barWidth - 2, height)
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 opacity-20"
    />
  )
}
