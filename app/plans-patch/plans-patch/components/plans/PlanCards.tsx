"use client";
import { useState } from "react";
import { PLANS } from "@/lib/plans";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { wa, CONFIG } from "@/lib/config";
import { Check, Circle } from "lucide-react";

export function PlanCards() {
  const [diet, setDiet] = useState<"veg" | "nonveg">("veg");

  return (
    <>
      {/* veg / non-veg toggle */}
      <Reveal delay={0.04}>
        <div className="mt-8 inline-flex rounded-lg border-2 border-line p-1">
          {(["veg", "nonveg"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDiet(d)}
              aria-pressed={diet === d}
              className={`flex cursor-pointer items-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold transition-colors ${
                diet === d ? "bg-leaf text-white" : "text-muted-fg hover:text-leaf"
              }`}
            >
              <Circle size={8} className={`fill-current ${d === "nonveg" ? "text-berry" : ""}`} />
              {d === "veg" ? "Vegetarian" : "Non-Vegetarian"}
            </button>
          ))}
        </div>
      </Reveal>

      {/* plan cards */}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((p, i) => {
          const price = diet === "veg" ? p.price : p.priceNonVeg;
          const strike = diet === "veg" ? p.strike : p.strikeNonVeg;
          const perDay = diet === "veg" ? p.perDay : p.perDayNonVeg;

          return (
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
                  {strike && (
                    <span className="font-num block text-sm text-muted-fg line-through">₹{strike}</span>
                  )}
                  <p className="font-num text-4xl leading-none">₹{price}</p>
                  <p className="label mt-1.5">
                    {p.per} · {perDay}
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
                  href={wa(
                    `Hi ${CONFIG.brand}! I'd like the ${p.name} — ${diet === "veg" ? "Vegetarian" : "Non-Vegetarian"} (₹${price}). Please share the details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={p.hot ? "leaf" : "ghost"} className="w-full">
                    Start {p.name}
                  </Button>
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
