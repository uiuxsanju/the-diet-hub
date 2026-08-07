"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X, Phone, Clock } from "lucide-react";
import { CONFIG } from "@/lib/config";

const LINKS = [
  { href: "/menu", l: "Menu" },
  { href: "/services", l: "Services" },
  { href: "/plans", l: "Meal Plans" },
  { href: "/calorie-guide", l: "Calorie Guide" },
  { href: "/faq", l: "FAQ" },
  { href: "/about", l: "About" },
];

export function Navbar() {
  const [mob, setMob] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mob ? "hidden" : "";
  }, [mob]);

  return (
    <>
      {/* contact strip */}
      <div className="bg-leaf-deep py-1.5 text-center text-[11px] font-semibold text-[#e8f2e5]">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-3">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} strokeWidth={2} /> {CONFIG.hours}
          </span>
          <a href={`tel:+${CONFIG.whatsapp}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone size={12} strokeWidth={2} />
            <span className="font-num">{CONFIG.phoneDisplay}</span>
          </a>
        </span>
      </div>

      <header className="sticky top-0 z-[40] border-b border-line bg-page/95 backdrop-blur">
        <div className="mx-auto flex h-[92px] w-[min(1180px,94%)] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="The Diet Hub home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 text-[13px] font-bold lg:flex">
            {LINKS.map((x) => (
              <Link key={x.href} href={x.href} className="transition-colors hover:text-leaf">
                {x.l}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/menu"
              className="hidden rounded-lg bg-leaf px-4 py-2.5 text-[13px] font-extrabold text-white transition-colors hover:bg-leaf-deep sm:block"
            >
              Order now
            </Link>
            <button
              onClick={() => setMob(!mob)}
              aria-label="Menu"
              aria-expanded={mob}
              className="grid size-10 cursor-pointer place-items-center rounded-lg border border-line lg:hidden"
            >
              {mob ? <X size={12} /> : <MenuIcon size={12} />}
            </button>
          </div>
        </div>

        {mob && (
          <nav className="border-t border-line bg-page px-[4%] py-3 lg:hidden">
            {LINKS.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                onClick={() => setMob(false)}
                className="block border-b border-line py-3 text-sm font-bold last:border-0"
              >
                {x.l}
              </Link>
            ))}
            <Link
              href="/menu"
              onClick={() => setMob(false)}
              className="mt-3 block rounded-lg bg-leaf px-4 py-3 text-center text-sm font-extrabold text-white"
            >
              Order now
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

/** Real brand logo — icon + wordmark baked into one image. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/icon-mark.png"
      alt="The Diet Hub — Eat Right, Live Right, Feel Right"
      className={compact ? "h-12 w-auto" : "h-16 w-auto sm:h-20"}
    />
  );
}