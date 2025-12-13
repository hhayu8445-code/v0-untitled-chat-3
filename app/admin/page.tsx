"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea" // Added from updates
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog" // Added from updates
import { Card } from "@/components/ui/card"
import { toast, Toaster } from "sonner" // Added from updates
import {
  Users,
  RefreshCw,
  Trophy,
  Plus,
  Trash2,
  Loader2,
  Crown,
  CheckCircle,
  Eye,
  EyeOff,
  Star,
  Gem,
  MessageSquare,
  Edit,
  X,
  Shield,
  AlertCircle,
  Package,
  TrendingUp,
  Ban,
  DollarSign,
} from "lucide-react" // Added from updates

// Types for Spin Wheel
interface Prize {
  id: string
  name: string
  coins: number
  color: string
  probability: number
  is_active: boolean
  sort_order: number
  rarity?: string
  description?: string
  image_url?: string
  win_count?: number
}

// Updated Prize interface from updates (implicitly handled by the Prize interface)
// interface UpdatedPrize {
//   id: string
//   name: string
//   coins: number
//   probability: number
//   color: string
//   rarity: string
//   is_active: boolean
//   description?: string
//   image_url?: string
// }

interface EligibleUser {
  id: string
  user_id: string
  spins_remaining: number
  reason: string
  expires_at: string | null
  created_at: string
  user?: {
    id: string
    name: string
    username: string
    avatar: string
    discord_id: string
  }
}

interface SpinStats {
  totalSpins: number
  totalCoinsWon: number
  uniqueSpinners: number
  todaySpins: number
  todayCoinsWon: number
  avgCoinsPerSpin: number
  mostWonPrize: string
  activeForceWins?: number
  recentSpins?: any[] // Added from updates
  uniqueUsers?: number // Added from updates
}

// New interface for Testimonials from updates
interface Testimonial {
  id: string
  username: string
  avatar: string | null
  content: string
  rating: number
  server_name: string | null
  upvotes_received: number | null
  is_featured: boolean
  is_verified: boolean
  badge: string | null
  image_url: string | null
  created_at: string
}

interface StatsData {
  // This interface seems to be from the original code but not fully used/updated in the provided updates.
  users: number
  assets: number
  downloads: number
  posts: number
  categories: number
  frameworks: number
}

// Added from updates
interface User {
  id: string
  discordId: string
  username: string
  email: string
  avatar: string
  membership: string
  coins: number
  reputation: number
  downloads: number
  isAdmin: boolean
  isBanned: boolean
  banReason: string | null
  createdAt: string
  lastSeen: string
}

// Added from updates
interface Asset {
  id: string
  title: string
  description: string
  category: string
  status: string
  downloads: number
  coinPrice: number
  author: {
    username: string
    avatar: string
  }
  createdAt: string
}

const RARITY_OPTIONS = [
  { value: "common", label: "Common", color: "text-gray-400", bg: "bg-gray-500/20", icon: Star, chance: "High" },
  {
    value: "uncommon",
    label: "Uncommon",
    color: "text-green-400",
    bg: "bg-green-500/20",
    icon: Star,
    chance: "Medium",
  },
  { value: "rare", label: "Rare", color: "text-blue-400", bg: "bg-blue-500/20", icon: Gem, chance: "Low" },
  { value: "epic", label: "Epic", color: "text-purple-400", bg: "bg-purple-500/20", icon: Gem, chance: "Very Low" },
  {
    value: "legendary",
    label: "Legendary",
    color: "text-yellow-400",
    bg: "bg-yellow-500/20",
    icon: Crown,
    chance: "Ultra Rare",
  },
]

// Expanded COLOR_PRESETS
const COLOR_PRESETS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
]

