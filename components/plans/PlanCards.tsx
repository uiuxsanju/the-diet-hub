"use client";

import { useState } from "react";
import { PLANS } from "@/lib/plans";
import { wa } from "@/lib/config";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Diet = "veg" | "nonveg";

export function PlanCards() {
  const [diet, setDiet] = useState<Diet>("veg");

  return (
    <section className="mt-14">
      {/* heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Meal Plans</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft dark:text-muted-fg">
          Choose your preference and enjoy fresh, balanced meals every day.
        </p>
      </div>

      {/* veg / non-veg toggle — accessible segmented control */}
      <div className="mt-6 flex justify-center">
        <div
          role="group"
          aria-label="Choose your meal preference"
          className="inline-flex rounded-full border-2 border-leaf bg-surface p-1"
        >
          <button
            type="button"
            aria-pressed={diet === "veg"}
            onClick={() => setDiet("veg")}
            className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 ${
              diet === "veg" ? "bg-leaf text-white" : "text-leaf-deep dark:text-leaf"
            }`}
          >
            <span aria-hidden>🥗</span> Veg
          </button>
          <button
            type="button"
            aria-pressed={diet === "nonveg"}
            onClick={() => setDiet("nonveg")}
            className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 ${
              diet === "nonveg" ? "bg-leaf text-white" : "text-leaf-deep dark:text-leaf"
            }`}
          >
            <span aria-hidden>🍗</span> Non-Veg
          </button>
        </div>
      </div>

      {/* plan cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan, i) => {
          const price = diet === "veg" ? plan.priceVeg : plan.priceNonVeg;
          const priceLine = diet === "veg" ? plan.priceLineVeg : plan.priceLineNonVeg;
          const perDayLine = diet === "veg" ? plan.perDayLineVeg : plan.perDayLineNonVeg;
          const benefits = diet === "veg" ? plan.benefitsVeg : plan.benefitsNonVeg;

          const orderMsg = `Hi! I'd like to order the ${plan.name} (${
            diet === "veg" ? "Veg" : "Non-Veg"
          }) — ${plan.days} ${plan.days === 1 ? "day" : "days"}, ${plan.mealsPerDay} meals/day, ${priceLine}.`;

          return (
            <Reveal key={plan.id} delay={i * 0.05}>
              <div
                className={`motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1 relative flex h-full flex-col rounded-2xl border p-6 shadow-sm hover:shadow-lg ${
                  plan.hot
                    ? "border-2 border-leaf"
                    : plan.badge
                    ? "border-leaf/40 bg-leaf-soft/40 dark:bg-white/5"
                    : "card-surface border-line"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-leaf px-3 py-1 text-[11px] font-bold tracking-wide text-white motion-safe:animate-[fadeIn_.4s_ease]">
                    <span aria-hidden>{plan.badge.icon}</span> {plan.badge.label}
                  </span>
                )}

                <h3 className="font-display mt-2 text-xl font-bold">{plan.name}</h3>

                {/* price + meals — fades in on diet switch */}
                <div key={diet} className="plan-fade">
                  <div className="mt-4">
                    <span className="font-num text-3xl font-bold text-leaf-deep dark:text-leaf">
                      {priceLine}
                    </span>
                  </div>
                  {perDayLine ? (
                    <p className="font-num mt-0.5 text-xs text-muted-fg">{perDayLine}</p>
                  ) : (
                    <>
                      <p className="font-num mt-0.5 text-xs text-muted-fg">{plan.mealsLine}</p>
                      <p className="text-xs text-muted-fg">{plan.mealsSubLine}</p>
                    </>
                  )}

                  <ul className="mt-4 flex-1 space-y-2">
                    {benefits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px]">
                        <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-leaf" />
                        <span className="text-ink-soft dark:text-muted-fg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={wa(orderMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${plan.cta} — ${plan.name}, ${diet === "veg" ? "Veg" : "Non-Veg"}, ${priceLine}`}
                  className="motion-safe:transition-transform motion-safe:duration-150 mt-5 inline-flex items-center justify-center rounded-lg bg-leaf-deep px-4 py-3 text-sm font-bold text-white outline-none hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 dark:bg-leaf dark:text-leaf-darkest"
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .plan-fade {
          animation: planFadeIn 0.25s ease;
        }
        @keyframes planFadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .plan-fade {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}