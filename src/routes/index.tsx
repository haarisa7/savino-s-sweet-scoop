import { createFileRoute } from "@tanstack/react-router";
import vanAsset from "@/assets/van.png.asset.json";
import treatClassic from "@/assets/treat-classic.jpg";
import treatBerry from "@/assets/treat-berry.jpg";
import treatHoneycomb from "@/assets/treat-honeycomb.jpg";
import historyImg from "@/assets/history.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Savino's Soft Ice Cream — Northwest London's Mr Whippy Van" },
      {
        name: "description",
        content:
          "Family-run soft serve ice cream van serving Northwest London since 1999. Whippy cones, sundaes, milkshakes & hot desserts. Book us for weddings, festivals & events.",
      },
      { property: "og:title", content: "Savino's Soft Ice Cream — Northwest London" },
      {
        property: "og:description",
        content:
          "Premium soft serve, sundaes, shakes & hot desserts from London's favourite family ice cream van. Available daily and for private hire.",
      },
      { property: "og:image", content: vanAsset.url },
    ],
  }),
  component: Index,
});

const treats = [
  {
    name: "The Classic 99",
    desc: "Double-swirled vanilla soft serve, crisp Cadbury flake and a drizzle of honey.",
    img: treatClassic,
  },
  {
    name: "Berry Jubilee Sundae",
    desc: "Summer berry coulis folded into fresh cream and served over swirled vanilla.",
    img: treatBerry,
  },
  {
    name: "Honeycomb High",
    desc: "Salted caramel soft serve topped with shattered honeycomb in our signature blue cup.",
    img: treatHoneycomb,
  },
];

function Index() {
  return (
    <div className="min-h-screen font-body text-foreground selection:bg-primary selection:text-secondary">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="font-display text-2xl tracking-tight text-secondary uppercase">
          Savino&rsquo;s
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest">
          <a href="#menu" className="hover:text-secondary transition-colors">Menu</a>
          <a href="#story" className="hover:text-secondary transition-colors">Our Story</a>
          <a href="#hire" className="hover:text-secondary transition-colors">Hire Us</a>
        </div>
        <a
          href="https://wa.me/447399841111"
          className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Find the Van
        </a>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-reveal">
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-mono text-[10px] uppercase tracking-tighter mb-6 rounded-sm">
              Northwest London &bull; Est. 1999
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] text-secondary mb-8 text-balance">
              The Summer <span className="text-primary [text-shadow:_2px_2px_0_#005BB5]">Chime</span> is Calling
            </h1>
            <p className="max-w-[45ch] text-lg text-pretty leading-relaxed mb-10 text-foreground/80">
              Family-run since 1999, Savino&rsquo;s brings the joy of proper British soft serve to the streets of Northwest London. Nostalgia in a cone, delivered with a smile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:ring-4 ring-primary/30 transition-all shadow-lg"
              >
                View Menu
              </a>
              <a
                href="#hire"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Book for Events
              </a>
            </div>
          </div>
          <div className="relative animate-reveal [animation-delay:200ms]">
            <div className="w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-black/5">
              <img
                src={vanAsset.url}
                alt="Savino's Mr Whippy ice cream van"
                className="w-full h-full object-cover"
                width={1200}
                height={1200}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="font-display text-4xl leading-none">25+</div>
              <div className="font-mono text-[10px] uppercase mt-2">Years swirling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-4">Signature Swirls</h2>
              <p className="font-mono text-sm text-primary uppercase">
                Hand-crafted &bull; Triple-whipped &bull; Local dairy
              </p>
            </div>
            <p className="text-sm text-secondary-foreground/70 max-w-xs">
              Soft serve, sundaes, milkshakes & hot desserts — served fresh from the van every day, 12pm to 7pm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {treats.map((t, i) => (
              <div
                key={t.name}
                className="group animate-reveal"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="w-full aspect-[4/5] bg-white/10 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-3xl uppercase mb-2">{t.name}</h3>
                <p className="text-sm text-secondary-foreground/70">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="w-full aspect-square bg-stone-200 rounded-3xl overflow-hidden grayscale">
            <img
              src={historyImg}
              alt="The Savino family in front of their first ice cream van"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-mono text-xs uppercase text-accent font-bold mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-secondary mb-8 leading-tight">
              For the love of ice cream &amp; <span className="text-primary [text-shadow:_2px_2px_0_#005BB5]">hot desserts</span>
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                Since 1999, the Savino family has been serving premium soft serve and hot desserts to the people of Northwest London — a love letter to the British ice cream van tradition.
              </p>
              <p>
                We use fresh ice cream mix, never powder. Each cone, sundae and shake is one of a kind: indulgent, delicate, and made the moment you order it.
              </p>
            </div>
            <div className="mt-12 p-8 border-l-4 border-primary bg-primary/5 italic text-secondary">
              &ldquo;Our products may cause happiness.&rdquo;
              <footer className="mt-4 font-bold not-italic uppercase tracking-widest text-xs">
                — The Savino Family
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Hire */}
      <section id="hire" className="px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-8xl uppercase text-secondary mb-8 leading-[0.9]">
              Book the Chime
            </h2>
            <p className="text-lg md:text-2xl text-secondary/80 max-w-2xl mx-auto mb-12 font-medium">
              Weddings, festivals, school fairs, corporate days — make it unforgettable with a private visit from Savino&rsquo;s.
            </p>
            <a
              href="mailto:savinosofticeream@gmail.com"
              className="inline-block bg-secondary text-secondary-foreground px-12 py-6 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Check Availability
            </a>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="font-display text-[25vw] uppercase text-secondary leading-none">
              SAVINO
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-4xl uppercase mb-8">Savino&rsquo;s</div>
            <p className="max-w-md text-background/60 mb-8">
              Northwest London&rsquo;s family ice cream van. Live location shared daily via WhatsApp — message or email us for event hire.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 bg-white/10 rounded-full grid place-items-center hover:bg-primary hover:text-secondary transition-colors text-xs font-bold">IG</a>
              <a href="#" className="size-10 bg-white/10 rounded-full grid place-items-center hover:bg-primary hover:text-secondary transition-colors text-xs font-bold">FB</a>
              <a href="#" className="size-10 bg-white/10 rounded-full grid place-items-center hover:bg-primary hover:text-secondary transition-colors text-xs font-bold">TT</a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">
              Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Mon &ndash; Sun</li>
              <li>12:00 &ndash; 19:00</li>
              <li className="text-background/50 pt-3">Live location, NW London only</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">
              Contact
            </h4>
            <p className="text-sm mb-3">
              <a href="mailto:savinosofticeream@gmail.com" className="hover:text-primary">
                savinosofticeream@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:07399841111" className="hover:text-primary">
                07399 841111
              </a>
            </p>
            <p className="text-xs text-background/40 mt-8">
              &copy; {new Date().getFullYear()} Savino&rsquo;s Soft Ice Cream.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
