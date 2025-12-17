(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_DISCORD_ID",
    ()=>ADMIN_DISCORD_ID,
    "ADMIN_DISCORD_ROLE_ID",
    ()=>ADMIN_DISCORD_ROLE_ID,
    "DISCORD_CONFIG",
    ()=>DISCORD_CONFIG,
    "DISCORD_LINKS",
    ()=>DISCORD_LINKS,
    "FORUM_CATEGORIES",
    ()=>FORUM_CATEGORIES,
    "FRAMEWORKS",
    ()=>FRAMEWORKS,
    "FRAMEWORK_LOGOS",
    ()=>FRAMEWORK_LOGOS,
    "NAV_ITEMS",
    ()=>NAV_ITEMS,
    "SEO_KEYWORDS",
    ()=>SEO_KEYWORDS,
    "SITE_DESCRIPTION",
    ()=>SITE_DESCRIPTION,
    "SITE_LOGO",
    ()=>SITE_LOGO,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_URL",
    ()=>SITE_URL,
    "SPONSORS",
    ()=>SPONSORS,
    "SPONSOR_BANNERS",
    ()=>SPONSOR_BANNERS
]);
const SITE_LOGO = "https://r2.fivemanage.com/IKG5gF4pHPjLHEhuHxEh0/Untitleddesign-26.png";
const SITE_NAME = "FiveM Tools V7";
const SITE_DESCRIPTION = "FiveM Tools V7 - #1 FiveM Resource Hub for Free Scripts, MLO Maps, Vehicles, EUP Clothing, Decrypt CFX, FiveM Upvotes, Leak Scripts, QBCore, ESX, QBox Framework Resources. Download Premium FiveM Assets Free!";
const SITE_URL = "https://fivemtools.net";
const SEO_KEYWORDS = [
    // Primary Keywords
    "fivem",
    "fivem scripts",
    "fivem mlo",
    "fivem leak",
    "fivem free",
    "fivem tools",
    "fivem upvotes",
    "fivem decrypt",
    "cfx decrypt",
    "fivem decrypt cfx",
    "fivem fakeplayer",
    "fivem bot upvote",
    "fivem server boost",
    // Script Keywords
    "fivem scripts free",
    "fivem scripts leak",
    "fivem scripts download",
    "qbcore scripts",
    "esx scripts",
    "qbox scripts",
    "standalone scripts",
    "fivem lua scripts",
    "fivem resources",
    "fivem resource hub",
    // MLO Keywords
    "fivem mlo free",
    "fivem mlo leak",
    "fivem mlo download",
    "fivem maps",
    "fivem interior",
    "fivem mlo pack",
    "gta v mlo",
    "fivem ymap",
    // Vehicle Keywords
    "fivem vehicles",
    "fivem cars",
    "fivem vehicle pack",
    "fivem cars free",
    "fivem addon vehicles",
    "gta v vehicles fivem",
    "fivem vehicle leak",
    // Clothing Keywords
    "fivem eup",
    "fivem clothing",
    "fivem eup pack",
    "fivem clothes free",
    "fivem ped",
    "fivem outfit",
    "fivem uniform",
    "fivem eup leak",
    // Framework Keywords
    "qbcore",
    "esx framework",
    "qbox framework",
    "fivem framework",
    "qbcore free",
    "esx free",
    "qbox free",
    "fivem roleplay",
    // Tool Keywords
    "fivem decrypt tool",
    "cfx v7 decrypt",
    "fivem decryptor",
    "fivem unlocker",
    "fivem upvote bot",
    "fivem server upvotes",
    "fivem ranking boost",
    "fivem fake players",
    "fivem player bot",
    // Community Keywords
    "fivem community",
    "fivem forum",
    "fivem discord",
    "fivem indonesia",
    "fivem server",
    "fivem roleplay server",
    "fivem rp",
    // GTA Keywords
    "gta v",
    "gta 5",
    "gta v mods",
    "gta v roleplay",
    "gta v fivem",
    "grand theft auto v",
    "rockstar games"
];
const DISCORD_LINKS = {
    COMMUNITY: "https://discord.gg/tZXg4GVRM5",
    SUPPORT: "https://discord.gg/fivemtools"
};
const FRAMEWORK_LOGOS = {
    qbox: "https://www.qbox.re/static/screenshots/qbox-logo2.png",
    qbcore: "https://avatars.githubusercontent.com/u/81791099?s=280&v=4",
    esx: "https://docs.esx-framework.org/logo.png",
    standalone: "/standalone-script-icon.jpg"
};
const SPONSOR_BANNERS = [
    "https://r2.fivemanage.com/pjW8diq5cgbXePkRb7YQg/ts(1).mp4",
    "https://r2.fivemanage.com/pjW8diq5cgbXePkRb7YQg/letraserverlistgif.gif",
    "https://r2.fivemanage.com/pjW8diq5cgbXePkRb7YQg/serverlist_iteration_1.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb20ydGl6a21pY3FxdG5ndWtqbmlrNGRrcWV6YWg5bGN2MDE4OGx6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NACV6SPFQ8Fqndeek9/giphy.gif"
];
const FRAMEWORKS = [
    {
        id: "qbox",
        name: "QBox",
        logo: FRAMEWORK_LOGOS.qbox,
        color: "#3B82F6",
        description: "Modern FiveM Framework"
    },
    {
        id: "qbcore",
        name: "QBCore",
        logo: FRAMEWORK_LOGOS.qbcore,
        color: "#22C55E",
        description: "Popular Community Framework"
    },
    {
        id: "esx",
        name: "ESX",
        logo: FRAMEWORK_LOGOS.esx,
        color: "#F59E0B",
        description: "Classic Roleplay Framework"
    },
    {
        id: "standalone",
        name: "Standalone",
        logo: FRAMEWORK_LOGOS.standalone,
        color: "#8B5CF6",
        description: "Framework Independent"
    }
];
const SPONSORS = [
    {
        id: "sponsor-1",
        name: "FiveManage",
        image: SPONSOR_BANNERS[0],
        type: "video",
        isActive: true
    },
    {
        id: "sponsor-2",
        name: "Letra Server List",
        image: SPONSOR_BANNERS[1],
        type: "gif",
        isActive: true
    },
    {
        id: "sponsor-3",
        name: "Server List",
        image: SPONSOR_BANNERS[2],
        type: "gif",
        isActive: true
    },
    {
        id: "sponsor-4",
        name: "Gaming Sponsor",
        image: SPONSOR_BANNERS[3],
        type: "gif",
        isActive: true
    }
];
const ADMIN_DISCORD_ROLE_ID = "1047719075322810378";
const ADMIN_DISCORD_ID = "1047719075322810378";
const DISCORD_CONFIG = {
    clientId: "1445650115447754933",
    redirectUri: `${SITE_URL}/api/auth/callback`,
    scope: "identify email guilds"
};
const NAV_ITEMS = [
    {
        label: "Community Forum",
        href: "/forum",
        icon: "MessageSquare",
        badge: "HOT"
    },
    {
        label: "Discover",
        href: "/",
        icon: "Compass"
    },
    {
        label: "Scripts",
        href: "/scripts",
        icon: "Code"
    },
    {
        label: "Maps & MLO",
        href: "/mlo",
        icon: "MapPin"
    },
    {
        label: "Vehicles",
        href: "/vehicles",
        icon: "Car"
    },
    {
        label: "EUP & Clothing",
        href: "/clothing",
        icon: "Shirt"
    },
    {
        label: "Messages",
        href: "/messages",
        icon: "Mail"
    },
    {
        label: "Membership",
        href: "/membership",
        icon: "Crown"
    },
    {
        label: "Decrypt CFX V7",
        href: "/decrypt",
        icon: "Key"
    },
    {
        label: "Upvotes Server",
        href: "/upvotes",
        icon: "Rocket"
    }
];
const FORUM_CATEGORIES = [
    {
        id: "announcements",
        name: "Announcements",
        description: "Official announcements and updates from the team",
        icon: "megaphone",
        color: "#EF4444",
        order: 1
    },
    {
        id: "general",
        name: "General Discussion",
        description: "Chat about anything FiveM related",
        icon: "message-circle",
        color: "#22C55E",
        order: 2
    },
    {
        id: "help",
        name: "Help & Support",
        description: "Get help with scripts, installation, and troubleshooting",
        icon: "help-circle",
        color: "#F59E0B",
        order: 3
    },
    {
        id: "requests",
        name: "Script Requests",
        description: "Request new scripts and features",
        icon: "code",
        color: "#3B82F6",
        order: 4
    },
    {
        id: "showcase",
        name: "Showcase",
        description: "Show off your servers and creations",
        icon: "star",
        color: "#EC4899",
        order: 5
    },
    {
        id: "marketplace",
        name: "Marketplace",
        description: "Buy, sell, and trade FiveM resources",
        icon: "shopping-bag",
        color: "#8B5CF6",
        order: 6
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore,
    "useNotificationStore",
    ()=>useNotificationStore,
    "useStatsStore",
    ()=>useStatsStore,
    "useUIStore",
    ()=>useUIStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
"use client";
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        user: null,
        isLoading: true,
        setUser: (user)=>set({
                user,
                isLoading: false
            }),
        setLoading: (isLoading)=>set({
                isLoading
            }),
        logout: ()=>{
            set({
                user: null
            });
            document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    }), {
    name: "fivemtools-auth",
    partialize: (state)=>({
            user: state.user
        })
}));
const useNotificationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        notifications: [],
        unreadCount: 0,
        setNotifications: (notifications)=>set({
                notifications,
                unreadCount: notifications.filter((n)=>!n.read).length
            }),
        addNotification: (notification)=>set((state)=>({
                    notifications: [
                        notification,
                        ...state.notifications
                    ],
                    unreadCount: state.unreadCount + (notification.read ? 0 : 1)
                })),
        markAsRead: (id)=>set((state)=>({
                    notifications: state.notifications.map((n)=>n.id === id ? {
                            ...n,
                            read: true
                        } : n),
                    unreadCount: Math.max(0, state.unreadCount - 1)
                })),
        markAllAsRead: ()=>set((state)=>({
                    notifications: state.notifications.map((n)=>({
                            ...n,
                            read: true
                        })),
                    unreadCount: 0
                }))
    }));
const useStatsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        stats: {
            onlineUsers: 1,
            totalMembers: 0,
            totalAssets: 0,
            totalDownloads: 0,
            totalThreads: 0,
            totalPosts: 0
        },
        setStats: (newStats)=>set((state)=>({
                    stats: {
                        ...state.stats,
                        ...newStats,
                        // Ensure onlineUsers is at least 1
                        onlineUsers: Math.max(1, newStats.onlineUsers ?? state.stats.onlineUsers)
                    }
                }))
    }));
const useUIStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        sidebarCollapsed: false,
        mobileMenuOpen: false,
        searchQuery: "",
        toggleSidebar: ()=>set((state)=>({
                    sidebarCollapsed: !state.sidebarCollapsed
                })),
        setMobileMenuOpen: (mobileMenuOpen)=>set({
                mobileMenuOpen
            }),
        setSearchQuery: (searchQuery)=>set({
                searchQuery
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/coin-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COIN_ICON_URL",
    ()=>COIN_ICON_URL,
    "CoinIcon",
    ()=>CoinIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const COIN_GIF_URL = "https://media.tenor.com/jX0Ytn_JLcIAAAAj/mario-coins.gif";
const sizeMap = {
    xs: 20,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 56
};
function CoinIcon({ size = "md", className = "" }) {
    const dimension = sizeMap[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: COIN_GIF_URL || "/placeholder.svg",
        alt: "Coins",
        width: dimension,
        height: dimension,
        className: className,
        unoptimized: true
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/coin-icon.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = CoinIcon;
const COIN_ICON_URL = COIN_GIF_URL;
var _c;
__turbopack_context__.k.register(_c, "CoinIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyCoinsButton",
    ()=>DailyCoinsButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/auth-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/coin-icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DailyCoinsButton() {
    _s();
    const { user, refreshSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClaiming, setIsClaiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClaim = async ()=>{
        if (!user) return;
        setIsClaiming(true);
        try {
            const res = await fetch("/api/coins/daily", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setResult(data);
            if (data.success) {
                await refreshSession();
                setTimeout(()=>{
                    setShowModal(false);
                    setResult(null);
                }, 1500);
            }
        } catch (error) {
            setResult({
                error: "Failed to claim coins"
            });
        } finally{
            setIsClaiming(false);
        }
    };
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setShowModal(true),
                className: "w-full bg-gradient-to-r from-warning to-chart-5 hover:from-warning/90 hover:to-chart-5/90 rounded-xl gap-2 glow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    "Daily Coins"
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showModal,
                onOpenChange: setShowModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-md glass border-2 border-warning/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-20 w-20 rounded-2xl bg-warning/20 flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinIcon"], {
                                            size: "xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-foreground mb-2",
                                        children: "Daily Coins"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Claim your free 25 coins every 24 hours!"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            result ? result.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-16 w-16 text-success mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinIcon"], {
                                                size: "md"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold text-success",
                                                children: [
                                                    "+",
                                                    result.coinsAdded,
                                                    " Coins Claimed!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: [
                                            "New Balance: ",
                                            result.newBalance
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-16 w-16 text-warning mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "Already Claimed"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: result.error
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this),
                                    result.canClaimIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "Come back in ",
                                            result.canClaimIn
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                        lineNumber: 82,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleClaim,
                                disabled: isClaiming,
                                className: "w-full bg-warning hover:bg-warning/90 rounded-xl h-12",
                                children: isClaiming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, this),
                                        "Claiming..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinIcon"], {
                                            size: "sm",
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                            lineNumber: 99,
                                            columnNumber: 21
                                        }, this),
                                        "Claim 25 Coins"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DailyCoinsButton, "fdfWGpD2Si95qfSWixythrb+mQ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = DailyCoinsButton;
var _c;
__turbopack_context__.k.register(_c, "DailyCoinsButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/auth-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$daily$2d$coins$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/daily-coins-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ICONS_3D = {
    forum: "https://cdn3d.iconscout.com/3d/premium/thumb/discussion-forum-10863983-8726575.png",
    discover: "https://cdn3d.iconscout.com/3d/premium/thumb/discover-3d-icon-png-download-6691613.png",
    script: "https://cdn3d.iconscout.com/3d/premium/thumb/script-document-3d-icon-png-download-11372835.png",
    map: "https://cdn3d.iconscout.com/3d/premium/thumb/map-3d-icon-png-download-7718779.png",
    car: "https://cdn3d.iconscout.com/3d/premium/thumb/car-3d-icon-png-download-13015695.png",
    clothing: "https://cdn3d.iconscout.com/3d/premium/thumb/t-shirt-3d-icon-png-download-4980191.png",
    ticket: "https://cdn3d.iconscout.com/3d/premium/thumb/ticket-3d-icon-png-download-9964703.png",
    message: "https://cdn3d.iconscout.com/3d/premium/thumb/message-3d-icon-png-download-9147860.png",
    crown: "https://cdn3d.iconscout.com/3d/premium/thumb/king-crown-3d-icon-png-download-8837207.png",
    decrypt: "https://cdn3d.iconscout.com/3d/premium/thumb/decrypt-website-3d-icon-png-download-13666091.png",
    rocket: "https://static.vecteezy.com/system/resources/thumbnails/026/991/740/small_2x/3d-render-of-purple-spaceship-rocket-icon-for-ui-ux-web-mobile-apps-social-media-ads-design-png.png",
    upload: "https://cdn3d.iconscout.com/3d/premium/thumb/upload-3d-icon-png-download-10987665.png",
    dashboard: "https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-template-3d-icon-png-download-4800674.png",
    admin: "https://cdn3d.iconscout.com/3d/premium/thumb/administrator-3d-icon-png-download-5625724.png?f=webp",
    pending: "https://cdn3d.iconscout.com/3d/premium/thumb/pending-package-3d-icon-png-download-10740000.png"
};
const Icon3D = ({ src, alt, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src || "/placeholder.svg",
        alt: alt,
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 object-contain", className),
        loading: "lazy",
        decoding: "async",
        width: 24,
        height: 24
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Icon3D;
const navItems = [
    {
        label: "Community Forum",
        href: "/forum",
        icon: ICONS_3D.forum,
        badge: "HOT"
    },
    {
        label: "Discover",
        href: "/",
        icon: ICONS_3D.discover
    },
    {
        label: "Scripts",
        href: "/assets?category=scripts",
        icon: ICONS_3D.script
    },
    {
        label: "Maps & MLO",
        href: "/assets?category=mlo",
        icon: ICONS_3D.map
    },
    {
        label: "Vehicles",
        href: "/assets?category=vehicles",
        icon: ICONS_3D.car
    },
    {
        label: "EUP & Clothing",
        href: "/assets?category=clothing",
        icon: ICONS_3D.clothing
    },
    {
        label: "Lucky Spin",
        href: "/spin-wheel",
        icon: ICONS_3D.ticket,
        badge: "NEW"
    },
    {
        label: "Messages",
        href: "/messages",
        icon: ICONS_3D.message
    },
    {
        label: "Membership",
        href: "/membership",
        icon: ICONS_3D.crown
    },
    {
        label: "Decrypt CFX V7",
        href: "/decrypt",
        icon: ICONS_3D.decrypt
    },
    {
        label: "Upvotes Server",
        href: "/upvotes",
        icon: ICONS_3D.rocket
    },
    {
        label: "Upload Asset",
        href: "/upload",
        icon: ICONS_3D.upload
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { stats, setStats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"])();
    const [displayOnline, setDisplayOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stats.onlineUsers);
    const fetchStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[fetchStats]": async ()=>{
            try {
                const res = await fetch("/api/stats");
                if (res.ok) {
                    const data = await res.json();
                    setStats({
                        totalMembers: data.totalMembers || data.users || 0,
                        totalAssets: data.totalAssets || data.assets || 0,
                        totalDownloads: data.totalDownloads || data.downloads || 0,
                        totalPosts: data.totalPosts || data.posts || 0,
                        totalThreads: data.totalThreads || 0,
                        onlineUsers: data.onlineUsers || 1
                    });
                }
            } catch (error) {
            // Silently fail - stats will show cached data
            }
        }
    }["Sidebar.useCallback[fetchStats]"], [
        setStats
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            fetchStats();
            const interval = setInterval(fetchStats, 30000);
            return ({
                "Sidebar.useEffect": ()=>clearInterval(interval)
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], [
        fetchStats
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (stats.onlineUsers !== displayOnline) {
                const timer = setTimeout({
                    "Sidebar.useEffect.timer": ()=>{
                        setDisplayOnline(stats.onlineUsers);
                    }
                }["Sidebar.useEffect.timer"], 100);
                return ({
                    "Sidebar.useEffect": ()=>clearTimeout(timer)
                })["Sidebar.useEffect"];
            }
        }
    }["Sidebar.useEffect"], [
        stats.onlineUsers,
        displayOnline
    ]);
    const userItems = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: ICONS_3D.dashboard,
            requireAuth: true
        },
        {
            label: "Admin Panel",
            href: "/admin",
            icon: ICONS_3D.admin,
            requireAdmin: true
        },
        {
            label: "Pending Assets",
            href: "/admin/forum",
            icon: ICONS_3D.pending,
            requireAdmin: true
        }
    ];
    const formatNumber = (num)=>{
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toString();
    };
    const NavLink = ({ item, isMobile = false })=>{
        const isActive = pathname === item.href || item.href.startsWith("/assets") && pathname === "/assets";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            onClick: ()=>isMobile && setMobileOpen(false),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative", isActive ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon3D, {
                    src: item.icon,
                    alt: item.label,
                    className: "transition-transform group-hover:scale-110"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-sm",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        "badge" in item && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full", item.badge === "HOT" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-primary/20 text-primary border border-primary/30"),
                            children: item.badge
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                            lineNumber: 139,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": mobileOpen ? "Close navigation menu" : "Open navigation menu",
                onClick: ()=>setMobileOpen(!mobileOpen),
                className: "md:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl glass-card border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: mobileOpen ? "M6 18L18 6M6 6l12 12M6 18h12" : "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 bg-black/60 z-40",
                onClick: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                lineNumber: 175,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 h-full z-50 transition-all duration-300", "bg-sidebar border-r border-border flex flex-col", collapsed ? "w-20" : "w-72", mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex items-center gap-3 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOGO"] || "/placeholder.svg",
                                        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_NAME"]} Logo`,
                                        className: "h-10 w-10 rounded-xl object-cover",
                                        width: 40,
                                        height: 40,
                                        loading: "eager"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-bold text-lg text-foreground",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_NAME"]
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-primary",
                                                children: "V7 Premium"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
                                onClick: ()=>setCollapsed(!collapsed),
                                className: "ml-auto p-1.5 rounded-lg hover:bg-accent/50 transition-colors hidden md:flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform", collapsed && "rotate-180")
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 overflow-y-auto p-3 space-y-1",
                        children: [
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    item: item
                                }, item.href, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)),
                            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 mt-4 border-t border-border space-y-1",
                                children: userItems.map((item)=>{
                                    if ("requireAuth" in item && item.requireAuth && !user) return null;
                                    if ("requireAdmin" in item && item.requireAdmin && !isAdmin) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                        item: item
                                    }, item.href, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                        lineNumber: 225,
                                        columnNumber: 24
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card rounded-xl p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Live Status"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                            lineNumber: 239,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold text-primary transition-all duration-300",
                                                    children: displayOnline
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold text-foreground",
                                                    children: formatNumber(stats.totalMembers)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Members"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    user && !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$daily$2d$coins$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DailyCoinsButton"], {}, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sidebar.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "Yc6Q+hIB1awUI7/natoQdM/fES4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"]
    ];
});
_c1 = Sidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "Icon3D");
__turbopack_context__.k.register(_c1, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/hooks/use-debounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDebounce(value, delay) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const timer = setTimeout({
                "useDebounce.useEffect.timer": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.timer"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(timer);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalSearch",
    ()=>GlobalSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/command.js [app-client] (ecmascript) <export default as Command>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$hooks$2f$use$2d$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/hooks/use-debounce.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function GlobalSearch() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        assets: [],
        threads: [],
        users: []
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const debouncedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$hooks$2f$use$2d$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(query, 300);
    // Keyboard shortcut
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSearch.useEffect": ()=>{
            const down = {
                "GlobalSearch.useEffect.down": (e)=>{
                    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        setOpen({
                            "GlobalSearch.useEffect.down": (open)=>!open
                        }["GlobalSearch.useEffect.down"]);
                    }
                }
            }["GlobalSearch.useEffect.down"];
            document.addEventListener("keydown", down);
            return ({
                "GlobalSearch.useEffect": ()=>document.removeEventListener("keydown", down)
            })["GlobalSearch.useEffect"];
        }
    }["GlobalSearch.useEffect"], []);
    // Search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSearch.useEffect": ()=>{
            if (debouncedQuery.length < 2) {
                setResults({
                    assets: [],
                    threads: [],
                    users: []
                });
                return;
            }
            const search = {
                "GlobalSearch.useEffect.search": async ()=>{
                    setIsLoading(true);
                    try {
                        const res = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}&limit=5`);
                        if (res.ok) {
                            const data = await res.json();
                            setResults(data.results || {
                                assets: [],
                                threads: [],
                                users: []
                            });
                        }
                    } catch (error) {
                        console.error("Search failed:", error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["GlobalSearch.useEffect.search"];
            search();
        }
    }["GlobalSearch.useEffect"], [
        debouncedQuery
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlobalSearch.useCallback[handleSelect]": (type, id)=>{
            setOpen(false);
            setQuery("");
            if (type === "asset") router.push(`/asset/${id}`);
            else if (type === "thread") router.push(`/forum/thread/${id}`);
            else if (type === "user") router.push(`/profile/${id}`);
        }
    }["GlobalSearch.useCallback[handleSelect]"], [
        router
    ]);
    const hasResults = results.assets.length > 0 || results.threads.length > 0 || results.users.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(true),
                className: "relative w-full max-w-xl flex items-center gap-2 h-11 px-4 bg-secondary/50 border border-border/50 rounded-xl text-muted-foreground hover:border-primary/50 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-left text-sm",
                        children: "Search assets, threads, users..."
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "px-1.5 py-0.5 text-[10px] font-medium bg-background/80 rounded border border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__["Command"], {
                                    className: "h-3 w-3 inline"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "px-1.5 py-0.5 text-[10px] font-medium bg-background/80 rounded border border-border",
                                children: "K"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl p-0 gap-0 glass",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-4 border-b border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search assets, threads, users...",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    className: "flex-1 border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setQuery(""),
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[60vh] overflow-y-auto p-2",
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center py-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-6 w-6 animate-spin text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this) : !hasResults && query.length >= 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-muted-foreground",
                                children: [
                                    'No results found for "',
                                    query,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    results.assets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase",
                                                children: "Assets"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            results.assets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSelect("asset", asset.id),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-10 w-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden",
                                                            children: asset.thumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: asset.thumbnail || "/placeholder.svg",
                                                                alt: "",
                                                                className: "h-full w-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                                                className: "h-5 w-5 text-muted-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-foreground truncate",
                                                                    children: asset.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground truncate",
                                                                    children: asset.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "shrink-0",
                                                            children: asset.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, asset.id, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    results.threads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase",
                                                children: "Forum Threads"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, this),
                                            results.threads.map((thread)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSelect("thread", thread.id),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-10 w-10 rounded-lg bg-secondary flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                className: "h-5 w-5 text-muted-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-foreground truncate",
                                                                    children: thread.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: [
                                                                        thread.author?.username || "Unknown",
                                                                        " • ",
                                                                        thread.replies_count,
                                                                        " replies"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, thread.id, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this),
                                    results.users.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase",
                                                children: "Users"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this),
                                            results.users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSelect("user", user.discord_id),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: user.avatar || "/placeholder.svg?height=40&width=40&query=user",
                                                            alt: "",
                                                            className: "h-10 w-10 rounded-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-foreground",
                                                                    children: user.username
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground capitalize",
                                                                    children: [
                                                                        user.membership,
                                                                        " Member"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, user.id, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, this),
                                    query.length < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-muted-foreground text-sm",
                                        children: "Type at least 2 characters to search"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GlobalSearch, "yUlqEEApdaq8LK3Z8Phjm+c7xL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$hooks$2f$use$2d$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c = GlobalSearch;
var _c;
__turbopack_context__.k.register(_c, "GlobalSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Internationalization (i18n) support with more languages
__turbopack_context__.s([
    "getAllLanguages",
    ()=>getAllLanguages,
    "getLanguageFlag",
    ()=>getLanguageFlag,
    "getLanguageName",
    ()=>getLanguageName,
    "t",
    ()=>t,
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.scripts": "Scripts",
        "nav.mlo": "MLO",
        "nav.vehicles": "Vehicles",
        "nav.clothing": "Clothing",
        "nav.forum": "Forum",
        "nav.upload": "Upload",
        "nav.dashboard": "Dashboard",
        "nav.admin": "Admin",
        "nav.profile": "Profile",
        "nav.settings": "Settings",
        "nav.logout": "Logout",
        "nav.login": "Login",
        "nav.spinWheel": "Lucky Spin",
        "nav.messages": "Messages",
        "nav.membership": "Membership",
        "nav.decrypt": "Decrypt CFX",
        "nav.upvotes": "Upvotes",
        // Common
        "common.search": "Search",
        "common.filter": "Filter",
        "common.sort": "Sort",
        "common.all": "All",
        "common.free": "Free",
        "common.premium": "Premium",
        "common.download": "Download",
        "common.purchase": "Purchase",
        "common.save": "Save",
        "common.cancel": "Cancel",
        "common.delete": "Delete",
        "common.edit": "Edit",
        "common.create": "Create",
        "common.submit": "Submit",
        "common.loading": "Loading...",
        "common.error": "Error",
        "common.success": "Success",
        "common.views": "Views",
        "common.downloads": "Downloads",
        "common.likes": "Likes",
        "common.comments": "Comments",
        "common.share": "Share",
        "common.report": "Report",
        "common.coins": "Coins",
        "common.tickets": "Tickets",
        // Spin Wheel
        "spin.title": "Lucky Spin Wheel",
        "spin.subtitle": "Use tickets to spin and win coins!",
        "spin.freeSpin": "FREE SPIN",
        "spin.useTicket": "USE TICKET",
        "spin.spinNow": "SPIN NOW!",
        "spin.spinning": "Spinning...",
        "spin.congratulations": "Congratulations!",
        "spin.youWon": "You won",
        "spin.prizePool": "Prize Pool",
        "spin.recentWins": "Recent Wins",
        "spin.noSpins": "No spins yet",
        "spin.remaining": "remaining today",
        "spin.available": "tickets available",
        // Assets
        "assets.title": "Assets",
        "assets.scripts": "Scripts",
        "assets.mlo": "MLO Maps",
        "assets.vehicles": "Vehicles",
        "assets.clothing": "Clothing",
        "assets.latest": "Latest Assets",
        "assets.trending": "Trending",
        "assets.popular": "Popular",
        "assets.noResults": "No assets found",
        "assets.uploadNew": "Upload New Asset",
        // Forum
        "forum.title": "Community Forum",
        "forum.newThread": "New Thread",
        "forum.categories": "Categories",
        "forum.threads": "Threads",
        "forum.replies": "Replies",
        "forum.lastActivity": "Last Activity",
        "forum.pinned": "Pinned",
        "forum.locked": "Locked",
        // Notifications
        "notifications.title": "Notifications",
        "notifications.newAsset": "New Asset Uploaded",
        "notifications.markRead": "Mark as Read",
        "notifications.clearAll": "Clear All",
        // Admin
        "admin.dashboard": "Admin Dashboard",
        "admin.users": "Users",
        "admin.assets": "Assets",
        "admin.banners": "Banners",
        "admin.notifications": "Notifications",
        "admin.settings": "Settings",
        "admin.sendNotification": "Send Notification",
        // Profile
        "profile.myAssets": "My Assets",
        "profile.myDownloads": "My Downloads",
        "profile.myCoins": "My Coins",
        "profile.editProfile": "Edit Profile"
    },
    id: {
        // Navigation
        "nav.home": "Beranda",
        "nav.scripts": "Skrip",
        "nav.mlo": "MLO",
        "nav.vehicles": "Kendaraan",
        "nav.clothing": "Pakaian",
        "nav.forum": "Forum",
        "nav.upload": "Unggah",
        "nav.dashboard": "Dasbor",
        "nav.admin": "Admin",
        "nav.profile": "Profil",
        "nav.settings": "Pengaturan",
        "nav.logout": "Keluar",
        "nav.login": "Masuk",
        "nav.spinWheel": "Spin Beruntung",
        "nav.messages": "Pesan",
        "nav.membership": "Keanggotaan",
        "nav.decrypt": "Dekripsi CFX",
        "nav.upvotes": "Upvotes",
        // Common
        "common.search": "Cari",
        "common.filter": "Filter",
        "common.sort": "Urutkan",
        "common.all": "Semua",
        "common.free": "Gratis",
        "common.premium": "Premium",
        "common.download": "Unduh",
        "common.purchase": "Beli",
        "common.save": "Simpan",
        "common.cancel": "Batal",
        "common.delete": "Hapus",
        "common.edit": "Edit",
        "common.create": "Buat",
        "common.submit": "Kirim",
        "common.loading": "Memuat...",
        "common.error": "Kesalahan",
        "common.success": "Berhasil",
        "common.views": "Dilihat",
        "common.downloads": "Unduhan",
        "common.likes": "Suka",
        "common.comments": "Komentar",
        "common.share": "Bagikan",
        "common.report": "Laporkan",
        "common.coins": "Koin",
        "common.tickets": "Tiket",
        // Spin Wheel
        "spin.title": "Roda Spin Beruntung",
        "spin.subtitle": "Gunakan tiket untuk spin dan menangkan koin!",
        "spin.freeSpin": "SPIN GRATIS",
        "spin.useTicket": "GUNAKAN TIKET",
        "spin.spinNow": "SPIN SEKARANG!",
        "spin.spinning": "Memutar...",
        "spin.congratulations": "Selamat!",
        "spin.youWon": "Anda memenangkan",
        "spin.prizePool": "Hadiah",
        "spin.recentWins": "Kemenangan Terbaru",
        "spin.noSpins": "Belum ada spin",
        "spin.remaining": "tersisa hari ini",
        "spin.available": "tiket tersedia",
        // Assets
        "assets.title": "Aset",
        "assets.scripts": "Skrip",
        "assets.mlo": "Peta MLO",
        "assets.vehicles": "Kendaraan",
        "assets.clothing": "Pakaian",
        "assets.latest": "Aset Terbaru",
        "assets.trending": "Trending",
        "assets.popular": "Populer",
        "assets.noResults": "Tidak ada aset ditemukan",
        "assets.uploadNew": "Unggah Aset Baru",
        // Forum
        "forum.title": "Forum Komunitas",
        "forum.newThread": "Thread Baru",
        "forum.categories": "Kategori",
        "forum.threads": "Thread",
        "forum.replies": "Balasan",
        "forum.lastActivity": "Aktivitas Terakhir",
        "forum.pinned": "Disematkan",
        "forum.locked": "Dikunci",
        // Notifications
        "notifications.title": "Notifikasi",
        "notifications.newAsset": "Aset Baru Diunggah",
        "notifications.markRead": "Tandai Dibaca",
        "notifications.clearAll": "Hapus Semua",
        // Admin
        "admin.dashboard": "Dasbor Admin",
        "admin.users": "Pengguna",
        "admin.assets": "Aset",
        "admin.banners": "Banner",
        "admin.notifications": "Notifikasi",
        "admin.settings": "Pengaturan",
        "admin.sendNotification": "Kirim Notifikasi",
        // Profile
        "profile.myAssets": "Aset Saya",
        "profile.myDownloads": "Unduhan Saya",
        "profile.myCoins": "Koin Saya",
        "profile.editProfile": "Edit Profil"
    },
    es: {
        // Navigation
        "nav.home": "Inicio",
        "nav.scripts": "Scripts",
        "nav.mlo": "MLO",
        "nav.vehicles": "Vehículos",
        "nav.clothing": "Ropa",
        "nav.forum": "Foro",
        "nav.upload": "Subir",
        "nav.dashboard": "Panel",
        "nav.admin": "Admin",
        "nav.profile": "Perfil",
        "nav.settings": "Configuración",
        "nav.logout": "Cerrar Sesión",
        "nav.login": "Iniciar Sesión",
        "nav.spinWheel": "Ruleta de la Suerte",
        "nav.messages": "Mensajes",
        "nav.membership": "Membresía",
        "nav.decrypt": "Descifrar CFX",
        "nav.upvotes": "Votos",
        // Common
        "common.search": "Buscar",
        "common.filter": "Filtrar",
        "common.sort": "Ordenar",
        "common.all": "Todo",
        "common.free": "Gratis",
        "common.premium": "Premium",
        "common.download": "Descargar",
        "common.purchase": "Comprar",
        "common.save": "Guardar",
        "common.cancel": "Cancelar",
        "common.delete": "Eliminar",
        "common.edit": "Editar",
        "common.create": "Crear",
        "common.submit": "Enviar",
        "common.loading": "Cargando...",
        "common.error": "Error",
        "common.success": "Éxito",
        "common.views": "Vistas",
        "common.downloads": "Descargas",
        "common.likes": "Me gusta",
        "common.comments": "Comentarios",
        "common.share": "Compartir",
        "common.report": "Reportar",
        "common.coins": "Monedas",
        "common.tickets": "Tickets",
        // Spin Wheel
        "spin.title": "Ruleta de la Suerte",
        "spin.subtitle": "¡Usa tickets para girar y ganar monedas!",
        "spin.freeSpin": "GIRO GRATIS",
        "spin.useTicket": "USAR TICKET",
        "spin.spinNow": "¡GIRAR AHORA!",
        "spin.spinning": "Girando...",
        "spin.congratulations": "¡Felicitaciones!",
        "spin.youWon": "Ganaste",
        "spin.prizePool": "Premios",
        "spin.recentWins": "Ganancias Recientes",
        "spin.noSpins": "Sin giros aún",
        "spin.remaining": "restantes hoy",
        "spin.available": "tickets disponibles",
        // Assets
        "assets.title": "Recursos",
        "assets.scripts": "Scripts",
        "assets.mlo": "Mapas MLO",
        "assets.vehicles": "Vehículos",
        "assets.clothing": "Ropa",
        "assets.latest": "Últimos Recursos",
        "assets.trending": "Tendencias",
        "assets.popular": "Popular",
        "assets.noResults": "No se encontraron recursos",
        "assets.uploadNew": "Subir Nuevo Recurso",
        // Forum
        "forum.title": "Foro Comunitario",
        "forum.newThread": "Nuevo Tema",
        "forum.categories": "Categorías",
        "forum.threads": "Temas",
        "forum.replies": "Respuestas",
        "forum.lastActivity": "Última Actividad",
        "forum.pinned": "Fijado",
        "forum.locked": "Bloqueado",
        // Notifications
        "notifications.title": "Notificaciones",
        "notifications.newAsset": "Nuevo Recurso Subido",
        "notifications.markRead": "Marcar como Leído",
        "notifications.clearAll": "Borrar Todo",
        // Admin
        "admin.dashboard": "Panel de Admin",
        "admin.users": "Usuarios",
        "admin.assets": "Recursos",
        "admin.banners": "Banners",
        "admin.notifications": "Notificaciones",
        "admin.settings": "Configuración",
        "admin.sendNotification": "Enviar Notificación",
        // Profile
        "profile.myAssets": "Mis Recursos",
        "profile.myDownloads": "Mis Descargas",
        "profile.myCoins": "Mis Monedas",
        "profile.editProfile": "Editar Perfil"
    },
    pt: {
        // Navigation
        "nav.home": "Início",
        "nav.scripts": "Scripts",
        "nav.mlo": "MLO",
        "nav.vehicles": "Veículos",
        "nav.clothing": "Roupas",
        "nav.forum": "Fórum",
        "nav.upload": "Enviar",
        "nav.dashboard": "Painel",
        "nav.admin": "Admin",
        "nav.profile": "Perfil",
        "nav.settings": "Configurações",
        "nav.logout": "Sair",
        "nav.login": "Entrar",
        "nav.spinWheel": "Roleta da Sorte",
        "nav.messages": "Mensagens",
        "nav.membership": "Assinatura",
        "nav.decrypt": "Descriptografar CFX",
        "nav.upvotes": "Votos",
        // Common
        "common.search": "Buscar",
        "common.filter": "Filtrar",
        "common.sort": "Ordenar",
        "common.all": "Tudo",
        "common.free": "Grátis",
        "common.premium": "Premium",
        "common.download": "Baixar",
        "common.purchase": "Comprar",
        "common.save": "Salvar",
        "common.cancel": "Cancelar",
        "common.delete": "Excluir",
        "common.edit": "Editar",
        "common.create": "Criar",
        "common.submit": "Enviar",
        "common.loading": "Carregando...",
        "common.error": "Erro",
        "common.success": "Sucesso",
        "common.views": "Visualizações",
        "common.downloads": "Downloads",
        "common.likes": "Curtidas",
        "common.comments": "Comentários",
        "common.share": "Compartilhar",
        "common.report": "Denunciar",
        "common.coins": "Moedas",
        "common.tickets": "Tickets",
        // Spin Wheel
        "spin.title": "Roleta da Sorte",
        "spin.subtitle": "Use tickets para girar e ganhar moedas!",
        "spin.freeSpin": "GIRO GRÁTIS",
        "spin.useTicket": "USAR TICKET",
        "spin.spinNow": "GIRAR AGORA!",
        "spin.spinning": "Girando...",
        "spin.congratulations": "Parabéns!",
        "spin.youWon": "Você ganhou",
        "spin.prizePool": "Prêmios",
        "spin.recentWins": "Vitórias Recentes",
        "spin.noSpins": "Sem giros ainda",
        "spin.remaining": "restantes hoje",
        "spin.available": "tickets disponíveis",
        // Assets
        "assets.title": "Recursos",
        "assets.scripts": "Scripts",
        "assets.mlo": "Mapas MLO",
        "assets.vehicles": "Veículos",
        "assets.clothing": "Roupas",
        "assets.latest": "Últimos Recursos",
        "assets.trending": "Em Alta",
        "assets.popular": "Popular",
        "assets.noResults": "Nenhum recurso encontrado",
        "assets.uploadNew": "Enviar Novo Recurso",
        // Forum
        "forum.title": "Fórum da Comunidade",
        "forum.newThread": "Novo Tópico",
        "forum.categories": "Categorias",
        "forum.threads": "Tópicos",
        "forum.replies": "Respostas",
        "forum.lastActivity": "Última Atividade",
        "forum.pinned": "Fixado",
        "forum.locked": "Bloqueado",
        // Notifications
        "notifications.title": "Notificações",
        "notifications.newAsset": "Novo Recurso Enviado",
        "notifications.markRead": "Marcar como Lido",
        "notifications.clearAll": "Limpar Tudo",
        // Admin
        "admin.dashboard": "Painel Admin",
        "admin.users": "Usuários",
        "admin.assets": "Recursos",
        "admin.banners": "Banners",
        "admin.notifications": "Notificações",
        "admin.settings": "Configurações",
        "admin.sendNotification": "Enviar Notificação",
        // Profile
        "profile.myAssets": "Meus Recursos",
        "profile.myDownloads": "Meus Downloads",
        "profile.myCoins": "Minhas Moedas",
        "profile.editProfile": "Editar Perfil"
    },
    de: {
        "nav.home": "Startseite",
        "nav.scripts": "Skripte",
        "nav.forum": "Forum",
        "nav.upload": "Hochladen",
        "nav.spinWheel": "Glücksrad",
        "common.search": "Suchen",
        "common.download": "Herunterladen",
        "common.coins": "Münzen",
        "spin.title": "Glücksrad",
        "spin.spinNow": "JETZT DREHEN!",
        "spin.congratulations": "Herzlichen Glückwunsch!"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.scripts": "Scripts",
        "nav.forum": "Forum",
        "nav.upload": "Télécharger",
        "nav.spinWheel": "Roue de la Fortune",
        "common.search": "Rechercher",
        "common.download": "Télécharger",
        "common.coins": "Pièces",
        "spin.title": "Roue de la Fortune",
        "spin.spinNow": "TOURNER MAINTENANT!",
        "spin.congratulations": "Félicitations!"
    },
    ru: {
        "nav.home": "Главная",
        "nav.scripts": "Скрипты",
        "nav.forum": "Форум",
        "nav.upload": "Загрузить",
        "nav.spinWheel": "Колесо Удачи",
        "common.search": "Поиск",
        "common.download": "Скачать",
        "common.coins": "Монеты",
        "spin.title": "Колесо Удачи",
        "spin.spinNow": "КРУТИТЬ!",
        "spin.congratulations": "Поздравляем!"
    },
    zh: {
        "nav.home": "首页",
        "nav.scripts": "脚本",
        "nav.forum": "论坛",
        "nav.upload": "上传",
        "nav.spinWheel": "幸运转盘",
        "common.search": "搜索",
        "common.download": "下载",
        "common.coins": "金币",
        "spin.title": "幸运转盘",
        "spin.spinNow": "立即旋转!",
        "spin.congratulations": "恭喜!"
    },
    ja: {
        "nav.home": "ホーム",
        "nav.scripts": "スクリプト",
        "nav.forum": "フォーラム",
        "nav.upload": "アップロード",
        "nav.spinWheel": "ラッキースピン",
        "common.search": "検索",
        "common.download": "ダウンロード",
        "common.coins": "コイン",
        "spin.title": "ラッキースピン",
        "spin.spinNow": "今すぐスピン!",
        "spin.congratulations": "おめでとう!"
    },
    ko: {
        "nav.home": "홈",
        "nav.scripts": "스크립트",
        "nav.forum": "포럼",
        "nav.upload": "업로드",
        "nav.spinWheel": "행운의 룰렛",
        "common.search": "검색",
        "common.download": "다운로드",
        "common.coins": "코인",
        "spin.title": "행운의 룰렛",
        "spin.spinNow": "지금 스핀!",
        "spin.congratulations": "축하합니다!"
    },
    tr: {
        "nav.home": "Ana Sayfa",
        "nav.scripts": "Scriptler",
        "nav.forum": "Forum",
        "nav.upload": "Yükle",
        "nav.spinWheel": "Şans Çarkı",
        "common.search": "Ara",
        "common.download": "İndir",
        "common.coins": "Jeton",
        "spin.title": "Şans Çarkı",
        "spin.spinNow": "ŞİMDİ ÇEVİR!",
        "spin.congratulations": "Tebrikler!"
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.scripts": "السكربتات",
        "nav.forum": "المنتدى",
        "nav.upload": "رفع",
        "nav.spinWheel": "عجلة الحظ",
        "common.search": "بحث",
        "common.download": "تحميل",
        "common.coins": "عملات",
        "spin.title": "عجلة الحظ",
        "spin.spinNow": "!أدر الآن",
        "spin.congratulations": "!تهانينا"
    }
};
function t(key, lang = "en") {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
}
function getLanguageName(code) {
    const names = {
        en: "English",
        id: "Bahasa Indonesia",
        es: "Español",
        pt: "Português",
        de: "Deutsch",
        fr: "Français",
        ru: "Русский",
        zh: "中文",
        ja: "日本語",
        ko: "한국어",
        tr: "Türkçe",
        ar: "العربية"
    };
    return names[code] || code;
}
function getLanguageFlag(code) {
    const flags = {
        en: "🇺🇸",
        id: "🇮🇩",
        es: "🇪🇸",
        pt: "🇧🇷",
        de: "🇩🇪",
        fr: "🇫🇷",
        ru: "🇷🇺",
        zh: "🇨🇳",
        ja: "🇯🇵",
        ko: "🇰🇷",
        tr: "🇹🇷",
        ar: "🇸🇦"
    };
    return flags[code] || "🌐";
}
function getAllLanguages() {
    return [
        "en",
        "id",
        "es",
        "pt",
        "de",
        "fr",
        "ru",
        "zh",
        "ja",
        "ko",
        "tr",
        "ar"
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllLanguages"])();
function LanguageSelector() {
    _s();
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSelector.useEffect": ()=>{
            const saved = localStorage.getItem("language");
            if (saved && languages.includes(saved)) {
                setCurrentLang(saved);
            }
        }
    }["LanguageSelector.useEffect"], []);
    const handleChange = (lang)=>{
        setCurrentLang(lang);
        localStorage.setItem("language", lang);
        window.dispatchEvent(new CustomEvent("languageChange", {
            detail: lang
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "h-9 w-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                className: "bg-card border-border max-h-80 overflow-y-auto scrollbar-thin",
                children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>handleChange(lang),
                        className: currentLang === lang ? "bg-primary/10" : "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanguageFlag"])(lang)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanguageName"])(lang)
                        ]
                    }, lang, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(LanguageSelector, "9jRKEXR7gatqqo1GXm93/v51cv4=");
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/auth-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$global$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/global-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/language-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isLoading, login, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { notifications, unreadCount, setNotifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const [userCoins, setUserCoins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userTickets, setUserTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fetchNotifications = {
                "Header.useEffect.fetchNotifications": async ()=>{
                    try {
                        const res = await fetch("/api/notifications");
                        if (res.ok) {
                            const data = await res.json();
                            setNotifications(data);
                        }
                    } catch (error) {
                        console.error("Failed to fetch notifications:", error);
                    }
                }
            }["Header.useEffect.fetchNotifications"];
            if (user) {
                fetchNotifications();
                const interval = setInterval(fetchNotifications, 30000);
                return ({
                    "Header.useEffect": ()=>clearInterval(interval)
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], [
        user,
        setNotifications
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fetchUserData = {
                "Header.useEffect.fetchUserData": async ()=>{
                    if (!user) return;
                    try {
                        const res = await fetch("/api/user/coins");
                        if (res.ok) {
                            const data = await res.json();
                            setUserCoins(data.coins || 0);
                            setUserTickets(data.tickets || 0);
                        }
                    } catch (error) {
                        console.error("Failed to fetch user data:", error);
                    }
                }
            }["Header.useEffect.fetchUserData"];
            if (user) {
                fetchUserData();
                const interval = setInterval(fetchUserData, 10000);
                return ({
                    "Header.useEffect": ()=>clearInterval(interval)
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border glass px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$global$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalSearch"], {}, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 ml-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {}, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/spin-wheel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "gap-2 text-muted-foreground hover:text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-4 w-4 text-primary",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "9 22 9 12 15 12 15 22"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: userTickets
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Tickets"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "gap-2 text-muted-foreground hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 text-yellow-500",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "6",
                                                fill: "none",
                                                stroke: "white",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "12",
                                                y: "15",
                                                fontSize: "8",
                                                fill: "white",
                                                textAnchor: "middle",
                                                fontWeight: "bold",
                                                children: "C"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: userCoins
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: "Coins"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "relative text-muted-foreground hover:text-foreground",
                                    "aria-label": `Notifications${unreadCount > 0 ? ` (${unreadCount} unread)` : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-pulse",
                                            children: unreadCount
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-80 glass",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border-b border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-foreground",
                                                children: "Notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: unreadCount > 0 ? `You have ${unreadCount} unread messages` : "No new notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-80 overflow-y-auto",
                                        children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 text-center text-sm text-muted-foreground",
                                            children: "No notifications yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this) : notifications.slice(0, 5).map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "p-3 cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "h-5 w-5 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-foreground",
                                                                    children: notif.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: notif.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this)
                                            }, notif.id, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-24 bg-secondary/50 animate-pulse rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "rounded-xl h-10 px-3 gap-2 hover:bg-secondary/50",
                                    "aria-label": `User menu for ${user.username}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: user.avatar || "/placeholder.svg",
                                            alt: user.username,
                                            className: "h-7 w-7 rounded-full object-cover ring-2 ring-primary/20"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline font-medium",
                                            children: user.username
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        user.membership === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "h-4 w-4 text-destructive"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 174,
                                            columnNumber: 49
                                        }, this),
                                        user.membership === "vip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                            className: "h-4 w-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 175,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-56 glass",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border-b border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: user.username
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-primary capitalize",
                                                children: [
                                                    user.membership,
                                                    " Member"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                " Dashboard"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard/settings",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                " Settings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    user.membership === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/admin",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    className: "gap-2 cursor-pointer text-destructive",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Admin Panel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: logout,
                                        className: "gap-2 cursor-pointer text-destructive",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            " Log out"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: login,
                        className: "bg-[#5865F2] hover:bg-[#4752C4] text-white gap-2 rounded-xl h-10 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.076.076 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Login with Discord"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/header.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Header, "gLn+KsPyzHmDvy5k+tBb+vd3NEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnouncementBar",
    ()=>AnnouncementBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnnouncementBar() {
    _s();
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnnouncementBar.useEffect": ()=>{
            fetchAnnouncements();
        }
    }["AnnouncementBar.useEffect"], []);
    // Auto-rotate announcements
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnnouncementBar.useEffect": ()=>{
            if (announcements.length <= 1) return;
            const interval = setInterval({
                "AnnouncementBar.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "AnnouncementBar.useEffect.interval": (prev)=>(prev + 1) % announcements.length
                    }["AnnouncementBar.useEffect.interval"]);
                }
            }["AnnouncementBar.useEffect.interval"], 8000);
            return ({
                "AnnouncementBar.useEffect": ()=>clearInterval(interval)
            })["AnnouncementBar.useEffect"];
        }
    }["AnnouncementBar.useEffect"], [
        announcements.length
    ]);
    const fetchAnnouncements = async ()=>{
        try {
            const res = await fetch("/api/announcements");
            const data = await res.json();
            setAnnouncements(data.announcements || []);
        } catch (error) {
            console.error("Failed to fetch announcements:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleDismiss = (id)=>{
        setDismissed((prev)=>new Set(prev).add(id));
    };
    const visibleAnnouncements = announcements.filter((a)=>!dismissed.has(a.id));
    if (isLoading || visibleAnnouncements.length === 0) return null;
    const current = visibleAnnouncements[currentIndex % visibleAnnouncements.length];
    if (!current) return null;
    const getTypeStyles = (type)=>{
        switch(type){
            case "success":
                return {
                    bg: "from-emerald-600/90 via-teal-600/90 to-cyan-600/90",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
                    iconColor: "text-emerald-200"
                };
            case "warning":
                return {
                    bg: "from-amber-600/90 via-orange-600/90 to-yellow-600/90",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                    iconColor: "text-amber-200"
                };
            case "error":
                return {
                    bg: "from-red-600/90 via-rose-600/90 to-pink-600/90",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                    iconColor: "text-red-200"
                };
            case "promo":
                return {
                    bg: "from-cyan-600/90 via-teal-500/90 to-emerald-500/90",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                    iconColor: "text-cyan-200"
                };
            default:
                return {
                    bg: "from-cyan-600/90 via-teal-600/90 to-cyan-700/90",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
                    iconColor: "text-cyan-200"
                };
        }
    };
    const typeStyles = getTypeStyles(current.type);
    const IconComponent = typeStyles.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full overflow-hidden", "bg-gradient-to-r", current.bg_color || typeStyles.bg),
        style: current.bg_color ? {
            background: current.bg_color
        } : undefined,
        children: [
            current.type === "promo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center gap-3 px-4 py-2.5 md:py-3",
                children: [
                    visibleAnnouncements.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex((prev)=>(prev - 1 + visibleAnnouncements.length) % visibleAnnouncements.length),
                        className: "absolute left-2 p-1 rounded-full hover:bg-white/10 transition-colors",
                        "aria-label": "Previous announcement",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-4 h-4 text-white/70"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0 p-1.5 rounded-full bg-white/10 backdrop-blur-sm", typeStyles.iconColor),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                            className: "w-4 h-4",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    current.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline-flex px-2 py-0.5 text-xs font-bold rounded-full bg-white/20 text-white uppercase tracking-wide",
                        children: current.badge
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm md:text-base font-medium text-center line-clamp-1", current.text_color || "text-white"),
                        style: current.text_color ? {
                            color: current.text_color
                        } : undefined,
                        children: [
                            current.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold mr-1",
                                children: current.title
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                                lineNumber: 145,
                                columnNumber: 29
                            }, this),
                            current.message
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    current.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: current.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hidden sm:inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-white/20 hover:bg-white/30 text-white transition-all",
                        children: [
                            "Learn More",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-3 h-3",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    visibleAnnouncements.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex((prev)=>(prev + 1) % visibleAnnouncements.length),
                        className: "absolute right-10 p-1 rounded-full hover:bg-white/10 transition-colors",
                        "aria-label": "Next announcement",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 text-white/70"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDismiss(current.id),
                        className: "absolute right-2 p-1.5 rounded-full hover:bg-white/10 transition-colors",
                        "aria-label": "Dismiss announcement",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4 text-white/70 hover:text-white"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            visibleAnnouncements.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1",
                children: visibleAnnouncements.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex(idx),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 rounded-full transition-all", idx === currentIndex % visibleAnnouncements.length ? "bg-white w-3" : "bg-white/40 hover:bg-white/60"),
                        "aria-label": `Go to announcement ${idx + 1}`
                    }, idx, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/announcement-bar.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(AnnouncementBar, "kORA6Pn716k3fGL/SFioQGkKk/I=");
_c = AnnouncementBar;
var _c;
__turbopack_context__.k.register(_c, "AnnouncementBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function formatStatNumber(num, suffix = "") {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M${suffix}`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K${suffix}`;
    }
    if (num > 0) {
        return `${num}${suffix}`;
    }
    return `0${suffix}`;
}
function HeroSection() {
    _s();
    const { stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden rounded-2xl glass border-primary/20 mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-8 py-12 md:px-12 md:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOGO"] || "/placeholder.svg",
                                            alt: "FiveM Tools V7",
                                            className: "h-16 w-16 object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary border border-primary/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "The #1 FiveM Resource Hub"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full",
                                                    children: "2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-4 text-balance",
                                    children: [
                                        "Premium Assets for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "Next-Gen Servers"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 49,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground md:text-xl max-w-xl mb-6",
                                    children: "Access thousands of curated Scripts, MLOs, Vehicles, and EUPs. Optimized for all major frameworks."
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Supported:"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAMEWORKS"].filter((f)=>f.id !== "standalone").map((framework)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50",
                                                    title: framework.name,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: framework.logo || "/placeholder.svg",
                                                            alt: framework.name,
                                                            className: "h-6 w-6 object-contain rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-foreground hidden sm:inline",
                                                            children: framework.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, framework.id, true, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/scripts",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-xl h-12 px-6 glow-sm",
                                                children: [
                                                    "Browse All Assets",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/membership",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-border hover:bg-secondary rounded-xl h-12 px-6 bg-transparent",
                                                children: "Get Premium Access"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 lg:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-xl p-4 text-center card-hover",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-6 w-6 text-primary mx-auto mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-foreground",
                                            children: stats.totalDownloads > 0 ? formatStatNumber(stats.totalDownloads, "+") : "0+"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Downloads"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-xl p-4 text-center card-hover",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-6 w-6 text-accent mx-auto mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-foreground",
                                            children: stats.totalMembers > 0 ? formatStatNumber(stats.totalMembers) : "0"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Members"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-xl p-4 text-center card-hover",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOGO"] || "/placeholder.svg",
                                            alt: "Assets",
                                            className: "h-6 w-6 mx-auto mb-2 object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-foreground",
                                            children: stats.totalAssets > 0 ? `${stats.totalAssets}+` : "0+"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Assets"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-xl p-4 text-center card-hover",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-6 w-6 text-chart-5 mx-auto mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-foreground",
                                            children: "4.9"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/hero-section.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "ZUFlhztXpmq4H4mZdYhjWZOredg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrameworkBadge",
    ()=>FrameworkBadge,
    "FrameworkSelector",
    ()=>FrameworkSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function FrameworkSelector({ selected, onSelect, showAll = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        children: [
            showAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelect("all"),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all", selected === "all" ? "bg-primary text-primary-foreground glow-sm" : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"),
                children: "All Frameworks"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAMEWORKS"].map((framework)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelect(framework.id),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all", selected === framework.id ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: framework.logo || "/placeholder.svg",
                            alt: framework.name,
                            className: "h-5 w-5 rounded object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        framework.name
                    ]
                }, framework.id, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = FrameworkSelector;
function FrameworkBadge({ framework }) {
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAMEWORKS"].find((f)=>f.id === framework);
    if (!info) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium",
        style: {
            backgroundColor: `${info.color}20`,
            color: info.color
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: info.logo || "/placeholder.svg",
                alt: info.name,
                className: "h-4 w-4 rounded object-contain"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            info.name
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = FrameworkBadge;
var _c, _c1;
__turbopack_context__.k.register(_c, "FrameworkSelector");
__turbopack_context__.k.register(_c1, "FrameworkBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssetCard",
    ()=>AssetCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$framework$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/framework-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/coin-icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function SmartImage({ src, alt, className, fill, priority }) {
    _s();
    const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(src);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fallbackImage = "/fivem-asset-thumbnail.jpg";
    const handleError = ()=>{
        if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackImage);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: imgSrc || fallbackImage,
        alt: alt,
        fill: fill,
        className: className,
        unoptimized: true,
        priority: priority,
        onError: handleError
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(SmartImage, "Fl7GLmlkY+yJdGTcKvX++ZiOFBo=");
_c = SmartImage;
function AssetCard({ asset, variant = "default" }) {
    const imageUrl = asset.thumbnail || asset.image || "/fivem-script.jpg";
    const downloads = asset.downloads || 0;
    const rating = asset.rating || 5.0;
    const price = asset.price || (asset.coinPrice === 0 ? "free" : "premium");
    const coinPrice = asset.coinPrice || asset.coin_price || 0;
    const author = typeof asset.author === "string" ? asset.author : asset.author?.username || "Unknown";
    if (variant === "compact") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/asset/${asset.id}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group flex items-center gap-4 glass rounded-xl p-3 glass-hover",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-16 w-16 overflow-hidden rounded-lg shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmartImage, {
                            src: imageUrl,
                            alt: asset.title,
                            fill: true,
                            className: "object-cover transition-transform duration-300 group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-foreground truncate group-hover:text-primary transition-colors",
                                children: asset.title
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1 text-xs text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            downloads.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "h-3 w-3 fill-warning text-warning"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            rating.toFixed(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    price === "free" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "bg-success/20 text-success border-success/30",
                        children: "FREE"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "bg-primary/20 text-primary border-primary/30 flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinIcon"], {
                                size: "xs"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            coinPrice
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/asset/${asset.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative overflow-hidden rounded-2xl glass glass-hover",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/10] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmartImage, {
                            src: imageUrl,
                            alt: asset.title,
                            fill: true,
                            className: "object-cover transition-transform duration-500 group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-3 top-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$framework$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrameworkBadge"], {
                                    framework: asset.framework
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                asset.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "bg-success/20 text-success border-0 gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        "Verified"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 top-3",
                            children: price === "free" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                className: "bg-success text-success-foreground border-0",
                                children: "FREE"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                className: "bg-primary text-primary-foreground border-0 glow-sm flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$coin$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinIcon"], {
                                        size: "xs"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    coinPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex items-center gap-2 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "uppercase font-medium text-primary/80",
                                    children: asset.category
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1 w-1 rounded-full bg-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "v",
                                        asset.version || "1.0.0"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1",
                            children: asset.title
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-sm text-muted-foreground line-clamp-2",
                            children: asset.description
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: downloads.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "h-3.5 w-3.5 fill-warning text-warning"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: rating.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: [
                                        "by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground",
                                            children: author
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                            lineNumber: 174,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c1 = AssetCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "SmartImage");
__turbopack_context__.k.register(_c1, "AssetCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingSection",
    ()=>TrendingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$asset$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TrendingSection() {
    _s();
    const [assets, setAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrendingSection.useEffect": ()=>{
            async function fetchTrending() {
                try {
                    const res = await fetch("/api/assets?limit=4");
                    if (res.ok) {
                        const data = await res.json();
                        const sorted = (data.items || []).sort({
                            "TrendingSection.useEffect.fetchTrending.sorted": (a, b)=>b.downloads - a.downloads
                        }["TrendingSection.useEffect.fetchTrending.sorted"]);
                        setAssets(sorted.slice(0, 4));
                    }
                } catch (error) {
                    console.error("Failed to fetch trending:", error);
                } finally{
                    setIsLoading(false);
                }
            }
            fetchTrending();
        }
    }["TrendingSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-10 rounded-xl bg-chart-5/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-5 w-5 text-chart-5"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-foreground",
                                        children: "Trending this Week"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Most downloaded resources"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/scripts",
                        className: "flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors",
                        children: [
                            "View all",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-2xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[16/10] bg-secondary/50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-1/3 bg-secondary/50 rounded animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-2/3 bg-secondary/50 rounded animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-full bg-secondary/50 rounded animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
                children: assets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$asset$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetCard"], {
                        asset: asset
                    }, asset.id, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/trending-section.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(TrendingSection, "tkJvns2uPHWd8BjKiJ42s6FJvoE=");
_c = TrendingSection;
var _c;
__turbopack_context__.k.register(_c, "TrendingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSection",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StatsSection() {
    _s();
    const { stats, setStats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatsSection.useEffect": ()=>{
            let mounted = true;
            async function fetchStats() {
                try {
                    const res = await fetch('/api/stats');
                    if (!res.ok) throw new Error('Failed to fetch');
                    const data = await res.json();
                    if (mounted) {
                        setStats({
                            totalMembers: data.users || 0,
                            totalAssets: data.assets || 0,
                            totalDownloads: data.downloads || 0,
                            totalPosts: data.posts || 0,
                            onlineUsers: Math.floor((data.users || 0) * 0.05)
                        });
                    }
                } catch (error) {
                    console.error('Stats fetch error:', error);
                }
            }
            fetchStats();
            const interval = setInterval(fetchStats, 30000);
            return ({
                "StatsSection.useEffect": ()=>{
                    mounted = false;
                    clearInterval(interval);
                }
            })["StatsSection.useEffect"];
        }
    }["StatsSection.useEffect"], [
        setStats
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-2xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-foreground mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "h-5 w-5 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    "Platform Stats"
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Total Assets"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-foreground",
                                                children: stats.totalAssets.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-success font-medium",
                                children: "+12%"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-xl bg-success/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-5 w-5 text-success"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Downloads"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-foreground",
                                                children: stats.totalDownloads.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-success font-medium",
                                children: "+24%"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-5 w-5 text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-foreground",
                                                children: stats.totalMembers.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-success font-medium",
                                children: "+8%"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-xl bg-warning/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-5 w-5 text-warning"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full status-online"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Online Now"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-foreground",
                                                children: stats.onlineUsers
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-warning font-medium px-2 py-0.5 bg-warning/20 rounded-full",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/stats-section.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(StatsSection, "i5vdwEkxdhQieqhcMPNgZVYHIrk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"]
    ];
});
_c = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoriesSection",
    ()=>CategoriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const categories = [
    {
        name: "Scripts",
        description: "Lua scripts for your server",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        href: "/scripts",
        color: "from-primary/20 to-primary/5",
        iconColor: "text-primary",
        borderColor: "border-primary/20 hover:border-primary/40"
    },
    {
        name: "Maps & MLO",
        description: "Custom interiors and maps",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        href: "/mlo",
        color: "from-chart-5/20 to-chart-5/5",
        iconColor: "text-chart-5",
        borderColor: "border-chart-5/20 hover:border-chart-5/40"
    },
    {
        name: "Vehicles",
        description: "Cars, bikes, and more",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        href: "/vehicles",
        color: "from-info/20 to-info/5",
        iconColor: "text-info",
        borderColor: "border-info/20 hover:border-info/40"
    },
    {
        name: "EUP & Clothing",
        description: "Uniforms and outfits",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"],
        href: "/clothing",
        color: "from-warning/20 to-warning/5",
        iconColor: "text-warning",
        borderColor: "border-warning/20 hover:border-warning/40"
    }
];
function CategoriesSection() {
    _s();
    const { stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"])();
    // Distribute assets across categories roughly
    const assetCounts = {
        Scripts: Math.floor(stats.totalAssets * 0.35),
        "Maps & MLO": Math.floor(stats.totalAssets * 0.15),
        Vehicles: Math.floor(stats.totalAssets * 0.3),
        "EUP & Clothing": Math.floor(stats.totalAssets * 0.2)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-5 w-5 text-accent"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-foreground",
                                    children: "Browse Categories"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Find the perfect resource"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: category.href,
                        className: `group relative overflow-hidden rounded-2xl glass p-5 card-hover ${category.borderColor}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-80 transition-opacity`
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14 w-14 rounded-xl bg-background/50 backdrop-blur flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(category.icon, {
                                            className: `h-7 w-7 ${category.iconColor}`
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
                                                        children: category.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mt-0.5",
                                                children: category.description
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-foreground",
                                                        children: [
                                                            assetCounts[category.name] || 0,
                                                            "+"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "resources"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, category.name, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/categories-section.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(CategoriesSection, "ZUFlhztXpmq4H4mZdYhjWZOredg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatsStore"]
    ];
});
_c = CategoriesSection;
var _c;
__turbopack_context__.k.register(_c, "CategoriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecentAssets",
    ()=>RecentAssets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$asset$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/asset-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RecentAssets() {
    _s();
    const [assets, setAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentAssets.useEffect": ()=>{
            async function fetchRecent() {
                try {
                    const res = await fetch("/api/assets?limit=4");
                    if (res.ok) {
                        const data = await res.json();
                        setAssets(data.items || []);
                    }
                } catch (error) {
                    console.error("Failed to fetch recent:", error);
                } finally{
                    setIsLoading(false);
                }
            }
            fetchRecent();
        }
    }["RecentAssets.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-10 rounded-xl bg-info/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-5 w-5 text-info"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-foreground",
                                        children: "Recently Added"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Latest uploads to the platform"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/scripts",
                        className: "flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors",
                        children: [
                            "View all",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-2xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[16/10] bg-secondary/50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-1/3 bg-secondary/50 rounded animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-2/3 bg-secondary/50 rounded animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2",
                children: assets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$components$2f$asset$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetCard"], {
                        asset: asset
                    }, asset.id, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/recent-assets.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(RecentAssets, "tkJvns2uPHWd8BjKiJ42s6FJvoE=");
_c = RecentAssets;
var _c;
__turbopack_context__.k.register(_c, "RecentAssets");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityFeed",
    ()=>ActivityFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const iconMap = {
    download: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
        color: "text-primary"
    },
    post: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        color: "text-success"
    },
    like: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: "text-chart-5"
    },
    join: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
        color: "text-accent"
    },
    review: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        color: "text-warning"
    }
};
function ActivityFeed() {
    _s();
    const [activities, setActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityFeed.useEffect": ()=>{
            async function fetchActivity() {
                try {
                    const res = await fetch("/api/activity");
                    if (res.ok) {
                        const data = await res.json();
                        setActivities(data);
                    }
                } catch (error) {
                    console.error("Failed to fetch activity:", error);
                } finally{
                    setIsLoading(false);
                }
            }
            fetchActivity();
            const interval = setInterval(fetchActivity, 15000);
            return ({
                "ActivityFeed.useEffect": ()=>clearInterval(interval)
            })["ActivityFeed.useEffect"];
        }
    }["ActivityFeed.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass rounded-2xl p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-foreground mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "h-5 w-5 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        "Activity Feed"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-lg bg-secondary/80 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-3/4 bg-secondary/80 rounded animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-1/4 bg-secondary/80 rounded animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-2xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-foreground mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "h-5 w-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    "Activity Feed",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto h-2 w-2 rounded-full status-online animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: activities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground text-center py-4",
                    children: "No recent activity"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this) : activities.map((activity)=>{
                    const { icon: Icon, color } = iconMap[activity.type] || iconMap.download;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-8 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `h-4 w-4 ${color}`
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                    lineNumber: 88,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: activity.user.username
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: [
                                                    " ",
                                                    activity.action
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: new Date(activity.createdAt).toLocaleTimeString()
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this)
                        ]
                    }, activity.id, true, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                        lineNumber: 86,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/forum",
                className: "block w-full mt-4 text-sm text-primary hover:text-primary/80 transition-colors text-center",
                children: "View all activity"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/activity-feed.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(ActivityFeed, "+Uq6Y0DW0zGjauQdh7pBJldCtpU=");
_c = ActivityFeed;
var _c;
__turbopack_context__.k.register(_c, "ActivityFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SponsorBanner",
    ()=>SponsorBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SponsorBanner() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const activeSponsors = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPONSORS"].filter((s)=>s.isActive);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SponsorBanner.useEffect": ()=>{
            if (activeSponsors.length <= 1) return;
            const interval = setInterval({
                "SponsorBanner.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "SponsorBanner.useEffect.interval": (prev)=>(prev + 1) % activeSponsors.length
                    }["SponsorBanner.useEffect.interval"]);
                }
            }["SponsorBanner.useEffect.interval"], 8000);
            return ({
                "SponsorBanner.useEffect": ()=>clearInterval(interval)
            })["SponsorBanner.useEffect"];
        }
    }["SponsorBanner.useEffect"], [
        activeSponsors.length
    ]);
    if (!isVisible || activeSponsors.length === 0) return null;
    const sponsor = activeSponsors[currentIndex];
    const href = sponsor.url || "#";
    const isExternal = Boolean(sponsor.url);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-xl glass border border-primary/20 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsVisible(false),
                className: "absolute top-2 right-2 z-10 p-1.5 rounded-lg bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-2 z-10 px-2 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium",
                children: "Sponsor"
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                ...isExternal ? {
                    target: "_blank",
                    rel: "noopener noreferrer"
                } : {},
                className: "block relative aspect-[4/1] sm:aspect-[5/1] md:aspect-[6/1] group",
                children: [
                    sponsor.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: sponsor.image,
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: sponsor.image || "/placeholder.svg",
                        alt: sponsor.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2 text-sm font-medium text-foreground",
                            children: [
                                "Visit ",
                                sponsor.name,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                                    lineNumber: 55,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            activeSponsors.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5",
                children: activeSponsors.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex(i),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$APPLICATION__DECRYPT__FULL__NO__FXAP$2f$TOOLS__WEBSITE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1.5 rounded-full transition-all", i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/50")
                    }, i, false, {
                        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/components/sponsor-banner.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(SponsorBanner, "YDI25CSZeiPzfFtTKvU4WOaG+BE=");
_c = SponsorBanner;
var _c;
__turbopack_context__.k.register(_c, "SponsorBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Pictures_APPLICATION%20DECRYPT%20FULL%20NO%20FXAP_TOOLS%20WEBSITE_f15d32b3._.js.map