import Link from "next/link";
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
          <Link
            key={l}
            href={`/${l}`}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            title={localeNames[l]}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-semibold transition-colors ${cls}`}
          >
            <span className="text-base leading-none">{flags[l]}</span>
            <span className="hidden uppercase tracking-wide sm:inline">{l}</span>
          </Link>
        );
      })}
    </nav>
  );
}
