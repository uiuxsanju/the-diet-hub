"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { wa, CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/button";

const FAQS: [string, string][] = [
  ["How do I start?", "Start with a free health assessment — walk in to the shop or message us on WhatsApp. We take your age, weight, height, routine and any health condition, then suggest the right plan. There is no obligation to order anything."],
  ["Which areas do you deliver to?", "We deliver across Kadapa from our kitchen near VJ Junction, beside More Super Market. Message us with your area and we will confirm delivery and timing."],
  ["How do I order?", "Add items to the cart from the menu and tap send — it opens WhatsApp with your full order already written out. Confirm your address and slot with us and you are done."],
  ["Are the calorie and protein numbers accurate?", "Every recipe is portioned by weight against a fixed recipe card. Values are approximate per serving and can vary slightly with fresh daily cooking, but the numbers on the label are what we cook to."],
  ["I have diabetes / high BP. Can you help?", "Yes. Diabetes, blood pressure and cholesterol guidance is one of our core services. Your plan is built around your condition — bring your latest reports to the assessment if you have them."],
  ["Do you make plans for children and pregnant mothers?", "Yes. We build growth-focused plans for children and complete nutrition plans through pregnancy. These always start with a consultation."],
  ["Can I customise the meals?", "Yes — tell us your allergies, what you dislike and what you can actually cook or eat at work. The plan is adjusted to you, not the other way round."],
  ["What are your timings?", `We are open ${CONFIG.hours}. Order the previous night for breakfast delivery, and before 10:30 AM for lunch.`],
  ["Can I pause my plan?", "Of course. Message us a day ahead on WhatsApp and we will pause it, swap days, or shift the schedule. No questions asked."],
  ["How do payments work?", "UPI or cash on delivery. For weekly and monthly plans we settle at the start of the cycle."],
];

export function FaqClient() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto w-[min(820px,94%)] py-12">
      <p className="eyebrow mb-3">FAQ</p>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Questions? Answered.</h1>
      <p className="mt-3 leading-relaxed text-ink-soft dark:text-muted-fg">
        Anything not covered here — just message us. We reply through the day.
      </p>

      <div className="mt-8 space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="card-surface overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-extrabold"
              aria-expanded={open === i}
            >
              <span className="text-[15px]">{q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-leaf transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft dark:text-muted-fg">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="card-surface mt-8 p-6 text-center">
        <p className="font-extrabold">Still have a question?</p>
        <a href={wa(`Hi ${CONFIG.brand}! I have a question:`)} target="_blank" rel="noopener noreferrer">
          <Button variant="wa" className="mt-3">
            <MessageCircle size={15} strokeWidth={1.75} /> Ask on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
