"use client"

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react"
import type { ReactNode } from "react"
import { useCallback } from "react"

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  )
}

export function useAuth() {
  const { data: session, status, update } = useSession()

  const user = session?.user
    ? {
        id: session.user.id || "",
        discordId: session.user.id || "",
        username: session.user.name || "",
        email: session.user.email || "",
        avatar: session.user.image || "",
        membership: session.user.membership || "free",
        coins: session.user.coins || 100,
        isAdmin: session.user.isAdmin === true,
        bio: session.user.bio || "",
      }
    : null

  const checkAdminStatus = async () => {
    if (!user?.id) return false
    try {
      const res = await fetch("/api/force-admin")
      const data = await res.json()
      if (data.currentUser?.isAdmin && !user.isAdmin) {
        await update()
        return true
      }
      return data.currentUser?.isAdmin || false
    } catch {
      return false
    }
  }

  const refreshUser = useCallback(async () => {
    try {
      await update()
      return true
    } catch {
      return false
    }
  }, [update])

  return {
    user,
    isAdmin: user?.isAdmin === true,
    isLoading: status === "loading",
    login: () => signIn("discord"),
    logout: () => signOut(),
    refreshSession: () => update(),
    refreshUser,
    checkAdminStatus,
  }
}
