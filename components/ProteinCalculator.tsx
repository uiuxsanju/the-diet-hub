"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Circle, Dumbbell, MessageCircle } from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { wa, CONFIG } from "@/lib/config";

type Pref = "all" | "veg" | "vegan";

export function ProteinCalculator() {
  const [w, setW] = useState(70);
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("gain");
  const [pref, setPref] = useState<Pref>("all");

  const grams = Math.round(w * (goal === "gain" ? 2 : goal === "lose" ? 1.8 : 1.5));

  const picks = useMemo(() => {
    const ok = (p: Product) => {
      if (p.enquiryOnly) return false;
      if (pref === "vegan") return p.diet === "vegan";
      if (pref === "veg") return p.diet === "veg" || p.diet === "vegan";
      return true;
    };
    const sorted = PRODUCTS.filter(ok).sort((a, b) => b.n.protein - a.n.protein);
    const out: Product[] = [];
    let sum = 0;
    for (const p of sorted) {
      if (sum >= grams || out.length === 5) break;
      out.push(p);
      sum += p.n.protein;
    }
    return { out, sum };
  }, [grams, pref]);

  return (
    <section className="card-surface grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
      <div>
        <label className="label block">
          Your weight: <b className="font-num text-base text-leaf-deep dark:text-leaf">{w} kg</b>
          <input
            type="range" min={35} max={140} value={w}
            onChange={(e) => setW(+e.target.value)}
            className="mt-2 w-full accent-leaf"
          />
        </label>

        <p className="label mt-5">Goal</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {([["lose", "Fat Loss"], ["maintain", "Maintain"], ["gain", "Muscle Gain"]] as const).map(([v, l]) => (
            <button
              key={v} onClick={() => setGoal(v)} aria-pressed={goal === v}
              className={`cursor-pointer rounded-lg border-2 px-2 py-2.5 text-xs font-extrabold transition-colors ${
                goal === v ? "border-leaf bg-leaf/10 text-leaf-deep dark:text-leaf" : "border-line text-muted-fg hover:border-leaf"
              }`}
            >{l}</button>
          ))}
        </div>

        <p className="label mt-5">Food preference</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {([["all", "All"], ["veg", "Veg"], ["vegan", "Vegan"]] as const).map(([v, l]) => (
            <button
              key={v} onClick={() => setPref(v)} aria-pressed={pref === v}
              className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border-2 px-2 py-2.5 text-xs font-extrabold transition-colors ${
                pref === v ? "border-leaf bg-leaf/10 text-leaf-deep dark:text-leaf" : "border-line text-muted-fg hover:border-leaf"
              }`}
            >
              <Circle size={7} className="fill-current text-leaf" />{l}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-leaf-deep p-5 text-center text-white">
          <span className="label text-[#b9d3bd]">Your daily protein target</span>
          <b className="font-num mt-1 block text-5xl">{grams}g</b>
        </div>

        <p className="label mt-3 leading-relaxed">
          A guide only — your exact number is set at your free assessment.
        </p>
      </div>

      <div>
        <p className="label">Hit it with our kitchen</p>
        <div className="mt-3 space-y-3">
          {picks.out.map((p) => (
            <Link key={p.id} href={`/menu/${p.id}`}
              className="flex items-center gap-3 rounded-lg border border-line p-3 transition-colors hover:border-leaf">
              <img src={p.img} alt="" loading="lazy" className="size-12 shrink-0 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <b className="block truncate text-sm">{p.name}</b>
                <span className="font-num text-xs text-muted-fg">
                  {p.n.calories} kcal · ₹{p.price}
                </span>
              </div>
              <b className="font-num shrink-0 text-leaf-deep dark:text-leaf">{p.n.protein}g</b>
            </Link>
          ))}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-fg">
          These {picks.out.length} items give <b className="text-leaf-deep dark:text-leaf">{picks.sum}g protein</b>
          {picks.sum >= grams
            ? " — that clears your target."
            : " — just short; a consultation will close the gap with home-cooked additions."}
        </p>

        <a
          href={wa(
            `Hi ${CONFIG.brand}! I need about ${grams}g protein a day (${pref === "all" ? "no restriction" : pref}). Can you suggest a plan?`
          )}
          target="_blank" rel="noopener noreferrer" className="mt-5 inline-block"
        >
          <Button variant="wa" size="lg">
            <MessageCircle size={15} strokeWidth={1.75} /> Get my plan on WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
}

export function ProteinCalculatorPage() {
  return (
    <div className="mx-auto w-[min(1080px,94%)] py-12">
      <p className="eyebrow mb-3">
        <Dumbbell size={13} strokeWidth={2} className="inline" /> Protein calculator
      </p>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">
        How much protein do you actually need?
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
        Set your weight and goal — we show your daily number and exactly which items from our
        kitchen hit it.
      </p>

      <div className="mt-8">
        <ProteinCalculator />
      </div>
    </div>
  );
}
