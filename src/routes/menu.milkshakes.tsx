import { createFileRoute, Link } from "@tanstack/react-router";
import caramel from "@/assets/shakes/shake-caramel.png.asset.json";
import malt from "@/assets/shakes/shake-malt.png.asset.json";
import mocha from "@/assets/shakes/shake-mocha.png.asset.json";
import bubblegum from "@/assets/shakes/shake-bubblegum.png.asset.json";
import banana from "@/assets/shakes/shake-banana.png.asset.json";
import nutella from "@/assets/shakes/shake-nutella.png.asset.json";
import oreo from "@/assets/shakes/shake-oreo.png.asset.json";
import cookiesCream from "@/assets/shakes/shake-cookies-cream.png.asset.json";

export const Route = createFileRoute("/menu/milkshakes")({
  head: () => ({
    meta: [
      { title: "Milkshakes — Savino's Soft Ice Cream" },
      {
        name: "description",
        content:
          "Thick, hand-spun milkshakes from Savino's ice cream van — Biscoff, Oreo, Nutella, Bubblegum, Banana and more. Made fresh with real soft serve.",
      },
      { property: "og:title", content: "Savino's Milkshake Menu" },
      {
        property: "og:description",
        content: "Every shake on the menu — thick, creamy & hand-spun in the van.",
      },
      { property: "og:image", content: oreo.url },
    ],
  }),
  component: MilkshakesGallery,
});

const shakes = [
  { name: "Salted Caramel", desc: "Toffee-rich with a swirl of golden caramel", img: caramel.url, tint: "from-amber-100 to-amber-50" },
  { name: "Biscoff", desc: "Speculoos cookie butter blended smooth", img: malt.url, tint: "from-orange-100 to-amber-50" },
  { name: "Nutella", desc: "Chocolate hazelnut, ribboned through the cup", img: nutella.url, tint: "from-stone-100 to-amber-50" },
  { name: "Oreo Crush", desc: "Cookies & cream with real Oreo pieces", img: oreo.url, tint: "from-slate-200 to-slate-50" },
  { name: "Cookies & Cream", desc: "Classic vanilla soft serve with cookie shards", img: cookiesCream.url, tint: "from-stone-100 to-neutral-50" },
  { name: "Mocha", desc: "Espresso & chocolate — an afternoon pick-me-up", img: mocha.url, tint: "from-amber-100 to-stone-50" },
  { name: "Banana", desc: "Sweet ripe banana, thick and creamy", img: banana.url, tint: "from-yellow-100 to-amber-50" },
  { name: "Bubblegum", desc: "Blue raspberry bubblegum — a kids' favourite", img: bubblegum.url, tint: "from-sky-100 to-cyan-50" },
];

function MilkshakesGallery() {
  return (
    <div className="min-h-screen font-body text-foreground bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <Link to="/" className="font-display text-2xl tracking-tight text-secondary uppercase">
          Savino&rsquo;s
        </Link>
        <Link
          to="/"
          className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
        >
          ← Back to menu
        </Link>
      </nav>

      {/* Header */}
      <section className="px-6 pt-16 pb-10 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase text-primary font-bold mb-4 block">
            The Milkshake Menu
          </span>
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-6">
            Thick, Creamy &amp;{" "}
            <span className="text-primary [text-shadow:_2px_2px_0_#005BB5]">Hand-Spun</span>
          </h1>
          <p className="max-w-[55ch] text-lg text-secondary-foreground/80">
            Every shake is blended fresh in the van with real soft serve — no
            powders, no pre-mix. Served in a 16oz clear cup so you can see
            every swirl.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-16 bg-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {shakes.map((s, i) => (
            <div
              key={s.name}
              className="group animate-reveal bg-background rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`relative aspect-square bg-gradient-to-b ${s.tint} overflow-hidden`}>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent" />
                <img
                  src={s.img}
                  alt={s.name + " milkshake"}
                  className="absolute inset-0 w-full h-full object-contain p-4 md:p-6 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl md:text-2xl uppercase text-secondary mb-1.5 leading-tight">
                  {s.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Can&rsquo;t decide?
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Ask at the van — we&rsquo;ll mix flavours, add extra toppings, or
            build your own signature shake.
          </p>
          <Link
            to="/"
            hash="contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:ring-4 ring-primary/30 transition-all shadow-lg"
          >
            Book us for an event
          </Link>
        </div>
      </section>
    </div>
  );
}
