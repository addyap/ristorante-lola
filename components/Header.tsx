import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: "#specialties", label: dict.nav.specialties },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#about", label: dict.nav.about },
    { href: "#info", label: dict.nav.info },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-cream-dark/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="da Lola"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-cream-dark"
            priority
          />
          <span className="font-serif text-xl leading-none">
            da <span className="text-tomato">Lola</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-charcoal/80 transition-colors hover:text-basil"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher current={lang} />
      </div>
    </header>
  );
}
