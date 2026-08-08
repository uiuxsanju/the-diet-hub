// ============================================================
// THE DIET HUB — subscription plans
// Prices are fixed business figures — do not derive or round them.
// ============================================================

export type Plan = {
  id: string;
  name: string;
  days: number;
  mealsPerDay: number;
  priceVeg: number;
  priceNonVeg: number;
  priceLineVeg: string;
  priceLineNonVeg: string;
  perDayLineVeg?: string;
  perDayLineNonVeg?: string;
  mealsLine?: string;
  mealsSubLine?: string;
  badge?: { icon: string; label: string };
  hot?: boolean;
  benefitsVeg: string[];
  benefitsNonVeg: string[];
  cta: string;
};

export const PLANS: Plan[] = [
  {
    id: "trial-day",
    name: "Trial Day",
    days: 1,
    mealsPerDay: 3,
    priceVeg: 399,
    priceNonVeg: 499,
    priceLineVeg: "₹399 / day",
    priceLineNonVeg: "₹499 / day",
    mealsLine: "3 meals/day",
    mealsSubLine: "Breakfast • Lunch • Dinner",
    benefitsVeg: [
      "Fresh vegetarian meals",
      "Calorie-conscious portions",
      "Home-style preparation",
      "Doorstep delivery",
    ],
    benefitsNonVeg: [
      "Fresh non-vegetarian meals",
      "Protein-focused portions",
      "Home-style preparation",
      "Doorstep delivery",
    ],
    cta: "Start Trial",
  },
  {
    id: "plan-3day",
    name: "3-Day Plan",
    days: 3,
    mealsPerDay: 3,
    priceVeg: 1197,
    priceNonVeg: 1497,
    priceLineVeg: "₹1,197 / 3 days",
    priceLineNonVeg: "₹1,497 / 3 days",
    perDayLineVeg: "₹399/day",
    perDayLineNonVeg: "₹499/day",
    benefitsVeg: [
      "9 meals",
      "Breakfast + Lunch + Dinner",
      "Rotating menu",
      "Freshly prepared",
      "Doorstep delivery",
    ],
    benefitsNonVeg: [
      "9 meals",
      "Breakfast + Lunch + Dinner",
      "Rotating non-veg menu",
      "Protein-rich meal options",
      "Freshly prepared",
      "Doorstep delivery",
    ],
    cta: "Choose Plan",
  },
  {
    id: "plan-7day",
    name: "7-Day Plan",
    days: 7,
    mealsPerDay: 3,
    priceVeg: 2793,
    priceNonVeg: 3493,
    priceLineVeg: "₹2,793 / 7 days",
    priceLineNonVeg: "₹3,493 / 7 days",
    perDayLineVeg: "₹399/day",
    perDayLineNonVeg: "₹499/day",
    badge: { icon: "⭐", label: "MOST POPULAR" },
    hot: true,
    benefitsVeg: [
      "21 meals",
      "Variety of vegetarian dishes",
      "Calorie-conscious portions",
      "Free initial assessment",
      "WhatsApp support",
    ],
    benefitsNonVeg: [
      "21 meals",
      "Variety of chicken & fish-based meals",
      "Balanced protein portions",
      "Calorie-conscious meals",
      "Free initial assessment",
      "WhatsApp support",
    ],
    cta: "Choose Plan",
  },
  {
    id: "plan-monthly",
    name: "Monthly Plan",
    days: 30,
    mealsPerDay: 3,
    priceVeg: 11970,
    priceNonVeg: 14970,
    priceLineVeg: "₹11,970 / 30 days",
    priceLineNonVeg: "₹14,970 / 30 days",
    perDayLineVeg: "₹399/day",
    perDayLineNonVeg: "₹499/day",
    badge: { icon: "💚", label: "BEST VALUE" },
    benefitsVeg: [
      "90 meals",
      "Personalised meal planning",
      "Weekly menu planning",
      "Calorie & macro-focused meals",
      "WhatsApp support",
      "Doorstep delivery",
    ],
    benefitsNonVeg: [
      "90 meals",
      "Personalised non-veg meal planning",
      "Protein & macro-focused meals",
      "Weekly menu planning",
      "WhatsApp support",
      "Doorstep delivery",
    ],
    cta: "Start Monthly Plan",
  },
];

export const PLAN_NOTES = [
  "Every plan starts with a free health assessment.",
  "Toggle Veg / Non-Veg above to see exact pricing for each.",
  "Tell us your allergies and dislikes; the menu is adjusted, not swapped for a template.",
  "Pause, shift days or stop anytime — just message us a day ahead.",
];