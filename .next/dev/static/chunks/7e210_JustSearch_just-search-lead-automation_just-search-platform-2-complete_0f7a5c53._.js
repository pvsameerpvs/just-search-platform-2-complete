(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const items = [
    {
        href: "/dashboard",
        label: "Dashboard"
    },
    {
        href: "/lead-machine",
        label: "Lead Generation"
    },
    {
        href: "/reports",
        label: "Reports"
    },
    {
        href: "/settings",
        label: "Settings"
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 shrink-0 border-r border-white/10 bg-black/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: "Client CRM"
                    }, void 0, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-white/60",
                        children: "Just Search"
                    }, void 0, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "px-2 pb-4",
                children: items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: it.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10", pathname === it.href && "bg-white/10 text-white"),
                        children: it.label
                    }, it.href, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/lib/utils.ts [app-client] (ecmascript)");
;
;
function Button({ className, variant = "primary", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition", "focus:outline-none focus:ring-2 focus:ring-jsOrange-500/50 disabled:opacity-50 disabled:pointer-events-none", variant === "primary" && "bg-jsOrange-500 hover:bg-jsOrange-600 text-white shadow-lg shadow-jsOrange-500/20", variant === "secondary" && "bg-white/5 hover:bg-white/10 text-white border border-white/10", variant === "ghost" && "bg-transparent hover:bg-white/5 text-white/70 hover:text-white", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/button.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Topbar",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function Topbar({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between border-b border-white/10 bg-black/10 px-6 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-lg font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/60 text-sm",
                        children: "Client Frontend CRM"
                    }, void 0, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "secondary",
                onClick: ()=>fetch("/api/auth/logout", {
                        method: "POST"
                    }).then(()=>location.href = "/"),
                children: "Logout"
            }, void 0, false, {
                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Topbar;
var _c;
__turbopack_context__.k.register(_c, "Topbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$shell$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$shell$2f$topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/topbar.tsx [app-client] (ecmascript)");
;
;
;
function AppShell({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$shell$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$shell$2f$topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Topbar"], {
                        title: title
                    }, void 0, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-white/10 bg-white/5 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-5 border-b border-white/10", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c1 = CardHeader;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c2 = CardContent;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c3 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c4 = CardDescription;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardContent");
__turbopack_context__.k.register(_c3, "CardTitle");
__turbopack_context__.k.register(_c4, "CardDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50", "focus:outline-none focus:ring-2 focus:ring-white/25", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/input.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/lib/utils.ts [app-client] (ecmascript)");
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-white/80", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/label.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Label;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadMachinePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$shell$2f$app$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/shell/app-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LeadMachinePage() {
    _s();
    const [industries, setIndustries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [areas, setAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [industryOptions, setIndustryOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [areaOptions, setAreaOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [pulled, setPulled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hello, we have an offer for your business. Please reply for more details.");
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("whatsapp");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadMachinePage.useEffect": ()=>{
            fetch("/api/leads/filters").then({
                "LeadMachinePage.useEffect": (r)=>r.json()
            }["LeadMachinePage.useEffect"]).then({
                "LeadMachinePage.useEffect": (d)=>{
                    setIndustryOptions(d.industries ?? []);
                    setAreaOptions(d.areas ?? []);
                }
            }["LeadMachinePage.useEffect"]).catch({
                "LeadMachinePage.useEffect": ()=>{}
            }["LeadMachinePage.useEffect"]);
        }
    }["LeadMachinePage.useEffect"], []);
    const canPull = industries.length > 0 && areas.length > 0;
    async function pull() {
        setLoading(true);
        const res = await fetch("/api/leads/pull", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                industries,
                areas,
                limit
            })
        });
        const data = await res.json().catch(()=>({}));
        setPulled(data.leads ?? []);
        setLoading(false);
    }
    const selectedLeadIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadMachinePage.useMemo[selectedLeadIds]": ()=>pulled.map({
                "LeadMachinePage.useMemo[selectedLeadIds]": (l)=>l.lead_id
            }["LeadMachinePage.useMemo[selectedLeadIds]"])
    }["LeadMachinePage.useMemo[selectedLeadIds]"], [
        pulled
    ]);
    async function send() {
        if (pulled.length === 0) return alert("Pull leads first");
        setLoading(true);
        // Create campaign
        const campRes = await fetch("/api/campaigns/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                industries,
                areas,
                total_leads: pulled.length
            })
        });
        const camp = await campRes.json().catch(()=>({}));
        const res = await fetch("/api/messages/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client_id: camp.client_id,
                campaign_id: camp.campaign_id,
                channel,
                message,
                lead_ids: selectedLeadIds
            })
        });
        const out = await res.json().catch(()=>({}));
        setLoading(false);
        if (!res.ok) return alert(out?.error ?? "Send failed");
        location.href = `/results?campaign_id=${encodeURIComponent(camp.campaign_id)}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$shell$2f$app$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        title: "Lead Generation Machine",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "lg:col-span-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-semibold",
                                    children: "Filters"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/60 text-sm",
                                    children: "Select industry + area, then pull leads."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: "Industries (Multi Select)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 max-h-56 overflow-auto space-y-2 pr-2",
                                                    children: industryOptions.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-white/80 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: industries.includes(it.name),
                                                                    onChange: (e)=>setIndustries((p)=>e.target.checked ? [
                                                                                ...p,
                                                                                it.name
                                                                            ] : p.filter((x)=>x !== it.name))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 23
                                                                }, this),
                                                                it.name
                                                            ]
                                                        }, it.name, true, {
                                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: "Areas (Multi Select)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 max-h-56 overflow-auto space-y-2 pr-2",
                                                    children: areaOptions.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-white/80 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: areas.includes(it.name),
                                                                    onChange: (e)=>setAreas((p)=>e.target.checked ? [
                                                                                ...p,
                                                                                it.name
                                                                            ] : p.filter((x)=>x !== it.name))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 23
                                                                }, this),
                                                                it.name
                                                            ]
                                                        }, it.name, true, {
                                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: "Limit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    value: limit,
                                                    onChange: (e)=>setLimit(parseInt(e.target.value || "0", 10))
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2 flex gap-3 justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                disabled: !canPull || loading,
                                                onClick: pull,
                                                children: loading ? "Working..." : "Pull Data"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-white/10 bg-white/5 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white/70 text-sm mb-2",
                                            children: [
                                                "Leads Found: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "text-white",
                                                    children: pulled.length
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 72
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm text-white/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "text-white/60",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "py-2 text-left",
                                                                    children: "Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "py-2 text-left",
                                                                    children: "Industry"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "py-2 text-left",
                                                                    children: "Area"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "py-2 text-left",
                                                                    children: "WhatsApp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "py-2 text-left",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: pulled.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                className: "py-3",
                                                                children: "No leads pulled yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this) : pulled.slice(0, 50).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-white/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2",
                                                                        children: l.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2",
                                                                        children: l.industry
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2",
                                                                        children: l.area
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2",
                                                                        children: l.whatsapp
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2",
                                                                        children: l.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, l.lead_id, true, {
                                                                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-semibold",
                                    children: "Message Details"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/60 text-sm",
                                    children: "Compose message and send."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Channel"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: channel === "whatsapp" ? "primary" : "secondary",
                                            onClick: ()=>setChannel("whatsapp"),
                                            children: "WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: channel === "email" ? "primary" : "secondary",
                                            onClick: ()=>setChannel("email"),
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: channel === "both" ? "primary" : "secondary",
                                            onClick: ()=>setChannel("both"),
                                            children: "Both"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full min-h-40 rounded-md border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25",
                                    value: message,
                                    onChange: (e)=>setMessage(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-white/60",
                                    children: [
                                        "Characters: ",
                                        message.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$JustSearch$2f$just$2d$search$2d$lead$2d$automation$2f$just$2d$search$2d$platform$2d$2$2d$complete$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    disabled: pulled.length === 0 || loading,
                                    onClick: send,
                                    className: "w-full",
                                    children: loading ? "Sending..." : "Pull Data & Send Messages"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/app/lead-machine/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(LeadMachinePage, "UcFLVpb8Xjp4JKeIohk0QwMqgmA=");
_c = LeadMachinePage;
var _c;
__turbopack_context__.k.register(_c, "LeadMachinePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=7e210_JustSearch_just-search-lead-automation_just-search-platform-2-complete_0f7a5c53._.js.map