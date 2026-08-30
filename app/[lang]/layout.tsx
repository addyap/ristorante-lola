import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

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
    metadataBase: new URL(
      "https://ristorante-lola-antony-addy-s-projects.vercel.app"
    ),
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/photos/02-bistecca-fiorentina-alla-brace.jpg"],
    },
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
