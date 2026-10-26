import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/blog";

type Page = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
  lastModified: Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Every page exists in each locale under the same path.
  const pages: Page[] = [
    { path: "", priority: 1, changeFrequency: "monthly", lastModified: now },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly", lastModified: now },
    ...posts.map((p): Page => ({
      path: `/blog/${p.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(p.date),
    })),
  ];

  return pages.flatMap((page) => {
    const languages = Object.fromEntries(
      locales.map((l) => [l, `${SITE_URL}/${l}${page.path}`])
    );
    return locales.map((l) => ({
      url: `${SITE_URL}/${l}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      // Italian is the primary market; other languages sit slightly lower.
      priority: l === "it" ? page.priority : Math.round(page.priority * 80) / 100,
      alternates: { languages },
    }));
  });
}
