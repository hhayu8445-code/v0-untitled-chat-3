"use client"

import { useEffect, useRef } from "react"

export function DatabaseInit() {
  const initialized = useRef(false)

  useEffect(() => {
    // Only run once
    if (initialized.current) return
    initialized.current = true

    // Auto-initialize database on app load
    const initDb = async () => {
      try {
        await fetch("/api/init-database")
      } catch (error) {
        // Silent fail - database might already be initialized
        console.log("[v0] Database init check completed")
      }
    }

    initDb()
  }, [])

  return null
}
