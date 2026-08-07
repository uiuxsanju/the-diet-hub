import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WaFloat } from "@/components/layout/WaFloat";
import { CONFIG } from "@/lib/config";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display-face",
});
const body = Manrope({ subsets: ["latin"], variable: "--font-body-face" });
const num = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-num-face",
});
const telugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600", "700"],
  variable: "--font-telugu",
});

export const metadata: Metadata = {
  title: "THE DIET HUB — Kadapa | Eat Right · Live Right · Feel Right",
  description:
    "Personalised diet planning, weight loss and weight gain programmes, diabetes and BP food guidance, fresh cold-pressed juices and workout smoothies in Kadapa.",
  keywords: [
    "diet hub kadapa",
    "dietician kadapa",
    "diet food kadapa",
    "weight loss kadapa",
    "healthy meal plan kadapa",
    "fresh juice kadapa",
  ],
  openGraph: {
    title: "THE DIET HUB — Kadapa",
    description: "Eat Right · Live Right · Feel Right",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#1f7a3d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${num.variable} ${telugu.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-dvh pb-16 lg:pb-0">{children}</main>
        <Footer />
        <WaFloat />
      </body>
    </html>
  );
}
