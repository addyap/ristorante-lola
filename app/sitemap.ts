import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}`])
  );
  const now = new Date();
  return locales.map((l) => ({
    url: `${SITE_URL}/${l}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: l === "it" ? 1 : 0.8,
    alternates: { languages },
  }));
}
