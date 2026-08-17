import { i as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cx4XZJHM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B8Rexral.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "google-site-verification",
				content: "O1XELOM8hs4G0l5CO0kSIPV4nvXD-oD1nkcezNU1kIk"
			},
			{ title: "Savino's Soft Ice Cream" },
			{
				name: "description",
				content: "Northwest London's family ice cream van since 1999."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var van_default = "/assets/van-BxYXJmK2.png";
var $$splitComponentImporter$2 = () => import("./routes-DXMSY3Ol.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Savino's Soft Ice Cream — Northwest London's Mr Whippy Van" },
		{
			name: "description",
			content: "Family-run soft serve ice cream van serving Northwest London since 1999. Whippy cones, sundaes, milkshakes & hot desserts. Book us for weddings, festivals & events."
		},
		{
			property: "og:title",
			content: "Savino's Soft Ice Cream — Northwest London"
		},
		{
			property: "og:description",
			content: "Premium soft serve, sundaes, shakes & hot desserts from London's favourite family ice cream van. Available daily and for private hire."
		},
		{
			property: "og:image",
			content: van_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var waffle_nutella_default = "/assets/waffle-nutella-CYGJjKIW.jpg";
var $$splitComponentImporter$1 = () => import("./menu.hot-desserts-BOvNbTwn.mjs");
var Route$1 = createFileRoute("/menu/hot-desserts")({
	head: () => ({ meta: [
		{ title: "Hot Desserts — Savino's Soft Ice Cream" },
		{
			name: "description",
			content: "Warm Belgian waffles, brownies and cookie dough topped with fresh soft serve — Savino's hot dessert menu from the van."
		},
		{
			property: "og:title",
			content: "Savino's Hot Dessert Menu"
		},
		{
			property: "og:description",
			content: "Warm waffles & brownies topped with real soft serve — straight from the van."
		},
		{
			property: "og:image",
			content: waffle_nutella_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var shake_oreo_default = "/assets/shake-oreo-C-tiVnOr.jpg";
var $$splitComponentImporter = () => import("./menu.milkshakes-CWzt-Fb9.mjs");
var Route = createFileRoute("/menu/milkshakes")({
	head: () => ({ meta: [
		{ title: "Milkshakes — Savino's Soft Ice Cream" },
		{
			name: "description",
			content: "Thick, hand-spun milkshakes from Savino's ice cream van — Biscoff, Oreo, Nutella, Bubblegum, Banana and more. Made fresh with real soft serve."
		},
		{
			property: "og:title",
			content: "Savino's Milkshake Menu"
		},
		{
			property: "og:description",
			content: "Every shake on the menu — thick, creamy & hand-spun in the van."
		},
		{
			property: "og:image",
			content: shake_oreo_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	MenuHotDessertsRoute: Route$1.update({
		id: "/menu/hot-desserts",
		path: "/menu/hot-desserts",
		getParentRoute: () => Route$3
	}),
	MenuMilkshakesRoute: Route.update({
		id: "/menu/milkshakes",
		path: "/menu/milkshakes",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { van_default as i, shake_oreo_default as n, waffle_nutella_default as r, router_exports as t };
