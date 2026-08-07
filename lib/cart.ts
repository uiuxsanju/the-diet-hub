"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = { id: string; qty: number };

type CartState = {
  lines: CartLine[];
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      add: (id) =>
        set((s) => {
          const found = s.lines.find((l) => l.id === id);
          return found
            ? { lines: s.lines.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) }
            : { lines: [...s.lines, { id, qty: 1 }] };
        }),
      setQty: (id, qty) =>
        set((s) => ({
          lines: qty <= 0 ? s.lines.filter((l) => l.id !== id) : s.lines.map((l) => (l.id === id ? { ...l, qty } : l)),
        })),
      clear: () => set({ lines: [] }),
    }),
    { name: "diethub-cart" }
  )
);
