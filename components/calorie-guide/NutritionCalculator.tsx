"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { wa } from "@/lib/config";
import { Activity, Droplet, Flame, Leaf } from "lucide-react";

type Gender = "male" | "female";
type Goal = "lose" | "maintain" | "gain";

const ACTIVITY_LEVELS = [
  { k: "sedentary", l: "Sedentary — little or no exercise", m: 1.2 },
  { k: "light", l: "Light — exercise 1–3 days/week", m: 1.375 },
  { k: "moderate", l: "Moderate — exercise 3–5 days/week", m: 1.55 },
  { k: "active", l: "Active — exercise 6–7 days/week", m: 1.725 },
  { k: "very-active", l: "Very active — hard training / physical job", m: 1.9 },
];

const GOALS: { k: Goal; l: string }[] = [
  { k: "lose", l: "Lose weight" },
  { k: "maintain", l: "Maintain" },
  { k: "gain", l: "Gain weight" },
];

export function NutritionCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState<Goal>("maintain");

  const result = useMemo(() => {
    const w = Math.max(weight, 1);
    const h = Math.max(height, 1);
    const a = Math.max(age, 1);

    const bmi = w / (h / 100) ** 2;
    const bmiCategory =
      bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
    const bmiColor =
      bmi < 18.5 || bmi >= 30
        ? "text-berry"
        : bmi < 25
        ? "text-leaf-deep dark:text-leaf"
        : "text-brand-orange";

    // Mifflin-St Jeor — the standard, gender-specific BMR equation
    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const activityMultiplier = ACTIVITY_LEVELS.find((x) => x.k === activity)!.m;
    const tdee = bmr * activityMultiplier;

    const rawTarget = goal === "lose" ? tdee - 500 : goal === "gain" ? tdee + 500 : tdee;
    const floor = gender === "male" ? 1500 : 1200;
    const calorieTarget = Math.max(Math.round(rawTarget), floor);

    const proteinPerKg = goal === "lose" ? 2.0 : goal === "gain" ? 1.8 : 1.6;
    const proteinG = Math.round(w * proteinPerKg);
    const proteinKcal = proteinG * 4;

    const fatKcal = calorieTarget * 0.25;
    const fatG = Math.round(fatKcal / 9);

    const carbsKcal = Math.max(calorieTarget - proteinKcal - fatKcal, 0);
    const carbsG = Math.round(carbsKcal / 4);

    const waterLitres = Math.round(((w * 35) / 1000) * 10) / 10;
    const fibreG = gender === "male" ? (a <= 50 ? 38 : 30) : a <= 50 ? 25 : 21;

    return { bmi, bmiCategory, bmiColor, bmr: Math.round(bmr), tdee: Math.round(tdee), calorieTarget, proteinG, fatG, carbsG, waterLitres, fibreG };
  }, [gender, age, weight, height, activity, goal]);

  const orderMsg = `Hi The Diet Hub! My numbers: ${gender === "male" ? "Male" : "Female"}, ${age} yrs, ${weight} kg, ${height} cm, ${
    GOALS.find((g) => g.k === goal)!.l
  }. Calculator shows ~${result.calorieTarget} kcal/day (BMI ${result.bmi.toFixed(1)}, ${result.bmiCategory}). Can you confirm my plan?`;

  return (
    <Reveal>
      <section className="mt-11">
        <div className="card-surface p-7">
          <p className="label mb-2">Nutrition calculator · పోషకాహార కాలిక్యులేటర్</p>
          <h2 className="font-display text-2xl font-bold">
            Your daily calorie &amp; nutrition needs
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-fg">
            Enter your age, weight and height — the numbers update instantly, for men and women both.
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* ---- inputs ---- */}
            <div>
              <p className="label mb-2.5">Gender</p>
              <div
                role="group"
                aria-label="Choose your gender"
                className="inline-flex rounded-full border-2 border-leaf p-1"
              >
                <button
                  type="button"
                  aria-pressed={gender === "male"}
                  onClick={() => setGender("male")}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                    gender === "male" ? "bg-leaf text-white" : "text-leaf-deep dark:text-leaf"
                  }`}
                >
                  👨 Male
                </button>
                <button
                  type="button"
                  aria-pressed={gender === "female"}
                  onClick={() => setGender("female")}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                    gender === "female" ? "bg-leaf text-white" : "text-leaf-deep dark:text-leaf"
                  }`}
                >
                  👩 Female
                </button>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <label className="block">
                  <span className="label mb-1.5 block">Age</span>
                  <Input
                    type="number"
                    min={10}
                    max={100}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value) || 0)}
                    aria-label="Age in years"
                  />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">Weight (kg)</span>
                  <Input
                    type="number"
                    min={20}
                    max={200}
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value) || 0)}
                    aria-label="Weight in kilograms"
                  />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">Height (cm)</span>
                  <Input
                    type="number"
                    min={100}
                    max={220}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value) || 0)}
                    aria-label="Height in centimetres"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="label mb-1.5 block">Activity level</span>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm font-semibold outline-none focus:border-leaf"
                >
                  {ACTIVITY_LEVELS.map((a) => (
                    <option key={a.k} value={a.k}>
                      {a.l}
                    </option>
                  ))}
                </select>
              </label>

              <div className="mt-5">
                <span className="label mb-2.5 block">Goal</span>
                <div className="grid grid-cols-3 gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g.k}
                      type="button"
                      aria-pressed={goal === g.k}
                      onClick={() => setGoal(g.k)}
                      className={`rounded-lg border-2 px-3 py-2.5 text-xs font-bold transition-colors ${
                        goal === g.k
                          ? "border-leaf bg-leaf text-white"
                          : "border-line bg-surface hover:border-leaf"
                      }`}
                    >
                      {g.l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ---- results ---- */}
            <div className="rounded-xl border border-leaf/30 bg-leaf-soft/60 p-6 dark:bg-white/4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="label mb-1">Your BMI</p>
                  <p className={`font-num text-3xl font-bold ${result.bmiColor}`}>
                    {result.bmi.toFixed(1)}
                  </p>
                </div>
                <span className={`rounded-full bg-white px-3 py-1.5 text-xs font-bold dark:bg-white/10 ${result.bmiColor}`}>
                  {result.bmiCategory}
                </span>
              </div>

              <div className="mt-5 border-t border-leaf/20 pt-5">
                <p className="label mb-1 flex items-center gap-1.5">
                  <Flame size={12} strokeWidth={2.5} /> Daily calorie target
                </p>
                <p className="font-num text-4xl font-bold text-leaf-deep dark:text-leaf">
                  {result.calorieTarget} <span className="text-base font-semibold">kcal</span>
                </p>
                <p className="mt-1 text-xs text-muted-fg">
                  BMR {result.bmr} kcal · Maintenance (TDEE) {result.tdee} kcal
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-leaf/20 pt-5">
                {[
                  { l: "Protein", v: result.proteinG, u: "g" },
                  { l: "Carbs", v: result.carbsG, u: "g" },
                  { l: "Fat", v: result.fatG, u: "g" },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <p className="font-num text-xl font-bold">{m.v}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-muted-fg">
                      {m.l} ({m.u})
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-4 border-t border-leaf/20 pt-5">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-fg">
                  <Droplet size={13} strokeWidth={2} className="text-leaf" />
                  {result.waterLitres} L water
                </p>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-fg">
                  <Leaf size={13} strokeWidth={2} className="text-leaf" />
                  {result.fibreG} g fibre
                </p>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-fg">
                  <Activity size={13} strokeWidth={2} className="text-leaf" />
                  {ACTIVITY_LEVELS.find((a) => a.k === activity)!.l.split(" — ")[0]}
                </p>
              </div>

              <a href={wa(orderMsg)} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                <Button variant="wa" className="w-full justify-center">
                  Confirm my plan on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted-fg">
            This is a general estimate using the Mifflin-St Jeor formula, not medical advice. Pregnant or
            breastfeeding women, and anyone with diabetes, thyroid or heart conditions, should confirm their
            number with our free assessment before starting a plan.
          </p>
        </div>
      </section>
    </Reveal>
  );
}