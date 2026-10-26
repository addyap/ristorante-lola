import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { posts, getPost, readingMinutes } from "@/lib/blog";
import { SITE_URL, SITE_NAME, OG_LOCALE } from "@/lib/site";
import { alternatesFor, breadcrumbJsonLd } from "@/lib/seo";
import { waHref } from "@/lib/contact";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ArticleBody from "@/components/ArticleBody";
import PostCard from "@/components/PostCard";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post || !isLocale(params.lang)) return {};
  const lang = params.lang;
  const t = post.tr[lang];
  return {
    title: `${t.title} | ${SITE_NAME}`,
    description: t.description,
    alternates: alternatesFor(lang, `/blog/${post.slug}`),
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: t.title,
      description: t.description,
      url: `${SITE_URL}/${lang}/blog/${post.slug}`,
      locale: OG_LOCALE[lang],
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const post = getPost(params.slug);
  if (!post || !isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;
  const dict = getDictionary(lang);
  const t = post.tr[lang];
  const url = `${SITE_URL}/${lang}/blog/${post.slug}`;
  const date = new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(
    new Date(post.date)
  );
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: t.title,
      description: t.description,
      inLanguage: lang,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: url,
      url,
      image: post.cover ? [`${SITE_URL}${post.cover}`] : undefined,
      author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/${lang}` },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.jpg` },
      },
    },
    breadcrumbJsonLd([
      { name: SITE_NAME, url: `${SITE_URL}/${lang}` },
      { name: dict.nav.blog, url: `${SITE_URL}/${lang}/blog` },
      { name: t.title, url },
    ]),
  ];

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>
        <PageHero
          crumbs={[
            { href: `/${lang}`, label: SITE_NAME },
            { href: `/${lang}/blog`, label: dict.nav.blog },
            { label: dict.blog.categories[post.category] },
          ]}
          eyebrow={dict.blog.categories[post.category]}
          title={t.title}
          subtitle={t.description}
        >
          <p className="mt-6 text-sm text-cream/60">
            <time dateTime={post.date}>{date}</time>
            <span className="px-2">·</span>
            {dict.blog.minutes.replace("{n}", String(readingMinutes(t.body)))}
          </p>
        </PageHero>

        <article className="bg-cream">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
            {post.cover && (
              <div className="relative -mt-24 mb-12 aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(226,98,29,0.5)] ring-1 ring-cream-dark sm:-mt-32">
                <Image
                  src={post.cover}
                  alt={t.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}
            <ArticleBody body={t.body} />

            {/* Visit CTA */}
            <aside className="brace-find mt-14 rounded-3xl p-7 text-cream sm:p-9">
              <h2 className="font-serif text-3xl">{dict.blog.ctaTitle}</h2>
              <p className="mt-3 max-w-xl text-cream/80">{dict.blog.ctaBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waHref(dict.info.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brace-btn brace-btn-wa"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5 fill-current" />
                  {dict.blog.ctaBook}
                </a>
                <Link href={`/${lang}#menu`} className="brace-btn brace-btn-ghost">
                  {dict.blog.ctaMenu}
                </Link>
              </div>
            </aside>

            <p className="mt-10">
              <Link
                href={`/${lang}/blog`}
                className="font-semibold text-basil transition-colors hover:text-basil-dark"
              >
                ← {dict.blog.back}
              </Link>
            </p>
          </div>
        </article>

        <section className="bg-cream-dark/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <h2 className="font-serif text-3xl text-charcoal">{dict.blog.related}</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} lang={lang} dict={dict} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} dict={dict} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
