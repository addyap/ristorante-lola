import { locales, type Locale } from "./i18n";
import { SITE_URL } from "./site";

// Canonical + hreflang alternates for a path that exists in every locale.
// `path` is the part after the locale, e.g. "" for home or "/blog".
export function alternatesFor(lang: Locale, path = "") {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`;
  languages["x-default"] = `${SITE_URL}/it${path}`;
  return { canonical: `${SITE_URL}/${lang}${path}`, languages };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
