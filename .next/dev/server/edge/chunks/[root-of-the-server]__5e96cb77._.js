(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__5e96cb77._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
const RATE_LIMIT_MAP = new Map();
function rateLimit(ip, limit = 100, windowMs = 60000) {
    const now = Date.now();
    const record = RATE_LIMIT_MAP.get(ip);
    if (RATE_LIMIT_MAP.size > 10000) {
        for (const [key, value] of RATE_LIMIT_MAP.entries()){
            if (now > value.resetAt) RATE_LIMIT_MAP.delete(key);
        }
    }
    if (!record || now > record.resetAt) {
        RATE_LIMIT_MAP.set(ip, {
            count: 1,
            resetAt: now + windowMs
        });
        return true;
    }
    if (record.count >= limit) return false;
    record.count++;
    return true;
}
function middleware(request) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || request.ip || 'unknown';
    if (!rateLimit(ip)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Too many requests'
        }, {
            status: 429
        });
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return response;
}
const config = {
    matcher: [
        '/api/:path*',
        '/admin/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5e96cb77._.js.map