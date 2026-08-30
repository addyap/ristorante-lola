"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const trigger = light
    ? "text-cream ring-1 ring-white/25 hover:bg-white/10"
    : "text-charcoal ring-1 ring-cream-dark hover:bg-cream-dark/40";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={localeNames[current]}
        className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold backdrop-blur transition-colors ${trigger}`}
      >
        <span className="text-base leading-none">{flags[current]}</span>
        <span className="uppercase tracking-wide">{current}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="lang-pop absolute right-0 top-full z-40 mt-2 w-52 overflow-hidden rounded-2xl bg-cream p-1.5 shadow-2xl ring-1 ring-cream-dark"
        >
          {locales.map((l) => {
            const active = l === current;
            return (
              <li key={l} role="option" aria-selected={active}>
                <Link
                  href={`/${l}`}
                  hrefLang={l}
                  onClick={() => setOpen(false)}
                  className={
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors " +
                    (active
                      ? "bg-tomato/10 font-semibold text-tomato-dark"
                      : "text-charcoal/80 hover:bg-cream-dark/50")
                  }
                >
                  <span className="text-lg leading-none">{flags[l]}</span>
                  <span className="flex-1">{localeNames[l]}</span>
                  {active && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-tomato"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 13 4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
