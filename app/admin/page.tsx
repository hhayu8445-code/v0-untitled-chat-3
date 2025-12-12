"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, Toaster } from "sonner"
import {
  Users,
  Trophy,
  Plus,
  Trash2,
  Loader2,
  Crown,
  CheckCircle,
  Eye,
  EyeOff,
  Star,
  MessageSquare,
  Edit,
  X,
  Shield,
  Package,
  TrendingUp,
  Ban,
  Megaphone,
  ImageIcon,
  Pencil,
  Check,
} from "lucide-react"
import {
  usePrizes,
  useTestimonials,
  useAnnouncements,
  useBanners,
  useUsers,
  useAssets,
  useForum,
  useAnalytics,
  useSpinStats,
  useAdminCheck,
} from "@/hooks/use-supabase-admin"

export default function AdminPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [activePanel, setActivePanel] = useState<string | null>(null)

  // Direct Supabase hooks - no fetch needed
  const { isAdmin, loading: adminLoading, checkAdmin } = useAdminCheck()
  const { prizes, loading: prizesLoading, fetchPrizes, createPrize, updatePrize, deletePrize } = usePrizes()
  const { stats: spinStats, loading: spinStatsLoading, fetchSpinStats } = useSpinStats()
  const {
    testimonials,
    loading: testimonialsLoading,
    fetchTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
  } = useTestimonials()
  const {
    announcements,
    loading: announcementsLoading,
    fetchAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  } = useAnnouncements()
  const { banners, loading: bannersLoading, fetchBanners, createBanner, updateBanner, deleteBanner } = useBanners()
  const { users, loading: usersLoading, fetchUsers, banUser, unbanUser, updateCoins } = useUsers()
  const { assets, loading: assetsLoading, fetchAssets, approveAsset, rejectAsset, updateAsset } = useAssets()
  const { threads, loading: forumLoading, fetchPendingThreads, approveThread, rejectThread } = useForum()
  const { stats: analyticsStats, loading: analyticsLoading, fetchAnalytics } = useAnalytics()

  // Dialog states
  const [prizeDialog, setPrizeDialog] = useState(false)
  const [editingPrize, setEditingPrize] = useState<any>(null)
  const [prizeForm, setPrizeForm] = useState({
    name: "",
    coins: 10,
    color: "#3b82f6",
    probability: 10,
    is_active: true,
    rarity: "common",
    description: "",
    image_url: "",
  })

  const [testimonialDialog, setTestimonialDialog] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null)
  const [testimonialForm, setTestimonialForm] = useState({
    username: "",
    avatar: "",
    content: "",
    rating: 5,
    server_name: "",
    upvotes_received: 0,
    badge: "",
    image_url: "",
    is_visible: true,
    is_verified: false,
  })

  const [announcementDialog, setAnnouncementDialog] = useState(false)
  const [editingAnnouncement, setEditingAnnouncement] = useState<any>(null)
  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    message: "",
    link: "",
    link_text: "",
    type: "info",
    is_active: true,
    is_dismissible: true,
    bg_color: "",
    text_color: "",
    sort_order: 0,
  })

  const [bannerDialog, setBannerDialog] = useState(false)
  const [editingBanner, setEditingBanner] = useState<any>(null)
  const [bannerForm, setBannerForm] = useState({
    title: "",
    image_url: "",
    link: "",
    position: "hero",
    is_active: true,
    sort_order: 0,
  })

  const [userSearch, setUserSearch] = useState("")
  const [assetFilter, setAssetFilter] = useState("all")
  const [coinsDialog, setCoinsDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [coinsAmount, setCoinsAmount] = useState(0)
  const [coinsAction, setCoinsAction] = useState<"add" | "remove" | "set">("add")

  // Find the handleApproveAsset function and add these:

  // After handleRejectAsset function, add:
  const [editingAsset, setEditingAsset] = useState<any | null>(null)
  const [assetDialogOpen, setAssetDialogOpen] = useState(false)

  const handleUpdateAsset = async () => {
    if (!editingAsset) return
    const { error } = await updateAsset(editingAsset.id, {
      title: editingAsset.title,
      description: editingAsset.description,
      category: editingAsset.category,
      coin_price: editingAsset.coin_price,
      is_featured: editingAsset.is_featured,
      is_verified: editingAsset.is_verified,
      status: editingAsset.status,
    })
    if (error) {
      toast.error(error.message)
    } else {
      toast.success("Asset updated successfully")
      setAssetDialogOpen(false)
      setEditingAsset(null)
    }
  }

  // Check admin on mount
  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      checkAdmin(session.user.id)
    } else if (status === "unauthenticated") {
      router.push("/")
    }
  }, [status, session, checkAdmin, router])

  // Load data when panel opens
  useEffect(() => {
    if (!isAdmin) return

    if (activePanel === "spinWheel" && prizes.length === 0) {
      fetchPrizes()
      fetchSpinStats()
    } else if (activePanel === "testimonials" && testimonials.length === 0) {
      fetchTestimonials(true)
    } else if (activePanel === "announcements" && announcements.length === 0) {
      fetchAnnouncements(true)
    } else if (activePanel === "banners" && banners.length === 0) {
      fetchBanners(true)
    } else if (activePanel === "users" && users.length === 0) {
      fetchUsers()
    } else if (activePanel === "assets" && assets.length === 0) {
      fetchAssets()
    } else if (activePanel === "forum" && threads.length === 0) {
      fetchPendingThreads()
    } else if (activePanel === "analytics" && !analyticsStats) {
      fetchAnalytics()
    }
  }, [
    activePanel,
    isAdmin,
    prizes.length,
    testimonials.length,
    announcements.length,
    banners.length,
    users.length,
    assets.length,
    threads.length,
    analyticsStats,
    fetchPrizes,
    fetchSpinStats,
    fetchTestimonials,
    fetchAnnouncements,
    fetchBanners,
    fetchUsers,
    fetchAssets,
    fetchPendingThreads,
    fetchAnalytics,
  ])

  // Prize handlers
  const handleSavePrize = async () => {
    const { error } = editingPrize ? await updatePrize(editingPrize.id, prizeForm) : await createPrize(prizeForm)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success(editingPrize ? "Prize updated" : "Prize created")
      setPrizeDialog(false)
      setEditingPrize(null)
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
    }
  }

  const handleDeletePrize = async (id: string) => {
    const { error } = await deletePrize(id)
    if (error) toast.error(error.message)
    else toast.success("Prize deleted")
  }

  // Testimonial handlers
  const handleSaveTestimonial = async () => {
    const { error } = editingTestimonial
      ? await updateTestimonial(editingTestimonial.id, testimonialForm)
      : await createTestimonial(testimonialForm)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success(editingTestimonial ? "Testimonial updated" : "Testimonial created")
      setTestimonialDialog(false)
      setEditingTestimonial(null)
      setTestimonialForm({
        username: "",
        avatar: "",
        content: "",
        rating: 5,
        server_name: "",
        upvotes_received: 0,
        badge: "",
        image_url: "",
        is_visible: true,
        is_verified: false,
      })
    }
  }

  const handleDeleteTestimonial = async (id: string) => {
    const { error } = await deleteTestimonial(id)
    if (error) toast.error(error.message)
    else toast.success("Testimonial deleted")
  }

  // Announcement handlers
  const handleSaveAnnouncement = async () => {
    const { error } = editingAnnouncement
      ? await updateAnnouncement(editingAnnouncement.id, announcementForm)
      : await createAnnouncement(announcementForm)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success(editingAnnouncement ? "Announcement updated" : "Announcement created")
      setAnnouncementDialog(false)
      setEditingAnnouncement(null)
      setAnnouncementForm({
        title: "",
        message: "",
        link: "",
        link_text: "",
        type: "info",
        is_active: true,
        is_dismissible: true,
        bg_color: "",
        text_color: "",
        sort_order: 0,
      })
    }
  }

  const handleDeleteAnnouncement = async (id: string) => {
    const { error } = await deleteAnnouncement(id)
    if (error) toast.error(error.message)
    else toast.success("Announcement deleted")
  }

  // Banner handlers
  const handleSaveBanner = async () => {
    const { error } = editingBanner ? await updateBanner(editingBanner.id, bannerForm) : await createBanner(bannerForm)

    if (error) {
      toast.error(error.message)
    } else {
      toast.success(editingBanner ? "Banner updated" : "Banner created")
      setBannerDialog(false)
      setEditingBanner(null)
      setBannerForm({ title: "", image_url: "", link: "", position: "hero", is_active: true, sort_order: 0 })
    }
  }

  const handleDeleteBanner = async (id: string) => {
    const { error } = await deleteBanner(id)
    if (error) toast.error(error.message)
    else toast.success("Banner deleted")
  }

  // User handlers
  const handleBanUser = async (id: string) => {
    const reason = prompt("Ban reason:")
    if (!reason) return
    const { error } = await banUser(id, reason)
    if (error) toast.error(error.message)
    else toast.success("User banned")
  }

  const handleUnbanUser = async (id: string) => {
    const { error } = await unbanUser(id)
    if (error) toast.error(error.message)
    else toast.success("User unbanned")
  }

  const handleUpdateCoins = async () => {
    if (!selectedUser) return
    const { error } = await updateCoins(selectedUser.id, coinsAmount, coinsAction)
    if (error) toast.error(error.message)
    else {
      toast.success("Coins updated")
      setCoinsDialog(false)
      setSelectedUser(null)
    }
  }

  // Asset handlers
  const handleApproveAsset = async (id: string) => {
    const { error } = await approveAsset(id)
    if (error) toast.error(error.message)
    else toast.success("Asset approved")
  }

  const handleRejectAsset = async (id: string) => {
    const { error } = await rejectAsset(id)
    if (error) toast.error(error.message)
    else toast.success("Asset rejected")
  }

  // Forum handlers
  const handleApproveThread = async (id: string) => {
    const { error } = await approveThread(id)
    if (error) toast.error(error.message)
    else toast.success("Thread approved")
  }

  const handleRejectThread = async (id: string) => {
    const reason = prompt("Rejection reason (optional):")
    const { error } = await rejectThread(id, reason || undefined)
    if (error) toast.error(error.message)
    else toast.success("Thread rejected")
  }

  if (status === "loading" || adminLoading) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <Card className="p-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground">You do not have admin privileges.</p>
          </Card>
        </div>
      </div>
    )
  }

  const totalProbability = prizes.reduce((sum, p) => sum + (p.probability || 0), 0)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

            {/* Panel Cards */}
            {!activePanel && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "spinWheel", icon: Trophy, label: "Spin Wheel", color: "text-yellow-500" },
                  { id: "testimonials", icon: Star, label: "Testimonials", color: "text-purple-500" },
                  { id: "announcements", icon: Megaphone, label: "Announcements", color: "text-blue-500" },
                  { id: "banners", icon: ImageIcon, label: "Banners", color: "text-green-500" },
                  { id: "users", icon: Users, label: "Users", color: "text-cyan-500" },
                  { id: "assets", icon: Package, label: "Assets", color: "text-orange-500" },
                  { id: "forum", icon: MessageSquare, label: "Forum", color: "text-pink-500" },
                  { id: "analytics", icon: TrendingUp, label: "Analytics", color: "text-indigo-500" },
                ].map(({ id, icon: Icon, label, color }) => (
                  <Card
                    key={id}
                    className="p-6 cursor-pointer hover:bg-accent/50 transition-colors"
                    onClick={() => setActivePanel(id)}
                  >
                    <Icon className={`h-8 w-8 ${color} mb-2`} />
                    <h3 className="font-semibold">{label}</h3>
                  </Card>
                ))}
              </div>
            )}

            {/* Back Button */}
            {activePanel && (
              <Button variant="ghost" className="mb-4" onClick={() => setActivePanel(null)}>
                <X className="h-4 w-4 mr-2" /> Back
              </Button>
            )}

            {/* Spin Wheel Panel */}
            {activePanel === "spinWheel" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Spin Wheel Management</h2>
                  <Button
                    onClick={() => {
                      setEditingPrize(null)
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
                    <Plus className="h-4 w-4 mr-2" /> Add Prize
                  </Button>
                </div>

                {/* Stats */}
                {spinStats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground">Total Spins</div>
                      <div className="text-2xl font-bold">{spinStats.totalSpins}</div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground">Coins Won</div>
                      <div className="text-2xl font-bold">{spinStats.totalCoinsWon}</div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground">Unique Spinners</div>
                      <div className="text-2xl font-bold">{spinStats.uniqueSpinners}</div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground">Avg/Spin</div>
                      <div className="text-2xl font-bold">{spinStats.avgCoinsPerSpin}</div>
                    </Card>
                  </div>
                )}

                {/* Probability Bar */}
                <Card className="p-4">
                  <div className="flex justify-between mb-2">
                    <span>Total Probability</span>
                    <span className={totalProbability === 100 ? "text-green-500" : "text-red-500"}>
                      {totalProbability}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                    {prizes
                      .filter((p) => p.is_active)
                      .map((prize, i) => (
                        <div
                          key={i}
                          style={{ width: `${prize.probability}%`, backgroundColor: prize.color }}
                          className="h-full"
                        />
                      ))}
                  </div>
                </Card>

                {/* Prizes List */}
                {prizesLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {prizes.map((prize) => (
                      <Card key={prize.id} className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: prize.color }} />
                          <div>
                            <div className="font-semibold">{prize.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {prize.coins} coins - {prize.probability}%
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updatePrize(prize.id, { is_active: !prize.is_active })}
                          >
                            {prize.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingPrize(prize)
                              setPrizeForm(prize)
                              setPrizeDialog(true)
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeletePrize(prize.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Testimonials Panel */}
            {activePanel === "testimonials" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Testimonials Management</h2>
                  <Button
                    onClick={() => {
                      setEditingTestimonial(null)
                      setTestimonialForm({
                        username: "",
                        avatar: "",
                        content: "",
                        rating: 5,
                        server_name: "",
                        upvotes_received: 0,
                        badge: "",
                        image_url: "",
                        is_visible: true,
                        is_verified: false,
                      })
                      setTestimonialDialog(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Testimonial
                  </Button>
                </div>

                {testimonialsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {testimonials.map((t) => (
                      <Card key={t.id} className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3">
                            <img
                              src={t.avatar || "/placeholder.svg?height=40&width=40"}
                              alt=""
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{t.username}</span>
                                {t.is_verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                                {t.badge && (
                                  <span className="text-xs px-2 py-0.5 bg-primary/20 rounded">{t.badge}</span>
                                )}
                              </div>
                              <div className="flex items-center gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-3 w-3 ${i < t.rating ? "fill-current" : ""}`} />
                                ))}
                              </div>
                              <p className="text-sm mt-1 text-muted-foreground">{t.content}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateTestimonial(t.id, { is_visible: !t.is_visible })}
                            >
                              {t.is_visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setEditingTestimonial(t)
                                setTestimonialForm(t)
                                setTestimonialDialog(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteTestimonial(t.id)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Announcements Panel */}
            {activePanel === "announcements" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Announcements Management</h2>
                  <Button
                    onClick={() => {
                      setEditingAnnouncement(null)
                      setAnnouncementForm({
                        title: "",
                        message: "",
                        link: "",
                        link_text: "",
                        type: "info",
                        is_active: true,
                        is_dismissible: true,
                        bg_color: "",
                        text_color: "",
                        sort_order: 0,
                      })
                      setAnnouncementDialog(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Announcement
                  </Button>
                </div>

                {announcementsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {announcements.map((a) => (
                      <Card key={a.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs px-2 py-0.5 rounded ${a.type === "promo" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : a.type === "warning" ? "bg-yellow-500/20 text-yellow-500" : a.type === "error" ? "bg-red-500/20 text-red-500" : a.type === "success" ? "bg-green-500/20 text-green-500" : "bg-blue-500/20 text-blue-500"}`}
                              >
                                {a.type}
                              </span>
                              <span className="font-semibold">{a.title}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{a.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateAnnouncement(a.id, { is_active: !a.is_active })}
                            >
                              {a.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setEditingAnnouncement(a)
                                setAnnouncementForm(a)
                                setAnnouncementDialog(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteAnnouncement(a.id)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Banners Panel */}
            {activePanel === "banners" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Banners Management</h2>
                  <Button
                    onClick={() => {
                      setEditingBanner(null)
                      setBannerForm({
                        title: "",
                        image_url: "",
                        link: "",
                        position: "hero",
                        is_active: true,
                        sort_order: 0,
                      })
                      setBannerDialog(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Banner
                  </Button>
                </div>

                {bannersLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : banners.length === 0 ? (
                  <Card className="p-8 text-center">
                    <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">No banners yet. Add your first banner!</p>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {banners.map((b) => (
                      <Card key={b.id} className="p-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={b.image_url || "/placeholder.svg?height=60&width=120"}
                            alt={b.title}
                            className="h-16 w-32 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="font-semibold">{b.title}</div>
                            <div className="text-sm text-muted-foreground">Position: {b.position}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateBanner(b.id, { is_active: !b.is_active })}
                            >
                              {b.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setEditingBanner(b)
                                setBannerForm(b)
                                setBannerDialog(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteBanner(b.id)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Users Panel */}
            {activePanel === "users" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Users Management</h2>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search users..."
                      value={userSearch}
                      onChange={(e) => setUserSearch(e.target.value)}
                      className="w-64"
                    />
                    <Button onClick={() => fetchUsers(userSearch)}>Search</Button>
                  </div>
                </div>

                {usersLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {users.map((user) => (
                      <Card key={user.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={user.avatar || "/placeholder.svg?height=40&width=40"}
                              alt=""
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{user.username}</span>
                                {user.is_admin && <Shield className="h-4 w-4 text-blue-500" />}
                                {user.membership === "vip" && <Crown className="h-4 w-4 text-yellow-500" />}
                                {user.is_banned && <Ban className="h-4 w-4 text-red-500" />}
                              </div>
                              <div className="text-sm text-muted-foreground">Coins: {user.coins || 0}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedUser(user)
                                setCoinsAmount(0)
                                setCoinsDialog(true)
                              }}
                            >
                              Coins
                            </Button>
                            {user.is_banned ? (
                              <Button variant="outline" size="sm" onClick={() => handleUnbanUser(user.id)}>
                                Unban
                              </Button>
                            ) : (
                              <Button variant="destructive" size="sm" onClick={() => handleBanUser(user.id)}>
                                Ban
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Assets Panel */}
            {activePanel === "assets" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Assets Management</h2>
                  <Select
                    value={assetFilter}
                    onValueChange={(v) => {
                      setAssetFilter(v)
                      fetchAssets(v)
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {assetsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : assets.length === 0 ? (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground">No assets found</p>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {assets.map((asset) => (
                      <Card key={asset.id} className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            {asset.thumbnail && (
                              <img
                                src={asset.thumbnail || "/placeholder.svg"}
                                alt={asset.title}
                                className="w-20 h-20 rounded-lg object-cover"
                              />
                            )}
                            <div className="space-y-1">
                              <div className="font-semibold flex items-center gap-2">
                                {asset.title}
                                {asset.is_featured && (
                                  <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded">
                                    Featured
                                  </span>
                                )}
                                {asset.is_verified && (
                                  <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded">
                                    Verified
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Category: {asset.category} | Status:{" "}
                                <span
                                  className={
                                    asset.status === "approved"
                                      ? "text-green-500"
                                      : asset.status === "rejected"
                                        ? "text-red-500"
                                        : "text-yellow-500"
                                  }
                                >
                                  {asset.status}
                                </span>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Downloads: {asset.downloads || 0} | Price: {asset.coin_price || 0} coins
                              </div>
                              {asset.author && (
                                <div className="text-sm text-muted-foreground">Author: {asset.author.username}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap justify-end">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingAsset(asset)
                                setAssetDialogOpen(true)
                              }}
                            >
                              <Pencil className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            {asset.status === "pending" && (
                              <>
                                <Button size="sm" onClick={() => handleApproveAsset(asset.id)}>
                                  <Check className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleRejectAsset(asset.id)}>
                                  <X className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </>
                            )}
                            {asset.status === "rejected" && (
                              <Button size="sm" onClick={() => handleApproveAsset(asset.id)}>
                                <Check className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                            )}
                            {asset.status === "approved" && (
                              <Button variant="destructive" size="sm" onClick={() => handleRejectAsset(asset.id)}>
                                <X className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Asset Edit Dialog */}
                <Dialog open={assetDialogOpen} onOpenChange={setAssetDialogOpen}>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Edit Asset</DialogTitle>
                    </DialogHeader>
                    {editingAsset && (
                      <div className="space-y-4">
                        <div>
                          <Label>Title</Label>
                          <Input
                            value={editingAsset.title || ""}
                            onChange={(e) => setEditingAsset({ ...editingAsset, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={editingAsset.description || ""}
                            onChange={(e) => setEditingAsset({ ...editingAsset, description: e.target.value })}
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Category</Label>
                            <Select
                              value={editingAsset.category || ""}
                              onValueChange={(v) => setEditingAsset({ ...editingAsset, category: v })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="scripts">Scripts</SelectItem>
                                <SelectItem value="vehicles">Vehicles</SelectItem>
                                <SelectItem value="mlo">MLO</SelectItem>
                                <SelectItem value="clothing">Clothing</SelectItem>
                                <SelectItem value="maps">Maps</SelectItem>
                                <SelectItem value="tools">Tools</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Coin Price</Label>
                            <Input
                              type="number"
                              value={editingAsset.coin_price || 0}
                              onChange={(e) =>
                                setEditingAsset({ ...editingAsset, coin_price: Number.parseInt(e.target.value) || 0 })
                              }
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Status</Label>
                            <Select
                              value={editingAsset.status || "pending"}
                              onValueChange={(v) => setEditingAsset({ ...editingAsset, status: v })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={editingAsset.is_featured || false}
                              onCheckedChange={(c) => setEditingAsset({ ...editingAsset, is_featured: c })}
                            />
                            <Label>Featured</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={editingAsset.is_verified || false}
                              onCheckedChange={(c) => setEditingAsset({ ...editingAsset, is_verified: c })}
                            />
                            <Label>Verified</Label>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2 pt-4">
                          <Button variant="outline" onClick={() => setAssetDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleUpdateAsset}>Save Changes</Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {/* Forum Panel */}
            {activePanel === "forum" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Pending Forum Threads</h2>

                {forumLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : threads.length === 0 ? (
                  <Card className="p-8 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <p className="text-muted-foreground">No pending threads!</p>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {threads.map((thread) => (
                      <Card key={thread.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{thread.title}</div>
                            <div className="text-sm text-muted-foreground">By {thread.author?.username}</div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => handleApproveThread(thread.id)}>
                              Approve
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => handleRejectThread(thread.id)}>
                              Reject
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Analytics Panel */}
            {activePanel === "analytics" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Analytics</h2>

                {analyticsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  analyticsStats && (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground">Total Users</div>
                          <div className="text-2xl font-bold">{analyticsStats.totalUsers}</div>
                        </Card>
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground">Total Assets</div>
                          <div className="text-2xl font-bold">{analyticsStats.totalAssets}</div>
                        </Card>
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground">Total Downloads</div>
                          <div className="text-2xl font-bold">{analyticsStats.totalDownloads}</div>
                        </Card>
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground">Total Coins</div>
                          <div className="text-2xl font-bold">{analyticsStats.totalCoins}</div>
                        </Card>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4">
                          <h3 className="font-semibold mb-4">Top Assets</h3>
                          <div className="space-y-2">
                            {analyticsStats.topAssets?.map((a: any, i: number) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span>{a.title}</span>
                                <span className="text-muted-foreground">{a.downloads} downloads</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                        <Card className="p-4">
                          <h3 className="font-semibold mb-4">Top Users</h3>
                          <div className="space-y-2">
                            {analyticsStats.topUsers?.map((u: any, i: number) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span>{u.username}</span>
                                <span className="text-muted-foreground">{u.coins} coins</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </>
                  )
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Prize Dialog */}
      <Dialog open={prizeDialog} onOpenChange={setPrizeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingPrize ? "Edit Prize" : "Add Prize"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={prizeForm.name} onChange={(e) => setPrizeForm({ ...prizeForm, name: e.target.value })} />
            </div>
            <div>
              <Label>Coins</Label>
              <Input
                type="number"
                value={prizeForm.coins}
                onChange={(e) => setPrizeForm({ ...prizeForm, coins: Number.parseInt(e.target.value) || 0 })}
              />
            </div>
            <div>
              <Label>Color</Label>
              <Input
                type="color"
                value={prizeForm.color}
                onChange={(e) => setPrizeForm({ ...prizeForm, color: e.target.value })}
              />
            </div>
            <div>
              <Label>Probability (%)</Label>
              <Slider
                value={[prizeForm.probability]}
                onValueChange={([v]) => setPrizeForm({ ...prizeForm, probability: v })}
                max={100}
              />
            </div>
            <div>
              <Label>Rarity</Label>
              <Select value={prizeForm.rarity} onValueChange={(v) => setPrizeForm({ ...prizeForm, rarity: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="common">Common</SelectItem>
                  <SelectItem value="uncommon">Uncommon</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                  <SelectItem value="epic">Epic</SelectItem>
                  <SelectItem value="legendary">Legendary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Image URL (optional)</Label>
              <Input
                value={prizeForm.image_url}
                onChange={(e) => setPrizeForm({ ...prizeForm, image_url: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={prizeForm.is_active}
                onCheckedChange={(v) => setPrizeForm({ ...prizeForm, is_active: v })}
              />
              <Label>Active</Label>
            </div>
            <Button className="w-full" onClick={handleSavePrize}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Testimonial Dialog */}
      <Dialog open={testimonialDialog} onOpenChange={setTestimonialDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            <div>
              <Label>Username</Label>
              <Input
                value={testimonialForm.username}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, username: e.target.value })}
              />
            </div>
            <div>
              <Label>Avatar URL</Label>
              <Input
                value={testimonialForm.avatar}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
              />
            </div>
            <div>
              <Label>Content</Label>
              <Textarea
                value={testimonialForm.content}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
              />
            </div>
            <div>
              <Label>Rating</Label>
              <Slider
                value={[testimonialForm.rating]}
                onValueChange={([v]) => setTestimonialForm({ ...testimonialForm, rating: v })}
                min={1}
                max={5}
              />
            </div>
            <div>
              <Label>Server Name</Label>
              <Input
                value={testimonialForm.server_name}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, server_name: e.target.value })}
              />
            </div>
            <div>
              <Label>Upvotes</Label>
              <Input
                type="number"
                value={testimonialForm.upvotes_received}
                onChange={(e) =>
                  setTestimonialForm({ ...testimonialForm, upvotes_received: Number.parseInt(e.target.value) || 0 })
                }
              />
            </div>
            <div>
              <Label>Badge</Label>
              <Select
                value={testimonialForm.badge || "none"}
                onValueChange={(v) => setTestimonialForm({ ...testimonialForm, badge: v === "none" ? "" : v })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="Verified">Verified</SelectItem>
                  <SelectItem value="Pro">Pro</SelectItem>
                  <SelectItem value="VIP">VIP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch
                  checked={testimonialForm.is_visible}
                  onCheckedChange={(v) => setTestimonialForm({ ...testimonialForm, is_visible: v })}
                />
                <Label>Visible</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={testimonialForm.is_verified}
                  onCheckedChange={(v) => setTestimonialForm({ ...testimonialForm, is_verified: v })}
                />
                <Label>Verified</Label>
              </div>
            </div>
            <Button className="w-full" onClick={handleSaveTestimonial}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Announcement Dialog */}
      <Dialog open={announcementDialog} onOpenChange={setAnnouncementDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingAnnouncement ? "Edit Announcement" : "Add Announcement"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            <div>
              <Label>Title</Label>
              <Input
                value={announcementForm.title}
                onChange={(e) => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
              />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                value={announcementForm.message}
                onChange={(e) => setAnnouncementForm({ ...announcementForm, message: e.target.value })}
              />
            </div>
            <div>
              <Label>Type</Label>
              <Select
                value={announcementForm.type}
                onValueChange={(v: any) => setAnnouncementForm({ ...announcementForm, type: v })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="info">Info</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                  <SelectItem value="promo">Promo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Link (optional)</Label>
              <Input
                value={announcementForm.link}
                onChange={(e) => setAnnouncementForm({ ...announcementForm, link: e.target.value })}
              />
            </div>
            <div>
              <Label>Link Text</Label>
              <Input
                value={announcementForm.link_text}
                onChange={(e) => setAnnouncementForm({ ...announcementForm, link_text: e.target.value })}
              />
            </div>
            <div>
              <Label>Sort Order</Label>
              <Input
                type="number"
                value={announcementForm.sort_order}
                onChange={(e) =>
                  setAnnouncementForm({ ...announcementForm, sort_order: Number.parseInt(e.target.value) || 0 })
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch
                  checked={announcementForm.is_active}
                  onCheckedChange={(v) => setAnnouncementForm({ ...announcementForm, is_active: v })}
                />
                <Label>Active</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={announcementForm.is_dismissible}
                  onCheckedChange={(v) => setAnnouncementForm({ ...announcementForm, is_dismissible: v })}
                />
                <Label>Dismissible</Label>
              </div>
            </div>
            <Button className="w-full" onClick={handleSaveAnnouncement}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Banner Dialog */}
      <Dialog open={bannerDialog} onOpenChange={setBannerDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingBanner ? "Edit Banner" : "Add Banner"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={bannerForm.title}
                onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
              />
            </div>
            <div>
              <Label>Image URL</Label>
              <Input
                value={bannerForm.image_url}
                onChange={(e) => setBannerForm({ ...bannerForm, image_url: e.target.value })}
              />
            </div>
            <div>
              <Label>Link (optional)</Label>
              <Input value={bannerForm.link} onChange={(e) => setBannerForm({ ...bannerForm, link: e.target.value })} />
            </div>
            <div>
              <Label>Position</Label>
              <Select value={bannerForm.position} onValueChange={(v) => setBannerForm({ ...bannerForm, position: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hero">Hero</SelectItem>
                  <SelectItem value="sidebar">Sidebar</SelectItem>
                  <SelectItem value="footer">Footer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Sort Order</Label>
              <Input
                type="number"
                value={bannerForm.sort_order}
                onChange={(e) => setBannerForm({ ...bannerForm, sort_order: Number.parseInt(e.target.value) || 0 })}
              />
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={bannerForm.is_active}
                onCheckedChange={(v) => setBannerForm({ ...bannerForm, is_active: v })}
              />
              <Label>Active</Label>
            </div>
            <Button className="w-full" onClick={handleSaveBanner}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Coins Dialog */}
      <Dialog open={coinsDialog} onOpenChange={setCoinsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Coins - {selectedUser?.username}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center text-2xl font-bold">{selectedUser?.coins || 0} coins</div>
            <div>
              <Label>Amount</Label>
              <Input
                type="number"
                value={coinsAmount}
                onChange={(e) => setCoinsAmount(Number.parseInt(e.target.value) || 0)}
              />
            </div>
            <div>
              <Label>Action</Label>
              <Select value={coinsAction} onValueChange={(v: any) => setCoinsAction(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="add">Add</SelectItem>
                  <SelectItem value="remove">Remove</SelectItem>
                  <SelectItem value="set">Set To</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" onClick={handleUpdateCoins}>
              Update Coins
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Toaster position="top-right" />
    </div>
  )
}
