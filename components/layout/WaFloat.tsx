"use client";
import { CONFIG } from "@/lib/config";

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16.03 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.75 12.75 0 0 0 6.28 1.6h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.64Zm0 23.34h-.01c-1.94 0-3.85-.52-5.51-1.51l-.4-.23-4.09 1.07 1.09-3.99-.26-.41a10.6 10.6 0 0 1-1.63-5.67c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.63-10.46 10.73Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WaFloat() {
  return (
    <a
      href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
        "Hi The Diet Hub! I'd like to know about your diet plans."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-4 z-[80] grid size-14 place-items-center rounded-full bg-wa text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
