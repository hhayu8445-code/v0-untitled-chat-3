"use client"

import { useEffect, useState } from "react"
import { Download, MessageSquare, Heart, UserPlus, Star, Clock } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface Activity {
  id: string
  type: string
  action: string
  createdAt: string
  user: {
    username: string
    avatar: string | null
  }
}

const iconMap: Record<string, { icon: typeof Download; color: string; bg: string }> = {
  download: { icon: Download, color: "text-primary", bg: "bg-primary/20" },
  post: { icon: MessageSquare, color: "text-success", bg: "bg-success/20" },
  like: { icon: Heart, color: "text-chart-5", bg: "bg-chart-5/20" },
  join: { icon: UserPlus, color: "text-accent", bg: "bg-accent/20" },
  review: { icon: Star, color: "text-warning", bg: "bg-warning/20" },
}

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchActivity() {
      try {
        const res = await fetch("/api/activity")
        if (res.ok) {
          const data = await res.json()
          setActivities(data)
        }
      } catch (error) {
        console.error("Failed to fetch activity:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchActivity()
    const interval = setInterval(fetchActivity, 15000)
    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <motion.div 
        className="glass rounded-2xl p-6 border border-primary/10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          Activity Feed
        </h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="h-8 w-8 rounded-lg bg-secondary/80 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-secondary/80 rounded animate-pulse" />
                <div className="h-3 w-1/4 bg-secondary/80 rounded animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="glass rounded-2xl p-6 border border-primary/10"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-semibold text-foreground">Activity Feed</h3>
        <motion.span 
          className="ml-auto h-2 w-2 rounded-full status-online"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {activities.length === 0 ? (
            <motion.p 
              className="text-sm text-muted-foreground text-center py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No recent activity
            </motion.p>
          ) : (
            activities.map((activity, i) => {
              const { icon: Icon, color, bg } = iconMap[activity.type] || iconMap.download
              return (
                <motion.div 
                  key={activity.id} 
                  className="flex items-start gap-3 text-sm group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  layout
                >
                  <motion.div 
                    className={`h-8 w-8 rounded-lg ${bg} flex items-center justify-center shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`h-4 w-4 ${color}`} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground">
                      <span className="font-medium">{activity.user.username}</span>
                      <span className="text-muted-foreground"> {activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{new Date(activity.createdAt).toLocaleTimeString()}</p>
                  </div>
                </motion.div>
              )
            })
          )}
        </AnimatePresence>
      </div>
      
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/forum"
          className="block w-full mt-4 text-sm text-primary hover:text-primary/80 transition-colors text-center py-2 glass rounded-lg"
        >
          View all activity
        </Link>
      </motion.div>
    </motion.div>
  )
}
