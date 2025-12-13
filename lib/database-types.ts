export type UserRole = "user" | "moderator" | "admin" | "superadmin"

export type AssetCategory = "scripts" | "mlo" | "vehicles" | "eup" | "weapons" | "props" | "other"

export type Framework = "qbcore" | "esx" | "qbox" | "standalone" | "other"

export type AssetStatus = "pending" | "approved" | "rejected" | "archived"

export interface User {
  id: string
  discord_id: string
  username: string
  discriminator?: string
  avatar?: string
  email?: string
  role: UserRole
  coins: number
  is_banned: boolean
  ban_reason?: string
  banned_until?: string
  created_at: string
  updated_at: string
  last_seen: string
}

export interface Asset {
  id: string
  title: string
  description?: string
  category: AssetCategory
  framework?: Framework
  author_id: string
  price: number
  is_free: boolean
  download_url?: string
  image_url?: string
  preview_images?: string[]
  tags?: string[]
  version: string
  downloads: number
  likes: number
  views: number
  file_size?: string
  requirements?: string[]
  status: AssetStatus
  featured: boolean
  trending: boolean
  created_at: string
  updated_at: string
}

export interface Download {
  id: string
  asset_id: string
  user_id: string
  coins_spent: number
  created_at: string
}

export interface Like {
  id: string
  user_id: string
  target_id: string
  target_type: "asset" | "thread" | "reply"
  created_at: string
}

export interface ForumCategory {
  id: string
  name: string
  description?: string
  icon?: string
  color?: string
  sort_order: number
  created_at: string
}

export interface ForumThread {
  id: string
  category_id: string
  author_id: string
  title: string
  content: string
  is_pinned: boolean
  is_locked: boolean
  is_deleted: boolean
  status: "pending" | "approved" | "rejected"
  views: number
  likes: number
  reply_count: number
  last_reply_at?: string
  last_reply_by?: string
  created_at: string
  updated_at: string
}

export interface ForumReply {
  id: string
  thread_id: string
  author_id: string
  content: string
  is_deleted: boolean
  likes: number
  created_at: string
  updated_at: string
}

export interface Activity {
  id: string
  user_id: string
  username: string
  avatar?: string
  action: string
  target?: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  is_read: boolean
  link?: string
  created_at: string
}

export interface CoinTransaction {
  id: string
  user_id: string
  amount: number
  type: "earn" | "spend" | "admin_add" | "admin_remove" | "daily_reward" | "spin_win"
  description?: string
  created_at: string
}

export interface SpinWheelPrize {
  id: string
  name: string
  type: "coins" | "item" | "custom"
  value?: number
  description?: string
  color: string
  probability: number
  is_active: boolean
  sort_order: number
  created_at: string
}

export interface SpinHistory {
  id: string
  user_id: string
  prize_id?: string
  prize_name: string
  coins_won: number
  created_at: string
}

export interface Testimonial {
  id: string
  user_id: string
  username: string
  avatar?: string
  content: string
  rating: number
  is_featured: boolean
  is_approved: boolean
  created_at: string
}
