import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as shake_oreo_default } from "./router-Cx4XZJHM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu.milkshakes-CWzt-Fb9.js
var import_jsx_runtime = require_jsx_runtime();
var shakes = [
	{
		name: "Salted Caramel",
		desc: "Toffee-rich with a swirl of golden caramel",
		img: "/assets/shake-caramel-B1Gy3hFE.jpg"
	},
	{
		name: "Biscoff",
		desc: "Speculoos cookie butter blended smooth",
		img: "/assets/shake-malt-Dq4kZBm5.jpg"
	},
	{
		name: "Nutella",
		desc: "Chocolate hazelnut, ribboned through the cup",
		img: "/assets/shake-nutella-CLH4Inmy.jpg"
	},
	{
		name: "Oreo Crush",
		desc: "Cookies & cream with real Oreo pieces",
		img: shake_oreo_default
	},
	{
		name: "Cookies & Cream",
		desc: "Classic vanilla soft serve with cookie shards",
		img: "/assets/shake-cookies-cream-CkSZXI38.jpg"
	},
	{
		name: "Mocha",
		desc: "Espresso & chocolate — an afternoon pick-me-up",
		img: "/assets/shake-mocha-pGlztoLf.jpg"
	},
	{
		name: "Banana",
		desc: "Sweet ripe banana, thick and creamy",
		img: "/assets/shake-banana-qHnxqO9_.jpg"
	},
	{
		name: "Bubblegum",
		desc: "Blue raspberry bubblegum — a kids' favourite",
		img: "/assets/shake-bubblegum-Do5gdjZk.jpg"
	}
];
function MilkshakesGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen font-body text-foreground bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-2xl tracking-tight text-secondary uppercase",
					children: "Savino’s"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors",
					children: "← Back to menu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 pt-16 pb-10 bg-secondary text-secondary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase text-primary font-bold mb-4 block",
							children: "The Milkshake Menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-6",
							children: [
								"Thick, Creamy &",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary [text-shadow:_2px_2px_0_#005BB5]",
									children: "Hand-Spun"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[55ch] text-lg text-secondary-foreground/80",
							children: "Every shake is blended fresh in the van with real soft serve — no powders, no pre-mix. Served in a 16oz clear cup so you can see every swirl."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-16 bg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
					children: shakes.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group animate-reveal bg-background rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
						style: { animationDelay: `${i * 60}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-square overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.name + " milkshake",
								className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl md:text-2xl uppercase text-secondary mb-1.5 leading-tight",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/70 leading-snug",
								children: s.desc
							})]
						})]
					}, s.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto text-center mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent mb-4",
							children: "Can’t decide?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-foreground/80 mb-6",
							children: "Ask at the van — we’ll mix flavours, add extra toppings, or build your own signature shake."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "contact",
							className: "inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:ring-4 ring-primary/30 transition-all shadow-lg",
							children: "Book us for an event"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { MilkshakesGallery as component };
