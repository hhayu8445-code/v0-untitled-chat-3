// Database Schema Types - Auto-generated from Supabase
// This file provides TypeScript types for all database tables

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          discord_id: string
          username: string
          discriminator: string | null
          avatar: string | null
          email: string | null
          role: "user" | "moderator" | "admin" | "superadmin"
          coins: number
          is_banned: boolean
          ban_reason: string | null
          banned_until: string | null
          created_at: string
          updated_at: string
          last_seen: string
        }
        Insert: {
          id?: string
          discord_id: string
          username: string
          discriminator?: string | null
          avatar?: string | null
          email?: string | null
          role?: "user" | "moderator" | "admin" | "superadmin"
          coins?: number
          is_banned?: boolean
          ban_reason?: string | null
          banned_until?: string | null
          created_at?: string
          updated_at?: string
          last_seen?: string
        }
        Update: {
          id?: string
          discord_id?: string
          username?: string
          discriminator?: string | null
          avatar?: string | null
          email?: string | null
          role?: "user" | "moderator" | "admin" | "superadmin"
          coins?: number
          is_banned?: boolean
          ban_reason?: string | null
          banned_until?: string | null
          created_at?: string
          updated_at?: string
          last_seen?: string
        }
      }
      assets: {
        Row: {
          id: string
          title: string
          description: string | null
          category: "scripts" | "mlo" | "vehicles" | "eup" | "weapons" | "props" | "other"
          framework: "qbcore" | "esx" | "qbox" | "standalone" | "other" | null
          author_id: string | null
          price: number
          is_free: boolean
          download_url: string | null
          image_url: string | null
          preview_images: string[] | null
          tags: string[] | null
          version: string
          downloads: number
          likes: number
          views: number
          file_size: string | null
          requirements: string[] | null
          status: "pending" | "approved" | "rejected" | "archived"
          featured: boolean
          trending: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          category: "scripts" | "mlo" | "vehicles" | "eup" | "weapons" | "props" | "other"
          framework?: "qbcore" | "esx" | "qbox" | "standalone" | "other" | null
          author_id?: string | null
          price?: number
          is_free?: boolean
          download_url?: string | null
          image_url?: string | null
          preview_images?: string[] | null
          tags?: string[] | null
          version?: string
          downloads?: number
          likes?: number
          views?: number
          file_size?: string | null
          requirements?: string[] | null
          status?: "pending" | "approved" | "rejected" | "archived"
          featured?: boolean
          trending?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          category?: "scripts" | "mlo" | "vehicles" | "eup" | "weapons" | "props" | "other"
          framework?: "qbcore" | "esx" | "qbox" | "standalone" | "other" | null
          author_id?: string | null
          price?: number
          is_free?: boolean
          download_url?: string | null
          image_url?: string | null
          preview_images?: string[] | null
          tags?: string[] | null
          version?: string
          downloads?: number
          likes?: number
          views?: number
          file_size?: string | null
          requirements?: string[] | null
          status?: "pending" | "approved" | "rejected" | "archived"
          featured?: boolean
          trending?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      forum_categories: {
        Row: {
          id: string
          name: string
          description: string | null
          icon: string | null
          color: string | null
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          icon?: string | null
          color?: string | null
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          icon?: string | null
          color?: string | null
          sort_order?: number
          created_at?: string
        }
      }
      spin_wheel_prizes: {
        Row: {
          id: string
          name: string
          type: "coins" | "item" | "custom"
          value: number | null
          description: string | null
          color: string
          probability: number
          is_active: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          type: "coins" | "item" | "custom"
          value?: number | null
          description?: string | null
          color?: string
          probability?: number
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: "coins" | "item" | "custom"
          value?: number | null
          description?: string | null
          color?: string
          probability?: number
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string | null
          title: string
          message: string
          type: "info" | "success" | "warning" | "error"
          is_read: boolean
          link: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          title: string
          message: string
          type?: "info" | "success" | "warning" | "error"
          is_read?: boolean
          link?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          title?: string
          message?: string
          type?: "info" | "success" | "warning" | "error"
          is_read?: boolean
          link?: string | null
          created_at?: string
        }
      }
      coin_transactions: {
        Row: {
          id: string
          user_id: string | null
          amount: number
          type: "earn" | "spend" | "admin_add" | "admin_remove" | "daily_reward" | "spin_win"
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          amount: number
          type: "earn" | "spend" | "admin_add" | "admin_remove" | "daily_reward" | "spin_win"
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          amount?: number
          type?: "earn" | "spend" | "admin_add" | "admin_remove" | "daily_reward" | "spin_win"
          description?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
