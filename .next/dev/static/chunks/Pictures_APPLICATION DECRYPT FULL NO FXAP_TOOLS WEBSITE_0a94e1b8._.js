(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/auth-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AuthProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        refetchInterval: 5 * 60,
        refetchOnWindowFocus: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/auth-provider.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AuthProvider;
function useAuth() {
    _s();
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const user = session?.user ? {
        id: session.user.id || "",
        discordId: session.user.id || "",
        username: session.user.name || "",
        email: session.user.email || "",
        avatar: session.user.image || "",
        membership: session.user.membership || "free",
        coins: session.user.coins || 100,
        isAdmin: session.user.isAdmin === true,
        bio: session.user.bio || ""
    } : null;
    const checkAdminStatus = async ()=>{
        if (!user?.id) return false;
        try {
            const res = await fetch("/api/force-admin");
            const data = await res.json();
            if (data.currentUser?.isAdmin && !user.isAdmin) {
                await update();
                return true;
            }
            return data.currentUser?.isAdmin || false;
        } catch  {
            return false;
        }
    };
    const refreshUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[refreshUser]": async ()=>{
            try {
                await update();
                return true;
            } catch  {
                return false;
            }
        }
    }["useAuth.useCallback[refreshUser]"], [
        update
    ]);
    return {
        user,
        isAdmin: user?.isAdmin === true,
        isLoading: status === "loading",
        login: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("discord"),
        logout: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(),
        refreshSession: ()=>update(),
        refreshUser,
        checkAdminStatus
    };
}
_s(useAuth, "5CXuPeo2NVmOE6baPum//LPsdbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicNotifications",
    ()=>PublicNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PublicNotifications() {
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dismissedIds, setDismissedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicNotifications.useEffect": ()=>{
            setIsMounted(true);
        }
    }["PublicNotifications.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicNotifications.useEffect": ()=>{
            if (!isMounted) return;
            const dismissed = JSON.parse(localStorage.getItem("dismissedNotifications") || "[]");
            setDismissedIds(dismissed);
            fetchNotifications();
            const interval = setInterval(fetchNotifications, 30000);
            return ({
                "PublicNotifications.useEffect": ()=>clearInterval(interval)
            })["PublicNotifications.useEffect"];
        }
    }["PublicNotifications.useEffect"], [
        isMounted
    ]);
    const fetchNotifications = async ()=>{
        try {
            const res = await fetch("/api/notifications/public");
            if (res.ok) {
                const data = await res.json();
                setNotifications(data.notifications || []);
            }
        } catch (error) {
        // Silent fail
        } finally{
            setIsLoading(false);
        }
    };
    const dismissNotification = (id)=>{
        const newDismissed = [
            ...dismissedIds,
            id
        ];
        setDismissedIds(newDismissed);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("dismissedNotifications", JSON.stringify(newDismissed));
        }
    };
    const visibleNotifications = notifications.filter((n)=>!dismissedIds.includes(n.id));
    if (!isMounted || isLoading || visibleNotifications.length === 0) return null;
    const getIcon = (type)=>{
        switch(type){
            case "new_asset":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                    lineNumber: 69,
                    columnNumber: 16
                }, this);
            case "success":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                    lineNumber: 71,
                    columnNumber: 16
                }, this);
            case "warning":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                    lineNumber: 73,
                    columnNumber: 16
                }, this);
            case "alert":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                    lineNumber: 75,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                    lineNumber: 77,
                    columnNumber: 16
                }, this);
        }
    };
    const getStyles = (type)=>{
        switch(type){
            case "new_asset":
                return "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-cyan-100";
            case "success":
                return "bg-green-500/20 border-green-500/50 text-green-100";
            case "warning":
                return "bg-yellow-500/20 border-yellow-500/50 text-yellow-100";
            case "alert":
                return "bg-red-500/20 border-red-500/50 text-red-100";
            default:
                return "bg-blue-500/20 border-blue-500/50 text-blue-100";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-16 right-4 z-50 flex flex-col gap-2 max-w-sm",
        children: visibleNotifications.slice(0, 3).map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border p-4 shadow-lg backdrop-blur-sm animate-in slide-in-from-right duration-300", getStyles(notification.type)),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-0.5",
                            children: getIcon(notification.type)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: notification.title
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs opacity-80 mt-1 line-clamp-2",
                                    children: notification.message
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                notification.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: notification.link,
                                    className: "text-xs underline mt-2 inline-block hover:opacity-80",
                                    children: "View Details"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-6 w-6 shrink-0 hover:bg-white/10",
                            onClick: ()=>dismissNotification(notification.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, notification.id, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(PublicNotifications, "Bu/lRxuNlDw2rH6uLaFYJX6+SC4=");
_c = PublicNotifications;
var _c;
__turbopack_context__.k.register(_c, "PublicNotifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/online-tracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnlineTracker",
    ()=>OnlineTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function OnlineTracker() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnlineTracker.useEffect": ()=>{
            if (!session?.user?.id) return;
            // Send heartbeat immediately on mount
            const sendHeartbeat = {
                "OnlineTracker.useEffect.sendHeartbeat": async ()=>{
                    try {
                        await fetch("/api/users/heartbeat", {
                            method: "POST"
                        });
                    } catch (error) {
                    // Silently fail
                    }
                }
            }["OnlineTracker.useEffect.sendHeartbeat"];
            sendHeartbeat();
            // Send heartbeat every 2 minutes
            const interval = setInterval(sendHeartbeat, 2 * 60 * 1000);
            // Also send heartbeat on visibility change (when user returns to tab)
            const handleVisibilityChange = {
                "OnlineTracker.useEffect.handleVisibilityChange": ()=>{
                    if (document.visibilityState === "visible") {
                        sendHeartbeat();
                    }
                }
            }["OnlineTracker.useEffect.handleVisibilityChange"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "OnlineTracker.useEffect": ()=>{
                    clearInterval(interval);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["OnlineTracker.useEffect"];
        }
    }["OnlineTracker.useEffect"], [
        session?.user?.id
    ]);
    return null;
}
_s(OnlineTracker, "BVvivrSRe8/FL3eVGyG/GYgr2vQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = OnlineTracker;
var _c;
__turbopack_context__.k.register(_c, "OnlineTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailySpinTicket",
    ()=>DailySpinTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SPIN_TICKET_ICON = "https://cdn3d.iconscout.com/3d/premium/thumb/ticket-3d-icon-png-download-9964703.png";
function DailySpinTicket() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claiming, setClaiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [claimResult, setClaimResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailySpinTicket.useEffect": ()=>{
            if (session?.user) {
                fetchStatus();
            }
        }
    }["DailySpinTicket.useEffect"], [
        session
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailySpinTicket.useEffect": ()=>{
            if (status?.nextClaimAt) {
                const interval = setInterval({
                    "DailySpinTicket.useEffect.interval": ()=>{
                        const now = new Date();
                        const next = new Date(status.nextClaimAt);
                        const diff = next.getTime() - now.getTime();
                        if (diff <= 0) {
                            setCountdown("Ready!");
                            fetchStatus();
                        } else {
                            const hours = Math.floor(diff / (1000 * 60 * 60));
                            const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
                            const seconds = Math.floor(diff % (1000 * 60) / 1000);
                            setCountdown(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
                        }
                    }
                }["DailySpinTicket.useEffect.interval"], 1000);
                return ({
                    "DailySpinTicket.useEffect": ()=>clearInterval(interval)
                })["DailySpinTicket.useEffect"];
            }
        }
    }["DailySpinTicket.useEffect"], [
        status?.nextClaimAt
    ]);
    const fetchStatus = async ()=>{
        try {
            const res = await fetch("/api/spin-tickets/claim");
            if (res.ok) {
                const data = await res.json();
                setStatus(data);
            }
        } catch (error) {
            console.error("Failed to fetch status:", error);
        }
    };
    const handleClaim = async ()=>{
        if (!status?.canClaim || claiming) return;
        setClaiming(true);
        try {
            const res = await fetch("/api/spin-tickets/claim", {
                method: "POST"
            });
            if (res.ok) {
                const data = await res.json();
                setClaimResult(data);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    particleCount: 100,
                    spread: 70,
                    origin: {
                        y: 0.6
                    },
                    colors: [
                        "#fbbf24",
                        "#f59e0b",
                        "#d97706"
                    ]
                });
                await fetchStatus();
            }
        } catch (error) {
            console.error("Failed to claim:", error);
        } finally{
            setClaiming(false);
        }
    };
    if (!session?.user) return null;
    const streakDays = [
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: `fixed bottom-24 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${status?.canClaim ? "bg-gradient-to-r from-amber-500/90 to-orange-500/90 shadow-amber-500/40" : "bg-card/90 border border-border/50"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: SPIN_TICKET_ICON || "/placeholder.svg",
                        alt: "Spin Ticket",
                        className: "w-7 h-7",
                        loading: "lazy",
                        decoding: "async"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-foreground",
                                children: status?.canClaim ? "Claim Now!" : "Daily Ticket"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-muted-foreground",
                                children: [
                                    status?.totalTickets || 0,
                                    " Tickets"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    status?.canClaim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                        lineNumber: 123,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md bg-gradient-to-b from-background/95 to-background border-amber-500/20 backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: SPIN_TICKET_ICON || "/placeholder.svg",
                                        alt: "Spin Ticket",
                                        className: "w-8 h-8",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-bold",
                                        children: "Daily Spin Ticket"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-accent/30 rounded-xl p-3 border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                    className: "w-4 h-4 text-orange-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Login Streak"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-amber-400 font-bold text-sm",
                                                    children: [
                                                        "Day ",
                                                        status?.currentStreak || 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-7 gap-1.5",
                                            children: streakDays.map((day)=>{
                                                const isCompleted = (status?.currentStreak || 0) >= day;
                                                const isCurrent = (status?.currentStreak || 0) + 1 === day && status?.canClaim;
                                                const bonusTickets = day >= 7 ? 3 : day >= 3 ? 2 : 1;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative flex flex-col items-center p-1.5 rounded-lg transition-all ${isCompleted ? "bg-gradient-to-b from-amber-500/20 to-orange-500/20 border border-amber-500/40" : isCurrent ? "bg-amber-500/10 border border-amber-500 border-dashed" : "bg-muted/30 border border-border/30"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-muted-foreground",
                                                            children: [
                                                                "D",
                                                                day
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: SPIN_TICKET_ICON || "/placeholder.svg",
                                                            alt: "Ticket",
                                                            className: `w-5 h-5 ${isCompleted ? "" : "opacity-30 grayscale"}`,
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, this),
                                                        bonusTickets > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[8px] font-bold ${isCompleted ? "text-amber-400" : "text-muted-foreground"}`,
                                                            children: [
                                                                "x",
                                                                bonusTickets
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 25
                                                        }, this),
                                                        isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-2 h-2 text-white",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 3,
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, day, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                claimResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-3 border border-amber-500/20 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-6 h-6 text-amber-400 mx-auto mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-amber-400",
                                            children: claimResult.message
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: SPIN_TICKET_ICON || "/placeholder.svg",
                                                    alt: "Ticket",
                                                    className: "w-6 h-6",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold",
                                                    children: [
                                                        "+",
                                                        claimResult.ticketsReceived
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-accent/30 rounded-xl p-3 border border-border/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground text-sm",
                                                children: "Your Tickets"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: SPIN_TICKET_ICON || "/placeholder.svg",
                                                        alt: "Ticket",
                                                        className: "w-5 h-5",
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold",
                                                        children: status?.totalTickets || 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                status?.canClaim ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleClaim,
                                    disabled: claiming,
                                    className: "w-full h-12 font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-amber-500/20",
                                    children: claiming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this),
                                            "Claiming..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                        lineNumber: 222,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                                lineNumber: 228,
                                                columnNumber: 21
                                            }, this),
                                            "Claim Daily Ticket"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                        lineNumber: 227,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-xs mb-1",
                                            children: "Next claim in"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-mono font-bold text-amber-400",
                                            children: countdown || "..."
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-center text-muted-foreground",
                                    children: "Login daily to build streak & earn bonus tickets!"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DailySpinTicket, "ML8OjA+CHwiDvauJnTxPjVVNGNk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = DailySpinTicket;
