"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Flame, Plus, Minus } from "lucide-react";
import type { Product } from "@/lib/products";
import { DIET_LABEL } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({
  p, i = 0, view = "grid",
}: { p: Product; i?: number; view?: "grid" | "list" }) {
  const { lines, add, setQty } = useCart();
  const n = lines.find((l) => l.id === p.id)?.qty ?? 0;
  const nonVeg = p.diet === "nonveg";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (i % 4) * 0.05, duration: 0.4 }}
      className={`card-surface group overflow-hidden ${
        view === "list" ? "flex flex-col sm:flex-row" : "flex flex-col"
      }`}
    >
      <Link
        href={`/menu/${p.id}`}
        className={`relative block ${view === "list" ? "sm:w-64 sm:shrink-0" : ""}`}
      >
        <div className={`relative overflow-hidden bg-leaf-soft ${view === "list" ? "aspect-[4/3] sm:h-full" : "aspect-[4/3]"}`}>
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>

        <span
          className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-white/95 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
            nonVeg ? "text-berry" : "text-leaf-deep"
          }`}
        >
          <span className={`diet-mark ${nonVeg ? "text-berry" : "text-leaf"}`} aria-hidden />
          {DIET_LABEL[p.diet]}
        </span>

        {p.popular && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-lime px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
            <Flame size={10} strokeWidth={2.5} /> Popular
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link href={`/menu/${p.id}`}>
          <h3 className="font-display text-[16px] font-bold leading-snug transition-colors hover:text-leaf">
            {p.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-[13px] font-semibold text-leaf-deep dark:text-leaf">{p.nameTe}</p>
        <p className={`mt-2 text-[13px] leading-relaxed text-muted-fg ${view === "list" ? "" : "line-clamp-2"}`}>{p.desc}</p>

        {view === "list" && (
          <p className="mt-2 text-[12px] leading-relaxed text-muted-fg">
            <span className="label">Made with</span> {p.ingredients.slice(0, 6).join(", ")}
          </p>
        )}

        <div className="label mt-3 mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="flex items-center gap-1">
            <Clock size={11} strokeWidth={2} /> {p.prepTime}
          </span>
          <span aria-hidden>·</span>
          <span>{p.serving}</span>
        </div>

        {/* macro rail */}
        {!p.enquiryOnly && (
          <div className="macro-rail grid grid-cols-4">
            {[
              [p.n.calories, "kcal", "text-leaf-deep"],
              [`${p.n.protein}g`, "protein", "text-leaf-deep"],
              [`${p.n.carbs}g`, "carbs", ""],
              [`${p.n.fibre}g`, "fibre", ""],
            ].map(([v, l, c]) => (
              <div key={l as string} className="py-2 text-center">
                <b className={`font-num block text-[13px] ${c}`}>{v}</b>
                <span className="label mt-0.5 block text-[8px]">{l}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <b className="font-num block text-lg leading-none">
              {p.enquiryOnly ? "Enquire" : `₹${p.price}`}
            </b>
            <span className="label mt-1 block">
              {p.enquiryOnly ? "free consultation" : "per serving"}
            </span>
          </div>

          {p.enquiryOnly ? (
            <Link
              href={`/menu/${p.id}`}
              className="rounded-lg border-2 border-leaf px-4 py-2 text-sm font-extrabold text-leaf transition-colors hover:bg-leaf hover:text-white"
            >
              Details
            </Link>
          ) : n === 0 ? (
            <button
              onClick={() => add(p.id)}
              className="cursor-pointer rounded-lg border-2 border-leaf px-5 py-2 text-sm font-extrabold text-leaf transition-colors hover:bg-leaf hover:text-white"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center gap-1 rounded-lg border-2 border-leaf">
              <button
                onClick={() => setQty(p.id, n - 1)}
                aria-label={`Remove one ${p.name}`}
                className="grid size-9 cursor-pointer place-items-center text-leaf"
              >
                <Minus size={15} strokeWidth={2.5} />
              </button>
              <b className="font-num w-5 text-center text-sm text-leaf">{n}</b>
              <button
                onClick={() => add(p.id)}
                aria-label={`Add one ${p.name}`}
                className="grid size-9 cursor-pointer place-items-center text-leaf"
              >
                <Plus size={15} strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
