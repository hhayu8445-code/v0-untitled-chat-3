"use client"

import { useState, useEffect, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import { cn } from "@/lib/utils"
import { History, Trophy, Ticket, Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import confetti from "canvas-confetti"

const SPIN_TICKET_ICON = "https://cdn3d.iconscout.com/3d/premium/thumb/ticket-3d-icon-png-download-9964703.png"
const MARIO_COINS_GIF = "https://media.tenor.com/jX0Ytn_JLcIAAAAj/mario-coins.gif"

interface Prize {
  id: string
  name: string
  coins: number
  color: string
  probability: number
  rarity?: string
  image_url?: string
}

interface SpinHistoryItem {
  id: string
  prize_name: string
  coins_won: number
  spin_type: string
  created_at: string
}

const RARITY_COLORS: Record<string, string> = {
  common: "#6b7280",
  uncommon: "#22c55e",
  rare: "#3b82f6",
  epic: "#a855f7",
  legendary: "#eab308",
}

const getRarityFromCoins = (coins: number): string => {
  if (coins >= 500) return "legendary"
  if (coins >= 250) return "epic"
  if (coins >= 100) return "rare"
  if (coins >= 25) return "uncommon"
  return "common"
}

export default function SpinWheelPage() {
  const { user } = useAuth()

  const [prizes, setPrizes] = useState<Prize[]>([])
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState<Prize | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [history, setHistory] = useState<SpinHistoryItem[]>([])
  const [userCoins, setUserCoins] = useState(0)
  const [userTickets, setUserTickets] = useState(0)
  const [loading, setLoading] = useState(true)
  const [canClaimDaily, setCanClaimDaily] = useState(false)
  const [claiming, setClaiming] = useState(false)
  const [streak, setStreak] = useState(0)

  const fetchPrizes = useCallback(async () => {
    try {
      const res = await fetch("/api/spin-wheel/prizes")
      if (res.ok) {
        const data = await res.json()
        setPrizes(data.prizes || [])
      }
    } catch (error) {
      console.error("Error fetching prizes:", error)
    }
  }, [])

  const fetchUserData = useCallback(async () => {
    if (!user) return
    try {
      const [coinsRes, historyRes, ticketsRes] = await Promise.all([
        fetch("/api/user/coins"),
        fetch("/api/spin-wheel/history"),
        fetch("/api/spin-tickets/claim"),
      ])

      if (coinsRes.ok) {
        const data = await coinsRes.json()
        setUserCoins(data.coins || 0)
        setUserTickets(data.tickets || 0)
      }

      if (historyRes.ok) {
        const data = await historyRes.json()
        setHistory(data.history || [])
      }

      if (ticketsRes.ok) {
        const data = await ticketsRes.json()
        setCanClaimDaily(data.canClaim || false)
        setStreak(data.currentStreak || 0)
        // Also update tickets from this response
        if (data.totalTickets !== undefined) {
          setUserTickets(data.totalTickets)
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    fetchPrizes()
  }, [fetchPrizes])

  useEffect(() => {
    if (user) {
      fetchUserData()
    } else {
      setLoading(false)
    }
  }, [user, fetchUserData])

  const handleClaimDaily = async () => {
    if (claiming || !canClaimDaily) return
    setClaiming(true)

    try {
      const res = await fetch("/api/spin-tickets/claim", {
        method: "POST",
      })

      if (res.ok) {
        const data = await res.json()
        setUserTickets(data.totalTickets || userTickets + 1)
        setStreak(data.streak || 0)
        setCanClaimDaily(false)

        // Show celebration
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } })
      }
    } catch (error) {
      console.error("Claim error:", error)
    } finally {
      setClaiming(false)
    }
  }

  const handleSpin = async () => {
    if (spinning || !user || userTickets < 1) return

    setSpinning(true)
    setResult(null)
    setShowResult(false)

    try {
      const res = await fetch("/api/spin-wheel/spin", {
        method: "POST",
      })

      if (!res.ok) {
        const error = await res.json()
        alert(error.error || "Spin failed")
        setSpinning(false)
        return
      }

      const data = await res.json()
      const prizeIndex = prizes.findIndex((p) => p.id === data.prize.id)
      const segmentAngle = 360 / prizes.length
      const targetRotation = 360 * 6 + (360 - prizeIndex * segmentAngle - segmentAngle / 2)

      setRotation(targetRotation)

      setTimeout(() => {
        setResult(data.prize)
        setShowResult(true)
        setSpinning(false)

        // Update from server response
        setUserTickets(data.newTickets)
        setUserCoins(data.newBalance)

        setHistory((prev) => [
          {
            id: Date.now().toString(),
            prize_name: data.prize.name,
            coins_won: data.prize.coins,
            spin_type: "ticket",
            created_at: new Date().toISOString(),
          },
          ...prev.slice(0, 9),
        ])

        if (data.prize.coins >= 100) {
          confetti({ particleCount: 100, spread: 60, origin: { y: 0.6 } })
        }
      }, 4000)
    } catch (error) {
      console.error("Spin error:", error)
      setSpinning(false)
    }
  }

  const activePrizes = prizes.filter((p) => p.coins > 0)
  const segmentAngle = activePrizes.length > 0 ? 360 / activePrizes.length : 45

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-72 transition-all duration-300">
        <Header />

        <div className="p-4 md:p-6 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              LUCKY SPIN
            </h1>
            <p className="text-sm text-muted-foreground">Use tickets to spin and win coins!</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
            {/* Wheel Section */}
            <div className="lg:col-span-2 flex flex-col items-center">
              {/* Modern Wheel */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 blur-xl" />

                {/* Wheel border */}
                <div className="absolute inset-0 rounded-full border-4 border-yellow-500/50 shadow-2xl shadow-yellow-500/20" />

                {/* Wheel */}
                <div
                  className="absolute inset-2 rounded-full overflow-hidden transition-transform ease-out"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transitionDuration: spinning ? "4000ms" : "0ms",
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {activePrizes.map((prize, i) => {
                      const startAngle = i * segmentAngle
                      const endAngle = startAngle + segmentAngle
                      const startRad = (startAngle - 90) * (Math.PI / 180)
                      const endRad = (endAngle - 90) * (Math.PI / 180)

                      const x1 = 50 + 48 * Math.cos(startRad)
                      const y1 = 50 + 48 * Math.sin(startRad)
                      const x2 = 50 + 48 * Math.cos(endRad)
                      const y2 = 50 + 48 * Math.sin(endRad)

                      const largeArc = segmentAngle > 180 ? 1 : 0
                      const pathD = `M 50 50 L ${x1} ${y1} A 48 48 0 ${largeArc} 1 ${x2} ${y2} Z`

                      const midAngle = (startAngle + endAngle) / 2
                      const midRad = (midAngle - 90) * (Math.PI / 180)
                      const textX = 50 + 30 * Math.cos(midRad)
                      const textY = 50 + 30 * Math.sin(midRad)

                      const rarity = prize.rarity || getRarityFromCoins(prize.coins)
                      const color = RARITY_COLORS[rarity]

                      return (
                        <g key={prize.id}>
                          <path d={pathD} fill={color} stroke="#1a1a2e" strokeWidth="0.3" />
                          <text
                            x={textX}
                            y={textY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="6"
                            fontWeight="bold"
                            transform={`rotate(${midAngle}, ${textX}, ${textY})`}
                            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
                          >
                            {prize.coins}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                </div>

                {/* Center coin */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg flex items-center justify-center border-2 border-white/50">
                    <img src={MARIO_COINS_GIF || "/placeholder.svg"} alt="Coin" className="w-10 h-10" loading="lazy" />
                  </div>
                </div>

                {/* Pointer */}
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-10">
                  <div
                    className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rotate-45 transform origin-center shadow-lg"
                    style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}
                  />
                </div>
              </div>

              {/* Spin Controls */}
              <div className="mt-6 w-full max-w-sm space-y-4">
                {!user ? (
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm mb-3">Login to spin!</p>
                    <Button
                      onClick={() => signIn("discord")}
                      className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-xl"
                    >
                      Login with Discord
                    </Button>
                  </div>
                ) : loading ? (
                  <div className="text-center text-muted-foreground text-sm">Loading...</div>
                ) : (
                  <>
                    {/* User Balance - Prominent display */}
                    <div className="flex justify-center gap-4 mb-4">
                      <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
                        <CardContent className="flex items-center gap-3 p-3">
                          <img
                            src={MARIO_COINS_GIF || "/placeholder.svg"}
                            alt="Coins"
                            className="w-8 h-8"
                            loading="lazy"
                          />
                          <div>
                            <p className="text-xs text-muted-foreground">Your Coins</p>
                            <p className="font-bold text-xl text-yellow-400">{userCoins.toLocaleString()}</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
                        <CardContent className="flex items-center gap-3 p-3">
                          <img
                            src={SPIN_TICKET_ICON || "/placeholder.svg"}
                            alt="Tickets"
                            className="w-8 h-8"
                            loading="lazy"
                          />
                          <div>
                            <p className="text-xs text-muted-foreground">Your Tickets</p>
                            <p className="font-bold text-xl text-purple-400">{userTickets}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Button
                      onClick={handleSpin}
                      disabled={spinning || userTickets < 1}
                      className={cn(
                        "w-full py-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3",
                        userTickets >= 1
                          ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/30"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {spinning ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>SPINNING...</span>
                        </>
                      ) : userTickets >= 1 ? (
                        <>
                          <img
                            src={SPIN_TICKET_ICON || "/placeholder.svg"}
                            alt="Ticket"
                            className="w-8 h-8"
                            loading="lazy"
                          />
                          <span>SPIN NOW!</span>
                          <Badge className="bg-white/20 text-white">{userTickets} tickets</Badge>
                        </>
                      ) : (
                        <>
                          <Ticket className="w-6 h-6" />
                          <span>NO TICKETS</span>
                        </>
                      )}
                    </Button>

                    {canClaimDaily && (
                      <Button
                        onClick={handleClaimDaily}
                        disabled={claiming}
                        className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/20"
                      >
                        {claiming ? (
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        ) : (
                          <Ticket className="w-5 h-5 mr-2" />
                        )}
                        CLAIM DAILY TICKET
                        {streak > 0 && <Badge className="ml-2 bg-white/20 text-white">{streak} day streak!</Badge>}
                      </Button>
                    )}

                    {/* No tickets info */}
                    {userTickets < 1 && !canClaimDaily && (
                      <p className="text-xs text-center text-muted-foreground">
                        Come back tomorrow to claim your daily ticket!
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Result Modal */}
              {showResult && result && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                  <Card className="bg-card border-2 border-yellow-500/50 max-w-sm w-full animate-in zoom-in-95">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-4">🎉</div>
                      <h2 className="text-2xl font-bold mb-2">YOU WON!</h2>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <img src={MARIO_COINS_GIF || "/placeholder.svg"} alt="Coins" className="w-10 h-10" />
                        <span className="text-4xl font-black text-yellow-400">+{result.coins}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{result.name}</p>
                      <Button onClick={() => setShowResult(false)} className="w-full">
                        AWESOME!
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Prize Pool & History */}
            <div className="space-y-4">
              {/* Prize Pool */}
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <h3 className="font-bold text-sm">PRIZE POOL</h3>
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto">
                    {activePrizes.map((prize) => {
                      const rarity = prize.rarity || getRarityFromCoins(prize.coins)
                      return (
                        <div
                          key={prize.id}
                          className="flex items-center justify-between p-2 rounded-lg"
                          style={{ backgroundColor: `${RARITY_COLORS[rarity]}20` }}
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={MARIO_COINS_GIF || "/placeholder.svg"}
                              alt="Coins"
                              className="w-4 h-4"
                              loading="lazy"
                            />
                            <span className="font-medium text-xs">{prize.name}</span>
                            {rarity === "legendary" && (
                              <Badge className="bg-yellow-500/20 text-yellow-400 text-[8px] px-1 py-0">JACKPOT</Badge>
                            )}
                          </div>
                          <span className="font-bold text-xs text-yellow-400">+{prize.coins}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* History */}
              {user && history.length > 0 && (
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <History className="w-4 h-4 text-primary" />
                      <h3 className="font-bold text-sm">YOUR HISTORY</h3>
                    </div>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {history.slice(0, 5).map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-1.5 rounded bg-accent/30">
                          <div className="flex items-center gap-2">
                            <img
                              src={MARIO_COINS_GIF || "/placeholder.svg"}
                              alt="Coins"
                              className="w-3 h-3"
                              loading="lazy"
                            />
                            <span className="text-xs">{item.prize_name}</span>
                          </div>
                          <span className="text-xs font-bold text-yellow-400">+{item.coins_won}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* How to get tickets */}
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <CardContent className="p-3">
                  <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-purple-400" />
                    How to Get Tickets
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Claim daily ticket (streak bonus!)</li>
                    <li>• Vote for the server on top.gg</li>
                    <li>• Special events & giveaways</li>
                    <li>• Admin granted bonus tickets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
