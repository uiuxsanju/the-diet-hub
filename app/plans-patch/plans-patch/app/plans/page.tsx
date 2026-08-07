import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { PLAN_NOTES } from "@/lib/plans";
import { PlanCards } from "@/components/plans/PlanCards";
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
      <PlanCards />


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
