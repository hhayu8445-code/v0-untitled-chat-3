"use client"

import type React from "react"
import { Component, type ReactNode } from "react"

import { PublicNotifications } from "@/components/public-notifications"
import { OnlineTracker } from "@/components/online-tracker"
import { DailySpinTicket } from "@/components/daily-spin-ticket"
import { DatabaseInit } from "@/components/database-init"

class ErrorBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[ErrorBoundary]", error)
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }

    return this.props.children
  }
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ErrorBoundary>
        <DatabaseInit />
      </ErrorBoundary>
      {children}
      <ErrorBoundary>
        <PublicNotifications />
      </ErrorBoundary>
      <ErrorBoundary>
        <OnlineTracker />
      </ErrorBoundary>
      <ErrorBoundary>
        <DailySpinTicket />
      </ErrorBoundary>
    </>
  )
}
