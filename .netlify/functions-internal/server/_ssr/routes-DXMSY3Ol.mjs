import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as van_default } from "./router-Cx4XZJHM.mjs";
import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "./server-Ba04l1px.mjs";
import { n as enquirySchema, t as GUEST_LABELS } from "./enquiry-schema-BmC8LSgX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXMSY3Ol.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => enquirySchema.parse(data)).handler(createSsrRpc("d7c58d83ea5d9fb6ea14bbee48208b480c0f3465375db0b0b9290487c4b7f00a"));
var savinos_cone_mark_default = "/assets/savinos-cone-mark-XqMnypQn.png";
var savinos_wordmark_default = "/assets/savinos-wordmark-CYmpbP4E.png";
var treats = [
	{
		name: "Classic Cone",
		desc: "Proper Mr Whippy with a chocolate flake",
		img: "/assets/treat-cone-DPMwqMXu.jpg",
		href: null
	},
	{
		name: "Waffle Cone",
		desc: "Golden Belgian waffle with sprinkles & flake",
		img: "/assets/treat-waffle-BZmMnV8r.jpg",
		href: null
	},
	{
		name: "Boat Sundae",
		desc: "Soft serve swirls with sauce & toppings",
		img: "/assets/treat-sundae-E6eCD0sl.jpg",
		href: null
	},
	{
		name: "Milkshakes",
		desc: "Thick & creamy — Oreo, Biscoff, Caramel & more",
		img: "/assets/treat-milkshake-D_JyM9s4.jpg",
		href: "/menu/milkshakes"
	},
	{
		name: "Hot Desserts",
		desc: "Warm waffles, brownies & cookie dough, topped with soft serve",
		img: "/assets/treat-hot-dough-BCWjK25e.jpg",
		href: "/menu/hot-desserts"
	},
	{
		name: "Slush Puppy",
		desc: "Iced blue & red slush — sweet, sharp & refreshing",
		img: "/assets/treat-slush-BSCPafFZ.jpg",
		href: null
	}
];
function openMailtoFallback(data) {
	const subject = encodeURIComponent(`Booking enquiry from ${data.name}`);
	const lines = [
		"SAVINO'S SOFT ICE CREAM — BOOKING ENQUIRY",
		"",
		"CONTACT",
		`  Name:      ${data.name}`,
		`  Phone:     ${data.phone || "—"}`,
		`  Email:     ${data.email}`,
		"",
		"EVENT DETAILS",
		`  Date:      ${data.eventDate || "Not specified"}`,
		`  Guests:    ${data.guests && GUEST_LABELS[data.guests] || "Not specified"}`,
		`  Location:  ${data.location || "Not specified"}`,
		"",
		"MESSAGE",
		`  ${data.message}`,
		"",
		"—",
		"Sent from the booking form on savinosofticecream.com"
	];
	const body = encodeURIComponent(lines.join("\n"));
	window.location.href = `mailto:savinosofticecream@gmail.com?subject=${subject}&body=${body}`;
}
function Index() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen font-body text-foreground selection:bg-primary selection:text-secondary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "sticky top-0 z-50 flex items-center gap-8 px-6 md:px-10 py-4 bg-background/80 backdrop-blur-md border-b border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-0 md:ml-16 lg:ml-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: savinos_cone_mark_default,
							alt: "Savino's Soft Ice Creams cone mark",
							className: "h-12 md:h-16 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: savinos_wordmark_default,
							alt: "Savino's",
							className: "h-8 md:h-12 w-auto"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest ml-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#menu",
								className: "hover:text-secondary transition-colors",
								children: "Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#story",
								className: "hover:text-secondary transition-colors",
								children: "Our Story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#reviews",
								className: "hover:text-secondary transition-colors",
								children: "Reviews"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hover:text-secondary transition-colors",
								children: "Hire Us"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex ml-auto md:ml-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/447399841111",
							className: "bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all",
							children: "Find the Van"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-6 py-12 md:py-24 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-block px-3 py-1 bg-secondary text-secondary-foreground font-mono text-[10px] uppercase tracking-tighter mb-6 rounded-sm",
								children: "Northwest London • Est. 1999"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] text-secondary mb-8 text-balance",
								children: [
									"The Summer ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary [text-shadow:_2px_2px_0_#005BB5]",
										children: "Chime"
									}),
									" is Calling"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-[45ch] text-lg text-pretty leading-relaxed mb-10 text-foreground/80",
								children: "Family-run since 1999, Savino’s brings the joy of proper British soft serve to the streets of Northwest London. Nostalgia in a cone, delivered with a smile."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#menu",
									className: "bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:ring-4 ring-primary/30 transition-all shadow-lg",
									children: "View Menu"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground transition-all",
									children: "Book for Events"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative animate-reveal [animation-delay:200ms]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: van_default,
								alt: "Savino's Mr Whippy ice cream van",
								className: "w-full h-full object-cover",
								width: 1200,
								height: 1200
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-8 rounded-2xl shadow-xl hidden md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl leading-none",
								children: "25+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase mt-2",
								children: "Years swirling"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "menu",
				className: "px-6 py-24 bg-secondary text-secondary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-5xl md:text-7xl uppercase mb-4",
							children: "Our Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-primary uppercase",
							children: "Fresh from the van • Daily 12pm – 7pm"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-secondary-foreground/70 max-w-xs",
							children: "Soft serve, sundaes, milkshakes & hot desserts — served fresh from the van every day."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: treats.map((treat, i) => {
							const Wrapper = treat.href ? Link : "div";
							const wrapperProps = treat.href ? { to: treat.href } : {};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrapper, {
								...wrapperProps,
								className: `group animate-reveal bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl overflow-hidden hover:bg-secondary-foreground/10 transition-colors ${treat.href ? "cursor-pointer block" : ""}`,
								style: { animationDelay: `${300 + i * 100}ms` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: treat.img,
										alt: treat.name,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
										loading: "lazy",
										width: 1024,
										height: 1024
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-2xl uppercase mb-2 text-primary",
										children: [treat.name, treat.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-sm text-secondary-foreground/60 normal-case tracking-normal",
											children: "View all →"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-secondary-foreground/70",
										children: treat.desc
									})]
								})]
							}, treat.name);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "story",
				className: "px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase text-accent font-bold mb-4 block",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl md:text-6xl uppercase text-secondary mb-8 leading-tight",
							children: ["For the love of ice cream & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary [text-shadow:_2px_2px_0_#005BB5]",
								children: "hot desserts"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 text-foreground/80 leading-relaxed text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Since 1999, the Savino family has been serving premium soft serve and hot desserts to the people of Northwest London — a love letter to the British ice cream van tradition." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use fresh ice cream mix, never powder. Each cone, sundae and shake is one of a kind: indulgent, delicate, and made the moment you order it." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 p-8 border-l-4 border-primary bg-primary/5 italic text-secondary",
							children: ["“Our products may cause happiness.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-4 font-bold not-italic uppercase tracking-widest text-xs",
								children: "— The Savino Family"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "reviews",
				className: "px-6 pt-24 pb-12 bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-5xl md:text-7xl uppercase text-secondary mb-4",
							children: "What People Say"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-accent uppercase",
							children: "5.0 ★ on Google • Read our latest reviews"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.google.com/maps/search/?api=1&query=Mr+Savino+Icecream+207+Stoke+Rd+Slough+SL2+5AX",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm font-semibold uppercase tracking-widest text-secondary hover:text-accent transition-colors",
							children: "See All on Google →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: [
							{
								name: "Mubashir Arif",
								date: "3 months ago",
								text: "Very tasty ice cream! Excellent Service.",
								badge: null
							},
							{
								name: "first last",
								date: "2 weeks ago",
								text: "this is absolutely the best ice cream ive had, clean van, looks fresh and cleanliness is amazing which is what we don't see these days! i'll be on the lookout for more ice cream from you guys",
								badge: "Local Guide · 14 reviews"
							},
							{
								name: "Hayder Abbas",
								date: "2 weeks ago",
								text: "Hands down some of the best ice cream in all of London. Quality ingredients, authentic service and a chocolate cake that I cant get enough of!",
								badge: null
							}
						].map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-reveal bg-background rounded-2xl p-8 shadow-sm border border-border flex flex-col",
							style: { animationDelay: `${300 + i * 100}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 mb-4 text-primary",
									children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "w-4 h-4 fill-current",
										viewBox: "0 0 20 20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
									}, j))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-foreground/90 leading-relaxed mb-6 flex-1",
									children: [
										"“",
										review.text,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-6 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-sm uppercase tracking-wide text-secondary",
										children: review.name
									}), review.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: review.badge
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground font-mono",
										children: review.date
									})]
								})
							]
						}, review.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "px-6 pt-12 pb-24 bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center mb-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs uppercase text-primary font-bold mb-4 block",
									children: "Weddings, Festivals & Events"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-5xl md:text-7xl uppercase text-secondary-foreground mb-4 leading-tight",
									children: "Book the Chime"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-secondary-foreground/80 max-w-xl mx-auto",
									children: "Make your event unforgettable with a private visit from Savino’s. Drop us a message and we’ll check availability."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: async (e) => {
								e.preventDefault();
								const form = e.currentTarget;
								const data = new FormData(form);
								const name = String(data.get("name") || "").trim();
								const phone = String(data.get("phone") || "").trim();
								const email = String(data.get("email") || "").trim();
								const eventDate = String(data.get("eventDate") || "").trim();
								const guests = String(data.get("guests") || "").trim();
								const location = String(data.get("location") || "").trim();
								const message = String(data.get("message") || "").trim();
								if (!name || !email || !message) return;
								const fieldsRaw = {
									name,
									phone,
									email,
									eventDate,
									guests,
									location,
									message
								};
								const validated = enquirySchema.safeParse(fieldsRaw);
								if (!validated.success) {
									toast.error(validated.error.issues[0]?.message || "Please check the form for errors.");
									return;
								}
								const fields = validated.data;
								setSubmitting(true);
								try {
									await sendEnquiry({ data: fields });
									toast.success("Enquiry sent! We'll get back to you soon.");
									form.reset();
								} catch (error) {
									console.error(error);
									toast.error("Couldn't send automatically — opening your email app instead.");
									openMailtoFallback(fields);
								} finally {
									setSubmitting(false);
								}
							},
							className: "bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid md:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "name",
										className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
										children: "Your Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "name",
										name: "name",
										type: "text",
										required: true,
										maxLength: 100,
										className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "phone",
										className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phone",
										name: "phone",
										type: "tel",
										inputMode: "tel",
										required: true,
										maxLength: 30,
										pattern: "[0-9+\\-\\s()]*",
										title: "Digits only (you can use +, -, spaces and brackets)",
										onInput: (e) => {
											const input = e.currentTarget;
											input.value = input.value.replace(/[^0-9+\-\s()]/g, "");
										},
										className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid md:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "email",
										className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										maxLength: 255,
										pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
										title: "Enter a full email address, e.g. name@example.com",
										className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "eventDate",
										className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
										children: "Event Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "eventDate",
										name: "eventDate",
										type: "date",
										className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid md:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "guests",
										className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
										children: "Number of Guests"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "guests",
										name: "guests",
										defaultValue: "",
										className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select an option"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "1-25",
												children: "1 – 25"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "26-50",
												children: "26 – 50"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "51-100",
												children: "51 – 100"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "100+",
												children: "100+"
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "location",
										className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
										children: "Event Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "location",
										name: "location",
										type: "text",
										maxLength: 200,
										placeholder: "Venue or address",
										className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									required: true,
									maxLength: 1e3,
									rows: 5,
									placeholder: "Tell us about your event...",
									className: "w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: submitting,
									className: "w-full bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:ring-4 ring-primary/30 transition-all shadow-lg inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:ring-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "h-4 w-4",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "22",
											y1: "2",
											x2: "11",
											y2: "13"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })]
									}), submitting ? "Sending…" : "Send Enquiry"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:07399841111",
									className: "flex items-start gap-4 rounded-2xl border border-border bg-background p-6 hover:border-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "h-5 w-5",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base font-semibold text-secondary",
										children: "07399 841111"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:savinosofticecream@gmail.com",
									className: "flex items-start gap-4 rounded-2xl border border-border bg-background p-6 hover:border-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "h-5 w-5",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "22,6 12,13 2,6" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-secondary break-all",
											children: "savinosofticecream@gmail.com"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 rounded-2xl border border-border bg-background p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "h-5 w-5",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "12",
												cy: "10",
												r: "3"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base font-semibold text-secondary",
										children: "Northwest London"
									})] })]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative bg-foreground text-background py-20 px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute -top-12 left-0 h-12 w-full text-foreground",
					viewBox: "0 0 1440 80",
					preserveAspectRatio: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "currentColor",
						d: "M0 54C180 20 350 18 520 47C700 78 865 70 1030 35C1190 1 1325 12 1440 38V80H0V54Z"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid md:grid-cols-4 gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-4xl uppercase mb-8",
									children: "Savino’s"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-background/60 mb-8",
									children: "Northwest London’s family ice cream van. Live location shared daily via WhatsApp — message or email us for event hire."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "size-10 bg-white/10 rounded-full grid place-items-center hover:bg-primary hover:text-secondary transition-colors text-xs font-bold",
											children: "IG"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "size-10 bg-white/10 rounded-full grid place-items-center hover:bg-primary hover:text-secondary transition-colors text-xs font-bold",
											children: "FB"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "size-10 bg-white/10 rounded-full grid place-items-center hover:bg-primary hover:text-secondary transition-colors text-xs font-bold",
											children: "TT"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-6",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mon – Sun" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "12:00 – 19:00" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-background/50 pt-3",
									children: "Live location, NW London only"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-6",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:savinosofticecream@gmail.com",
									className: "hover:text-primary",
									children: "savinosofticecream@gmail.com"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:07399841111",
									className: "hover:text-primary",
									children: "07399 841111"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-background/40 mt-8",
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" Savino’s Soft Ice Cream."
								]
							})
						] })
					]
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
