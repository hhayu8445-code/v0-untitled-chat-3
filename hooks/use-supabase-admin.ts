"use client"

import { useState, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

// Prizes hooks
export function usePrizes() {
  const [prizes, setPrizes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPrizes = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await supabase
      .from("spin_wheel_prizes")
      .select("*")
      .order("sort_order", { ascending: true })

    if (err) {
      setError(err.message)
    } else {
      setPrizes(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const createPrize = useCallback(async (prize: any) => {
    const { data, error: err } = await supabase.from("spin_wheel_prizes").insert([prize]).select().single()

    if (!err && data) {
      setPrizes((prev) => [...prev, data])
    }
    return { data, error: err }
  }, [])

  const updatePrize = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase.from("spin_wheel_prizes").update(updates).eq("id", id).select().single()

    if (!err && data) {
      setPrizes((prev) => prev.map((p) => (p.id === id ? data : p)))
    }
    return { data, error: err }
  }, [])

  const deletePrize = useCallback(async (id: string) => {
    const { error: err } = await supabase.from("spin_wheel_prizes").delete().eq("id", id)

    if (!err) {
      setPrizes((prev) => prev.filter((p) => p.id !== id))
    }
    return { error: err }
  }, [])

  return { prizes, loading, error, fetchPrizes, createPrize, updatePrize, deletePrize }
}

// Testimonials hooks
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchTestimonials = useCallback(async (showAll = false) => {
    setLoading(true)
    setError(null)
    let query = supabase.from("testimonials").select("*").order("created_at", { ascending: false })

    if (!showAll) {
      query = query.eq("is_visible", true)
    }

    const { data, error: err } = await query

    if (err) {
      setError(err.message)
    } else {
      setTestimonials(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const createTestimonial = useCallback(async (testimonial: any) => {
    const { data, error: err } = await supabase.from("testimonials").insert([testimonial]).select().single()

    if (!err && data) {
      setTestimonials((prev) => [data, ...prev])
    }
    return { data, error: err }
  }, [])

  const updateTestimonial = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase.from("testimonials").update(updates).eq("id", id).select().single()

    if (!err && data) {
      setTestimonials((prev) => prev.map((t) => (t.id === id ? data : t)))
    }
    return { data, error: err }
  }, [])

  const deleteTestimonial = useCallback(async (id: string) => {
    const { error: err } = await supabase.from("testimonials").delete().eq("id", id)

    if (!err) {
      setTestimonials((prev) => prev.filter((t) => t.id !== id))
    }
    return { error: err }
  }, [])

  return { testimonials, loading, error, fetchTestimonials, createTestimonial, updateTestimonial, deleteTestimonial }
}

// Announcements hooks
export function useAnnouncements() {
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAnnouncements = useCallback(async (showAll = false) => {
    setLoading(true)
    setError(null)
    let query = supabase.from("announcements").select("*").order("sort_order", { ascending: true })

    if (!showAll) {
      query = query.eq("is_active", true)
    }

    const { data, error: err } = await query

    if (err) {
      setError(err.message)
    } else {
      setAnnouncements(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const createAnnouncement = useCallback(async (announcement: any) => {
    const { data, error: err } = await supabase.from("announcements").insert([announcement]).select().single()

    if (!err && data) {
      setAnnouncements((prev) => [...prev, data])
    }
    return { data, error: err }
  }, [])

  const updateAnnouncement = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase.from("announcements").update(updates).eq("id", id).select().single()

    if (!err && data) {
      setAnnouncements((prev) => prev.map((a) => (a.id === id ? data : a)))
    }
    return { data, error: err }
  }, [])

  const deleteAnnouncement = useCallback(async (id: string) => {
    const { error: err } = await supabase.from("announcements").delete().eq("id", id)

    if (!err) {
      setAnnouncements((prev) => prev.filter((a) => a.id !== id))
    }
    return { error: err }
  }, [])

  return {
    announcements,
    loading,
    error,
    fetchAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  }
}

// Banners hooks
export function useBanners() {
  const [banners, setBanners] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBanners = useCallback(async (showAll = false) => {
    setLoading(true)
    setError(null)
    let query = supabase.from("banners").select("*").order("sort_order", { ascending: true })

    if (!showAll) {
      query = query.eq("is_active", true)
    }

    const { data, error: err } = await query

    if (err) {
      setError(err.message)
    } else {
      setBanners(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const createBanner = useCallback(async (banner: any) => {
    const { data, error: err } = await supabase.from("banners").insert([banner]).select().single()

    if (!err && data) {
      setBanners((prev) => [...prev, data])
    }
    return { data, error: err }
  }, [])

  const updateBanner = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase.from("banners").update(updates).eq("id", id).select().single()

    if (!err && data) {
      setBanners((prev) => prev.map((b) => (b.id === id ? data : b)))
    }
    return { data, error: err }
  }, [])

  const deleteBanner = useCallback(async (id: string) => {
    const { error: err } = await supabase.from("banners").delete().eq("id", id)

    if (!err) {
      setBanners((prev) => prev.filter((b) => b.id !== id))
    }
    return { error: err }
  }, [])

  return { banners, loading, error, fetchBanners, createBanner, updateBanner, deleteBanner }
}

// Users hooks
export function useUsers() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = useCallback(async (search?: string, limit = 50) => {
    setLoading(true)
    setError(null)
    let query = supabase.from("users").select("*").order("created_at", { ascending: false }).limit(limit)

    if (search) {
      query = query.or(`username.ilike.%${search}%,discord_id.ilike.%${search}%`)
    }

    const { data, error: err } = await query

    if (err) {
      setError(err.message)
    } else {
      setUsers(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const updateUser = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase.from("users").update(updates).eq("id", id).select().single()

    if (!err && data) {
      setUsers((prev) => prev.map((u) => (u.id === id ? data : u)))
    }
    return { data, error: err }
  }, [])

  const banUser = useCallback(
    async (id: string, reason: string) => {
      return updateUser(id, { is_banned: true, ban_reason: reason })
    },
    [updateUser],
  )

  const unbanUser = useCallback(
    async (id: string) => {
      return updateUser(id, { is_banned: false, ban_reason: null })
    },
    [updateUser],
  )

  const updateCoins = useCallback(
    async (id: string, amount: number, action: "add" | "remove" | "set") => {
      const user = users.find((u) => u.id === id)
      if (!user) return { error: { message: "User not found" } }

      let newCoins = user.coins || 0
      if (action === "add") newCoins += amount
      else if (action === "remove") newCoins = Math.max(0, newCoins - amount)
      else newCoins = amount

      return updateUser(id, { coins: newCoins })
    },
    [users, updateUser],
  )

  return { users, loading, error, fetchUsers, updateUser, banUser, unbanUser, updateCoins }
}

// Assets hooks
export function useAssets() {
  const [assets, setAssets] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAssets = useCallback(async (status?: string, limit = 50) => {
    setLoading(true)
    setError(null)
    let query = supabase
      .from("assets")
      .select("*, author:users!author_id(username, avatar)")
      .order("created_at", { ascending: false })
      .limit(limit)

    if (status && status !== "all") {
      query = query.eq("status", status)
    }

    const { data, error: err } = await query

    if (err) {
      setError(err.message)
    } else {
      setAssets(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const updateAsset = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase
      .from("assets")
      .update(updates)
      .eq("id", id)
      .select("*, author:users!author_id(username, avatar)")
      .single()

    if (!err && data) {
      setAssets((prev) => prev.map((a) => (a.id === id ? data : a)))
    }
    return { data, error: err }
  }, [])

  const approveAsset = useCallback(
    async (id: string) => {
      return updateAsset(id, { status: "approved" })
    },
    [updateAsset],
  )

  const rejectAsset = useCallback(
    async (id: string) => {
      return updateAsset(id, { status: "rejected" })
    },
    [updateAsset],
  )

  const deleteAsset = useCallback(async (id: string) => {
    const { error: err } = await supabase.from("assets").delete().eq("id", id)

    if (!err) {
      setAssets((prev) => prev.filter((a) => a.id !== id))
    }
    return { error: err }
  }, [])

  return { assets, loading, error, fetchAssets, updateAsset, approveAsset, rejectAsset, deleteAsset }
}

// Forum hooks
export function useForum() {
  const [threads, setThreads] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPendingThreads = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await supabase
      .from("forum_threads")
      .select(
        "*, author:users!author_id(username, avatar, membership), category:forum_categories!category_id(name, color)",
      )
      .eq("status", "pending")
      .order("created_at", { ascending: false })

    if (err) {
      setError(err.message)
    } else {
      setThreads(data || [])
    }
    setLoading(false)
    return { data, error: err }
  }, [])

  const updateThread = useCallback(async (id: string, updates: any) => {
    const { data, error: err } = await supabase.from("forum_threads").update(updates).eq("id", id).select().single()

    if (!err) {
      setThreads((prev) => prev.filter((t) => t.id !== id))
    }
    return { data, error: err }
  }, [])

  const approveThread = useCallback(
    async (id: string) => {
      return updateThread(id, { status: "approved" })
    },
    [updateThread],
  )

  const rejectThread = useCallback(
    async (id: string, reason?: string) => {
      return updateThread(id, { status: "rejected", rejection_reason: reason })
    },
    [updateThread],
  )

  return { threads, loading, error, fetchPendingThreads, updateThread, approveThread, rejectThread }
}

// Analytics hooks
export function useAnalytics() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAnalytics = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const [usersRes, assetsRes, downloadsRes, threadsRes, coinsRes] = await Promise.all([
        supabase.from("users").select("id", { count: "exact", head: true }),
        supabase.from("assets").select("id", { count: "exact", head: true }),
        supabase.from("downloads").select("id", { count: "exact", head: true }),
        supabase.from("forum_threads").select("id", { count: "exact", head: true }),
        supabase.from("users").select("coins"),
      ])

      const totalCoins = coinsRes.data?.reduce((sum, u) => sum + (u.coins || 0), 0) || 0

      // Get top assets
      const { data: topAssets } = await supabase
        .from("assets")
        .select("title, downloads")
        .order("downloads", { ascending: false })
        .limit(5)

      // Get top users
      const { data: topUsers } = await supabase
        .from("users")
        .select("username, avatar, coins, reputation")
        .order("coins", { ascending: false })
        .limit(5)

      setStats({
        totalUsers: usersRes.count || 0,
        totalAssets: assetsRes.count || 0,
        totalDownloads: downloadsRes.count || 0,
        totalPosts: threadsRes.count || 0,
        totalCoins,
        topAssets: topAssets || [],
        topUsers: topUsers || [],
      })
    } catch (err: any) {
      setError(err.message)
    }

    setLoading(false)
  }, [])

  return { stats, loading, error, fetchAnalytics }
}

// Spin Stats hooks
export function useSpinStats() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSpinStats = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const { data: historyData } = await supabase
        .from("spin_history")
        .select("*")
        .order("created_at", { ascending: false })

      const { data: recentSpins } = await supabase
        .from("spin_history")
        .select("*, user:users!user_id(username, avatar)")
        .order("created_at", { ascending: false })
        .limit(50)

      const today = new Date().toISOString().split("T")[0]
      const todaySpins = historyData?.filter((s) => s.created_at.startsWith(today)) || []

      const totalCoinsWon = historyData?.reduce((sum, s) => sum + (s.coins_won || 0), 0) || 0
      const todayCoinsWon = todaySpins.reduce((sum, s) => sum + (s.coins_won || 0), 0)
      const uniqueSpinners = new Set(historyData?.map((s) => s.user_id) || []).size

      // Most won prize
      const prizeCounts: Record<string, number> = {}
      historyData?.forEach((s) => {
        if (s.prize_name) {
          prizeCounts[s.prize_name] = (prizeCounts[s.prize_name] || 0) + 1
        }
      })
      const mostWonPrize = Object.entries(prizeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A"

      setStats({
        totalSpins: historyData?.length || 0,
        totalCoinsWon,
        uniqueSpinners,
        todaySpins: todaySpins.length,
        todayCoinsWon,
        avgCoinsPerSpin: historyData?.length ? Math.round(totalCoinsWon / historyData.length) : 0,
        mostWonPrize,
        recentSpins: recentSpins || [],
      })
    } catch (err: any) {
      setError(err.message)
    }

    setLoading(false)
  }, [])

  return { stats, loading, error, fetchSpinStats }
}

// Admin check hook
export function useAdminCheck() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  const checkAdmin = useCallback(async (discordId: string) => {
    setLoading(true)

    const { data } = await supabase
      .from("users")
      .select("is_admin, role, membership")
      .eq("discord_id", discordId)
      .single()

    const admin =
      data?.is_admin === true || data?.role === "admin" || data?.role === "owner" || data?.membership === "admin"

    setIsAdmin(admin)
    setLoading(false)
    return admin
  }, [])

  return { isAdmin, loading, checkAdmin }
}
