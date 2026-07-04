import { createFileRoute, Link } from "@tanstack/react-router";
import waffleNutella from "@/assets/hot/waffle-nutella.jpg";

export const Route = createFileRoute("/menu/hot-desserts")({
  head: () => ({
    meta: [
      { title: "Hot Desserts — Savino's Soft Ice Cream" },
      {
        name: "description",
        content:
          "Warm Belgian waffles, brownies and cookie dough topped with fresh soft serve — Savino's hot dessert menu from the van.",
      },
      { property: "og:title", content: "Savino's Hot Dessert Menu" },
      {
        property: "og:description",
        content: "Warm waffles & brownies topped with real soft serve — straight from the van.",
      },
      { property: "og:image", content: waffleNutella },
    ],
  }),
  component: HotDessertsGallery,
});

const items = [
  {
    name: "Nutella Waffle",
    desc: "Golden Belgian waffle smothered in warm Nutella, served with a swirl of soft serve",
    img: waffleNutella,
  },
];

function HotDessertsGallery() {
  return (
    <div className="min-h-screen font-body text-foreground bg-background">
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

      <section className="px-6 pt-16 pb-10 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase text-primary font-bold mb-4 block">
            The Hot Dessert Menu
          </span>
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-6">
            Warm, Gooey &amp;{" "}
            <span className="text-primary [text-shadow:_2px_2px_0_#005BB5]">Fresh from the Van</span>
          </h1>
          <p className="max-w-[55ch] text-lg text-secondary-foreground/80">
            Belgian waffles, brownies and cookie dough — served warm and topped
            with a swirl of our signature soft serve.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((s, i) => (
            <div
              key={s.name}
              className="group animate-reveal bg-background rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
            Want something special?
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Ask at the van — we&rsquo;ll add extra sauces, toppings, or pair
            any hot dessert with a scoop of soft serve.
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