var _c;
__turbopack_context__.k.register(_c, "DailySpinTicket");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/database-init.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatabaseInit",
    ()=>DatabaseInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function DatabaseInit() {
    _s();
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatabaseInit.useEffect": ()=>{
            if (initialized.current) return;
            initialized.current = true;
            const initDb = {
                "DatabaseInit.useEffect.initDb": async ()=>{
                    try {
                        await fetch("/api/init-database", {
                            method: "GET"
                        });
                    } catch (error) {}
                }
            }["DatabaseInit.useEffect.initDb"];
            setTimeout(initDb, 1000);
        }
    }["DatabaseInit.useEffect"], []);
    return null;
}
_s(DatabaseInit, "tIxOXwwGx+mBqUqBhCFG9FDZ7Os=");
_c = DatabaseInit;
var _c;
__turbopack_context__.k.register(_c, "DatabaseInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppWrapper",
    ()=>AppWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$public$2d$notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/public-notifications.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$online$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/online-tracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$daily$2d$spin$2d$ticket$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-spin-ticket.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$database$2d$init$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/database-init.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("[ErrorBoundary]", error);
        }
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback || null;
        }
        return this.props.children;
    }
}
function AppWrapper({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$database$2d$init$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatabaseInit"], {}, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$public$2d$notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicNotifications"], {}, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$online$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnlineTracker"], {}, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$daily$2d$spin$2d$ticket$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DailySpinTicket"], {}, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/app-wrapper.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = AppWrapper;
var _c;
__turbopack_context__.k.register(_c, "AppWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Pictures_APPLICATION%20DECRYPT%20FULL%20NO%20FXAP_TOOLS%20WEBSITE_0a94e1b8._.js.map