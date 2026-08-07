"use client";
import { useCart } from "@/lib/cart";
import { CONFIG } from "@/lib/config";
import { Plus, Minus } from "lucide-react";

export function AddToCart({
  id, price, name, enquiryOnly,
}: { id: string; price: number; name: string; enquiryOnly?: boolean }) {
  const { lines, add, setQty } = useCart();
  const n = lines.find((l) => l.id === id)?.qty ?? 0;

  const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    enquiryOnly
      ? `Hi ${CONFIG.brand}! I'd like to know more about the ${name}.`
      : `Hi ${CONFIG.brand}! I'd like to order the ${name}.`
  )}`;

  if (enquiryOnly)
    return (
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-wa px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:brightness-95"
      >
        Enquire on WhatsApp
      </a>
    );

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-num text-2xl">₹{price}</span>

      {n === 0 ? (
        <button
          onClick={() => add(id)}
          className="cursor-pointer rounded-lg bg-leaf px-7 py-3 text-sm font-extrabold text-white transition-colors hover:bg-leaf-deep"
        >
          Add to cart
        </button>
      ) : (
        <div className="flex items-center gap-1 rounded-lg border-2 border-leaf">
          <button onClick={() => setQty(id, n - 1)} aria-label="Decrease quantity"
            className="grid size-11 cursor-pointer place-items-center text-leaf">
            <Minus size={16} strokeWidth={2.5} />
          </button>
          <b className="font-num w-6 text-center text-leaf">{n}</b>
          <button onClick={() => add(id)} aria-label="Increase quantity"
            className="grid size-11 cursor-pointer place-items-center text-leaf">
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
      )}

      <a href={waLink} target="_blank" rel="noopener noreferrer"
        className="rounded-lg bg-wa px-6 py-3 text-sm font-extrabold text-white transition-all hover:brightness-95">
        Order now
      </a>
    </div>
  );
}
