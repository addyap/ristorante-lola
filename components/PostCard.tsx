import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { readingMinutes, type BlogPost } from "@/lib/blog";
import BlogCover from "./BlogCover";

export default function PostCard({
  post,
  lang,
  dict,
}: {
  post: BlogPost;
  lang: Locale;
  dict: Dictionary;
}) {
  const t = post.tr[lang];
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-cream-dark transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <BlogCover
          post={post}
          alt={t.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
          {dict.blog.categories[post.category]}
          <span className="px-2 text-charcoal/30">·</span>
          <span className="text-charcoal/55">
            {dict.blog.minutes.replace("{n}", String(readingMinutes(t.body)))}
          </span>
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-charcoal">
          <Link
            href={`/${lang}/blog/${post.slug}`}
            className="after:absolute after:inset-0 group-hover:text-basil"
          >
            {t.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-charcoal/75">{t.description}</p>
        <p className="mt-5 text-sm font-semibold text-basil" aria-hidden="true">
          {dict.blog.readMore} →
        </p>
      </div>
    </article>
  );
}
