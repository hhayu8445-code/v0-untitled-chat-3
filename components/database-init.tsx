"use client"

import { useEffect, useRef } from "react"

export function DatabaseInit() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const initDb = async () => {
      try {
        await fetch("/api/init-database", { method: "GET" })
      } catch (error) {}
    }

    setTimeout(initDb, 1000)
  }, [])

  return null
}
