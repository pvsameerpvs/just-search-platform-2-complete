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
]);

//# sourceMappingURL=7e210_JustSearch_just-search-lead-automation_just-search-platform-2-complete_4ac39c3f._.js.map