"use client"

import type React from "react"

import { PublicNotifications } from "@/components/public-notifications"
import { OnlineTracker } from "@/components/online-tracker"
import { DailySpinTicket } from "@/components/daily-spin-ticket"
import { DatabaseInit } from "@/components/database-init"

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DatabaseInit />
      {children}
      <PublicNotifications />
      <OnlineTracker />
      <DailySpinTicket />
    </>
  )
}
