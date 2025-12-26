"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/holiday-theme"
import { Snow3DEffect } from "@/components/snow-3d-effect"

export function HolidayEffects() {
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setHoliday(getCurrentHoliday())
  }, [])

  if (!holiday) return null

  // Show 3D snow for Christmas season
  if (holiday.name === "Christmas") {
    return <Snow3DEffect />
  }

  return null
}
