"use client"

import { useEffect } from "react"
import { useStatsStore } from "@/lib/store"
import { Package, Download, Users, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function StatsSection() {
  const { stats, setStats } = useStatsStore()

  useEffect(() => {
    let mounted = true
    
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        
        if (mounted) {
          setStats({
            totalMembers: data.users || 0,
            totalAssets: data.assets || 0,
            totalDownloads: data.downloads || 0,
            totalPosts: data.posts || 0,
            onlineUsers: Math.floor((data.users || 0) * 0.05)
          })
        }
      } catch (error) {
        console.error('Stats fetch error:', error)
      }
    }
    
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    
    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [setStats])

  const statItems = [
    { icon: Package, label: "Total Assets", value: stats.totalAssets, color: "primary", growth: "+12%" },
    { icon: Download, label: "Downloads", value: stats.totalDownloads, color: "success", growth: "+24%" },
    { icon: Users, label: "Members", value: stats.totalMembers, color: "accent", growth: "+8%" },
    { icon: Zap, label: "Online Now", value: stats.onlineUsers, color: "warning", isLive: true }
  ]

  return (
    <motion.div 
      className="glass rounded-2xl p-6 border border-primary/10"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <TrendingUp className="h-5 w-5 text-primary" />
        </motion.div>
        <h3 className="font-semibold text-foreground">Platform Stats</h3>
      </div>
      
      <div className="space-y-4">
        {statItems.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center justify-between group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className={`h-10 w-10 rounded-xl bg-${stat.color}/20 flex items-center justify-center relative`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className={`h-5 w-5 text-${stat.color}`} />
                {stat.isLive && (
                  <motion.div 
                    className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full status-online"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <motion.p 
                  className="font-bold text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  {stat.value.toLocaleString()}
                </motion.p>
              </div>
            </div>
            {stat.isLive ? (
              <motion.span 
                className="text-[10px] text-warning font-medium px-2 py-0.5 bg-warning/20 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LIVE
              </motion.span>
            ) : (
              <span className="text-xs text-success font-medium">{stat.growth}</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
