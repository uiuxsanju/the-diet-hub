"use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ShoppingBag, X, Minus, Plus, LayoutGrid, Rows3 } from "lucide-react";
import {
  CATEGORIES, PRODUCTS, ALLERGENS, ALLERGEN_LABEL, getProduct, type CatKey,
} from "@/lib/products";
import { ProductCard } from "@/components/menu/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";

export function MenuClient() {
  const [cat, setCat] = useState<CatKey>("all");
  const [q, setQ] = useState("");
  const [cal, setCal] = useState(600);
  const [pro, setPro] = useState(0);
  const [price, setPrice] = useState(900);
  const [veg, setVeg] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [noAllergen, setNoAllergen] = useState<string[]>([]);
  const [sort, setSort] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

  const { lines, add, setQty, clear } = useCart();

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    let l = PRODUCTS.filter((p) => {
      const inCat = cat === "all" || p.cats.includes(cat);
      const inCal = p.enquiryOnly || p.n.calories <= cal;
      const inPro = p.enquiryOnly || p.n.protein >= pro;
      const inPrice = p.enquiryOnly || p.price <= price;
      const dietOk =
        (!veg || p.diet === "veg" || p.diet === "vegan") && (!vegan || p.diet === "vegan");
      const allergenOk = noAllergen.every((a) => !p.allergens.includes(a));
      const searchOk =
        !term ||
        (p.name + p.nameTe + p.desc + p.ingredients.join(" ")).toLowerCase().includes(term);
      return inCat && inCal && inPro && inPrice && dietOk && allergenOk && searchOk;
    });

    l = [...l].sort((a, b) =>
      sort === "protein" ? b.n.protein - a.n.protein
      : sort === "calAsc" ? a.n.calories - b.n.calories
      : sort === "priceAsc" ? a.price - b.price
      : sort === "priceDesc" ? b.price - a.price
      : Number(!!b.popular) - Number(!!a.popular)
    );
    return l;
  }, [cat, q, cal, pro, price, veg, vegan, noAllergen, sort]);

  const rows = lines.map((l) => ({ ...l, p: getProduct(l.id)! })).filter((r) => r.p);
  const total = rows.reduce((a, r) => a + r.p.price * r.qty, 0);
  const count = rows.reduce((a, r) => a + r.qty, 0);

  const orderMsg = () =>
    [
      `Hi ${CONFIG.brand}! I'd like to order:`,
      "",
      ...rows.map((r) => `• ${r.p.name} × ${r.qty} — ₹${r.p.price * r.qty}`),
      "",
      `Total: ₹${total}`,
    ].join("\n");

  const activeCat = CATEGORIES.find((c) => c.k === cat);

  return (
    <div className="mx-auto w-[min(1180px,94%)] py-12">
      <p className="eyebrow mb-3">Menu &amp; nutrition</p>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">
        Every item. Every macro. Labelled.
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft dark:text-muted-fg">
        Cooked or pressed the same day. Add what you want and send the order to us on WhatsApp.
      </p>

      {/* category chips */}
      <div className="mt-7 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.k}
            onClick={() => setCat(c.k)}
            aria-pressed={cat === c.k}
            className={cn(
              "cursor-pointer rounded-full border-2 px-4 py-2 text-xs font-extrabold transition-colors",
              cat === c.k
                ? "border-leaf bg-leaf text-white"
                : "border-line bg-surface hover:border-leaf"
            )}
          >
            {c.l}
          </button>
        ))}
      </div>

      {activeCat && cat !== "all" && (
        <p className="mt-3 text-sm font-semibold text-leaf-deep dark:text-leaf">{activeCat.te}</p>
      )}

      {/* search + filters */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search size={16} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-fg" />
          <Input
            className="pl-10"
            placeholder="Search ragi, smoothie, juice, sprouts…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search the menu"
          />
        </div>
        <Button variant="soft" onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal size={15} strokeWidth={2} /> Filters
        </Button>
      </div>

      {/* advanced filters */}
      {showFilters && (
        <div className="card-surface mt-4 grid gap-6 p-5 md:grid-cols-3">
          <div>
            <label className="label flex justify-between">
              Max calories <output className="font-num text-leaf-deep dark:text-leaf">{cal}</output>
            </label>
            <input type="range" min={50} max={600} step={10} value={cal}
              onChange={(e) => setCal(+e.target.value)} className="w-full accent-leaf" />

            <label className="label mt-4 flex justify-between">
              Min protein <output className="font-num text-leaf-deep dark:text-leaf">{pro}g</output>
            </label>
            <input type="range" min={0} max={25} value={pro}
              onChange={(e) => setPro(+e.target.value)} className="w-full accent-leaf" />

            <label className="label mt-4 flex justify-between">
              Max price <output className="font-num text-leaf-deep dark:text-leaf">₹{price}</output>
            </label>
            <input type="range" min={39} max={900} step={10} value={price}
              onChange={(e) => setPrice(+e.target.value)} className="w-full accent-leaf" />
          </div>

          <div>
            <p className="label mb-2.5">Dietary preference</p>
            {([["Veg only", veg, setVeg], ["Vegan only", vegan, setVegan]] as const).map(([l, v, s]) => (
              <label key={l} className="mb-2.5 flex cursor-pointer items-center gap-2.5 text-sm font-bold">
                <input type="checkbox" checked={v}
                  onChange={(e) => s(e.target.checked)} className="size-4 accent-leaf" />
                <span className="diet-mark text-leaf" aria-hidden />
                {l}
              </label>
            ))}

            <p className="label mb-2 mt-5">Sort</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm font-semibold outline-none focus:border-leaf"
            >
              <option value="popular">Popular</option>
              <option value="protein">Protein: High → Low</option>
              <option value="calAsc">Calories: Low → High</option>
              <option value="priceAsc">Price: Low → High</option>
              <option value="priceDesc">Price: High → Low</option>
            </select>
          </div>

          <div>
            <p className="label mb-2.5">Exclude allergens</p>
            <div className="flex flex-wrap gap-2">
              {ALLERGENS.map((a) => (
                <button
                  key={a}
                  onClick={() =>
                    setNoAllergen((x) => (x.includes(a) ? x.filter((y) => y !== a) : [...x, a]))
                  }
                  aria-pressed={noAllergen.includes(a)}
                  className={cn(
                    "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-bold transition-colors",
                    noAllergen.includes(a)
                      ? "border-berry bg-berry/10 text-berry line-through"
                      : "border-line hover:border-leaf"
                  )}
                >
                  {ALLERGEN_LABEL[a]}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setCal(600); setPro(0); setPrice(900);
                setVeg(false); setVegan(false); setNoAllergen([]); setSort("popular");
              }}
              className="label mt-5 cursor-pointer hover:text-leaf"
            >
              Reset all filters
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="label">
          Showing {list.length} of {PRODUCTS.length} items
        </p>
        <div className="flex items-center gap-1 rounded-lg border border-line p-0.5">
          {([["grid", LayoutGrid, "Grid view"], ["list", Rows3, "List view"]] as const).map(([v, I, lbl]) => (
            <button
              key={v}
              onClick={() => setView(v)}
              aria-pressed={view === v}
              aria-label={lbl}
              className={cn(
                "grid size-8 cursor-pointer place-items-center rounded-md transition-colors",
                view === v ? "bg-leaf text-white" : "text-muted-fg hover:text-leaf"
              )}
            >
              <I size={15} strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "mt-4 grid gap-6",
          view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
        )}
      >
        {list.map((p, i) => (
          <ProductCard key={p.id} p={p} i={i} view={view} />
        ))}
      </div>

      {list.length === 0 && (
        <div className="mt-6 rounded-xl border-2 border-dashed border-line py-16 text-center font-semibold text-muted-fg">
          Nothing matches these filters. Try widening the calorie or price range.
        </div>
      )}

      {/* floating cart bar */}
      {count > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 left-1/2 z-[70] flex w-[min(520px,92%)] -translate-x-1/2 cursor-pointer items-center justify-between gap-4 rounded-xl bg-leaf px-5 py-4 text-white shadow-lg"
        >
          <span className="flex items-center gap-2.5 text-sm font-extrabold">
            <ShoppingBag size={17} strokeWidth={2} />
            {count} {count === 1 ? "item" : "items"}
          </span>
          <span className="font-num text-sm">₹{total}</span>
          <span className="text-sm font-extrabold">View cart →</span>
        </button>
      )}

      {/* cart drawer */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 z-[90] bg-black/50" onClick={() => setCartOpen(false)} />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Your cart"
            className="fixed right-0 top-0 z-[95] flex h-dvh w-full max-w-md flex-col border-l border-line bg-page"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="font-display text-xl font-bold">Your cart ({count})</h2>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="cursor-pointer">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {rows.map((r) => (
                <div key={r.id} className="card-surface flex gap-3 p-3">
                  <img src={r.p.img} alt="" className="size-16 shrink-0 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-extrabold">{r.p.name}</p>
                    <p className="label mt-0.5">{r.p.serving}</p>
                    <p className="font-num mt-1 text-sm">₹{r.p.price * r.qty}</p>
                  </div>
                  <div className="flex items-center gap-1 self-center rounded-lg border border-leaf">
                    <button onClick={() => setQty(r.id, r.qty - 1)} aria-label="Decrease"
                      className="grid size-7 cursor-pointer place-items-center text-leaf">
                      <Minus size={13} strokeWidth={2.5} />
                    </button>
                    <b className="font-num w-4 text-center text-xs text-leaf">{r.qty}</b>
                    <button onClick={() => add(r.id)} aria-label="Increase"
                      className="grid size-7 cursor-pointer place-items-center text-leaf">
                      <Plus size={13} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line p-5">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold">Total</span>
                <span className="font-num text-xl">₹{total}</span>
              </div>
              <a
                href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(orderMsg())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-lg bg-wa py-4 text-center text-sm font-extrabold text-white"
              >
                Send order on WhatsApp
              </a>
              <button onClick={clear}
                className="mt-2 w-full cursor-pointer py-2 text-xs font-bold text-muted-fg hover:text-berry">
                Clear cart
              </button>
              <p className="label mt-3 text-center leading-relaxed">
                We confirm every order and delivery time on WhatsApp
              </p>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
