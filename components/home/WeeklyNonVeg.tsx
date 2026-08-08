import { Reveal } from "@/components/Reveal";
import { Flame } from "lucide-react";

const WEEK = [
  { day: "Monday", dayTe: "సోమవారం", grain: "Brown Rice", curry: "Chicken Curry", salad: "Cucumber & Carrot Salad", emoji: "" },
  { day: "Tuesday", dayTe: "మంగళవారం", grain: "Quinoa Rice", curry: "Chicken Keema", salad: "Onion-Cucumber Salad", emoji: "" },
  { day: "Wednesday", dayTe: "బుధవారం", grain: "Millet Rice", curry: "Grilled Chicken", salad: "Vegetable Salad", emoji: "" },
  { day: "Thursday", dayTe: "గురువారం", grain: "Millet Sangati", curry: "Chicken Palak Curry", salad: "Cucumber Salad", emoji: "" },
  { day: "Friday", dayTe: "శుక్రవారం", grain: "Brown Rice", curry: "Chicken Pepper Curry", salad: "Cabbage-Carrot Salad", emoji: "" },
  { day: "Saturday", dayTe: "శనివారం", grain: "Quinoa Rice", curry: "Chicken Vegetable Curry", salad: "Green Salad", emoji: "" },
  { day: "Sunday", dayTe: "ఆదివారం", grain: "Millet Rice", curry: "Chicken Keema Curry", salad: "Sprouts Salad", emoji: "" },
];

export function WeeklyNonVeg() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <Reveal>
      <section className="mt-14">
        <p className="eyebrow mb-3 flex items-center gap-1.5">
          <Flame size={12} strokeWidth={2.5} /> This week's non-veg menu
        </p>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          A fresh combo every single day
        </h2>

        <div className="chart mt-5">
          <div className="chart-head flex items-center justify-between">
            <span>Weekly rotation</span>
            <span className="tracking-normal">Grain · Curry · Salad</span>
          </div>
          {WEEK.map((d) => (
            <div
              key={d.day}
              className={`chart-row ${
                d.day === today ? "bg-leaf-soft/60 dark:bg-white/5" : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <p className="font-display flex items-center gap-2 font-bold">
                  <span>{d.emoji}</span>
                  {d.day}
                  {d.day === today && (
                    <span className="rounded-full bg-brand-orange px-2 py-0.5 text-[10px] font-bold text-white">
                      TODAY
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-[13px] text-muted-fg">
                  {d.grain} · {d.curry} · {d.salad}
                </p>
              </div>
              <span className="font-num shrink-0 text-xs text-leaf-deep dark:text-leaf">{d.dayTe}</span>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}