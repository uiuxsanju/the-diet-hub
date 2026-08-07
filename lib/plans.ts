// ============================================================
// THE DIET HUB — subscription plans
// Edit prices, meals and features here.
// ============================================================

export type Plan = {
  id: string;
  name: string;
  nameTe: string;
  price: number;
  strike?: number;
  per: string;
  days: number;
  mealsPerDay: number;
  perDay: string;
  flag?: string;
  hot?: boolean;
  summary: string;
  includes: string[];
  bestFor: string;
};

export const PLANS: Plan[] = [
  {
    id: "trial-day",
    name: "Trial Day",
    nameTe: "ట్రయల్ డే",
    price: 199,
    per: "one day",
    days: 1,
    mealsPerDay: 3,
    perDay: "₹199 / day",
    summary: "One full day — breakfast, lunch and dinner. See whether our food suits you before committing.",
    includes: [
      "Breakfast + lunch + dinner",
      "Calorie-counted portions",
      "Choose veg or non-veg",
      "Delivered to your door",
    ],
    bestFor: "Trying us out",
  },
  {
    id: "plan-3day",
    name: "3-Day Plan",
    nameTe: "3 రోజుల ప్లాన్",
    price: 399,
    strike: 597,
    per: "3 days",
    days: 3,
    mealsPerDay: 3,
    perDay: "₹133 / day",
    flag: "SAVE ₹198",
    summary: "Three days of breakfast, lunch and dinner. The plan from our posters — the easiest way to start.",
    includes: [
      "9 meals across 3 days",
      "Roughly 1,300–1,600 kcal a day",
      "Rotating menu, no repeats",
      "Veg ₹399 · Non-veg ₹499",
    ],
    bestFor: "First-timers",
  },
  {
    id: "plan-7day",
    name: "7-Day Plan",
    nameTe: "7 రోజుల ప్లాన్",
    price: 899,
    strike: 1393,
    per: "7 days",
    days: 7,
    mealsPerDay: 3,
    perDay: "₹128 / day",
    flag: "MOST POPULAR",
    hot: true,
    summary: "A full week, breakfast to dinner, with one follow-up call to adjust the plan mid-week.",
    includes: [
      "21 meals across 7 days",
      "No menu repetition all week",
      "Mid-week follow-up call",
      "Free health assessment first",
      "Pause or swap days anytime",
    ],
    bestFor: "Building the habit",
  },
  {
    id: "plan-monthly",
    name: "Monthly Programme",
    nameTe: "నెలవారీ ప్రోగ్రామ్",
    price: 3499,
    strike: 3999,
    per: "30 days",
    days: 30,
    mealsPerDay: 3,
    perDay: "₹117 / day",
    flag: "BEST VALUE",
    summary: "A full month with a personalised calorie target, weekly weigh-ins and continuous support.",
    includes: [
      "90 meals across 30 days",
      "Personalised calorie & macro target",
      "Weekly weigh-in and plan review",
      "WhatsApp support throughout",
      "Diabetes / BP guidance included",
    ],
    bestFor: "Real, lasting change",
  },
];

export const PLAN_NOTES = [
  "Every plan starts with a free health assessment.",
  "Veg and non-veg options on all plans — non-veg adds ₹100 per 3 days.",
  "Tell us your allergies and dislikes; the menu is adjusted, not swapped for a template.",
  "Pause, shift days or stop anytime — just message us a day ahead.",
];
