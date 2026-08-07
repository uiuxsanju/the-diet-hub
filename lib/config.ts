export const CONFIG = {
  brand: "THE DIET HUB",
  brandTe: "ఉప్పల వారి",
  tagline: "Eat Right · Live Right · Feel Right",
  taglineTe: "సరైన ఆహారం... సంపూర్ణమైన జీవితం!",

  city: "Kadapa",
  address: "Near VJ Junction, Near More Super Market, Kadapa, Andhra Pradesh",

  // primary WhatsApp / call line
  whatsapp: "919703245246",
  phoneDisplay: "+91 97032 45246",
  // second line
  whatsapp2: "919642245246",
  phoneDisplay2: "+91 96422 45246",

  hours: "6:00 AM – 9:00 PM, all days",
  email: "thediethub.kadapa@gmail.com",
  instagram: "https://www.instagram.com/thediethub_kadapa/",
  instagramHandle: "@thediethub_kadapa",

  mapEmbed:
    "https://www.google.com/maps?q=More%20Supermarket%20VJ%20Junction%20Kadapa&output=embed",
} as const;

/** WhatsApp deep link for the primary line. */
export const wa = (text: string) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

/** WhatsApp deep link for the second line. */
export const wa2 = (text: string) =>
  `https://wa.me/${CONFIG.whatsapp2}?text=${encodeURIComponent(text)}`;
