import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { PLANS, PLAN_NOTES } from "@/lib/plans";
import { SAMPLE_DAY, CALORIE_TOTAL, SPECIALITIES } from "@/lib/data";
import { wa, CONFIG } from "@/lib/config";
import { Check, Leaf, Info } from "lucide-react";

export const metadata = { title: "Meal Plans — THE DIET HUB Kadapa" };

const STEPS = [
  { n: "01", t: "Free assessment", p: "Share your age, weight, routine and any health condition. Takes 20 minutes, costs nothing." },
  { n: "02", t: "We build the plan", p: "A calorie target and a menu that fits your goal, your condition and what you actually like eating." },
  { n: "03", t: "Cooked & delivered", p: "Fresh food, low oil, portioned and labelled — delivered at each meal slot." },
  { n: "04", t: "Follow-up", p: "We check your progress and change the plan as your body changes." },
];

export default function Plans() {
  return (
    <div className="mx-auto w-[min(1180px,94%)] py-14">
      <Reveal>
        <p className="eyebrow mb-3">Subscription plans</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Eat right, all week long.</h1>
        <p className="mt-2 text-xl font-semibold text-leaf-deep dark:text-leaf">
          సరైన ఆహారం... సంపూర్ణమైన జీవితం!
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
          Skip the daily deciding. Subscribe once and we handle the planning, cooking, portioning and
          delivery. Pause or change anything on WhatsApp.
        </p>
      </Reveal>

      {/* plan cards */}
      <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06} className="h-full">
            <article
              className={`relative flex h-full flex-col rounded-xl border-2 bg-surface p-6 transition-transform hover:-translate-y-1 ${
                p.hot ? "border-leaf" : "border-line"
              }`}
            >
              {p.flag && (
                <span
                  className={`absolute -top-3 right-5 rounded-md px-2.5 py-1 font-num text-[10px] font-bold tracking-widest text-white ${
                    p.hot ? "bg-leaf" : "bg-leaf-deep"
                  }`}
                >
                  {p.flag}
                </span>
              )}

              <p className="label">{p.bestFor}</p>
              <h2 className="font-display mt-1.5 text-2xl font-bold">{p.name}</h2>
              <p className="mt-0.5 text-sm font-semibold text-leaf-deep dark:text-leaf">{p.nameTe}</p>

              <div className="mt-5">
                {p.strike && (
                  <span className="font-num block text-sm text-muted-fg line-through">₹{p.strike}</span>
                )}
                <p className="font-num text-4xl leading-none">₹{p.price}</p>
                <p className="label mt-1.5">
                  {p.per} · {p.perDay}
                </p>
              </div>

              <div className="my-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
                <div className="bg-surface py-2.5 text-center">
                  <b className="font-num block text-[15px]">{p.days}</b>
                  <span className="label mt-0.5 block text-[8px]">days</span>
                </div>
                <div className="bg-surface py-2.5 text-center">
                  <b className="font-num block text-[15px]">{p.days * p.mealsPerDay}</b>
                  <span className="label mt-0.5 block text-[8px]">meals</span>
                </div>
              </div>

              <p className="text-[13px] leading-relaxed text-muted-fg">{p.summary}</p>

              <ul className="my-5 flex-1 space-y-2">
                {p.includes.map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] font-semibold text-ink-soft dark:text-muted-fg">
                    <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-leaf" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={wa(`Hi ${CONFIG.brand}! I'd like the ${p.name} (₹${p.price}). Please share the details.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={p.hot ? "leaf" : "ghost"} className="w-full">
                  Start {p.name}
                </Button>
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      {/* notes */}
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-xl border border-leaf/30 bg-leaf-soft/60 p-6 dark:bg-white/4">
          <p className="label mb-3 flex items-center gap-1.5">
            <Info size={12} strokeWidth={2.5} /> Good to know
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {PLAN_NOTES.map((n) => (
              <li key={n} className="flex gap-2 text-[14px] leading-relaxed text-ink-soft dark:text-muted-fg">
                <Leaf size={14} strokeWidth={2} className="mt-1 shrink-0 text-leaf" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* example day */}
      <Reveal delay={0.1}>
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold">What a day looks like</h2>
          <div className="chart mt-4">
            <div className="chart-head flex items-center justify-between">
              <span>Example day</span>
              <span className="tracking-normal">{CALORIE_TOTAL} target</span>
            </div>
            {SAMPLE_DAY.map((s) => (
              <div key={s.slot} className="chart-row">
                <div className="min-w-0 flex-1">
                  <p className="font-display font-bold">{s.slot}</p>
                  <p className="mt-0.5 text-[13px] text-muted-fg">{s.items.join(" · ")}</p>
                </div>
                <span className="font-num shrink-0 text-leaf-deep dark:text-leaf">{s.kcal} kcal</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* how it works */}
      <Reveal delay={0.1}>
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold">How it works</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="card-surface p-6">
                <span className="font-num text-xl text-leaf">{s.n}</span>
                <h3 className="font-display mt-2 text-lg font-bold">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-fg">{s.p}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* specialities */}
      <Reveal delay={0.12}>
        <section className="mt-14 rounded-xl bg-leaf-deep p-8 text-[#d6e6d3]">
          <h2 className="font-display text-2xl font-bold text-white">Our specialities</h2>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {SPECIALITIES.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm">
                <Check size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-lime" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#9fbb9c]">
            Questions? Call {CONFIG.phoneDisplay} or {CONFIG.phoneDisplay2} — {CONFIG.hours}.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
