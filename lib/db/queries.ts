import sql from './postgres'

// ============================================
// FORUM QUERIES
// ============================================

export const forumQueries = {
  // Categories
  getCategories: async () => {
    return await sql`
      SELECT * FROM forum_categories 
      WHERE is_active = true 
      ORDER BY sort_order ASC
    `
  },

  getCategoryById: async (id: string) => {
    return await sql`
      SELECT * FROM forum_categories WHERE id = ${id}
    `
  },

  // Threads
  getThreads: async (categoryId?: string, limit = 20, offset = 0) => {
    if (categoryId) {
      return await sql`
        SELECT 
          t.*,
          u.id as user_id,
          u.username as author_username,
          u.avatar as author_avatar,
          u.membership as author_membership
        FROM forum_threads t
        LEFT JOIN users u ON t.author_id::text = u.id::text
        WHERE t.category_id = ${categoryId} 
        AND t.status = 'approved' 
        AND t.is_deleted = false
        ORDER BY t.is_pinned DESC, t.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    }
    return await sql`
      SELECT 
        t.*,
        u.id as user_id,
        u.username as author_username,
        u.avatar as author_avatar,
        u.membership as author_membership
      FROM forum_threads t
      LEFT JOIN users u ON t.author_id::text = u.id::text
      WHERE t.status = 'approved' 
      AND t.is_deleted = false
      ORDER BY t.is_pinned DESC, t.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `
  },

  getThreadById: async (id: string) => {
    return await sql`
      SELECT * FROM forum_threads WHERE id = ${id}
    `
  },

  createThread: async (data: {
    title: string
    content: string
    category_id: string
    author_id: string
    images?: string[]
  }) => {
    return await sql`
      INSERT INTO forum_threads (title, content, category_id, author_id, images)
      VALUES (${data.title}, ${data.content}, ${data.category_id}, ${data.author_id}, ${data.images || []})
      RETURNING *
    `
  },

  updateThread: async (id: string, data: Partial<{
    title: string
    content: string
    status: string
    is_pinned: boolean
    is_locked: boolean
  }>) => {
    const updates = Object.entries(data).map(([key, value]) => sql`${sql(key)} = ${value}`)
    return await sql`
      UPDATE forum_threads 
      SET ${sql(updates)}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `
  },

  // Replies
  getReplies: async (threadId: string, limit = 50, offset = 0) => {
    return await sql`
      SELECT * FROM forum_replies 
      WHERE thread_id = ${threadId} 
      AND is_deleted = false
      ORDER BY created_at ASC
      LIMIT ${limit} OFFSET ${offset}
    `
  },

  createReply: async (data: {
    thread_id: string
    author_id: string
    content: string
  }) => {
    return await sql`
      INSERT INTO forum_replies (thread_id, author_id, content)
      VALUES (${data.thread_id}, ${data.author_id}, ${data.content})
      RETURNING *
    `
  },
}

// ============================================
// COINS QUERIES
// ============================================

export const coinsQueries = {
  getUserBalance: async (userId: string) => {
    const result = await sql`SELECT get_user_balance(${userId}) as balance`
    return result[0]?.balance || 0
  },

  getTransactions: async (userId: string, limit = 50, offset = 0) => {
    return await sql`
      SELECT * FROM coin_transactions 
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `
  },

  addCoins: async (data: {
    user_id: string
    amount: number
    type: string
    description?: string
    reference_id?: string
  }) => {
    const result = await sql`
      SELECT add_coins(
        ${data.user_id}, 
        ${data.amount}, 
        ${data.type}, 
        ${data.description || null}, 
        ${data.reference_id || null}
      ) as result
    `
    return result[0]?.result
  },

  canClaimDaily: async (userId: string, claimType: string) => {
    const result = await sql`
      SELECT can_claim_daily(${userId}, ${claimType}) as can_claim
    `
    return result[0]?.can_claim || false
  },

  claimDailyReward: async (userId: string, claimType: string, amount = 100) => {
    const result = await sql`
      SELECT claim_daily_reward(${userId}, ${claimType}, ${amount}) as result
    `
    return result[0]?.result
  },
}

// ============================================
// SPIN WHEEL QUERIES
// ============================================

export const spinWheelQueries = {
  getPrizes: async () => {
    return await sql`
      SELECT * FROM spin_wheel_prizes 
      WHERE is_active = true 
      ORDER BY sort_order ASC
    `
  },

  getHistory: async (userId: string, limit = 50, offset = 0) => {
    return await sql`
      SELECT * FROM spin_wheel_history 
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `
  },

  recordSpin: async (data: {
    user_id: string
    prize_id: string
    prize_name: string
    prize_type: string
    prize_value: number
    was_forced?: boolean
  }) => {
    return await sql`
      INSERT INTO spin_wheel_history 
      (user_id, prize_id, prize_name, prize_type, prize_value, was_forced)
      VALUES (${data.user_id}, ${data.prize_id}, ${data.prize_name}, ${data.prize_type}, ${data.prize_value}, ${data.was_forced || false})
      RETURNING *
    `
  },

  getTickets: async (userId: string) => {
    return await sql`
      SELECT * FROM spin_wheel_tickets 
      WHERE user_id = ${userId} 
      AND is_used = false
      AND (expires_at IS NULL OR expires_at > NOW())
      ORDER BY created_at ASC
    `
  },

  useTicket: async (userId: string) => {
    const result = await sql`
      SELECT use_spin_ticket(${userId}) as result
    `
    return result[0]?.result
  },

  addTicket: async (userId: string, ticketType: string) => {
    return await sql`
      INSERT INTO spin_wheel_tickets (user_id, ticket_type)
      VALUES (${userId}, ${ticketType})
      RETURNING *
    `
  },
}

// ============================================
// ADMIN QUERIES
// ============================================

export const adminQueries = {
  isAdmin: async (userId: string) => {
    const result = await sql`
      SELECT EXISTS (
        SELECT 1 FROM users 
        WHERE discord_id = ${userId} 
        AND (is_admin = true OR membership = 'admin')
      ) as is_admin
    `
    return result[0]?.is_admin || false
  },

  getPendingThreads: async (limit = 50, offset = 0) => {
    return await sql`
      SELECT * FROM forum_threads 
      WHERE status = 'pending'
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `
  },

  approveThread: async (threadId: string, adminId: string) => {
    return await sql`
      UPDATE forum_threads 
      SET status = 'approved', 
          approved_by = ${adminId}, 
          approved_at = NOW(),
          updated_at = NOW()
      WHERE id = ${threadId}
      RETURNING *
    `
  },

  rejectThread: async (threadId: string, reason: string) => {
    return await sql`
      UPDATE forum_threads 
      SET status = 'rejected', 
          rejection_reason = ${reason},
          updated_at = NOW()
      WHERE id = ${threadId}
      RETURNING *
    `
  },

  getStats: async () => {
    const [threads, replies, users, coins] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM forum_threads WHERE status = 'approved'`,
      sql`SELECT COUNT(*) as count FROM forum_replies WHERE is_deleted = false`,
      sql`SELECT COUNT(*) as count FROM users`,
      sql`SELECT SUM(amount) as total FROM coin_transactions WHERE amount > 0`,
    ])

    return {
      threads: threads[0]?.count || 0,
      replies: replies[0]?.count || 0,
      users: users[0]?.count || 0,
      totalCoins: coins[0]?.total || 0,
    }
  },
}

