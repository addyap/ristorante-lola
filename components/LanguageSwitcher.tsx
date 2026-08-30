import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-sm">
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={`/${l}`}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            title={localeNames[l]}
            className={
              "rounded px-2 py-1 uppercase tracking-wide transition-colors " +
              (active
                ? "bg-basil text-cream"
                : "text-charcoal/70 hover:text-basil")
            }
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
