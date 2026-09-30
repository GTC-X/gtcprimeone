module.exports = [
"[project]/components/Website.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Website
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/fontawesome-svg-core/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].autoAddCss = false;
const serviceIcons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faLayerGroup"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faNetworkWired"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faShieldHalved"]
];
const audienceIcons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBuildingColumns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBriefcase"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faUserTie"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faDisplay"]
];
const marketIcons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCoins"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGem"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCube"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faChartSimple"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faClock"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBuilding"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTableCellsLarge"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBolt"]
];
function Icon({ icon, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
        icon: icon,
        "aria-hidden": "true",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 13,
        columnNumber: 41
    }, this);
}
function Reveal({ children, className = '', delay = 0, ...props }) {
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 1,
            y: 0
        },
        whileInView: reduced ? undefined : {
            opacity: [
                0,
                1
            ],
            y: [
                24,
                0
            ]
        },
        viewport: {
            once: true,
            amount: 0.12
        },
        transition: {
            duration: 0.65,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: className,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 14,
        columnNumber: 107
    }, this);
}
function Kicker({ children, light = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `kicker ${light ? 'text-white/70' : 'text-primary'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 15,
                columnNumber: 114
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 15,
        columnNumber: 50
    }, this);
}
function Heading({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `whitespace-pre-line ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 16,
        columnNumber: 52
    }, this);
}
function Logo({ inverse = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: `brand-logo ${inverse ? 'inverse' : ''}`,
        src: "/assets/gtc-prime-logo.webp",
        width: "700",
        height: "149",
        alt: "GTC Prime"
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 17,
        columnNumber: 41
    }, this);
}
function Website({ language = 'en', page = 'home' }) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["content"][language];
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const href = (target = 'home', lang = language)=>`${lang === 'ar' ? '/ar' : ''}${target === 'home' ? '/' : `/${target}/`}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        setMenu(false);
    }, [
        language,
        page
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const close = (e)=>{
            if (e.key === 'Escape') {
                setMenu(false);
                menuButton.current?.focus();
            }
        };
        document.addEventListener('keydown', close);
        return ()=>document.removeEventListener('keydown', close);
    }, []);
    const nav = [
        'about',
        'liquidity',
        'connectivity',
        'risk-management'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: language === 'ar' ? 'font-arabic' : '',
        dir: language === 'ar' ? 'rtl' : 'ltr',
        lang: language,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: "skip-link",
                children: t.skip
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 24,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "site-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shell header-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href(),
                                "aria-label": "GTC Prime",
                                className: "logo-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 26,
                                    columnNumber: 69
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 26,
                                columnNumber: 4
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": language === 'ar' ? 'القائمة الرئيسية' : 'Main navigation',
                                className: "desktop-nav",
                                children: nav.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: href(key),
                                        "aria-current": page === key ? 'page' : undefined,
                                        children: t.nav[key]
                                    }, key, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 27,
                                        columnNumber: 113
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 27,
                                columnNumber: 4
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "language-control",
                                        href: href(page, language === 'en' ? 'ar' : 'en'),
                                        "aria-label": t.language,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGlobe"]
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 28,
                                                columnNumber: 139
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: language === 'en' ? 'العربية' : 'EN'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 28,
                                                columnNumber: 161
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 28,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: href('contact'),
                                        className: "button button-primary header-cta",
                                        children: t.talk
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 28,
                                        columnNumber: 213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: menuButton,
                                        onClick: ()=>setMenu(!menu),
                                        "aria-expanded": menu,
                                        "aria-controls": "mobile-nav",
                                        "aria-label": menu ? t.close : t.menu,
                                        className: "menu-toggle",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            icon: menu ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faXmark"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBars"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 28,
                                            columnNumber: 461
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 28,
                                        columnNumber: 302
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 28,
                                columnNumber: 4
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 25,
                        columnNumber: 35
                    }, this),
                    menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        id: "mobile-nav",
                        className: "mobile-nav",
                        "aria-label": t.menu,
                        children: [
                            [
                                'home',
                                ...nav,
                                'contact'
                            ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href(key),
                                    onClick: ()=>setMenu(false),
                                    "aria-current": page === key ? 'page' : undefined,
                                    children: t.nav[key]
                                }, key, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 29,
                                    columnNumber: 116
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://mygtcportal.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: t.account
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 29,
                                columnNumber: 242
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 29,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 25,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main",
                children: page === 'home' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Home, {
                    t: t,
                    href: href
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 30,
                    columnNumber: 34
                }, this) : page === 'about' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(About, {
                    t: t,
                    href: href
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 30,
                    columnNumber: 75
                }, this) : page === 'contact' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {
                    t: t
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 30,
                    columnNumber: 119
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Service, {
                    t: t,
                    page: page,
                    href: href
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 30,
                    columnNumber: 136
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 30,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 31,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
function HeroArtwork({ t }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        amount: 0.1
    });
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const moving = visible && !reduced;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        ref: ref,
        className: "hero-art",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "hero-float",
                initial: false,
                animate: moving ? {
                    y: [
                        0,
                        -16,
                        -5,
                        0
                    ],
                    x: [
                        0,
                        6,
                        -4,
                        0
                    ],
                    rotate: [
                        0,
                        1.5,
                        -0.8,
                        0
                    ]
                } : {
                    y: 0,
                    x: 0,
                    rotate: 0
                },
                transition: moving ? {
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut'
                } : {
                    duration: reduced ? 0 : 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/hero-transparent.webp",
                    width: "1536",
                    height: "1024",
                    alt: t.hero.art,
                    fetchPriority: "high"
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 43,
                    columnNumber: 4
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 40,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "art-caption",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "01 / 03"
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 45,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t.services.map((s)=>s.title).join(' · ')
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 45,
                        columnNumber: 52
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 45,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
function Home({ t, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shell hero-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                    children: t.hero.eyebrow
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 49,
                                    columnNumber: 88
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-display mt-7",
                                    children: [
                                        t.hero.line1,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 49,
                                            columnNumber: 169
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: t.hero.line2
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 49,
                                            columnNumber: 174
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 49,
                                    columnNumber: 121
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-description",
                                    children: t.hero.description
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 49,
                                    columnNumber: 231
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "button-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: href('contact'),
                                            className: "button button-primary",
                                            children: t.talk
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 49,
                                            columnNumber: 315
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#solutions",
                                            className: "button button-outline",
                                            children: t.explore
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 49,
                                            columnNumber: 393
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 49,
                                    columnNumber: 287
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-foot",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mini-rule"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 49,
                                            columnNumber: 494
                                        }, this),
                                        t.hero.foot
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 49,
                                    columnNumber: 469
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 49,
                            columnNumber: 61
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroArtwork, {
                            t: t
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 49,
                            columnNumber: 546
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 49,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 49,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "platform-strip",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shell platform-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t.platforms
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 50,
                            columnNumber: 70
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "MetaTrader ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 50,
                                    columnNumber: 112
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 50,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "MetaTrader ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 50,
                                    columnNumber: 142
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 50,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ctrader",
                            children: "cTrader"
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 50,
                            columnNumber: 156
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "strip-end",
                            children: t.hero.foot
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 50,
                            columnNumber: 194
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 50,
                    columnNumber: 34
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 50,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section shell",
                id: "solutions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        className: "section-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                        children: t.labels.solutions
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 89
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                        children: t.intro.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 126
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 51,
                                columnNumber: 84
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-intro",
                                children: t.intro.description
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 51,
                                columnNumber: 166
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 51,
                        columnNumber: 52
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "solutions-grid",
                        children: t.services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: i * .08,
                                className: "service-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "icon-tile",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    icon: serviceIcons[i]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Website.js",
                                                    lineNumber: 51,
                                                    columnNumber: 398
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 51,
                                                columnNumber: 370
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "card-number",
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 51,
                                                columnNumber: 435
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 344
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: s.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 484
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: s.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 502
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: s.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCheck"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Website.js",
                                                        lineNumber: 51,
                                                        columnNumber: 552
                                                    }, this),
                                                    f
                                                ]
                                            }, f, true, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 51,
                                                columnNumber: 540
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 517
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: href(s.slug),
                                        className: "text-link",
                                        "aria-label": `${t.discover}: ${s.title}`,
                                        children: [
                                            t.discover,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "link-line"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 51,
                                                columnNumber: 690
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 51,
                                        columnNumber: 589
                                    }, this)
                                ]
                            }, s.slug, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 51,
                                columnNumber: 284
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 51,
                        columnNumber: 229
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 51,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Audience, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 52,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Technology, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 52,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Markets, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 52,
                columnNumber: 62
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        className: "section-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                        children: t.labels.why
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 53,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                        children: t.whyTitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 53,
                                        columnNumber: 105
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 53,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href('about'),
                                className: "text-link",
                                children: [
                                    t.nav.about,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "link-line"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 53,
                                        columnNumber: 204
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 53,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 53,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "benefits",
                        children: t.benefits.map(([title, desc], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: i * .08,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "benefit-number",
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 53,
                                        columnNumber: 343
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 53,
                                        columnNumber: 389
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 53,
                                        columnNumber: 405
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 53,
                                columnNumber: 309
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 53,
                        columnNumber: 249
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 53,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Brochure, {
                t: t
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 54,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CTA, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 54,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 48,
        columnNumber: 34
    }, this);
}
function Audience({ t, href }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "audience-section section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell audience-grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                            children: t.labels.who
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 56,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                            children: t.audienceTitle
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 56,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-intro mt-6",
                            children: t.audienceText
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 56,
                            columnNumber: 233
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: href('contact'),
                            className: "text-link mt-8",
                            children: [
                                t.talk,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "link-line"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 56,
                                    columnNumber: 351
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 56,
                            columnNumber: 287
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 56,
                    columnNumber: 158
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    className: "audience-list",
                    children: t.audiences.map(([title, desc], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `audience-item ${active === i ? 'active' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActive(active === i ? -1 : i),
                                    "aria-expanded": active === i,
                                    "aria-controls": `audience-${i}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "audience-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                icon: audienceIcons[i]
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 56,
                                                columnNumber: 676
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 56,
                                            columnNumber: 644
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 56,
                                            columnNumber: 714
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            icon: active === i ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faMinus"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPlus"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 56,
                                            columnNumber: 734
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 56,
                                    columnNumber: 536
                                }, this),
                                active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].p, {
                                    id: `audience-${i}`,
                                    initial: {
                                        opacity: 0,
                                        y: 5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    children: desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 56,
                                    columnNumber: 796
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 56,
                            columnNumber: 465
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 56,
                    columnNumber: 396
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Website.js",
            lineNumber: 56,
            columnNumber: 121
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 56,
        columnNumber: 75
    }, this);
}
function Technology({ t, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "technology-grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    className: "technology-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "panel-label",
                            children: t.ecosystem
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 145
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "network-diagram",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "network-core",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 57,
                                        columnNumber: 252
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 57,
                                    columnNumber: 222
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "network-partners",
                                    children: [
                                        'MetaQuotes',
                                        'PrimeXM',
                                        'FXCubic',
                                        'Your Bourse'
                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: n
                                        }, n, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 57,
                                            columnNumber: 356
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 57,
                                    columnNumber: 265
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 189
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "platform-tags",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "MT4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 57,
                                    columnNumber: 423
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "MT5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 57,
                                    columnNumber: 439
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "cTrader"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 57,
                                    columnNumber: 455
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 392
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 57,
                    columnNumber: 108
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    className: "technology-copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                            children: t.labels.tech
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 526
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                            children: t.techTitle
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 558
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-intro mt-6",
                            children: t.techText
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 590
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: href('connectivity'),
                            className: "button button-primary mt-8",
                            children: t.techLink
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 57,
                            columnNumber: 640
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 57,
                    columnNumber: 490
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Website.js",
            lineNumber: 57,
            columnNumber: 75
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 57,
        columnNumber: 40
    }, this);
}
function Markets({ t, href }) {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    function keyChange(e, i) {
        let n = i;
        if (e.key === 'ArrowRight') n = (i + 1) % 8;
        else if (e.key === 'ArrowLeft') n = (i + 7) % 8;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = 7;
        else return;
        e.preventDefault();
        setSelected(n);
        refs.current[n]?.focus();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "markets-section section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    className: "section-top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                    children: t.labels.markets
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 58,
                                    columnNumber: 433
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                    children: t.marketTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 58,
                                    columnNumber: 468
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 58,
                            columnNumber: 428
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-intro",
                            children: t.marketText
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 58,
                            columnNumber: 508
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 58,
                    columnNumber: 396
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "market-tabs",
                            role: "tablist",
                            "aria-label": t.marketPrompt,
                            children: t.markets.map(([label], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: (el)=>{
                                        refs.current[i] = el;
                                    },
                                    role: "tab",
                                    id: `market-tab-${i}`,
                                    "aria-controls": "market-panel",
                                    "aria-selected": selected === i,
                                    tabIndex: selected === i ? 0 : -1,
                                    onKeyDown: (e)=>keyChange(e, i),
                                    onClick: ()=>setSelected(i),
                                    className: selected === i ? 'selected' : '',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            icon: marketIcons[i]
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 58,
                                            columnNumber: 942
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 58,
                                            columnNumber: 971
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 58,
                                    columnNumber: 672
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 58,
                            columnNumber: 572
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "market-panel",
                            id: "market-panel",
                            role: "tabpanel",
                            "aria-labelledby": `market-tab-${selected}`,
                            tabIndex: 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "market-symbol",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        icon: marketIcons[selected]
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 58,
                                        columnNumber: 1159
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 58,
                                    columnNumber: 1128
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: t.markets[selected][0]
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 58,
                                            columnNumber: 1206
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t.markets[selected][1]
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 58,
                                            columnNumber: 1239
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 58,
                                    columnNumber: 1201
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href('contact'),
                                    className: "text-link",
                                    children: [
                                        t.marketDetails,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "link-line"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Website.js",
                                            lineNumber: 58,
                                            columnNumber: 1344
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 58,
                                    columnNumber: 1276
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 58,
                            columnNumber: 1008
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 58,
                    columnNumber: 564
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Website.js",
            lineNumber: 58,
            columnNumber: 373
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 58,
        columnNumber: 328
    }, this);
}
function Brochure({ t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "shell brochure-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
            className: "brochure",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "brochure-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faFileLines"]
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 59,
                        columnNumber: 133
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 59,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                            children: t.labels.brochure
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 59,
                            columnNumber: 170
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: t.brochureTitle
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 59,
                            columnNumber: 206
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.brochureText
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 59,
                            columnNumber: 232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 59,
                    columnNumber: 165
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "button button-outline",
                    href: "https://gtcprime.com/wp-content/uploads/2023/04/GTC-Prime-Profile-.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faFileLines"]
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 59,
                            columnNumber: 418
                        }, this),
                        t.download
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 59,
                    columnNumber: 261
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Website.js",
            lineNumber: 59,
            columnNumber: 73
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 59,
        columnNumber: 32
    }, this);
}
function CTA({ t, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
            className: "cta-block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                            light: true,
                            children: t.labels.contact
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 60,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                            children: t.ctaTitle
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 60,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.ctaText
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 60,
                            columnNumber: 175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 60,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: href('contact'),
                    className: "button button-white",
                    children: t.talk
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 60,
                    columnNumber: 199
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "cta-decoration",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 60,
                    columnNumber: 275
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Website.js",
            lineNumber: 60,
            columnNumber: 68
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 60,
        columnNumber: 33
    }, this);
}
function About({ t, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inner-hero shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        children: t.labels.about
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 61,
                        columnNumber: 74
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "whitespace-pre-line",
                        children: t.aboutTitle
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 61,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.aboutText
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 61,
                                columnNumber: 191
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-statement",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "GTC PRIME"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 61,
                                        columnNumber: 244
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t.footer.line
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 61,
                                        columnNumber: 266
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 61,
                                columnNumber: 211
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 61,
                        columnNumber: 162
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 61,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section section-border shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        className: "section-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                children: t.aboutSub
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 61,
                                columnNumber: 392
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-intro",
                                children: t.aboutMore
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 61,
                                columnNumber: 423
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 61,
                        columnNumber: 360
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "benefits",
                        children: t.benefits.map(([title, desc], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: i * .08,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "benefit-number",
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 61,
                                        columnNumber: 572
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 61,
                                        columnNumber: 618
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 61,
                                        columnNumber: 634
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 61,
                                columnNumber: 538
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 61,
                        columnNumber: 478
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 61,
                columnNumber: 310
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Audience, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 61,
                columnNumber: 674
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Technology, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 61,
                columnNumber: 703
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CTA, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 61,
                columnNumber: 734
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 61,
        columnNumber: 34
    }, this);
}
function Service({ t, page, href }) {
    const index = t.services.findIndex((s)=>s.slug === page);
    const s = t.services[index];
    if (!s) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inner-hero shell service-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "whitespace-pre-line",
                                children: s.detailTitle
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inner-description",
                                children: s.detail
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 276
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href('contact'),
                                className: "button button-primary mt-8",
                                children: t.talk
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 323
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 62,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "service-emblem",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "emblem-number",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 444
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                icon: serviceIcons[index]
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 493
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 62,
                                columnNumber: 527
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 62,
                        columnNumber: 412
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 138
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section section-border shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "service-details",
                    children: s.sections.map(([title, desc], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: i * .1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "benefit-number",
                                    children: [
                                        "0",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 62,
                                    columnNumber: 715
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 62,
                                    columnNumber: 761
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 62,
                                    columnNumber: 777
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 62,
                            columnNumber: 682
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 62,
                    columnNumber: 615
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 565
            }, this),
            page === 'liquidity' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Markets, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 837
            }, this) : page === 'connectivity' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Technology, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 888
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Audience, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 920
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Brochure, {
                t: t
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 950
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CTA, {
                t: t,
                href: href
            }, void 0, false, {
                fileName: "[project]/components/Website.js",
                lineNumber: 62,
                columnNumber: 967
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 62,
        columnNumber: 136
    }, this);
}
function Contact({ t }) {
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyFailed, setCopyFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function submit(e) {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nCompany: ${f.get('company')}\nSolution: ${f.get('interest')}\n\n${f.get('message')}`;
        setDraft(body);
        window.location.href = `mailto:support@gtcprime.com?subject=${encodeURIComponent('GTC Prime — ' + f.get('interest'))}&body=${encodeURIComponent(body)}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section shell contact-grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        children: t.labels.contact
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 623
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "whitespace-pre-line",
                        children: t.ctaTitle
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 658
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "section-intro mt-6",
                        children: t.ctaText
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 711
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-email",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faEnvelope"]
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 791
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    t.form.emailDirect,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:support@gtcprime.com",
                                        children: "support@gtcprime.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 63,
                                        columnNumber: 839
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 816
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 760
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 63,
                columnNumber: 592
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-h3",
                        children: t.form.title
                    }, void 0, false, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 947
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            t.form.name,
                                            " *",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "name",
                                                autoComplete: "name",
                                                required: true,
                                                maxLength: 100
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 63,
                                                columnNumber: 1063
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 63,
                                        columnNumber: 1041
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            t.form.email,
                                            " *",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                autoComplete: "email",
                                                required: true,
                                                maxLength: 150
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 63,
                                                columnNumber: 1159
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 63,
                                        columnNumber: 1136
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            t.form.company,
                                            " *",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "company",
                                                autoComplete: "organization",
                                                required: true,
                                                maxLength: 150
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 63,
                                                columnNumber: 1272
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 63,
                                        columnNumber: 1247
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            t.form.interest,
                                            " *",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "interest",
                                                required: true,
                                                defaultValue: "",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: t.form.select
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Website.js",
                                                        lineNumber: 63,
                                                        columnNumber: 1431
                                                    }, this),
                                                    t.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: s.title
                                                        }, s.slug, false, {
                                                            fileName: "[project]/components/Website.js",
                                                            lineNumber: 63,
                                                            columnNumber: 1500
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 63,
                                                columnNumber: 1382
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 63,
                                        columnNumber: 1356
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "full-width",
                                        children: [
                                            t.form.message,
                                            " *",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                rows: 5,
                                                required: true,
                                                maxLength: 2000,
                                                placeholder: t.form.placeholder
                                            }, void 0, false, {
                                                fileName: "[project]/components/Website.js",
                                                lineNumber: 63,
                                                columnNumber: 1606
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 63,
                                        columnNumber: 1558
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 1014
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-note",
                                children: t.form.privacy
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 1714
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button button-primary w-full",
                                type: "submit",
                                children: t.form.submit
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 1759
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-note",
                                children: t.form.note
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 1846
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 990
                    }, this),
                    draft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "draft-state",
                        role: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-h4",
                                children: t.form.successTitle
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 1946
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.form.ready
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 1996
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-link",
                                onClick: async ()=>{
                                    try {
                                        await navigator.clipboard.writeText(draft);
                                        setCopied(true);
                                    } catch  {
                                        setCopyFailed(true);
                                    }
                                },
                                children: copied ? t.form.copied : t.form.copy
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 2017
                            }, this),
                            copyFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                "aria-label": t.form.copy,
                                readOnly: true,
                                value: draft,
                                onFocus: (e)=>e.target.select()
                            }, void 0, false, {
                                fileName: "[project]/components/Website.js",
                                lineNumber: 63,
                                columnNumber: 2216
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Website.js",
                        lineNumber: 63,
                        columnNumber: 1903
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Website.js",
                lineNumber: 63,
                columnNumber: 917
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Website.js",
        lineNumber: 63,
        columnNumber: 544
    }, this);
}
function Footer({ t, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "site-footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href(),
                                    "aria-label": "GTC Prime",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 64,
                                        columnNumber: 166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 123
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t.footer.line
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 180
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 118
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: t.footer.company
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 213
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href('about'),
                                    children: t.nav.about
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 240
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href('contact'),
                                    children: t.nav.contact
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 287
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://mygtcportal.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t.account
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 338
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 208
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: t.footer.solutions
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 441
                                }, this),
                                t.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: href(s.slug),
                                        children: s.title
                                    }, s.slug, false, {
                                        fileName: "[project]/components/Website.js",
                                        lineNumber: 64,
                                        columnNumber: 489
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 436
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: t.footer.contact
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 557
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:support@gtcprime.com",
                                    children: "support@gtcprime.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 584
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "footer-accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/Website.js",
                                    lineNumber: 64,
                                    columnNumber: 646
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 64,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "legal-copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: t.footer.riskTitle
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 719
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.footer.risk
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 748
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.footer.legal
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 770
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.footer.restriction
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 793
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 64,
                    columnNumber: 691
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " GTC Prime. ",
                                t.footer.rights
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 859
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "GTC PRIME"
                        }, void 0, false, {
                            fileName: "[project]/components/Website.js",
                            lineNumber: 64,
                            columnNumber: 929
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Website.js",
                    lineNumber: 64,
                    columnNumber: 828
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Website.js",
            lineNumber: 64,
            columnNumber: 67
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Website.js",
        lineNumber: 64,
        columnNumber: 35
    }, this);
}
}),
"[project]/lib/content.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "content",
    ()=>content
]);
const content = {
    en: {
        nav: {
            home: 'Home',
            about: 'About us',
            liquidity: 'Liquidity',
            connectivity: 'Connectivity',
            'risk-management': 'Risk management',
            contact: 'Contact'
        },
        account: 'Client portal',
        talk: 'Let’s talk',
        explore: 'Explore solutions',
        discover: 'Discover more',
        menu: 'Open menu',
        close: 'Close menu',
        language: 'Change language',
        skip: 'Skip to content',
        hero: {
            eyebrow: 'YOUR CONNECTION TO GLOBAL MARKETS',
            line1: 'Liquidity.',
            line2: 'Connected.',
            description: 'Institutional liquidity, seamless connectivity and tailored risk solutions. Built around your business.',
            foot: 'For brokers, asset managers and professional clients.',
            art: 'Sculptural glass ribbons in blue and bronze, expressing connected liquidity'
        },
        labels: {
            solutions: 'OUR SOLUTIONS',
            who: 'WHO WE WORK WITH',
            tech: 'CONNECTED BY TECHNOLOGY',
            markets: 'MULTI-ASSET ACCESS',
            why: 'THE GTC PRIME DIFFERENCE',
            about: 'ABOUT GTC PRIME',
            brochure: 'A CLOSER LOOK',
            contact: 'START A CONVERSATION'
        },
        intro: {
            title: 'Three capabilities.\nOne connected partner.',
            description: 'Bring your liquidity, technology and risk management together with solutions tailored to the way you operate.'
        },
        services: [
            {
                slug: 'liquidity',
                title: 'Liquidity',
                text: 'Multi-asset liquidity tailored to your execution needs, with access through MT4 and MT5.',
                features: [
                    'Multi-asset coverage',
                    'Flexible integration',
                    'Dedicated support'
                ],
                detailTitle: 'Liquidity that fits\nyour business.',
                detail: 'Connect your trading business to liquidity across currencies, metals, indices and more. Our team works with you to understand your platform, pricing and execution requirements.',
                sections: [
                    [
                        'Multi-asset access',
                        'Bring a range of markets together through liquidity solutions designed around your business requirements.'
                    ],
                    [
                        'Execution and pricing',
                        'Discuss your execution model, order flow and pricing needs with our institutional team.'
                    ],
                    [
                        'A personal relationship',
                        'Get guidance on integration and ongoing support for your liquidity setup.'
                    ]
                ]
            },
            {
                slug: 'connectivity',
                title: 'Connectivity',
                text: 'Connect your platforms and trading infrastructure through a flexible technology ecosystem.',
                features: [
                    'Platform connectivity',
                    'GTC Position Keeper',
                    'Trading analytics'
                ],
                detailTitle: 'Your infrastructure.\nBetter connected.',
                detail: 'Connect trading platforms, liquidity and operational insight. Explore integrations and monitoring tools that fit your existing infrastructure.',
                sections: [
                    [
                        'Platform integration',
                        'Explore MT4, MT5 and cTrader connectivity options with our team.'
                    ],
                    [
                        'GTC Position Keeper',
                        'Monitor exposure, trading volumes and client positions in a connected operational view.'
                    ],
                    [
                        'Analytics that inform',
                        'Review flow performance, trade analysis, symbol activity and volume data.'
                    ]
                ]
            },
            {
                slug: 'risk-management',
                title: 'Risk management',
                text: 'See your exposure more clearly with monitoring, analytics and a tailored approach to risk.',
                features: [
                    'Exposure monitoring',
                    'Position tracking',
                    'Risk analysis'
                ],
                detailTitle: 'A clearer view\nof your exposure.',
                detail: 'Build a risk management approach around your business. Combine position monitoring, analytics and team support to inform your decisions.',
                sections: [
                    [
                        'Understand your exposure',
                        'Review trading activity and positions to maintain visibility over your market exposure.'
                    ],
                    [
                        'Tools for your workflow',
                        'Explore GTC Position Keeper, analytics and risk assessment tools.'
                    ],
                    [
                        'A tailored approach',
                        'Work with our team to discuss operational, credit and liquidity risks relevant to your business.'
                    ]
                ]
            }
        ],
        audienceTitle: 'Built for your\nnext connection.',
        audienceText: 'Every business operates differently. Your liquidity partner should understand yours.',
        audiences: [
            [
                'Brokers',
                'Connect your brokerage to multi-asset liquidity and platform solutions.'
            ],
            [
                'Hedge funds & asset managers',
                'Explore execution and connectivity aligned with your strategy.'
            ],
            [
                'Professional clients',
                'Access solutions built around professional trading requirements.'
            ],
            [
                'Trading desks',
                'Bring liquidity access and exposure monitoring into your workflow.'
            ]
        ],
        techTitle: 'Your platforms.\nOur connection.',
        techText: 'Connect through familiar trading platforms and an established technology ecosystem.',
        techLink: 'Explore connectivity',
        ecosystem: 'Technology ecosystem',
        platforms: 'Trading platforms',
        marketTitle: 'A world of markets.\nA single relationship.',
        marketText: 'Explore liquidity across eight asset classes, with a setup tailored to your requirements.',
        marketPrompt: 'Select a market to explore',
        marketDetails: 'Discuss market access',
        markets: [
            [
                'Forex',
                'Major, minor and other currency pairs for a range of institutional trading needs.'
            ],
            [
                'Metals',
                'Precious metals liquidity, including gold and silver.'
            ],
            [
                'Commodities',
                'Commodity market access within a multi-asset liquidity setup.'
            ],
            [
                'Cash indices',
                'Liquidity for cash index CFDs across global equity markets.'
            ],
            [
                'Future indices',
                'Explore futures-based index CFD liquidity.'
            ],
            [
                'Equities',
                'Access equity CFD liquidity through your institutional setup.'
            ],
            [
                'ETFs',
                'Explore exchange-traded fund CFD coverage with our team.'
            ],
            [
                'Energies',
                'Energy CFD liquidity, including oil-related markets.'
            ]
        ],
        whyTitle: 'Considered technology.\nPersonal partnership.',
        benefits: [
            [
                'Tailored to you',
                'Solutions shaped around your business model and infrastructure.'
            ],
            [
                'Connected expertise',
                'Liquidity, connectivity and risk expertise in one relationship.'
            ],
            [
                'Ongoing support',
                'A team to help with integration and your day-to-day requirements.'
            ]
        ],
        brochureTitle: 'Get the full picture.',
        brochureText: 'Explore our liquidity, connectivity and risk solutions in the GTC Prime company profile.',
        download: 'View company profile',
        pdf: 'PDF · Company profile',
        ctaTitle: 'Let’s build your\nnext connection.',
        ctaText: 'Tell us about your business. We’ll help you explore the right solution.',
        aboutTitle: 'A partner for\nyour trading business.',
        aboutText: 'GTC Prime brings together liquidity, connectivity and risk management for institutional and professional clients. We work with brokers, hedge funds, asset managers and trading desks to understand their requirements and build a tailored approach.',
        aboutSub: 'Expertise that connects.',
        aboutMore: 'Our approach combines trading infrastructure, platform access and personal support. From your first conversation to integration, we focus on understanding how your business operates.',
        form: {
            title: 'Tell us what you need.',
            name: 'Full name',
            email: 'Business email',
            company: 'Company',
            interest: 'I’m interested in',
            select: 'Select a solution',
            message: 'How can we help?',
            placeholder: 'Tell us about your platform, requirements or project.',
            submit: 'Prepare email enquiry',
            note: 'This prepares an email to support@gtcprime.com in your email app.',
            ready: 'Your email draft is ready. Please send it from your email app to complete your enquiry.',
            copy: 'Copy enquiry',
            copied: 'Enquiry copied',
            required: 'Please complete the required fields.',
            privacy: 'Use your business contact details. Please do not include account passwords or sensitive documents.',
            emailDirect: 'Prefer to email us directly?',
            successTitle: 'Continue in your email app'
        },
        footer: {
            line: 'Liquidity. Connectivity. Partnership.',
            company: 'Company',
            solutions: 'Solutions',
            contact: 'Get in touch',
            rights: 'All rights reserved.',
            riskTitle: 'Risk disclosure',
            risk: 'Trading forex and CFDs involves significant risk and may not be suitable for all investors. You may lose all of your invested capital. Consider your objectives, experience and risk tolerance, and seek independent advice if needed.',
            legal: 'GTC Global Ltd is authorized by the Financial Services Commission in Mauritius, registration number C188049, and licensed as an Investment Dealer (Full-Service Dealer, Excluding Underwriting), license number GB22200292.',
            restriction: 'Products and services are not available where their distribution or use would be contrary to local laws or regulations. The entities do not provide services to residents of the USA, Iran, North Korea and certain other jurisdictions.'
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            liquidity: 'السيولة',
            connectivity: 'الربط التقني',
            'risk-management': 'إدارة المخاطر',
            contact: 'تواصل معنا'
        },
        account: 'بوابة العملاء',
        talk: 'لنتحدث',
        explore: 'استكشف الحلول',
        discover: 'اكتشف المزيد',
        menu: 'فتح القائمة',
        close: 'إغلاق القائمة',
        language: 'تغيير اللغة',
        skip: 'انتقل إلى المحتوى',
        hero: {
            eyebrow: 'بوابتك إلى الأسواق العالمية',
            line1: 'سيولة.',
            line2: 'مترابطة.',
            description: 'سيولة للمؤسسات، وربط تقني متكامل، وحلول مخصصة لإدارة المخاطر. مصممة لأعمالك.',
            foot: 'للوسطاء ومديري الأصول والعملاء المحترفين.',
            art: 'شرائط زجاجية مترابطة باللونين الأزرق والبرونزي ترمز إلى اتصال السيولة'
        },
        labels: {
            solutions: 'حلولنا',
            who: 'من نخدم',
            tech: 'التواصل عبر التكنولوجيا',
            markets: 'الوصول إلى أصول متعددة',
            why: 'ما يميز GTC PRIME',
            about: 'عن GTC PRIME',
            brochure: 'نظرة أقرب',
            contact: 'ابدأ الحوار'
        },
        intro: {
            title: 'ثلاث قدرات.\nشريك واحد متكامل.',
            description: 'اجمع السيولة والتكنولوجيا وإدارة المخاطر في حلول مصممة لتناسب طريقة عملك.'
        },
        services: [
            {
                slug: 'liquidity',
                title: 'السيولة',
                text: 'سيولة متعددة الأصول تلائم احتياجات التنفيذ لديك، مع الوصول عبر MT4 وMT5.',
                features: [
                    'تغطية متعددة الأصول',
                    'تكامل مرن',
                    'دعم متخصص'
                ],
                detailTitle: 'سيولة تناسب\nأعمالك.',
                detail: 'اربط أعمال التداول لديك بالسيولة عبر العملات والمعادن والمؤشرات وغيرها. يعمل فريقنا معك لفهم متطلبات المنصة والتسعير والتنفيذ.',
                sections: [
                    [
                        'الوصول إلى أصول متعددة',
                        'اجمع أسواقاً متنوعة عبر حلول سيولة مصممة لمتطلبات أعمالك.'
                    ],
                    [
                        'التنفيذ والتسعير',
                        'ناقش نموذج التنفيذ وتدفق الأوامر واحتياجات التسعير مع فريق المؤسسات.'
                    ],
                    [
                        'علاقة شخصية',
                        'احصل على إرشادات التكامل والدعم المستمر لإعداد السيولة لديك.'
                    ]
                ]
            },
            {
                slug: 'connectivity',
                title: 'الربط التقني',
                text: 'اربط منصاتك وبنية التداول لديك عبر منظومة تقنية مرنة.',
                features: [
                    'ربط المنصات',
                    'GTC Position Keeper',
                    'تحليلات التداول'
                ],
                detailTitle: 'بنيتك التقنية.\nترابط أفضل.',
                detail: 'اربط منصات التداول والسيولة والرؤية التشغيلية. استكشف التكاملات وأدوات المراقبة التي تناسب بنيتك الحالية.',
                sections: [
                    [
                        'تكامل المنصات',
                        'استكشف خيارات الربط مع MT4 وMT5 وcTrader مع فريقنا.'
                    ],
                    [
                        'GTC Position Keeper',
                        'راقب التعرض وأحجام التداول ومراكز العملاء ضمن رؤية تشغيلية مترابطة.'
                    ],
                    [
                        'تحليلات تدعم قراراتك',
                        'راجع أداء تدفق الأوامر وتحليل الصفقات ونشاط الرموز وبيانات الأحجام.'
                    ]
                ]
            },
            {
                slug: 'risk-management',
                title: 'إدارة المخاطر',
                text: 'رؤية أوضح للتعرض من خلال المراقبة والتحليلات ونهج مخصص للمخاطر.',
                features: [
                    'مراقبة التعرض',
                    'تتبع المراكز',
                    'تحليل المخاطر'
                ],
                detailTitle: 'رؤية أوضح\nلتعرضك للمخاطر.',
                detail: 'ابنِ نهجاً لإدارة المخاطر يتناسب مع أعمالك. اجمع مراقبة المراكز والتحليلات ودعم الفريق لاتخاذ قرارات مستنيرة.',
                sections: [
                    [
                        'فهم التعرض',
                        'راجع نشاط التداول والمراكز للحفاظ على رؤية واضحة لتعرضك للسوق.'
                    ],
                    [
                        'أدوات لسير عملك',
                        'استكشف GTC Position Keeper والتحليلات وأدوات تقييم المخاطر.'
                    ],
                    [
                        'نهج مخصص',
                        'ناقش مع فريقنا المخاطر التشغيلية والائتمانية ومخاطر السيولة المتعلقة بأعمالك.'
                    ]
                ]
            }
        ],
        audienceTitle: 'مصممة لاتصالك\nالقادم.',
        audienceText: 'تختلف كل مؤسسة في طريقة عملها. ويجب أن يفهم شريك السيولة احتياجاتك.',
        audiences: [
            [
                'الوسطاء',
                'اربط شركة الوساطة بسيولة متعددة الأصول وحلول المنصات.'
            ],
            [
                'صناديق التحوط ومديرو الأصول',
                'استكشف التنفيذ والربط بما يتوافق مع استراتيجيتك.'
            ],
            [
                'العملاء المحترفون',
                'حلول تلائم متطلبات التداول الاحترافي.'
            ],
            [
                'مكاتب التداول',
                'اجمع الوصول إلى السيولة ومراقبة التعرض ضمن سير عملك.'
            ]
        ],
        techTitle: 'منصاتك.\nاتصالنا.',
        techText: 'اتصل عبر منصات تداول مألوفة ومنظومة تقنية متكاملة.',
        techLink: 'استكشف الربط التقني',
        ecosystem: 'المنظومة التقنية',
        platforms: 'منصات التداول',
        marketTitle: 'عالم من الأسواق.\nعلاقة واحدة.',
        marketText: 'استكشف السيولة عبر ثماني فئات من الأصول، بإعداد مصمم لمتطلباتك.',
        marketPrompt: 'اختر سوقاً لاستكشافه',
        marketDetails: 'ناقش الوصول إلى الأسواق',
        markets: [
            [
                'الفوركس',
                'أزواج عملات رئيسية وثانوية وأخرى لتلبية احتياجات التداول المؤسسي.'
            ],
            [
                'المعادن',
                'سيولة المعادن الثمينة، بما فيها الذهب والفضة.'
            ],
            [
                'السلع',
                'الوصول إلى أسواق السلع ضمن إعداد سيولة متعدد الأصول.'
            ],
            [
                'المؤشرات النقدية',
                'سيولة عقود الفروقات على المؤشرات النقدية لأسواق الأسهم العالمية.'
            ],
            [
                'مؤشرات العقود الآجلة',
                'استكشف سيولة عقود الفروقات على المؤشرات المرتبطة بالعقود الآجلة.'
            ],
            [
                'الأسهم',
                'الوصول إلى سيولة عقود الفروقات على الأسهم.'
            ],
            [
                'صناديق الاستثمار المتداولة',
                'ناقش تغطية عقود الفروقات على صناديق الاستثمار المتداولة مع فريقنا.'
            ],
            [
                'الطاقة',
                'سيولة عقود فروقات الطاقة، بما فيها الأسواق المرتبطة بالنفط.'
            ]
        ],
        whyTitle: 'تكنولوجيا مدروسة.\nشراكة شخصية.',
        benefits: [
            [
                'مصممة لك',
                'حلول تراعي نموذج أعمالك وبنيتك التقنية.'
            ],
            [
                'خبرات متكاملة',
                'خبرة في السيولة والربط وإدارة المخاطر ضمن علاقة واحدة.'
            ],
            [
                'دعم مستمر',
                'فريق يساعدك في التكامل واحتياجاتك اليومية.'
            ]
        ],
        brochureTitle: 'اكتشف الصورة الكاملة.',
        brochureText: 'استكشف حلول السيولة والربط وإدارة المخاطر في الملف التعريفي لشركة GTC Prime.',
        download: 'عرض الملف التعريفي',
        pdf: 'PDF · الملف التعريفي',
        ctaTitle: 'لنبنِ اتصالك\nالقادم.',
        ctaText: 'أخبرنا عن أعمالك. سنساعدك في استكشاف الحل المناسب.',
        aboutTitle: 'شريك\nلأعمال التداول.',
        aboutText: 'تجمع GTC Prime بين السيولة والربط وإدارة المخاطر للعملاء المؤسسيين والمحترفين. نعمل مع الوسطاء وصناديق التحوط ومديري الأصول ومكاتب التداول لفهم متطلباتهم وبناء نهج مخصص.',
        aboutSub: 'خبرة تجمعنا.',
        aboutMore: 'يجمع نهجنا بين بنية التداول والوصول إلى المنصات والدعم الشخصي. من المحادثة الأولى إلى التكامل، نركز على فهم طريقة عمل مؤسستك.',
        form: {
            title: 'أخبرنا بما تحتاجه.',
            name: 'الاسم الكامل',
            email: 'البريد الإلكتروني للعمل',
            company: 'الشركة',
            interest: 'أنا مهتم بـ',
            select: 'اختر حلاً',
            message: 'كيف يمكننا مساعدتك؟',
            placeholder: 'أخبرنا عن منصتك أو متطلباتك أو مشروعك.',
            submit: 'إعداد رسالة الاستفسار',
            note: 'يفتح هذا الخيار مسودة إلى support@gtcprime.com في تطبيق البريد لديك.',
            ready: 'مسودة بريدك جاهزة. يرجى إرسالها من تطبيق البريد لإكمال استفسارك.',
            copy: 'نسخ الاستفسار',
            copied: 'تم نسخ الاستفسار',
            required: 'يرجى إكمال الحقول المطلوبة.',
            privacy: 'استخدم بيانات التواصل الخاصة بالعمل. يرجى عدم تضمين كلمات المرور أو المستندات الحساسة.',
            emailDirect: 'هل تفضل مراسلتنا مباشرة؟',
            successTitle: 'أكمل في تطبيق البريد'
        },
        footer: {
            line: 'سيولة. اتصال. شراكة.',
            company: 'الشركة',
            solutions: 'الحلول',
            contact: 'تواصل معنا',
            rights: 'جميع الحقوق محفوظة.',
            riskTitle: 'الإفصاح عن المخاطر',
            risk: 'ينطوي تداول الفوركس وعقود الفروقات على مخاطر كبيرة وقد لا يكون مناسباً لجميع المستثمرين. قد تخسر كامل رأس مالك المستثمر. ضع أهدافك وخبرتك وقدرتك على تحمل المخاطر في الاعتبار واطلب مشورة مستقلة عند الحاجة.',
            legal: 'شركة GTC Global Ltd مرخصة من لجنة الخدمات المالية في موريشيوس، برقم تسجيل C188049، وتحمل ترخيص متعامل استثمار (متعامل شامل الخدمات باستثناء الاكتتاب)، رقم GB22200292.',
            restriction: 'لا تتوفر المنتجات والخدمات حيث يتعارض توزيعها أو استخدامها مع القوانين واللوائح المحلية. ولا تقدم الكيانات خدماتها للمقيمين في الولايات المتحدة وإيران وكوريا الشمالية وبعض الولايات القضائية الأخرى.'
        }
    }
};
}),
];

//# sourceMappingURL=_0slzcxf._.js.map