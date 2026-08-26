import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono, Noto_Sans_Telugu } from "next/font/google";
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
  metadataBase: new URL("https://www.thediethubfoods.in"),
  title: {
    default: "The Diet Hub | Diet Consultancy & Healthy Food Kitchen in Kadapa",
    template: "%s | The Diet Hub Kadapa",
  },
  description:
    "The Diet Hub Kadapa — personalised diet plans, weight-loss programs, cold-pressed juices & healthy meals near VJ Junction, Kadapa. Eat Right, Live Right, Feel Right.",
  keywords: [
    "The Diet Hub",
    "diet consultancy Kadapa",
    "weight loss Kadapa",
    "healthy food Kadapa",
    "diet plan Kadapa",
    "nutritionist Kadapa",
  ],
  authors: [{ name: "The Diet Hub" }],
  openGraph: {
    title: "The Diet Hub | Diet Consultancy Kadapa",
    description:
      "Personalised diet plans, weight-loss programs & healthy meals in Kadapa.",
    url: "https://www.thediethubfoods.in",
    siteName: "The Diet Hub",
    images: ["/logo-full.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Diet Hub | Diet Consultancy Kadapa",
    description: "Personalised diet plans & healthy meals in Kadapa.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "PASTE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${num.variable} ${telugu.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}