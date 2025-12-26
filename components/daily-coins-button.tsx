"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAuth } from "@/components/auth-provider"
import { Gift, Loader2, CheckCircle, Clock, Sparkles } from "lucide-react"
import { CoinIcon } from "@/components/coin-icon"
import { motion, AnimatePresence } from "framer-motion"

export function DailyCoinsButton() {
  const { user, refreshSession } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleClaim = async () => {
    if (!user) return

    setIsClaiming(true)
    try {
      const res = await fetch("/api/coins/daily", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      const data = await res.json()
      setResult(data)

      if (data.success) {
        await refreshSession()
        setTimeout(() => {
          setShowModal(false)
          setResult(null)
        }, 2000)
      }
    } catch (error) {
      setResult({ error: "Failed to claim coins" })
    } finally {
      setIsClaiming(false)
    }
  }

  if (!user) return null

  return (
    <>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={() => setShowModal(true)}
          className="w-full bg-gradient-to-r from-warning to-chart-5 hover:from-warning/90 hover:to-chart-5/90 rounded-xl gap-2 glow relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-warning/20 via-chart-5/20 to-warning/20 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
          <Gift className="h-4 w-4 relative z-10" />
          <span className="relative z-10">Daily Coins</span>
          <Sparkles className="h-3 w-3 relative z-10 animate-pulse" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="max-w-md glass border-2 border-warning/30">
              <motion.div 
                className="p-6 space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="h-20 w-20 rounded-2xl bg-warning/20 flex items-center justify-center mx-auto mb-4 relative"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CoinIcon size="xl" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-warning/30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Daily Coins</h2>
                  <p className="text-muted-foreground">Claim your free 25 coins every 24 hours!</p>
                </div>

                <AnimatePresence mode="wait">
                  {result ? (
                    result.success ? (
                      <motion.div 
                        className="text-center space-y-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="h-16 w-16 text-success mx-auto" />
                        </motion.div>
                        <motion.div 
                          className="flex items-center justify-center gap-2"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <CoinIcon size="md" />
                          <p className="text-lg font-semibold text-success">+{result.coinsAdded} Coins Claimed!</p>
                        </motion.div>
                        <motion.p 
                          className="text-muted-foreground"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          New Balance: {result.newBalance}
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-center space-y-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <Clock className="h-16 w-16 text-warning mx-auto" />
                        <p className="text-lg font-semibold text-foreground">Already Claimed</p>
                        <p className="text-muted-foreground">{result.error}</p>
                        {result.canClaimIn && (
                          <p className="text-sm text-muted-foreground">Come back in {result.canClaimIn}</p>
                        )}
                      </motion.div>
                    )
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={handleClaim}
                          disabled={isClaiming}
                          className="w-full bg-warning hover:bg-warning/90 rounded-xl h-12 glow-sm relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-warning/20 via-chart-5/20 to-warning/20 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                          {isClaiming ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin relative z-10" />
                              <span className="relative z-10">Claiming...</span>
                            </>
                          ) : (
                            <>
                              <CoinIcon size="sm" className="mr-2 relative z-10" />
                              <span className="relative z-10">Claim 25 Coins</span>
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
