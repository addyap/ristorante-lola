import type { BlogPost } from "./types";
import { tartufo } from "./posts/tartufo";
import { palio } from "./posts/palio";
import { cucina } from "./posts/cucina";
import { fermignano } from "./posts/fermignano";
import { dintorni } from "./posts/dintorni";
import { calendario } from "./posts/calendario";

export type { BlogPost, BlogCategory, BlogTranslation } from "./types";

// Display order, newest / most seasonal first.
export const posts: BlogPost[] = [
  tartufo,
  palio,
  cucina,
  fermignano,
  dintorni,
  calendario,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

// Roughly 200 words a minute, rounded up.
export function readingMinutes(body: string[]) {
  const words = body.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
