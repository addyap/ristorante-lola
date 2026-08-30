import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { gallery, specialtyImages } from "@/lib/gallery";
import Header from "@/components/Header";

const MAP_QUERY =
  "https://www.google.com/maps/search/?api=1&query=Via+S.+Caterina+da+Siena+16+61033+Fermignano";
const FACEBOOK_URL = "https://www.facebook.com/RistorantePizzeriaDaLola";

export default function Home({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <Image
            src="/photos/05-pizze-caprese-forno-a-legna.jpg"
            alt=""
            fill
            priority
            className="-z-10 object-cover"
          />
          <div className="-z-10 absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80" />
          <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24 sm:py-32">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
              {dict.hero.eyebrow}
            </p>
            <h1 className="font-serif text-6xl text-cream sm:text-7xl">
              {dict.hero.titlePre}{" "}
              <span className="text-tomato">{dict.hero.titleMain}</span>
            </h1>
            <div className="tricolore mt-5 w-40 rounded-full" />
            <p className="mt-6 max-w-xl text-lg text-cream/90">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#specialties"
                className="rounded-full bg-tomato px-6 py-3 font-semibold text-cream transition-colors hover:bg-tomato-dark"
              >
                {dict.hero.ctaMenu}
              </a>
              <a
                href="#info"
                className="rounded-full border border-cream/70 px-6 py-3 font-semibold text-cream transition-colors hover:bg-cream hover:text-charcoal"
              >
                {dict.hero.ctaFind}
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
            <h2 className="font-serif text-3xl text-basil sm:text-4xl">
              {dict.intro.title}
            </h2>
            <div className="tricolore mx-auto mt-4 w-24 rounded-full" />
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              {dict.intro.body}
            </p>
          </div>
        </section>

        {/* Specialties */}
        <section id="specialties" className="scroll-mt-20 bg-cream-dark/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
                {dict.specialties.title}
              </h2>
              <p className="mt-3 text-charcoal/70">{dict.specialties.subtitle}</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {dict.specialties.items.map((item, i) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-cream-dark"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={specialtyImages[i]}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-basil">{item.name}</h3>
                    <p className="mt-2 text-charcoal/75">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Features */}
            <div className="mt-12 rounded-2xl bg-cream p-6 ring-1 ring-cream-dark sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal/60">
                {dict.features.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {dict.features.items.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-basil/10 px-4 py-2 text-sm font-medium text-basil-dark"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-20 bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
                {dict.gallery.title}
              </h2>
              <p className="mt-3 text-charcoal/70">{dict.gallery.subtitle}</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {gallery.map((photo, i) => (
                <div
                  key={photo.src}
                  className={
                    "relative overflow-hidden rounded-xl ring-1 ring-cream-dark " +
                    (i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square")
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-basil text-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-cream/20">
              <Image
                src="/photos/11-sala-interna-logo.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">{dict.about.title}</h2>
              <div className="tricolore mt-4 w-24 rounded-full" />
              <p className="mt-6 text-lg leading-relaxed text-cream/90">
                {dict.about.body}
              </p>
            </div>
          </div>
        </section>

        {/* Info */}
        <section id="info" className="scroll-mt-20 bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <h2 className="text-center font-serif text-3xl text-charcoal sm:text-4xl">
              {dict.info.title}
            </h2>
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
              <InfoCard label={dict.info.addressLabel} value={dict.info.address} />
              <InfoCard label={dict.info.hoursLabel} value={dict.info.hoursValue} />
              <InfoCard label={dict.info.phoneLabel} value={dict.info.phoneValue} />
            </div>
            <div className="mt-8 text-center">
              <a
                href={MAP_QUERY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-basil px-6 py-3 font-semibold text-cream transition-colors hover:bg-basil-dark"
              >
                {dict.info.mapCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center">
          <span className="font-serif text-2xl text-cream">
            da <span className="text-tomato">Lola</span>
          </span>
          <p className="text-sm">{dict.footer.tagline}</p>
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
        </div>
      </footer>
    </>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-cream-dark/40 p-6 text-center ring-1 ring-cream-dark">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
        {label}
      </h3>
      <p className="mt-2 whitespace-pre-line font-medium text-charcoal">{value}</p>
    </div>
  );
}
