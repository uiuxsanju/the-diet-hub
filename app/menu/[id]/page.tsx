import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct, DIET_LABEL } from "@/lib/products";
import { CONFIG } from "@/lib/config";
import { AddToCart } from "@/components/menu/AddToCart";
import { ArrowLeft, Clock, Leaf, Check } from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProduct(id);
  return {
    title: p ? `${p.name} — THE DIET HUB` : "Menu — THE DIET HUB",
    description: p?.desc,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();

  const related = PRODUCTS.filter(
    (x) => x.id !== p.id && x.cats.some((c) => p.cats.includes(c))
  ).slice(0, 3);

  return (
    <div className="mx-auto w-[min(1080px,94%)] py-8">
      <Link href="/menu" className="label inline-flex items-center gap-1.5 hover:text-leaf">
        <ArrowLeft size={13} strokeWidth={2.5} /> Back to menu
      </Link>

      <div className="mt-5 grid gap-9 lg:grid-cols-2">
        <div className="photo-mount">
          <img src={p.img} alt={p.name} className="aspect-[4/3] w-full object-cover" />
        </div>

        <div>
          <div className="flex items-start gap-2.5">
            <span className={`diet-mark mt-1.5 shrink-0 ${p.diet === "nonveg" ? "text-berry" : "text-leaf"}`}
              aria-label={DIET_LABEL[p.diet]} />
            <div>
              <h1 className="font-display text-3xl font-bold leading-tight">{p.name}</h1>
              <p className="mt-1 text-lg font-semibold text-leaf-deep dark:text-leaf">{p.nameTe}</p>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-ink-soft dark:text-muted-fg">{p.desc}</p>

          <div className="label mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{p.serving}</span>
            <span aria-hidden>·</span>
            <span className="flex items-center gap-1">
              <Clock size={11} strokeWidth={2} /> {p.bestTime}
            </span>
          </div>

          {/* nutrition */}
          {!p.enquiryOnly && (
          <div className="chart mt-6">
            <div className="chart-head">Nutrition per serving</div>
            {[
              ["Calories", `${p.n.calories} kcal`],
              ["Protein", `${p.n.protein} g`],
              ["Carbohydrates", `${p.n.carbs} g`],
              ["Fat", `${p.n.fat} g`],
              ["Fibre", `${p.n.fibre} g`],
              ["Sugar", `${p.n.sugar} g`],
              ["Sodium", `${p.n.sodium} mg`],
              ["Calcium", `${p.n.calcium} mg`],
              ["Iron", `${p.n.iron} mg`],
              ["Potassium", `${p.n.potassium} mg`],
              ["Vitamin C", `${p.n.vitC} mg`],
            ].map(([l, v]) => (
              <div key={l} className="chart-row">
                <span className="flex-1 text-sm font-semibold">{l}</span>
                <span className="font-num text-sm">{v}</span>
              </div>
            ))}
          </div>
          )}

          <div className="mt-6">
            <AddToCart id={p.id} price={p.price} name={p.name} enquiryOnly={p.enquiryOnly} />
          </div>

          <p className="label mt-3 leading-relaxed">
            Order confirmation and delivery time come over WhatsApp · {CONFIG.hours}
          </p>
        </div>
      </div>

      {/* details */}
      <div className="mt-12 grid gap-6 border-t border-line pt-10 md:grid-cols-2">
        <section>
          <h2 className="font-display text-xl font-bold">What goes in</h2>
          <ul className="mt-3 space-y-1.5">
            {p.ingredients.map((i) => (
              <li key={i} className="flex items-start gap-2 text-[15px] text-ink-soft dark:text-muted-fg">
                <Leaf size={14} strokeWidth={2} className="mt-1 shrink-0 text-leaf" /> {i}
              </li>
            ))}
          </ul>
          <p className="mt-2 leading-relaxed text-muted-fg">{p.ingredientsTe}</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold">Why it helps</h2>
          <ul className="mt-3 space-y-2.5">
            {p.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[15px]">
                <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-leaf" />
                {b}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-display text-xl font-bold">You might also like</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.id} href={`/menu/${r.id}`} className="card-surface group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-leaf-soft">
                  <img src={r.img} alt={r.name} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="font-display text-[15px] font-bold leading-snug">{r.name}</p>
                  <p className="font-num mt-1.5 text-sm">₹{r.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted-fg">
        <Leaf size={14} strokeWidth={2} className="text-leaf" />
        Cooked fresh the same day · no preservatives
      </p>
    </div>
  );
}
