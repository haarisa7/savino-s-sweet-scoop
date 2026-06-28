import { createFileRoute } from "@tanstack/react-router";
import vanAsset from "@/assets/van.png.asset.json";
import treatCone from "@/assets/treat-cone.jpg";
import treatWaffle from "@/assets/treat-waffle.jpg";
import treatSundae from "@/assets/treat-sundae.jpg";
import treatMilkshake from "@/assets/treat-milkshake.jpg";
import treatHotDough from "@/assets/treat-hot-dough.jpg";

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
    name: "Classic Cone",
    desc: "Proper Mr Whippy with a chocolate flake",
    img: treatCone,
  },
  {
    name: "Waffle Cone",
    desc: "Golden Belgian waffle with sprinkles & flake",
    img: treatWaffle,
  },
  {
    name: "Boat Sundae",
    desc: "Soft serve swirls with sauce & toppings",
    img: treatSundae,
  },
  {
    name: "Milkshakes",
    desc: "Thick & creamy — Oreo, Biscoff, Caramel & more",
    img: treatMilkshake,
  },
  {
    name: "Hot Choc Dough",
    desc: "Warm cookie dough topped with soft serve",
    img: treatHotDough,
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
          <a href="#reviews" className="hover:text-secondary transition-colors">Reviews</a>
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
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-4">Our Menu</h2>
              <p className="font-mono text-sm text-primary uppercase">
                Fresh from the van &bull; Daily 12pm &ndash; 7pm
              </p>
            </div>
            <p className="text-sm text-secondary-foreground/70 max-w-xs">
              Soft serve, sundaes, milkshakes &amp; hot desserts &mdash; served fresh from the van every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treats.map((treat, i) => (
              <div
                key={treat.name}
                className="group animate-reveal bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl overflow-hidden hover:bg-secondary-foreground/10 transition-colors"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={treat.img}
                    alt={treat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl uppercase mb-2 text-primary">{treat.name}</h3>
                  <p className="text-sm text-secondary-foreground/70">{treat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
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
      </section>

      {/* Reviews */}
      <section id="reviews" className="px-6 py-24 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-5xl md:text-7xl uppercase text-secondary mb-4">What People Say</h2>
              <p className="font-mono text-sm text-accent uppercase">
                5.0 ★ on Google &bull; Read our latest reviews
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mr+Savino+Icecream+207+Stoke+Rd+Slough+SL2+5AX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
            >
              See All on Google →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mubashir Arif",
                date: "3 months ago",
                text: "Very tasty ice cream! Excellent Service.",
                badge: null,
              },
              {
                name: "first last",
                date: "2 weeks ago",
                text: "this is absolutely the best ice cream ive had, clean van, looks fresh and cleanliness is amazing which is what we don't see these days! i'll be on the lookout for more ice cream from you guys",
                badge: "Local Guide · 14 reviews",
              },
              {
                name: "Hayder Abbas",
                date: "2 weeks ago",
                text: "Hands down some of the best ice cream in all of London. Quality ingredients, authentic service and a chocolate cake that I cant get enough of!",
                badge: null,
              },
            ].map((review, i) => (
              <div
                key={review.name}
                className="animate-reveal bg-background rounded-2xl p-8 shadow-sm border border-border flex flex-col"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="font-bold text-sm uppercase tracking-wide text-secondary">
                      {review.name}
                    </div>
                    {review.badge && (
                      <div className="text-xs text-muted-foreground mt-0.5">{review.badge}</div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">{review.date}</div>
                </div>
              </div>
            ))}
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

      {/* Contact */}
      <section id="contact" className="px-6 py-24 bg-muted">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase text-accent font-bold mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-secondary mb-4 leading-tight">
              Send Us a Message
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Questions, event bookings, or just want to say hi? Drop us a line and we&rsquo;ll get back to you.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = String(data.get("name") || "").trim();
              const email = String(data.get("email") || "").trim();
              const message = String(data.get("message") || "").trim();
              if (!name || !email || !message) return;
              const subject = encodeURIComponent(`Website enquiry from ${name}`);
              const body = encodeURIComponent(
                `${message}\n\n— ${name}\nReply to: ${email}`,
              );
              window.location.href = `mailto:savinosofticeream@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
              <p className="text-xs text-muted-foreground">
                Or WhatsApp us on{" "}
                <a href="https://wa.me/447399841111" className="text-secondary font-semibold hover:text-primary">
                  07399 841111
                </a>
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:ring-4 ring-primary/30 transition-all shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
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
