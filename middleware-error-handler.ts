import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logger } from './lib/logger'

export function withErrorLogging(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    try {
      return await handler(request, ...args)
    } catch (error) {
      const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
      
      logger.error('API Error', error, {
        endpoint: request.nextUrl.pathname,
        ip: clientIP,
        userId: 'unknown'
      })

      return NextResponse.json(
        { error: 'Internal server error', timestamp: new Date().toISOString() },
        { status: 500 }
      )
    }
  }
}
