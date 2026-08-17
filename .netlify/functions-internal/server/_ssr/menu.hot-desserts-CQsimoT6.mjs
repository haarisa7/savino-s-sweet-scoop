import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as waffle_nutella_default } from "./router-xXRmj78h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu.hot-desserts-CQsimoT6.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		name: "Nutella Waffle",
		desc: "Golden Belgian waffle smothered in warm Nutella, served with a swirl of soft serve",
		img: waffle_nutella_default
	},
	{
		name: "Sticky Toffee Pudding",
		desc: "Warm sponge pudding drenched in rich toffee sauce, paired with a swirl of vanilla soft serve",
		img: "/assets/sticky-toffee-pudding-CbliivMs.jpg"
	},
	{
		name: "Chocolate Brownie",
		desc: "Crispy-topped, fudgy-centred chocolate brownie loaded with chunks, served with a swirl of soft serve",
		img: "/assets/brownie-CfKqdDLE.jpg"
	},
	{
		name: "Fudge Cake",
		desc: "Rich warm chocolate fudge cake drenched in glossy dark chocolate sauce, topped with a swirl of soft serve",
		img: "/assets/fudge-cake-CSNtq4P2.jpg"
	}
];
function HotDessertsGallery() {
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
							children: "The Hot Dessert Menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-6",
							children: [
								"Warm, Gooey &",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary [text-shadow:_2px_2px_0_#005BB5]",
									children: "Fresh from the Van"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[55ch] text-lg text-secondary-foreground/80",
							children: "Belgian waffles, brownies and cookie dough — served warm and topped with a swirl of our signature soft serve."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-16 bg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
					children: items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group animate-reveal bg-background rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
						style: { animationDelay: `${i * 60}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.name,
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
							children: "Want something special?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-foreground/80 mb-6",
							children: "Ask at the van — we’ll add extra sauces, toppings, or pair any hot dessert with a scoop of soft serve."
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
export { HotDessertsGallery as component };
