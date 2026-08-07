import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";
import { CONFIG } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-leaf-deep pb-10 pt-14 text-[#cfe0cb]">
      <div className="mx-auto w-[min(1180px,94%)]">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-lg bg-white p-3">
              <img src="/logo-full.png" alt="The Diet Hub" className="h-24 w-auto" />
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Personalised diet planning, healthy meal plans, cold-pressed juices and workout
              smoothies — made fresh daily in Kadapa.
            </p>
          </div>

          <div>
            <h5 className="label mb-4 text-white">Explore</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="hover:text-white" href="/menu">Full menu</Link></li>
              <li><Link className="hover:text-white" href="/services">Our services</Link></li>
              <li><Link className="hover:text-white" href="/plans">3-day meal plan</Link></li>
              <li><Link className="hover:text-white" href="/menu">Workout smoothies</Link></li>
              <li><Link className="hover:text-white" href="/menu">Fresh juices</Link></li>
              <li><Link className="hover:text-white" href="/calorie-guide">Daily calorie guide</Link></li>
              <li><Link className="hover:text-white" href="/protein-calculator">Protein calculator</Link></li>
              <li><Link className="hover:text-white" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-white" href="/about">About us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="label mb-4 text-white">Contact</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin size={15} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                <span>{CONFIG.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={15} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                <span className="font-num">
                  <a className="hover:text-white" href={`tel:+${CONFIG.whatsapp}`}>{CONFIG.phoneDisplay}</a>
                  <br />
                  <a className="hover:text-white" href={`tel:+${CONFIG.whatsapp2}`}>{CONFIG.phoneDisplay2}</a>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock size={15} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                <span>{CONFIG.hours}</span>
              </li>
              <li className="flex gap-2.5">
                <Instagram size={15} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                <a className="hover:text-white" href={CONFIG.instagram} target="_blank" rel="noopener noreferrer">
                  {CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={15} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                <a className="break-all hover:text-white" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/12 pt-6 text-xs text-[#9db79a]">
          <span>© {new Date().getFullYear()} <b className="text-white">THE DIET HUB</b> · Kadapa</span>
          <span>Nutrition values are approximate. Not a substitute for medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
