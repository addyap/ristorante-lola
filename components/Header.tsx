"use client";

import { useEffect, useState } from "react";
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
  // Transparent while floating over the dark hero; solid cream once scrolled
  // past most of it.
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      // Solidify as soon as the visitor starts scrolling, so the bar reads
      // as a persistent sticky menu (transparent only at the very top).
      setSolid(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#specialties", label: dict.nav.specialties },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#about", label: dict.nav.about },
    { href: "#info", label: dict.nav.info },
  ];

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-30 transition-all duration-500 " +
        (solid
          ? "border-b border-cream-dark/70 bg-cream/90 backdrop-blur"
          : "border-b border-transparent bg-gradient-to-b from-black/55 via-black/25 to-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="da Lola"
            width={48}
            height={48}
            className={
              "h-11 w-11 rounded-full object-cover ring-1 transition-all " +
              (solid ? "ring-cream-dark" : "ring-white/30")
            }
            priority
          />
          <span
            className={
              "font-serif text-xl leading-none transition-colors " +
              (solid ? "text-charcoal" : "text-cream")
            }
          >
            da <span className={solid ? "text-tomato" : "text-amber-300"}>Lola</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                "transition-colors " +
                (solid
                  ? "text-charcoal/80 hover:text-basil"
                  : "text-cream/85 hover:text-amber-300")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher current={lang} light={!solid} />
      </div>
    </header>
  );
}
