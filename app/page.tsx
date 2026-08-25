import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONFIG, wa } from "@/lib/config";
import {
  SERVICES, CALORIE_GUIDE, CALORIE_TOTAL, SAMPLE_DAY,
  MEAL_PLAN, SPECIALITIES,
} from "@/lib/data";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/menu/ProductCard";
import { WeeklyNonVeg } from "@/components/home/WeeklyNonVeg";

const POPULAR = PRODUCTS.filter((p) => p.popular).slice(0, 8);
import { ArrowRight, Leaf, ShieldCheck, MapPin, Clock, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ---------------- hero — poster style, matches the Instagram brand ---------------- */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero-meal.png"
          alt="Freshly cooked diet meal from The Diet Hub"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />

        <div className="relative mx-auto grid w-[min(1180px,94%)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <p className="flex items-center gap-2.5 font-num text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: "var(--color-brand-orange)" }}>
              <span className="h-px w-7" style={{ background: "var(--color-brand-orange)" }} />
              Uppala&apos;s · {CONFIG.city}
            </p>

            <h1 className="font-display mt-5 text-[2.6rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
              Eat right. Live right.{" "}
              <span style={{ color: "var(--color-brand-orange)" }}>Feel right.</span>
            </h1>

            <p className="mt-4 text-lg font-semibold text-[#f0e9dd]">{CONFIG.taglineTe}</p>

            <p className="mt-5 max-w-xl leading-relaxed text-[#d8dcd3]">
              Personalised diet plans built around your age, weight, lifestyle and health
              condition — fresh, low-oil food cooked daily and delivered across {CONFIG.city}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa("Hi The Diet Hub! I'd like to book a diet consultation.")} target="_blank" rel="noopener noreferrer">
                <Button size="lg" style={{ background: "var(--color-brand-orange)", color: "#fff" }}>
                  Book a consultation
                </Button>
              </a>
              <Link href="/menu">
                <Button variant="ghost" size="lg" className="border-white/30 text-white hover:bg-white hover:text-ink">
                  Explore menu <ArrowRight size={16} strokeWidth={2} />
                </Button>
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 overflow-hidden rounded-xl border border-white/20 bg-black/35 backdrop-blur-md">
              {[
                ["6 AM – 9 PM", "Open daily"],
                ["40+", "Menu items"],
                ["100%", "Natural food"],
              ].map(([v, l], i) => (
                <div key={l} className={`px-3 py-4 text-center ${i > 0 ? "border-l border-white/15" : ""}`}>
                  <dt className="font-num text-lg font-bold" style={{ color: "var(--color-brand-orange)" }}>{v}</dt>
                  <dd className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/75">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section className="mx-auto w-[min(1180px,94%)] py-16">
        <Reveal>
          <p className="eyebrow mb-3">Our services</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">మా సేవలు</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
            Twelve ways we help — from a first consultation to long-term follow-up.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.no} delay={(i % 3) * 0.06}>
              <article className="card-surface h-full p-6">
                <span className="font-num text-2xl text-moss">{s.no}</span>
                <h3 className="font-display mt-3 text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-1 text-[15px] font-semibold text-leaf-deep dark:text-leaf">{s.titleTe}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-fg">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <Link href="/services">
              <Button variant="soft">
                See all 12 services <ArrowRight size={15} strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------------- meal plan ---------------- */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid w-[min(1180px,94%)] items-center gap-12 py-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Meal plans</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Try our {MEAL_PLAN.title}
            </h2>
            <p className="mt-2 text-lg font-semibold text-leaf-deep dark:text-leaf">
              {MEAL_PLAN.titleTe}
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-soft dark:text-muted-fg">
              Breakfast, lunch and dinner for three days — portioned, calorie-counted and cooked
              with low oil and low spice. The easiest way to find out whether eating clean actually
              suits you.
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {SPECIALITIES.slice(0, 6).map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <Leaf size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-leaf" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="chart">
              <div className="chart-head">Pricing</div>
              {[
                { mark: "veg", label: "Vegetarian", te: "శాకాహారం", price: MEAL_PLAN.priceVeg, color: "text-leaf" },
                { mark: "nonveg", label: "Non-vegetarian", te: "మాంసాహారం", price: MEAL_PLAN.priceNonVeg, color: "text-berry" },
              ].map((r) => (
                <div key={r.label} className="chart-row">
                  <span className={`diet-mark ${r.color}`} aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-bold">{r.label}</p>
                    <p className="text-[13px] text-muted-fg">{r.te} · 3 days · B / L / D</p>
                  </div>
                  <span className="font-num text-xl">₹{r.price}</span>
                </div>
              ))}
              <div className="border-t border-line p-[18px]">
                <a
                  href={wa(`Hi The Diet Hub! I'd like to order the ${MEAL_PLAN.title}.`)}
                  target="_blank" rel="noopener noreferrer" className="block"
                >
                  <Button variant="wa" className="w-full" size="lg">
                    Order on WhatsApp
                  </Button>
                </a>
                <p className="label mt-3 text-center">{MEAL_PLAN.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- calorie guide ---------------- */}
      <section className="mx-auto w-[min(1180px,94%)] py-16">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-3">Daily calorie guide</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              How many calories should a day hold?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft dark:text-muted-fg">
              Your number depends on age, weight, height, activity level and goal. This is the split
              we commonly use for a weight-loss plan — a starting point, not a prescription.
            </p>
            <Link href="/calorie-guide" className="mt-6 inline-block">
              <Button variant="soft">
                Full calorie guide <ArrowRight size={15} strokeWidth={2} />
              </Button>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="chart">
              <div className="chart-head flex items-center justify-between">
                <span>Meal</span>
                <span className="tracking-normal">Kcal / day</span>
              </div>
              {CALORIE_GUIDE.map((r) => (
                <div key={r.meal} className="chart-row">
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-bold">{r.meal}</p>
                    <p className="text-[13px] text-muted-fg">{r.mealTe}</p>
                  </div>
                  <span className="font-num shrink-0">{r.range}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t-2 border-ink bg-leaf-soft/70 px-[18px] py-3.5 dark:bg-white/4">
                <span className="font-display font-bold">Total per day</span>
                <span className="font-num text-leaf-deep dark:text-leaf">{CALORIE_TOTAL}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- popular products ---------------- */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto w-[min(1180px,94%)] py-16">
          <Reveal>
            <p className="eyebrow mb-3">From our kitchen</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Most ordered this week</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
              Meal boxes, cold-pressed juices and workout smoothies — every item with the numbers
              on it.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POPULAR.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-9 text-center">
              <Link href="/menu">
                <Button size="lg">
                  See the full menu <ArrowRight size={16} strokeWidth={2} />
                </Button>
              </Link>
              <p className="label mt-3">
                {PRODUCTS.length} items · meal boxes, juices, smoothies, salads
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- protein calculator ---------------- */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto w-[min(1180px,94%)] py-16">
          <Reveal>
            <p className="eyebrow mb-3">Free tool</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              How much protein do you actually need?
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
              Set your weight and goal — we show your daily number and which items from our kitchen
              hit it.
            </p>
            <Link href="/protein-calculator" className="mt-6 inline-block">
              <Button size="lg">
                Open the calculator <ArrowRight size={16} strokeWidth={2} />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- visit ---------------- */}
      <section className="border-t border-line bg-leaf-soft/50 dark:bg-transparent">
        <div className="mx-auto grid w-[min(1180px,94%)] gap-10 py-16 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow mb-3">Visit us</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Come and talk to us.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft dark:text-muted-fg">
              Walk in for a health assessment, or send us a message and we will call you back.
            </p>

            <ul className="mt-7 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span>{CONFIG.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span>{CONFIG.hours}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span className="font-num">
                  <a className="hover:text-leaf" href={`tel:+${CONFIG.whatsapp}`}>{CONFIG.phoneDisplay}</a>
                  {" · "}
                  <a className="hover:text-leaf" href={`tel:+${CONFIG.whatsapp2}`}>{CONFIG.phoneDisplay2}</a>
                </span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-leaf" />
                <span>Free health assessment before any plan is suggested.</span>
              </li>
            </ul>

            <a href={wa("Hi The Diet Hub! I'd like a health assessment.")} target="_blank" rel="noopener noreferrer"
              className="mt-7 inline-block">
              <Button variant="wa" size="lg">Message us on WhatsApp</Button>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="photo-mount h-full min-h-[340px]">
              <iframe
                title="The Diet Hub location"
                src={CONFIG.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto w-[min(1180px,94%)]">
        <WeeklyNonVeg />
      </div>
    </>
  );
}