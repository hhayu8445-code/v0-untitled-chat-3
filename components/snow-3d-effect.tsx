"use client"

import { useEffect, useRef } from "react"
import { getOptimalSnowflakeCount, prefersReducedMotion, cleanupAnimation } from "@/lib/performance"

const SNOWFLAKE_GIF = "https://media.tenor.com/Zy_GvzVLYPQAAAAi/snowflake.gif"

interface Snowflake {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  size: number
  rotation: number
  img: HTMLImageElement
}

export function Snow3DEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true })
    if (!ctx) return

    let animationId: number
    const snowflakes: Snowflake[] = []
    const maxSnowflakes = getOptimalSnowflakeCount()
    const img = new Image()
    img.src = SNOWFLAKE_GIF

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    img.onload = () => {
      for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          z: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 1 + 0.5,
          size: Math.random() * 30 + 20,
          rotation: Math.random() * 360,
          img
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        snowflakes.forEach((flake) => {
          flake.x += flake.vx
          flake.y += flake.vy
          flake.rotation += 0.5

          if (flake.y > canvas.height + 50) {
            flake.y = -50
            flake.x = Math.random() * canvas.width
          }
          if (flake.x > canvas.width + 50) flake.x = -50
          if (flake.x < -50) flake.x = canvas.width + 50

          const scale = 1 + flake.z / 100
          const size = flake.size * scale

          ctx.save()
          ctx.translate(flake.x, flake.y)
          ctx.rotate((flake.rotation * Math.PI) / 180)
          ctx.globalAlpha = 0.8
          ctx.drawImage(flake.img, -size / 2, -size / 2, size, size)
          ctx.restore()
        })

        animationId = requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      window.removeEventListener("resize", resize)
      cleanupAnimation(animationId)
    }
  }, [])

  if (prefersReducedMotion()) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}
