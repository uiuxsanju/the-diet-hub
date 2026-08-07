import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "THE DIET HUB — Kadapa",
    short_name: "Diet Hub",
    description: "Personalised diet plans, fresh juices and workout smoothies in Kadapa",
    start_url: "/",
    display: "standalone",
    background_color: "#f7faf5",
    theme_color: "#1f7a3d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
