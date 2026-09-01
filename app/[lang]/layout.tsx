import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import {
  SITE_URL,
  SITE_NAME,
  OG_LOCALE,
  SOCIAL_IMAGES,
  RESTAURANT,
} from "@/lib/site";

const KEYWORDS: Record<Locale, string[]> = {
  it: [
    "Ristorante da Lola",
    "ristorante Fermignano",
    "pizzeria Fermignano",
    "pizza forno a legna",
    "cucina marchigiana",
    "carne alla brace",
    "pasta fatta in casa",
  ],
  en: [
    "Ristorante da Lola",
    "restaurant Fermignano",
    "pizzeria Fermignano",
    "wood-fired pizza",
    "Marche cuisine",
    "char-grilled meat",
    "homemade pasta",
  ],
  fr: [
    "Ristorante da Lola",
    "restaurant Fermignano",
    "pizzeria Fermignano",
    "pizza au feu de bois",
    "cuisine des Marches",
    "viande à la braise",
    "pâtes maison",
  ],
  de: [
    "Ristorante da Lola",
    "Restaurant Fermignano",
    "Pizzeria Fermignano",
    "Holzofen-Pizza",
    "Marken-Küche",
    "Fleisch vom Grill",
    "hausgemachte Pasta",
  ],
};

// Build the hreflang alternates map: each locale + an x-default.
function languageAlternates() {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE_URL}/${l}`;
  languages["x-default"] = `${SITE_URL}/it`;
  return languages;
}

const playfair = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = isLocale(params.lang) ? params.lang : "it";
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: SITE_NAME,
    keywords: KEYWORDS[lang],
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: languageAlternates(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      locale: OG_LOCALE[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: SOCIAL_IMAGES.map((src) => ({
        url: src,
        width: 1200,
        height: 800,
        alt: SITE_NAME,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: SOCIAL_IMAGES.slice(0, 1),
    },
  };
}

function restaurantJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_NAME,
    description: getDictionary(lang).meta.description,
    url: `${SITE_URL}/${lang}`,
    image: SOCIAL_IMAGES.map((s) => `${SITE_URL}${s}`),
    telephone: RESTAURANT.phone,
    servesCuisine: ["Italian", "Marchigiana", "Pizza"],
    priceRange: RESTAURANT.priceRange,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.street,
      addressLocality: RESTAURANT.locality,
      addressRegion: RESTAURANT.region,
      postalCode: RESTAURANT.postalCode,
      addressCountry: RESTAURANT.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: RESTAURANT.serviceDays,
        opens: "12:00",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: RESTAURANT.serviceDays,
        opens: "19:00",
        closes: "22:00",
      },
    ],
    sameAs: [RESTAURANT.facebook],
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;

  return (
    <html lang={lang} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // Structured data for Google (Restaurant rich results).
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd(lang)),
          }}
        />
        {children}
      </body>
    </html>
  );
}
