import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { faq } from "@/lib/faq";
import { SITE_URL, SITE_NAME, OG_LOCALE, SOCIAL_IMAGES } from "@/lib/site";
import { alternatesFor, breadcrumbJsonLd } from "@/lib/seo";
import { TEL, waHref } from "@/lib/contact";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "it";
  const dict = getDictionary(lang);
  return {
    title: dict.faqPage.metaTitle,
    description: dict.faqPage.metaDescription,
    alternates: alternatesFor(lang, "/faq"),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: dict.faqPage.metaTitle,
      description: dict.faqPage.metaDescription,
      url: `${SITE_URL}/${lang}/faq`,
      locale: OG_LOCALE[lang],
      images: SOCIAL_IMAGES.slice(0, 1).map((url) => ({ url })),
    },
  };
}

export default function FaqPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;
  const dict = getDictionary(lang);
  const groups = faq[lang];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: groups
        .flatMap((g) => g.items)
        .map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    },
    breadcrumbJsonLd([
      { name: SITE_NAME, url: `${SITE_URL}/${lang}` },
      { name: dict.faq.title, url: `${SITE_URL}/${lang}/faq` },
    ]),
  ];

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>
        <PageHero
          crumbs={[{ href: `/${lang}`, label: SITE_NAME }, { label: dict.faq.title }]}
          eyebrow={dict.faqPage.eyebrow}
          title={dict.faq.title}
          subtitle={dict.faq.subtitle}
        >
          <nav aria-label={dict.faqPage.jump} className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cream ring-1 ring-white/15 transition-colors hover:bg-white/20"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </PageHero>

        <div className="bg-cream-dark/40">
          <div className="mx-auto max-w-3xl space-y-14 px-5 py-16 sm:py-20">
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-basil sm:text-3xl">{g.title}</h2>
                <div className="mt-5">
                  <FaqList items={g.items} />
                </div>
              </section>
            ))}

            <aside className="brace-find rounded-3xl p-7 text-cream sm:p-9">
              <h2 className="font-serif text-3xl">{dict.faqPage.stillTitle}</h2>
              <p className="mt-3 text-cream/80">{dict.faqPage.stillBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waHref(dict.info.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brace-btn brace-btn-wa"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5 fill-current" />
                  {dict.info.whatsappCta}
                </a>
                <a href={`tel:${TEL}`} className="brace-btn brace-btn-ghost">
                  {dict.faqPage.call}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter lang={lang} dict={dict} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
