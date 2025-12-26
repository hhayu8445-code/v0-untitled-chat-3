"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function LoginButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Button disabled style={{ background: 'var(--primary)', color: 'white' }}>Loading...</Button>
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--text)]">Welcome, {session.user?.name}</span>
        <Button onClick={() => signOut()} variant="outline">
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={() => signIn("discord")} style={{ background: 'var(--primary)', color: 'white' }}>
      Sign In with Discord
    </Button>
  )
}