// ============================================
// ASSETS QUERIES
// ============================================

export const assetsQueries = {
  getAll: async (filters?: {
    category?: string
    framework?: string
    search?: string
    limit?: number
    offset?: number
  }) => {
    const { category, framework, search, limit = 100, offset = 0 } = filters || {}
    
    let query = sql`
      SELECT a.*, u.username as author_name, u.avatar as author_avatar, u.membership
      FROM assets a
      LEFT JOIN users u ON a.author_id = u.discord_id
      WHERE a.status = 'active'
    `
    
    if (category && category !== 'all') {
      query = sql`${query} AND a.category = ${category}`
    }
    
    if (framework && framework !== 'all') {
      query = sql`${query} AND a.framework = ${framework}`
    }
    
    if (search) {
      query = sql`${query} AND (a.title ILIKE ${'%' + search + '%'} OR a.description ILIKE ${'%' + search + '%'})`
    }
    
    query = sql`${query} ORDER BY a.created_at DESC LIMIT ${limit} OFFSET ${offset}`
    
    return await query
  },

  getCount: async (filters?: { category?: string; framework?: string; search?: string }) => {
    const { category, framework, search } = filters || {}
    
    let query = sql`SELECT COUNT(*) as count FROM assets WHERE status = 'active'`
    
    if (category && category !== 'all') {
      query = sql`${query} AND category = ${category}`
    }
    
    if (framework && framework !== 'all') {
      query = sql`${query} AND framework = ${framework}`
    }
    
    if (search) {
      query = sql`${query} AND (title ILIKE ${'%' + search + '%'} OR description ILIKE ${'%' + search + '%'})`
    }
    
    const result = await query
    return parseInt(result[0]?.count || '0')
  },

  getById: async (id: string) => {
    const result = await sql`
      SELECT a.*, u.username as author_name, u.avatar as author_avatar, u.membership
      FROM assets a
      LEFT JOIN users u ON a.author_id = u.discord_id
      WHERE a.id = ${id}
    `
    return result[0] || null
  },

  create: async (data: {
    title: string
    description: string
    category: string
    framework?: string
    version?: string
    coin_price?: number
    thumbnail?: string
    download_link?: string
    file_size?: string
    tags?: string[]
    author_id: string
  }) => {
    return await sql`
      INSERT INTO assets (title, description, category, framework, version, coin_price, thumbnail, download_link, file_size, tags, author_id)
      VALUES (${data.title}, ${data.description}, ${data.category}, ${data.framework || 'standalone'}, ${data.version || '1.0.0'}, ${data.coin_price || 0}, ${data.thumbnail}, ${data.download_link}, ${data.file_size}, ${data.tags || []}, ${data.author_id})
      RETURNING *
    `
  },

  update: async (id: string, data: any) => {
    const fields = Object.keys(data).filter(k => data[k] !== undefined)
    if (fields.length === 0) return []
    
    const sets = fields.map(f => sql`${sql(f)} = ${data[f]}`)
    
    return await sql`
      UPDATE assets 
      SET ${sql(sets, ', ')}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `
  },

  incrementViews: async (id: string) => {
    return await sql`UPDATE assets SET downloads = downloads + 1 WHERE id = ${id}`
  },

  incrementDownloads: async (id: string) => {
    return await sql`UPDATE assets SET downloads = downloads + 1 WHERE id = ${id}`
  },

  getRecent: async (limit = 6) => {
    return await sql`
      SELECT a.*, u.username as author_name
      FROM assets a
      LEFT JOIN users u ON a.author_id = u.discord_id
      WHERE a.status = 'active'
      ORDER BY a.created_at DESC
      LIMIT ${limit}
    `
  },

  getTrending: async (limit = 6) => {
    return await sql`
      SELECT a.*, u.username as author_name
      FROM assets a
      LEFT JOIN users u ON a.author_id = u.discord_id
      WHERE a.status = 'active'
      ORDER BY a.downloads DESC
      LIMIT ${limit}
    `
  },
}

// ============================================
// EXPORT ALL
// ============================================

export default {
  forum: forumQueries,
  coins: coinsQueries,
  spinWheel: spinWheelQueries,
  admin: adminQueries,
  assets: assetsQueries,
}
