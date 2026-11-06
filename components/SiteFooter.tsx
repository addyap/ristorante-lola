import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { FACEBOOK_URL, waHref } from "@/lib/contact";
import WhatsAppIcon from "./WhatsAppIcon";

// Designer credit, in the page's language.
const CREDIT: Record<Locale, { text: string; href: string }> = {
  it: { text: "Sito realizzato da", href: "https://thevitrine.fr/it/" },
  en: { text: "Website by", href: "https://thevitrine.fr/en/" },
  fr: { text: "Site réalisé par", href: "https://thevitrine.fr/" },
  de: { text: "Website von", href: "https://thevitrine.fr/en/" },
};

// Footer + floating WhatsApp action, shared by every page.
export default function SiteFooter({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: `/${lang}#menu`, label: dict.nav.menu },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/faq`, label: dict.nav.faq },
    { href: `/${lang}#info`, label: dict.nav.info },
  ];

  return (
    <>
      <footer className="bg-charcoal text-cream/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
          <span className="font-serif text-2xl text-cream">
            Ristorante da <span className="text-[#ecd39a]">Lola</span>
          </span>
          <p className="text-sm">{dict.footer.tagline}</p>
          <nav aria-label={dict.footer.navLabel}>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/80 transition-colors hover:text-amber-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-tomato"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
            </svg>
            {dict.footer.facebook}
          </a>
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Ristorante da Lola — {dict.footer.rights}
          </p>
          <p className="text-xs text-cream/50">
            {CREDIT[lang].text}{" "}
            <a
              href={CREDIT[lang].href}
              target="_blank"
              rel="noopener"
              className="text-cream/70 underline underline-offset-2 transition-colors hover:text-amber-300"
            >
              The Vitrine
            </a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp action */}
      <a
        href={waHref(dict.info.whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.info.whatsappCta}
        className="brace-fab group"
      >
        <span className="brace-fab-ring" aria-hidden="true" />
        <WhatsAppIcon className="relative z-10 h-7 w-7 shrink-0 fill-current" />
        <span className="brace-fab-label">{dict.info.whatsappCta}</span>
      </a>
    </>
  );
}
