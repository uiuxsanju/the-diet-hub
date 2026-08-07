import { PLANS } from "@/lib/plans";
import { wa } from "@/lib/config";
import { Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function PlanCards() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {PLANS.map((plan, i) => (
        <Reveal key={plan.id} delay={i * 0.05}>
          <div
            className={`relative flex h-full flex-col rounded-[18px] border p-6 ${
              plan.hot
                ? "border-brand-orange bg-leaf-deep text-white shadow-lg shadow-brand-orange/20"
                : "card-surface border-black/5 dark:border-white/10"
            }`}
          >
            {plan.flag && (
              <span
                className={`absolute -top-3 left-6 flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${
                  plan.hot ? "bg-brand-orange text-white" : "bg-leaf text-leaf-darkest"
                }`}
              >
                {plan.hot && <Sparkles size={11} strokeWidth={2.5} />}
                {plan.flag}
              </span>
            )}

            <h3 className="font-display mt-2 text-xl font-bold">{plan.name}</h3>
            <p className={`text-sm ${plan.hot ? "text-[#d6e6d3]" : "text-muted-fg"}`}>{plan.nameTe}</p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-num text-3xl font-bold">₹{plan.price}</span>
              {plan.strike && (
                <span className={`font-num text-sm line-through ${plan.hot ? "text-[#9fbb9c]" : "text-muted-fg"}`}>
                  ₹{plan.strike}
                </span>
              )}
            </div>
            <p className={`font-num mt-0.5 text-xs ${plan.hot ? "text-[#9fbb9c]" : "text-muted-fg"}`}>
              {plan.perDay} · {plan.days} {plan.days === 1 ? "day" : "days"} · {plan.mealsPerDay} meals/day
            </p>

            <p className={`mt-3 text-[13px] leading-relaxed ${plan.hot ? "text-[#d6e6d3]" : "text-ink-soft dark:text-muted-fg"}`}>
              {plan.summary}
            </p>

            <ul className="mt-4 flex-1 space-y-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px]">
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className={`mt-0.5 shrink-0 ${plan.hot ? "text-lime" : "text-leaf"}`}
                  />
                  <span className={plan.hot ? "text-[#d6e6d3]" : "text-ink-soft dark:text-muted-fg"}>{item}</span>
                </li>
              ))}
            </ul>

            <p className={`mt-4 text-[11px] font-semibold uppercase tracking-wide ${plan.hot ? "text-[#9fbb9c]" : "text-muted-fg"}`}>
              Best for: {plan.bestFor}
            </p>

            <a
              href={wa(`Hi, I want to subscribe to the ${plan.name} (₹${plan.price})`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold transition-transform hover:scale-[1.02] ${
                plan.hot ? "bg-brand-orange text-white" : "bg-leaf-deep text-white dark:bg-leaf dark:text-leaf-darkest"
              }`}
            >
              Choose {plan.name}
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  );
}