import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { security } from "./lib/security-edge"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const clientIP = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

  // Rate limiting
  if (!security.checkRateLimit(clientIP, 500, 60000)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
  }

  // Get NextAuth token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // Admin routes protection
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url))
    }

    // This prevents redirect loop when token.isAdmin might be stale
    if (token.isAdmin !== true) {
      // Instead of immediate redirect, let the page check via API
      // Only redirect if clearly not authenticated
      const response = NextResponse.next()
      response.headers.set("X-Admin-Check-Required", "true")
      return response
    }

    // Additional admin rate limiting
    if (!security.checkRateLimit(`admin_${token.sub}`, 200, 60000)) {
      return NextResponse.json({ error: "Admin rate limit exceeded" }, { status: 429 })
    }
  }

  // API routes protection - only protect sensitive routes
  if (pathname.startsWith("/api/download") || pathname.startsWith("/api/upload")) {
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  // Security headers
  const response = NextResponse.next()
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data: https:; media-src 'self' https: blob: data:; connect-src 'self' https:",
  )
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Add CSRF token to response for client use
  if (token?.sub) {
    const csrfToken = security.generateCSRFToken(token.sub)
    response.headers.set("X-CSRF-Token", csrfToken)
    response.cookies.set("csrf-token", csrfToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
    })
  }

  return response
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*", "/upload/:path*"],
}
