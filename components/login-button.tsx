"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DiscordLogo } from "@radix-ui/react-icons"

export function LoginButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Button disabled className="glass-effect neon-border">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-primary animate-pulse" />
            <span>Loading...</span>
          </div>
        </Button>
      </motion.div>
    )
  }

  if (session) {
    return (
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <span className="text-sm text-foreground">Welcome, {session.user?.name}</span>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            onClick={() => signOut()} 
            variant="outline" 
            className="glass-effect glass-hover neon-border"
          >
            Sign Out
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button 
        onClick={() => signIn("discord")} 
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white gap-2 rounded-xl h-10 px-4 relative overflow-hidden group modern-button"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#7289DA] to-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
        <DiscordLogo className="h-5 w-5 relative z-10" />
        <span className="hidden sm:inline relative z-10">Sign In with Discord</span>
      </Button>
    </motion.div>
  )
}