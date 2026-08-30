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
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Solidify as soon as the visitor starts scrolling, so the fixed bar
      // clearly reads as a persistent sticky menu.
      setSolid(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "#specialties", label: dict.nav.specialties },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#about", label: dict.nav.about },
    { href: "#info", label: dict.nav.info },
  ];

  // The bar looks solid whenever scrolled OR the mobile menu is open.
  const barSolid = solid || open;

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-30 transition-colors duration-500 " +
        (barSolid
          ? "border-b border-cream-dark/70 bg-cream/95 backdrop-blur"
          : "border-b border-transparent bg-gradient-to-b from-black/55 via-black/25 to-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link
          href={`/${lang}`}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.jpg"
            alt="Ristorante da Lola"
            width={48}
            height={48}
            className={
              "h-10 w-10 rounded-full object-cover ring-1 transition-all sm:h-11 sm:w-11 " +
              (barSolid ? "ring-cream-dark" : "ring-white/30")
            }
            priority
          />
          <span
            className={
              "font-serif text-lg leading-none transition-colors sm:text-xl " +
              (barSolid ? "text-charcoal" : "text-cream")
            }
          >
            Ristorante da{" "}
            <span className={barSolid ? "text-tomato" : "text-amber-300"}>
              Lola
            </span>
          </span>
        </Link>

        {/* Desktop nav + language */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                "transition-colors " +
                (barSolid
                  ? "text-charcoal/80 hover:text-basil"
                  : "text-cream/85 hover:text-amber-300")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher current={lang} light={!barSolid} />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className={
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden " +
              (barSolid
                ? "text-charcoal hover:bg-cream-dark/50"
                : "text-cream hover:bg-white/10")
            }
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden">
          <nav className="mx-4 mb-3 rounded-2xl bg-cream p-2 shadow-2xl ring-1 ring-cream-dark">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal/85 transition-colors hover:bg-cream-dark/50"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 border-t border-cream-dark/70 px-2 pt-3">
              <LanguageSwitcher current={lang} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
