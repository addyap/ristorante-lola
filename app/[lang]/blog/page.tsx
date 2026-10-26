import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { posts } from "@/lib/blog";
import { SITE_URL, SITE_NAME, OG_LOCALE } from "@/lib/site";
import { alternatesFor, breadcrumbJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import SiteFooter from "@/components/SiteFooter";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "it";
  const dict = getDictionary(lang);
  return {
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
    alternates: alternatesFor(lang, "/blog"),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: dict.blog.metaTitle,
      description: dict.blog.metaDescription,
      url: `${SITE_URL}/${lang}/blog`,
      locale: OG_LOCALE[lang],
      images: [{ url: posts[0].cover ?? "/photos/03-tagliatelle-al-tartufo.jpg" }],
    },
  };
}

export default function BlogIndex({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;
  const dict = getDictionary(lang);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: dict.blog.title,
      description: dict.blog.metaDescription,
      url: `${SITE_URL}/${lang}/blog`,
      inLanguage: lang,
      publisher: { "@type": "Restaurant", name: SITE_NAME, url: `${SITE_URL}/${lang}` },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.tr[lang].title,
        url: `${SITE_URL}/${lang}/blog/${p.slug}`,
        datePublished: p.date,
      })),
    },
    breadcrumbJsonLd([
      { name: SITE_NAME, url: `${SITE_URL}/${lang}` },
      { name: dict.nav.blog, url: `${SITE_URL}/${lang}/blog` },
    ]),
  ];

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>
        <PageHero
          crumbs={[{ href: `/${lang}`, label: SITE_NAME }, { label: dict.nav.blog }]}
          eyebrow={dict.blog.eyebrow}
          title={dict.blog.title}
          subtitle={dict.blog.subtitle}
        />
        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} lang={lang} dict={dict} />
            ))}
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
