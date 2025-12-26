"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users, ImageIcon, Megaphone, MessageSquare, Sparkles, FileText,
  TrendingUp, Coins, Activity, Loader2, Settings, Database, Shield,
  BarChart3, Bell, Zap, Eye, Download, RefreshCw
} from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  totalUsers: number
  totalBanners: number
  activeBanners: number
  totalAnnouncements: number
  activeAnnouncements: number
  forumCategories: number
  totalSpins: number
  totalCoinsWon: number
  pendingAssets: number
  todayUsers: number
  weeklyGrowth: number
  totalRevenue: number
}

const quickLinks = [
  { title: "Users", href: "/admin/users", icon: Users, color: "cyan", desc: "Manage users" },
  { title: "Banners", href: "/admin/banners", icon: ImageIcon, color: "blue", desc: "Banner ads" },
  { title: "Announcements", href: "/admin/announcements", icon: Megaphone, color: "green", desc: "Site news" },
  { title: "Forum", href: "/admin/forum-settings", icon: MessageSquare, color: "purple", desc: "Forum config" },
  { title: "Spin Wheel", href: "/admin/spin-wheel", icon: Sparkles, color: "yellow", desc: "Prize system" },
  { title: "Assets", href: "/admin/assets", icon: FileText, color: "orange", desc: "Content review" },
  { title: "Analytics", href: "/admin/analytics", icon: BarChart3, color: "pink", desc: "Statistics" },
  { title: "Database", href: "/admin/database", icon: Database, color: "indigo", desc: "DB status" },
]

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchStats = async () => {
    try {
      setRefreshing(true)
      const res = await fetch("/api/admin/dashboard-stats")
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Complete platform management</p>
        </div>
        <Button onClick={fetchStats} disabled={refreshing} className="gap-2">
          <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass glass-hover card-hover group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-all group-hover:scale-110">
                <Users className="h-7 w-7 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold">{stats?.totalUsers || 0}</p>
                <p className="text-xs text-cyan-400 mt-1">+{stats?.todayUsers || 0} today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover card-hover group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-all group-hover:scale-110">
                <TrendingUp className="h-7 w-7 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Weekly Growth</p>
                <p className="text-3xl font-bold">{stats?.weeklyGrowth || 0}%</p>
                <p className="text-xs text-green-400 mt-1">↑ Trending up</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover card-hover group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-all group-hover:scale-110">
                <Sparkles className="h-7 w-7 text-yellow-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Total Spins</p>
                <p className="text-3xl font-bold">{stats?.totalSpins || 0}</p>
                <p className="text-xs text-yellow-400 mt-1">Gamification</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover card-hover group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-orange-500/20 group-hover:bg-orange-500/30 transition-all group-hover:scale-110">
                <Coins className="h-7 w-7 text-orange-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Coins Won</p>
                <p className="text-3xl font-bold">{(stats?.totalCoinsWon || 0).toLocaleString()}</p>
                <p className="text-xs text-orange-400 mt-1">Virtual currency</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Card className="glass glass-hover card-hover group h-full cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                  <div className={`p-3 rounded-xl bg-${link.color}-500/20 group-hover:bg-${link.color}-500/30 transition-all group-hover:scale-110`}>
                    <link.icon className={`h-6 w-6 text-${link.color}-400`} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">{link.title}</span>
                    <span className="text-xs text-muted-foreground">{link.desc}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Overview & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass glass-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Content Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover group">
              <div className="flex items-center gap-3">
                <ImageIcon className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Banners</span>
              </div>
              <Badge variant="secondary" className="group-hover:scale-110 transition-transform">
                {stats?.activeBanners || 0} / {stats?.totalBanners || 0}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover group">
              <div className="flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Announcements</span>
              </div>
              <Badge variant="secondary" className="group-hover:scale-110 transition-transform">
                {stats?.activeAnnouncements || 0} / {stats?.totalAnnouncements || 0}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover group">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium">Forum Categories</span>
              </div>
              <Badge variant="secondary" className="group-hover:scale-110 transition-transform">
                {stats?.forumCategories || 0}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover group">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-orange-400" />
                <span className="text-sm font-medium">Pending Assets</span>
              </div>
              <Badge 
                variant={stats?.pendingAssets ? "destructive" : "secondary"}
                className="group-hover:scale-110 transition-transform"
              >
                {stats?.pendingAssets || 0}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass glass-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse-glow" />
                <span className="text-sm font-medium">Database</span>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Online</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse-glow" />
                <span className="text-sm font-medium">API</span>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse-glow" />
                <span className="text-sm font-medium">Storage</span>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl glass-hover">
              <div className="flex items-center gap-3">
                <Eye className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium">Monitoring</span>
              </div>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">Enabled</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="glass glass-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl glass-hover">
              <p className="text-2xl font-bold text-cyan-400">98.5%</p>
              <p className="text-xs text-muted-foreground mt-1">Uptime</p>
            </div>
            <div className="text-center p-4 rounded-xl glass-hover">
              <p className="text-2xl font-bold text-green-400">145ms</p>
              <p className="text-xs text-muted-foreground mt-1">Avg Response</p>
            </div>
            <div className="text-center p-4 rounded-xl glass-hover">
              <p className="text-2xl font-bold text-yellow-400">2.4k</p>
              <p className="text-xs text-muted-foreground mt-1">Daily Visits</p>
            </div>
            <div className="text-center p-4 rounded-xl glass-hover">
              <p className="text-2xl font-bold text-orange-400">4.8/5</p>
              <p className="text-xs text-muted-foreground mt-1">User Rating</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
