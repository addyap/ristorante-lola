import type { Locale } from "../i18n";

export type BlogCategory = "traditions" | "food" | "places";

export type BlogTranslation = {
  title: string;
  description: string;
  // Body paragraphs. Light conventions keep the copy easy to edit:
  //   "## Heading"           → section heading
  //   "- item\n- item"       → bulleted list
  //   "> text"               → highlighted note
  //   anything else          → paragraph
  body: string[];
};

export type BlogPost = {
  slug: string;
  date: string; // ISO date, YYYY-MM-DD
  category: BlogCategory;
  cover?: string; // path under /public; a typographic cover is drawn if absent
  tr: Record<Locale, BlogTranslation>;
};
