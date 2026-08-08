import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CALORIE_GUIDE, CALORIE_TOTAL, SAMPLE_DAY, HYDRATION_NOTE } from "@/lib/data";
import { wa } from "@/lib/config";
import { Droplet, Leaf, HeartPulse } from "lucide-react";
import { NutritionCalculator } from "@/components/calorie-guide/NutritionCalculator";

export const metadata = { title: "Daily Calorie Guide — THE DIET HUB Kadapa" };

export default function CalorieGuide() {
  return (
    <div className="mx-auto w-[min(1080px,94%)] py-14">
      <Reveal>
        <p className="eyebrow mb-3">Daily calorie guide</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          డైట్ ఫుడ్ కస్టమర్లకు రోజువారీ క్యాలరీ గైడ్
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
          Your daily calories depend on age, weight, height, physical activity and goal — losing,
          maintaining or gaining. The split below is what we commonly use for a weight-loss plan.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-fg">
          డైట్ ఫుడ్ కస్టమర్లకు అనుసరించాల్సిన క్యాలరీలు వారి వయస్సు, బరువు, ఎత్తు, శారీరక శ్రమ,
          లక్ష్యం మీద ఆధారపడి ఉంటాయి.
        </p>
      </Reveal>

      <NutritionCalculator />

      <div className="mt-11 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="chart">
            <div className="chart-head flex items-center justify-between">
              <span>భోజనం · Meal</span>
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
            <div className="flex items-center justify-between border-t-2 border-ink bg-leaf-soft/70 px-[18px] py-4 dark:border-cream dark:bg-white/4">
              <span className="font-display font-bold">Total per day</span>
              <span className="font-num text-leaf-deep dark:text-leaf">{CALORIE_TOTAL}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="chart">
            <div className="chart-head">ఉదాహరణ మెనూ · Example day</div>
            {SAMPLE_DAY.map((s) => (
              <div key={s.slot} className="chart-row">
                <div className="min-w-0 flex-1">
                  <p className="font-display font-bold">{s.slot}</p>
                  <ul className="mt-1 space-y-0.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-1.5 text-[13px] text-muted-fg">
                        <Leaf size={11} strokeWidth={2} className="mt-1 shrink-0 text-leaf" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="font-num shrink-0 text-leaf-deep dark:text-leaf">{s.kcal}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { Icon: Droplet, t: "Water", p: "2.5 – 3 litres a day, spread across the day." },
            { Icon: Leaf, t: "Choose", p: "Fibre-rich, protein-rich foods and healthy fats." },
            { Icon: HeartPulse, t: "Avoid", p: "Sugar, refined flour and deep-fried food." },
          ].map(({ Icon, t, p }) => (
            <div key={t} className="card-surface p-6">
              <Icon size={20} strokeWidth={1.75} className="text-leaf" />
              <h3 className="font-display mt-3 text-lg font-bold">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-fg">{p}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-8 rounded-xl border border-leaf/30 bg-leaf-soft/70 p-7 dark:bg-white/4">
          <p className="label mb-2">గమనిక · Note</p>
          <p className="leading-relaxed text-ink-soft dark:text-muted-fg">{HYDRATION_NOTE}</p>
          <a href={wa("Hi The Diet Hub! I'd like to know my daily calorie target.")} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-block">
            <Button variant="wa">Get my number on WhatsApp</Button>
          </a>
        </div>
      </Reveal>
    </div>
  );
}