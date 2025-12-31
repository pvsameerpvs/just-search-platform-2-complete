module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[root-of-the-server]__efb03326._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript)");
    });
});
}),
"[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/node-fetch/src/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/98c58_node-fetch_src_utils_multipart-parser_4767f434.js",
  "server/chunks/98c58_fde48a7a._.js",
  "server/chunks/[externals]__87f6e720._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Projects/JustSearch/just-search-lead-automation/just-search-platform-2-complete/node_modules/node-fetch/src/index.js [app-route] (ecmascript)");
    });
});
}),
];