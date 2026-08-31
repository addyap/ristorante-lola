"use client";

import { useEffect, useState } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n";

const flags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
};

export default function LanguageSwitcher({
  current,
  light = false,
}: {
  current: Locale;
  light?: boolean;
}) {
  // Carry the section the visitor is reading (e.g. #menu) across languages,
  // so switching language lands on the equivalent section rather than the top.
  // Section ids are language-neutral, so the anchor is valid in every locale.
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const shell = light
    ? "bg-white/10 ring-1 ring-white/15"
    : "bg-cream-dark/40 ring-1 ring-cream-dark";

  return (
    <nav
      aria-label="Language"
      className={`flex items-center gap-0.5 rounded-full p-1 backdrop-blur ${shell}`}
    >
      {locales.map((l) => {
        const active = l === current;
        const cls = active
          ? "bg-tomato text-cream shadow-sm"
          : light
            ? "text-cream/75 hover:bg-white/10 hover:text-cream"
            : "text-charcoal/70 hover:bg-cream-dark/60 hover:text-charcoal";
        return (
          // A full navigation (not next/link) so the #section hash survives the
          // locale change and lands on the same section in the new language.
          <a
            key={l}
            href={`/${l}${hash}`}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            title={localeNames[l]}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-semibold transition-colors ${cls}`}
          >
            <span className="text-base leading-none">{flags[l]}</span>
            <span className="hidden uppercase tracking-wide sm:inline">{l}</span>
          </a>
        );
      })}
    </nav>
  );
}