export default function AdminPage() {
  // Use useSession and manage isAdmin state
  const { data: session, status } = useSession()
  const router = useRouter()
  // Removed isAdmin and loading states, replaced with useAuth hook
  // const { user: authUser, isAdmin: authIsAdmin, isLoading: authIsLoading } = useAuth() // Not used in merged code, using local isAdmin state
  const [loading, setLoading] = useState(true) // Keep original loading for session check
  const [isAdmin, setIsAdmin] = useState(false) // Added from updates

  // Feature Panel States (Consolidated from original and updates)
  const [showSpinWheelPanel, setShowSpinWheelPanel] = useState(false)
  const [showTestimonialsPanel, setShowTestimonialsPanel] = useState(false)
  const [showUsersPanel, setShowUsersPanel] = useState(false)
  const [showAnalyticsPanel, setShowAnalyticsPanel] = useState(false)
  const [showAssetsPanel, setShowAssetsPanel] = useState(false)
  const [activePanel, setActivePanel] = useState<string | null>(null) // Added from updates

  // Tab States (Consolidated from original and updates)
  const [spinWheelTab, setSpinWheelTab] = useState("prizes")
  const [testimonialsTab, setTestimonialsTab] = useState("list")
  const [usersTab, setUsersTab] = useState("list")
  const [analyticsTab, setAnalyticsTab] = useState("overview")
  const [assetsTab, setAssetsTab] = useState("pending")
  const [activeTab, setActiveTab] = useState<string>("prizes") // Added from updates

  // Spin Wheel States
  const [prizes, setPrizes] = useState<Prize[]>([])
  const [eligibleUsers, setEligibleUsers] = useState<EligibleUser[]>([])
  const [spinStats, setSpinStats] = useState<SpinStats | null>(null) // Updated type
  const [spinWheelLoading, setSpinWheelLoading] = useState(false)
  // const [saving, setSaving] = useState(false) // Replaced by a more granular saving state if needed

  // Prize Dialog - Enhanced with more fields
  // const [showPrizeDialog, setShowPrizeDialog] = useState(false) // Replaced by prizeDialog state
  const [editingPrize, setEditingPrize] = useState<Prize | null>(null)
  const [prizeForm, setPrizeForm] = useState({
    // Added from updates
    name: "",
    coins: 10,
    color: "#3b82f6",
    probability: 10,
    is_active: true,
    rarity: "common",
    description: "",
    image_url: "",
  })

  // User Search (for granting spins)
  const [userSearch, setUserSearch] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  // Adjusted grant spins state variables
  const [grantSpins, setGrantSpins] = useState(1)
  const [grantReason, setGrantReason] = useState("")

  // Delete Confirmation
  const [deleteDialog, setDeleteDialog] = useState<{ type: string; id: string; name: string } | null>(null)

  // New state for probability preview (not implemented yet, but added for future use)
  const [showProbabilityPreview, setShowProbabilityPreview] = useState(false)

  // ----- Testimonials States -----
  // const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null) // Replaced by editingItem
  // const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(false) // Replaced by testimonialsLoading
  // const [newTestimonial, setNewTestimonial] = useState({ // Replaced by testimonialForm
  //   username: "",
  //   avatar: "",
  //   content: "",
  //   rating: 5,
  //   server_name: "",
  //   upvotes_received: 0,
  //   is_featured: true,
  //   is_verified: false,
  //   badge: "",
  //   image_url: "",
  // })
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]) // Moved from updates
  const [prizesLoading, setPrizesLoading] = useState(false) // From updates - replaced by prizesLoading
  // const [newPrize, setNewPrize] = useState({ // Replaced by prizeForm
  //   // From updates
  //   name: "",
  //   coins: 0,
  //   probability: 10,
  //   color: "#4ade80",
  //   rarity: "common",
  //   description: "",
  //   image_url: "",
  // })

  const [users, setUsers] = useState<User[]>([]) // Added from updates
  const [usersLoading, setUsersLoading] = useState(false) // Replaced by usersLoading
  const [userPage, setUserPage] = useState(1) // Added from updates
  const [totalUsers, setTotalUsers] = useState(0) // Added from updates

  const [analytics, setAnalytics] = useState<any>(null) // Added from updates
  const [analyticsLoading, setAnalyticsLoading] = useState(false) // Replaced by analyticsLoading

  const [assets, setAssets] = useState<Asset[]>([]) // Added from updates
  const [assetsLoading, setAssetsLoading] = useState(false) // Replaced by assetsLoading
  const [assetFilter, setAssetFilter] = useState("pending") // Added from updates

  const [saving, setSaving] = useState(false) // Added from updates
  const [prizeDialog, setPrizeDialog] = useState(false) // Added from updates
  const [testimonialDialog, setTestimonialDialog] = useState(false) // Added from updates
  const [userDialog, setUserDialog] = useState(false) // Added from updates
  const [editingItem, setEditingItem] = useState<any>(null) // Added from updates

  const [testimonialForm, setTestimonialForm] = useState({
    // Added from updates
    username: "",
    avatar: "",
    content: "",
    rating: 5,
    server_name: "",
    upvotes_received: 0,
    is_featured: true,
    is_verified: false,
    badge: "",
    image_url: "",
  })
  const [testimonialsLoading, setTestimonialsLoading] = useState(false) // Renamed from setIsLoadingTestimonials

  const fetchPrizes = useCallback(async () => {
    setPrizesLoading(true) // Renamed from setIsLoadingPrizes
    try {
      const res = await fetch("/api/admin/spin-wheel/prizes")
      if (res.ok) {
        const data = await res.json()
        setPrizes(data.prizes || data || [])
      } else {
        toast.error("Failed to fetch prizes")
      }
    } catch (error) {
      toast.error("Error fetching prizes")
    } finally {
      setPrizesLoading(false)
    }
  }, [])

  const fetchSpinStats = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/spin-wheel/stats")
      if (res.ok) {
        const data = await res.json()
        setSpinStats(data)
      } else {
        console.error("Failed to fetch spin wheel stats:", res.statusText) // Added error logging
      }
    } catch (error) {
      console.error("Error fetching spin stats:", error) // Changed error logging
    }
  }, [])

  const fetchTestimonials = useCallback(async () => {
    setTestimonialsLoading(true) // Renamed from setIsLoadingTestimonials
    try {
      const res = await fetch("/api/testimonials")
      if (res.ok) {
        const data = await res.json()
        setTestimonials(data || [])
      } else {
        toast.error("Failed to fetch testimonials")
      }
    } catch (error) {
      toast.error("Error fetching testimonials")
    } finally {
      setTestimonialsLoading(false)
    }
  }, [])

  const fetchUsers = useCallback(async () => {
    setUsersLoading(true) // Renamed from setIsLoadingUsers
    try {
      const res = await fetch(`/api/admin/users?search=${userSearch}&page=${userPage}`)
      if (res.ok) {
        const data = await res.json()
        setUsers(data.users || [])
        setTotalUsers(data.total || 0) // Added from updates
      } else {
        toast.error("Failed to fetch users")
      }
    } catch (error) {
      toast.error("Error fetching users")
    } finally {
      setUsersLoading(false)
    }
  }, [userSearch, userPage]) // Added dependencies

  const fetchAssets = useCallback(async () => {
    setAssetsLoading(true) // Renamed from setIsLoadingAssets
    try {
      const res = await fetch(`/api/admin/assets?status=${assetFilter}`)
      if (res.ok) {
        const data = await res.json()
        setAssets(data.assets || [])
      } else {
        toast.error("Failed to fetch assets")
      }
    } catch (error) {
      toast.error("Error fetching assets")
    } finally {
      setAssetsLoading(false)
    }
  }, [assetFilter]) // Added dependency

  const fetchAnalytics = useCallback(async () => {
    setAnalyticsLoading(true) // Renamed from setIsLoadingAnalytics
    try {
      const res = await fetch("/api/admin/analytics")
      if (res.ok) {
        const data = await res.json()
        setAnalytics(data)
      } else {
        toast.error("Failed to fetch analytics")
      }
    } catch (error) {
      toast.error("Error fetching analytics")
    } finally {
      setAnalyticsLoading(false)
    }
  }, [])

  // Combined admin check and initial data fetching
  useEffect(() => {
    const checkAdmin = async () => {
      if (status === "loading") return
      if (!session) {
        router.push("/")
        return
      }

      try {
        const res = await fetch("/api/admin/check")
        if (res.ok) {
          setIsAdmin(true) // This state is now managed by useAuth, so it's redundant. Use local isAdmin state.
          // fetchStats() // Removed, general stats are fetched by other panel loads now
          fetchPrizes() // Fetch prizes immediately
          fetchSpinStats() // Fetch spin stats immediately
          // fetchTestimonials() // Moved to panel load
          // fetchUsers() // Moved to panel load
          // fetchAssets() // Moved to panel load
          // fetchAnalytics() // Moved to panel load
        } else {
          router.push("/dashboard")
        }
      } catch (error) {
        console.error("Admin check failed:", error) // Changed error logging
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }

    checkAdmin()
  }, [session, status, router, fetchPrizes, fetchSpinStats]) // Added fetchSpinStats to dependencies

  // Fetch data when panels open
  useEffect(() => {
    if (activePanel === "testimonials" && testimonials.length === 0) {
      fetchTestimonials()
    }
  }, [activePanel, testimonials.length, fetchTestimonials]) // Dependencies for panel load

  useEffect(() => {
    if (activePanel === "users" && users.length === 0) {
      fetchUsers()
    }
  }, [activePanel, users.length, fetchUsers]) // Dependencies for panel load

  useEffect(() => {
    if (activePanel === "assets" && assets.length === 0) {
      fetchAssets()
    }
  }, [activePanel, assets.length, fetchAssets]) // Dependencies for panel load

  useEffect(() => {
    if (activePanel === "analytics" && !analytics) {
      fetchAnalytics()
    }
  }, [activePanel, analytics, fetchAnalytics]) // Dependencies for panel load

  // Save prize
  const savePrize = async () => {
    setSaving(true)
    try {
      const url = editingItem ? `/api/admin/spin-wheel/prizes/${editingItem.id}` : "/api/admin/spin-wheel/prizes"
      const method = editingItem ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prizeForm),
      })

      if (res.ok) {
        toast.success(editingItem ? "Prize updated" : "Prize created")
        setPrizeDialog(false)
        setEditingItem(null)
        fetchPrizes()
        fetchSpinStats() // Fetch stats after prize changes
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to save prize")
      }
    } catch (error) {
      console.error("Error saving prize:", error) // Changed error logging
      toast.error("Error saving prize")
    } finally {
      setSaving(false)
    }
  }

  // Delete prize
  const deletePrize = async (id: string) => {
    if (!confirm("Delete this prize?")) return

    try {
      const res = await fetch(`/api/admin/spin-wheel/prizes/${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        toast.success("Prize deleted")
        fetchPrizes()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to delete prize")
      }
    } catch (error) {
      console.error("Error deleting prize:", error) // Changed error logging
      toast.error("Error deleting prize")
    }
  }

  // Toggle prize active
  const togglePrizeActive = async (prize: Prize) => {
    try {
      const res = await fetch(`/api/admin/spin-wheel/prizes/${prize.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...prize, is_active: !prize.is_active }),
      })

      if (res.ok) {
        toast.success(`Prize ${!prize.is_active ? "activated" : "deactivated"}`)
        fetchPrizes()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to update prize")
      }
    } catch (error) {
      console.error("Error updating prize:", error) // Changed error logging
      toast.error("Error updating prize")
    }
  }

  // Save testimonial
  const saveTestimonial = async () => {
    setSaving(true)
    try {
      const url = editingItem ? `/api/testimonials/${editingItem.id}` : "/api/testimonials"
      const method = editingItem ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialForm),
      })

      if (res.ok) {
        toast.success(editingItem ? "Testimonial updated" : "Testimonial created")
        setTestimonialDialog(false)
        setEditingItem(null)
        fetchTestimonials()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to save testimonial")
      }
    } catch (error) {
      console.error("Error saving testimonial:", error) // Changed error logging
      toast.error("Error saving testimonial")
    } finally {
      setSaving(false)
    }
  }

  // Delete testimonial
  const deleteTestimonial = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return

    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        toast.success("Testimonial deleted")
        fetchTestimonials()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to delete testimonial")
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error) // Changed error logging
      toast.error("Error deleting testimonial")
    }
  }

  // Toggle testimonial visibility
  const toggleTestimonialVisibility = async (testimonial: Testimonial) => {
    try {
      const res = await fetch(`/api/testimonials/${testimonial.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...testimonial, is_featured: !testimonial.is_featured }),
      })

      if (res.ok) {
        toast.success(`Testimonial ${!testimonial.is_featured ? "shown" : "hidden"}`)
        fetchTestimonials()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to update testimonial")
      }
    } catch (error) {
      console.error("Error updating testimonial:", error) // Changed error logging
      toast.error("Error updating testimonial")
    }
  }

  // Ban user
  const banUser = async (userId: string, reason: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "ban", ban: true, reason }),
      })

      if (res.ok) {
        toast.success("User banned")
        fetchUsers()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to ban user")
      }
    } catch (error) {
      console.error("Error banning user:", error) // Changed error logging
      toast.error("Error banning user")
    }
  }

  // Update user coins
  const updateUserCoins = async (userId: string, amount: number, reason: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "addCoins", amount, reason }),
      })

      if (res.ok) {
        toast.success("Coins updated")
        fetchUsers()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to update coins")
      }
    } catch (error) {
      console.error("Error updating coins:", error) // Changed error logging
      toast.error("Error updating coins")
    }
  }

  // Update asset status
  const updateAssetStatus = async (assetId: string, status: string) => {
    try {
      const res = await fetch("/api/admin/assets", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetId, status }),
      })

      if (res.ok) {
        toast.success("Asset status updated")
        fetchAssets()
      } else {
        const error = await res.json() // Get error message from API
        toast.error(error.error || "Failed to update asset")
      }
    } catch (error) {
      console.error("Error updating asset:", error) // Changed error logging
      toast.error("Error updating asset")
    }
  }

  // Auto-balance probabilities
  const autoBalanceProbabilities = () => {
    const activePrizes = prizes.filter((p) => p.is_active)
    if (activePrizes.length === 0) {
      toast.warning("No active prizes to balance.") // Added warning
      return
    }

    const equalProb = Math.floor(100 / activePrizes.length)
    const remainder = 100 - equalProb * activePrizes.length

    // Update the local state first for immediate feedback
    const updatedPrizes = prizes.map((prize) => {
      if (!prize.is_active) return prize
      const activeIndex = activePrizes.findIndex((p) => p.id === prize.id)
      const newProbability = equalProb + (activeIndex === 0 ? remainder : 0)
      return {
        ...prize,
        probability: newProbability,
      }
    })
    setPrizes(updatedPrizes)

    // Then send updates to the backend
    activePrizes.forEach((prize, i) => {
      const prob = equalProb + (i === 0 ? remainder : 0)
      fetch("/api/admin/spin-wheel/prizes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: prize.id, probability: prob }),
      })
    })

    toast.success("Probabilities auto-balanced!")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        {" "}
        {/* Changed background */}
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!isAdmin) {
    router.push("/") // Redirect if not admin
    return null // Render nothing if redirecting
  }

  const totalProbability = prizes.filter((p) => p.is_active).reduce((sum, p) => sum + p.probability, 0)

  return (
    <div className="flex min-h-screen flex-col bg-black">
      {" "}
      {/* Changed background */}
      <Header />
      <div className="flex flex-1">
        <Sidebar /> {/* Removed frameworks prop */}
        <main className="ml-0 md:ml-72 flex-1 p-6 lg:p-8">
          {" "}
          {/* Adjusted padding and added ml-72 */}
          <Toaster richColors closeButton /> {/* Added closeButton */}
          <div className="mx-auto max-w-7xl space-y-8">
            {" "}
            {/* Changed max-width and spacing */}
            {/* Header */}
            <div className="flex items-center justify-between">
              {" "}
              {/* Added from updates */}
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1> {/* Changed text color */}
                <p className="mt-1 text-sm text-gray-400">Manage your platform</p> {/* Changed text color */}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {" "}
              {/* Added from updates */}
              <Card
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary" // Added styles
                onClick={() => setActivePanel(activePanel === "spin-wheel" ? null : "spin-wheel")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Spin Wheel</h3> {/* Changed text color */}
                    <p className="text-sm text-muted-foreground">Manage prizes & stats</p> {/* Changed text color */}
                  </div>
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                {spinStats && (
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-400">Total Spins</p> {/* Changed text color */}
                      <p className="font-semibold text-white">{spinStats.totalSpins || 0}</p> {/* Changed text color */}
                    </div>
                    <div>
                      <p className="text-gray-400">Coins Won</p> {/* Changed text color */}
                      <p className="font-semibold text-white">{spinStats.totalCoinsWon || 0}</p>{" "}
                      {/* Changed text color */}
                    </div>
                  </div>
                )}
              </Card>
              <Card
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary" // Added styles
                onClick={() => setActivePanel(activePanel === "testimonials" ? null : "testimonials")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Testimonials</h3> {/* Changed text color */}
                    <p className="text-sm text-muted-foreground">Manage reviews</p> {/* Changed text color */}
                  </div>
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-400">Total</p> {/* Changed text color */}
                    <p className="font-semibold text-white">{testimonials.length}</p> {/* Changed text color */}
                  </div>
                  <div>
                    <p className="text-gray-400">Verified</p> {/* Changed text color */}
                    <p className="font-semibold text-white">{testimonials.filter((t) => t.is_verified).length}</p>{" "}
                    {/* Changed text color */}
                  </div>
                </div>
              </Card>
              <Card
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary" // Added styles
                onClick={() => setActivePanel(activePanel === "users" ? null : "users")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Users</h3> {/* Changed text color */}
                    <p className="text-sm text-muted-foreground">Manage members</p> {/* Changed text color */}
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-400">Total</p> {/* Changed text color */}
                    <p className="font-semibold text-white">{totalUsers}</p> {/* Changed text color */}
                  </div>
                  <div>
                    <p className="text-gray-400">Banned</p> {/* Changed text color */}
                    <p className="font-semibold text-white">{users.filter((u) => u.isBanned).length}</p>{" "}
                    {/* Changed text color */}
                  </div>
                </div>
              </Card>
              <Card
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary" // Added styles
                onClick={() => setActivePanel(activePanel === "assets" ? null : "assets")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Assets</h3> {/* Changed text color */}
                    <p className="text-sm text-muted-foreground">Manage content</p> {/* Changed text color */}
                  </div>
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-400">Total</p> {/* Changed text color */}
                    <p className="font-semibold text-white">{assets.length}</p> {/* Changed text color */}
                  </div>
                  <div>
                    <p className="text-gray-400">Pending</p> {/* Changed text color */}
                    <p className="font-semibold text-white">{assets.filter((a) => a.status === "pending").length}</p>{" "}
                    {/* Changed text color */}
                  </div>
                </div>
              </Card>
              <Card
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary" // Added styles
                onClick={() => setActivePanel(activePanel === "analytics" ? null : "analytics")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Analytics</h3> {/* Changed text color */}
                    <p className="text-sm text-muted-foreground">View insights</p> {/* Changed text color */}
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                {analytics && (
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-400">Downloads</p> {/* Changed text color */}
                      <p className="font-semibold text-white">{analytics.overview?.totalDownloads || 0}</p>{" "}
                      {/* Changed text color */}
                    </div>
                    <div>
                      <p className="text-gray-400">Posts</p> {/* Changed text color */}
                      <p className="font-semibold text-white">{analytics.overview?.totalPosts || 0}</p>{" "}
                      {/* Changed text color */}
                    </div>
                  </div>
                )}
              </Card>
            </div>
            {activePanel === "spin-wheel" && (
              <Card className="border-border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Spin Wheel Management</h2> {/* Changed text color */}
                  <Button variant="ghost" size="sm" onClick={() => setActivePanel(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="prizes">Prizes</TabsTrigger>
                    <TabsTrigger value="probability">Win Rates</TabsTrigger>
                    <TabsTrigger value="stats">Statistics</TabsTrigger>
                  </TabsList>

                  <TabsContent value="prizes" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">{prizes.length} prizes configured</p>{" "}
                      {/* Changed text color */}
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setPrizeForm({
                            name: "",
                            coins: 10,
                            color: "#3b82f6",
                            probability: 10,
                            is_active: true,
                            rarity: "common",
                            description: "",
                            image_url: "",
                          })
                          setPrizeDialog(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Prize
                      </Button>
                    </div>

                    {prizesLoading ? ( // Changed from isLoadingPrizes
                      <div className="flex justify-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin" />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {prizes.map((prize) => (
                          <div
                            key={prize.id}
                            className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                          >
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-lg" style={{ backgroundColor: prize.color }} />
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-semibold text-white">{prize.name}</p> {/* Changed text color */}
                                  <span className="text-sm text-yellow-500">{prize.coins} coins</span>
                                  {prize.rarity && (
                                    <span
                                      className={`text-xs ${
                                        RARITY_OPTIONS.find((r) => r.value === prize.rarity)?.color
                                      }`}
                                    >
                                      {prize.rarity}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{prize.probability}% chance</p>{" "}
                                {/* Changed text color */}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" onClick={() => togglePrizeActive(prize)}>
                                {prize.is_active ? (
                                  <Eye className="h-4 w-4" />
                                ) : (
                                  <EyeOff className="h-4 w-4 opacity-50" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setEditingItem(prize)
                                  setPrizeForm({
                                    name: prize.name,
                                    coins: prize.coins,
                                    color: prize.color,
                                    probability: prize.probability,
                                    is_active: prize.is_active,
                                    rarity: prize.rarity || "common",
                                    description: prize.description || "",
                                    image_url: prize.image_url || "",
                                  })
                                  setPrizeDialog(true)
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => deletePrize(prize.id)}>
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="probability" className="space-y-4">
                    <div className="rounded-lg border border-border bg-background p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">Total Probability</p>{" "}
                          {/* Changed text color */}
                          <p className="text-2xl font-bold text-white">{totalProbability}%</p>{" "}
                          {/* Changed text color */}
                        </div>
                        <Button onClick={autoBalanceProbabilities} size="sm">
                          Auto Balance
                        </Button>
                      </div>
                      {totalProbability !== 100 && (
                        <div className="flex items-center gap-2 text-sm text-yellow-500">
                          <AlertCircle className="h-4 w-4" />
                          <span>Probabilities should total 100%</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {prizes
                        .filter((p) => p.is_active)
                        .map((prize) => (
                          <div key={prize.id} className="rounded-lg border border-border bg-background p-4">
                            <div className="mb-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded" style={{ backgroundColor: prize.color }} />
                                <div>
                                  <p className="font-semibold text-white">{prize.name}</p> {/* Changed text color */}
                                  <p className="text-sm text-gray-400">{prize.coins} coins</p>{" "}
                                  {/* Changed text color */}
                                </div>
                              </div>
                              <span className="text-lg font-bold text-white">{prize.probability}%</span>{" "}
                              {/* Changed text color */}
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                              <div
                                className="h-full transition-all"
                                style={{
                                  width: `${prize.probability}%`,
                                  backgroundColor: prize.color,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="stats" className="space-y-4">
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={fetchSpinStats}
                        disabled={false} // This should be a loading state if implemented
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh
                      </Button>
                    </div>

                    {spinStats && (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className="border-border bg-background p-4">
                          <p className="text-sm text-gray-400">Total Spins</p> {/* Changed text color */}
                          <p className="text-2xl font-bold text-white">{spinStats.totalSpins}</p>{" "}
                          {/* Changed text color */}
                        </Card>
                        <Card className="border-border bg-background p-4">
                          <p className="text-sm text-gray-400">Coins Won</p> {/* Changed text color */}
                          <p className="text-2xl font-bold text-white">{spinStats.totalCoinsWon}</p>{" "}
                          {/* Changed text color */}
                        </Card>
                        <Card className="border-border bg-background p-4">
                          <p className="text-sm text-gray-400">Avg Per Spin</p> {/* Changed text color */}
                          <p className="text-2xl font-bold text-white">{spinStats.avgCoinsPerSpin?.toFixed(1) || 0}</p>{" "}
                          {/* Changed text color */}
                        </Card>
                        <Card className="border-border bg-background p-4">
                          <p className="text-sm text-gray-400">Unique Spinners</p> {/* Changed text color */}
                          <p className="text-2xl font-bold text-white">{spinStats.uniqueSpinners}</p>{" "}
                          {/* Changed text color */}
                        </Card>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </Card>
            )}
            {activePanel === "testimonials" && (
              <Card className="border-border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Testimonials Management</h2> {/* Changed text color */}
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => {
                        setEditingItem(null)
                        setTestimonialForm({
                          username: "",
                          avatar: "",
                          content: "",
                          rating: 5,
                          server_name: "",
                          upvotes_received: 0,
                          is_featured: true,
                          is_verified: false,
                          badge: "",
                          image_url: "",
                        })
                        setTestimonialDialog(true)
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Testimonial
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setActivePanel(null)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {testimonialsLoading ? ( // Changed from isLoadingTestimonials
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-2">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex items-start justify-between rounded-lg border border-border bg-background p-4"
                      >
                        <div className="flex gap-4">
                          <img
                            src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                            alt={testimonial.username}
                            className="h-10 w-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-white">{testimonial.username}</p>{" "}
                              {/* Changed text color */}
                              {testimonial.is_verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                              {testimonial.badge && (
                                <span className="rounded bg-primary/20 px-2 py-0.5 text-xs text-primary">
                                  {testimonial.badge}
                                </span>
                              )}
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="mt-1 text-sm text-gray-300">{testimonial.content}</p>{" "}
                            {/* Changed text color */}
                            {testimonial.server_name && (
                              <p className="mt-1 text-xs text-gray-500">Server: {testimonial.server_name}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => toggleTestimonialVisibility(testimonial)}>
                            {testimonial.is_featured ? (
                              <Eye className="h-4 w-4" />
                            ) : (
                              <EyeOff className="h-4 w-4 opacity-50" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingItem(testimonial)
                              setTestimonialForm({
                                username: testimonial.username,
                                avatar: testimonial.avatar || "",
                                content: testimonial.content,
                                rating: testimonial.rating,
                                server_name: testimonial.server_name || "",
                                upvotes_received: testimonial.upvotes_received || 0,
                                is_featured: testimonial.is_featured,
                                is_verified: testimonial.is_verified,
                                badge: testimonial.badge || "",
                                image_url: testimonial.image_url || "",
                              })
                              setTestimonialDialog(true)
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteTestimonial(testimonial.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
            {activePanel === "users" && (
              <Card className="border-border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Users Management</h2> {/* Changed text color */}
                  <Button variant="ghost" size="sm" onClick={() => setActivePanel(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mb-4 flex gap-2">
                  <Input
                    placeholder="Search users..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="max-w-sm"
                  />
                  <Button onClick={fetchUsers}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                  </Button>
                </div>

                {usersLoading ? ( // Changed from isLoadingUsers
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-2">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={user.avatar || "/placeholder.svg?height=40&width=40"}
                            alt={user.username}
                            className="h-10 w-10 rounded-full"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-white">{user.username}</p> {/* Changed text color */}
                              {user.isAdmin && <Shield className="h-4 w-4 text-primary" />}
                              {user.isBanned && <Ban className="h-4 w-4 text-red-500" />}
                            </div>
                            <p className="text-sm text-gray-400">
                              {" "}
                              {/* Changed text color */}
                              {user.coins} coins • {user.membership}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const amountStr = prompt("Enter coins amount (+ or -):")
                              const reason = prompt("Reason:")
                              if (amountStr && reason) {
                                const amount = Number.parseInt(amountStr)
                                if (!isNaN(amount)) {
                                  updateUserCoins(user.discordId, amount, reason)
                                } else {
                                  toast.error("Invalid amount entered.")
                                }
                              }
                            }}
                          >
                            <DollarSign className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const reason = prompt("Ban reason:")
                              if (reason) {
                                banUser(user.discordId, reason)
                              }
                            }}
                          >
                            <Ban className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
            {activePanel === "assets" && (
              <Card className="border-border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Assets Management</h2> {/* Changed text color */}
                  <Button variant="ghost" size="sm" onClick={() => setActivePanel(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <Tabs value={assetFilter} onValueChange={setAssetFilter} className="mb-4">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="approved">Approved</TabsTrigger>
                    <TabsTrigger value="rejected">Rejected</TabsTrigger>
                  </TabsList>
                </Tabs>

                {assetsLoading ? ( // Changed from isLoadingAssets
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-2">
                    {assets.map((asset) => (
                      <div
                        key={asset.id}
                        className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                      >
                        <div>
                          <p className="font-semibold text-white">{asset.title}</p> {/* Changed text color */}
                          <p className="text-sm text-gray-400">
                            {" "}
                            {/* Changed text color */}
                            {asset.category} • {asset.downloads} downloads • {asset.coinPrice} coins
                          </p>
                          <p className="text-xs text-gray-500">by {asset.author?.username || "Unknown"}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => updateAssetStatus(asset.id, "approved")}>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => updateAssetStatus(asset.id, "rejected")}>
                            <X className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
            {activePanel === "analytics" && (
              <Card className="border-border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Analytics Overview</h2> {/* Changed text color */}
                  <Button variant="ghost" size="sm" onClick={() => setActivePanel(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {analyticsLoading ? ( // Changed from isLoadingAnalytics
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin" />
                  </div>
                ) : analytics ? (
                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <Card className="border-border bg-background p-4">
                        <p className="text-sm text-gray-400">Total Users</p> {/* Changed text color */}
                        <p className="text-2xl font-bold text-white">{analytics.overview?.totalUsers || 0}</p>{" "}
                        {/* Changed text color */}
                        <p className="text-xs text-green-500">+{analytics.growth?.users || 0}% this week</p>
                      </Card>
                      <Card className="border-border bg-background p-4">
                        <p className="text-sm text-gray-400">Total Assets</p> {/* Changed text color */}
                        <p className="text-2xl font-bold text-white">{analytics.overview?.totalAssets || 0}</p>{" "}
                        {/* Changed text color */}
                        <p className="text-xs text-green-500">+{analytics.growth?.assets || 0}% this week</p>
                      </Card>
                      <Card className="border-border bg-background p-4">
                        <p className="text-sm text-gray-400">Total Downloads</p> {/* Changed text color */}
                        <p className="text-2xl font-bold text-white">{analytics.overview?.totalDownloads || 0}</p>{" "}
                        {/* Changed text color */}
                        <p className="text-xs text-green-500">+{analytics.growth?.downloads || 0}% this week</p>
                      </Card>
                      <Card className="border-border bg-background p-4">
                        <p className="text-sm text-gray-400">Total Posts</p> {/* Changed text color */}
                        <p className="text-2xl font-bold text-white">{analytics.overview?.totalPosts || 0}</p>{" "}
                        {/* Changed text color */}
                        <p className="text-xs text-green-500">+{analytics.growth?.posts || 0}% this week</p>
                      </Card>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-semibold text-white">Top Assets</h3> {/* Changed text color */}
                      <div className="space-y-2">
                        {analytics.topAssets?.map((asset: any) => (
                          <div
                            key={asset.id}
                            className="flex items-center justify-between rounded-lg border border-border bg-background p-3"
                          >
                            <p className="text-sm text-white">{asset.title}</p> {/* Changed text color */}
                            <p className="text-sm text-gray-400">{asset.downloads} downloads</p>{" "}
                            {/* Changed text color */}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </Card>
            )}
          </div>
          <Dialog open={prizeDialog} onOpenChange={setPrizeDialog}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingItem ? "Edit Prize" : "Add Prize"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Prize Name</Label>
                  <Input
                    value={prizeForm.name}
                    onChange={(e) => setPrizeForm({ ...prizeForm, name: e.target.value })}
                    placeholder="e.g., 10 Coins"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Coins Amount</Label>
                    <Input
                      type="number"
                      value={prizeForm.coins}
                      onChange={(e) => setPrizeForm({ ...prizeForm, coins: Number.parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <Label>Probability (%)</Label>
                    <Input
                      type="number"
                      value={prizeForm.probability}
                      onChange={(e) =>
                        setPrizeForm({ ...prizeForm, probability: Number.parseInt(e.target.value) || 0 })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label>Color</Label>
                  <div className="flex gap-2">
                    {COLOR_PRESETS.map((color) => (
                      <button
                        key={color}
                        className="h-8 w-8 rounded border-2"
                        style={{
                          backgroundColor: color,
                          borderColor: prizeForm.color === color ? "#fff" : "transparent",
                        }}
                        onClick={() => setPrizeForm({ ...prizeForm, color })}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Rarity</Label>
                  <div className="flex gap-2">
                    {RARITY_OPTIONS.map((rarity) => (
                      <button
                        key={rarity.value}
                        className={`rounded-lg border px-4 py-2 text-sm ${
                          prizeForm.rarity === rarity.value
                            ? "border-primary bg-primary/20"
                            : "border-border bg-background"
                        }`}
                        onClick={() => setPrizeForm({ ...prizeForm, rarity: rarity.value })}
                      >
                        {rarity.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Description (Optional)</Label>
                  <Textarea
                    value={prizeForm.description}
                    onChange={(e) => setPrizeForm({ ...prizeForm, description: e.target.value })}
                    placeholder="Prize description..."
                  />
                </div>
                <div>
                  <Label>Image URL (Optional)</Label>
                  <Input
                    value={prizeForm.image_url}
                    onChange={(e) => setPrizeForm({ ...prizeForm, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={prizeForm.is_active}
                    onCheckedChange={(checked) => setPrizeForm({ ...prizeForm, is_active: checked })}
                  />
                  <Label>Active</Label>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setPrizeDialog(false)} disabled={saving}>
                    Cancel
                  </Button>
                  <Button onClick={savePrize} disabled={saving}>
                    {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {editingItem ? "Update" : "Create"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={testimonialDialog} onOpenChange={setTestimonialDialog}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingItem ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Username</Label>
                    <Input
                      value={testimonialForm.username}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, username: e.target.value })}
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <Label>Server Name (Optional)</Label>
                    <Input
                      value={testimonialForm.server_name}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, server_name: e.target.value })}
                      placeholder="Server name"
                    />
                  </div>
                </div>
                <div>
                  <Label>Avatar URL (Optional)</Label>
                  <Input
                    value={testimonialForm.avatar}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label>Content</Label>
                  <Textarea
                    value={testimonialForm.content}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                    placeholder="Testimonial content..."
                    rows={4}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Rating (1-5)</Label>
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      value={testimonialForm.rating}
                      onChange={(e) =>
                        setTestimonialForm({ ...testimonialForm, rating: Number.parseInt(e.target.value) || 5 })
                      }
                    />
                  </div>
                  <div>
                    <Label>Upvotes Received</Label>
                    <Input
                      type="number"
                      value={testimonialForm.upvotes_received}
                      onChange={(e) =>
                        setTestimonialForm({
                          ...testimonialForm,
                          upvotes_received: Number.parseInt(e.target.value) || 0,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label>Badge (Optional)</Label>
                  <Input
                    value={testimonialForm.badge}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, badge: e.target.value })}
                    placeholder="e.g., Verified, Pro, VIP"
                  />
                </div>
                <div>
                  <Label>Image URL (Optional)</Label>
                  <Input
                    value={testimonialForm.image_url}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={testimonialForm.is_featured}
                      onCheckedChange={(checked) => setTestimonialForm({ ...testimonialForm, is_featured: checked })}
                    />
                    <Label>Visible</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={testimonialForm.is_verified}
                      onCheckedChange={(checked) => setTestimonialForm({ ...testimonialForm, is_verified: checked })}
                    />
                    <Label>Verified</Label>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setTestimonialDialog(false)} disabled={saving}>
                    Cancel
                  </Button>
                  <Button onClick={saveTestimonial} disabled={saving}>
                    {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {editingItem ? "Update" : "Create"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  )
}
