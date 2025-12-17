module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/security-edge.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Edge Runtime compatible security utilities
__turbopack_context__.s([
    "security",
    ()=>security
]);
const rateLimitStore = new Map();
const security = {
    checkRateLimit (identifier, maxRequests = 100, windowMs = 60000) {
        const now = Date.now();
        const record = rateLimitStore.get(identifier);
        // Cleanup old entries periodically
        if (rateLimitStore.size > 10000) {
            for (const [key, value] of rateLimitStore.entries()){
                if (now > value.resetAt) rateLimitStore.delete(key);
            }
        }
        // If no record or window expired, create new record
        if (!record || now > record.resetAt) {
            rateLimitStore.set(identifier, {
                count: 1,
                resetAt: now + windowMs,
                blocked: false
            });
            return true;
        }
        // If already blocked in current window, deny
        if (record.blocked) {
            return false;
        }
        // If limit reached, block and deny
        if (record.count >= maxRequests) {
            record.blocked = true;
            return false;
        }
        // Increment count and allow
        record.count++;
        return true;
    },
    generateCSRFToken (sessionId) {
        const timestamp = Date.now().toString();
        return btoa(`${sessionId}:${timestamp}:csrf`);
    },
    verifyCSRFToken (token, sessionId) {
        if (!token || !sessionId) return false;
        try {
            const decoded = atob(token);
            const [id, timestamp] = decoded.split(":");
            const tokenAge = Date.now() - Number.parseInt(timestamp);
            return id === sessionId && tokenAge < 3600000;
        } catch  {
            return false;
        }
    },
    logSecurityEvent (event, details, severity = "medium") {
        console.log(`[SECURITY-${severity.toUpperCase()}] ${new Date().toISOString()}: ${event}`, details);
    }
};
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/supabase/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateSession",
    ()=>updateSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/@supabase/ssr/dist/module/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/server.js [middleware] (ecmascript)");
;
;
async function updateSession(request) {
    let supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    // Create Supabase client for middleware
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://linnqtixdfjwbrixitrb.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbm5xdGl4ZGZqd2JyaXhpdHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMTI4NTIsImV4cCI6MjA4MDc4ODg1Mn0.7Mm9XtHZzWC4K4iHuPBCxIWoUJAVqqsD4ph0mwUbFrU"), {
        cookies: {
            getAll () {
                return request.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value })=>request.cookies.set(name, value));
                supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request
                });
                cookiesToSet.forEach(({ name, value, options })=>supabaseResponse.cookies.set(name, value, options));
            }
        }
    });
    // IMPORTANT: Do not run code between createServerClient and supabase.auth.getUser()
    const { data: { user } } = await supabase.auth.getUser();
    // Protected routes that require authentication
    const protectedPaths = [
        "/admin",
        "/dashboard",
        "/profile/edit",
        "/upload"
    ];
    const isProtectedPath = protectedPaths.some((path)=>request.nextUrl.pathname.startsWith(path));
    // Redirect to login if accessing protected route without authentication
    if (isProtectedPath && !user) {
        const url = request.nextUrl.clone();
        url.pathname = "/auth/login";
        url.searchParams.set("redirect", request.nextUrl.pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // Admin routes require admin role
    if (request.nextUrl.pathname.startsWith("/admin") && user) {
        const { data: userData } = await supabase.from("users").select("role").eq("discord_id", user.id).single();
        if (!userData || ![
            "admin",
            "superadmin"
        ].includes(userData.role)) {
            const url = request.nextUrl.clone();
            url.pathname = "/";
            return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        }
    }
    return supabaseResponse;
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next-auth/jwt/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$security$2d$edge$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/security-edge.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$supabase$2f$proxy$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/supabase/proxy.ts [middleware] (ecmascript)");
;
;
;
;
async function proxy(request) {
    const { pathname } = request.nextUrl;
    const clientIP = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const supabaseResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$supabase$2f$proxy$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["updateSession"])(request);
    if (supabaseResponse.status === 307 || supabaseResponse.status === 308) {
        return supabaseResponse;
    }
    // Rate limiting
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$security$2d$edge$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["security"].checkRateLimit(clientIP, 500, 60000)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Rate limit exceeded"
        }, {
            status: 429
        });
    }
    // Get NextAuth token
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getToken"])({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });
    // Admin routes protection
    if (pathname.startsWith("/admin")) {
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url));
        }
        // This prevents redirect loop when token.isAdmin might be stale
        if (token.isAdmin !== true) {
            // Instead of immediate redirect, let the page check via API
            // Only redirect if clearly not authenticated
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
            response.headers.set("X-Admin-Check-Required", "true");
            return response;
        }
        // Additional admin rate limiting
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$security$2d$edge$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["security"].checkRateLimit(`admin_${token.sub}`, 200, 60000)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Admin rate limit exceeded"
            }, {
                status: 429
            });
        }
    }
    // API routes protection - only protect sensitive routes
    if (pathname.startsWith("/api/download") || pathname.startsWith("/api/upload")) {
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
    }
    // Security headers
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data: https:; media-src 'self' https: blob: data:; connect-src 'self' https:");
    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    // Add CSRF token to response for client use
    if (token?.sub) {
        const csrfToken = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$security$2d$edge$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["security"].generateCSRFToken(token.sub);
        response.headers.set("X-CSRF-Token", csrfToken);
        response.cookies.set("csrf-token", csrfToken, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "strict",
            maxAge: 3600
        });
    }
    return response;
}
const config = {
    matcher: [
        "/admin/:path*",
        "/api/:path*",
        "/upload/:path*"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58014d1a._.js.map