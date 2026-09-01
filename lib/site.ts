import type { Locale } from "./i18n";

// Canonical origin. Update this to the custom domain once it's connected.
export const SITE_URL =
  "https://ristorante-lola-antony-addy-s-projects.vercel.app";

export const SITE_NAME = "Ristorante da Lola";

export const RESTAURANT = {
  name: SITE_NAME,
  legalName: "Ristorante Pizzeria da Lola",
  phone: "+390722331684",
  street: "Via S. Caterina da Siena, 16",
  locality: "Fermignano",
  region: "PU",
  postalCode: "61033",
  country: "IT",
  facebook: "https://www.facebook.com/RistorantePizzeriaDaLola",
  priceRange: "€€",
  // Days served (Wednesday closed), lunch + dinner.
  serviceDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
};

// Open Graph locale codes per site language.
export const OG_LOCALE: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  fr: "fr_FR",
  de: "de_DE",
};

// A few representative images for social/structured data (absolute URLs).
export const SOCIAL_IMAGES = [
  "/photos/02-bistecca-fiorentina-alla-brace.jpg",
  "/photos/05-pizze-caprese-forno-a-legna.jpg",
  "/photos/03-tagliatelle-al-tartufo.jpg",
];
