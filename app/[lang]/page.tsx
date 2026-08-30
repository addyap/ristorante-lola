import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { gallery, specialtyImages } from "@/lib/gallery";
import Header from "@/components/Header";
import HeroBrace from "@/components/HeroBrace";

const MAP_QUERY =
  "https://www.google.com/maps/search/?api=1&query=Via+S.+Caterina+da+Siena+16+61033+Fermignano";
const MAP_EMBED =
  "https://www.google.com/maps?q=Via%20S.%20Caterina%20da%20Siena%2016%2061033%20Fermignano&output=embed";
const TEL = "+390722331684";
const TEL_MOBILE = "+393477621359";
const EMAIL = "lolaristorante@gmail.com";
const WHATSAPP_NUMBER = "393477621359";
const FACEBOOK_URL = "https://www.facebook.com/RistorantePizzeriaDaLola";

function waHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />

      <main>
        {/* Hero — "Dalla Brace" */}
        <HeroBrace
          eyebrow={dict.hero.eyebrow}
          titlePre={dict.hero.titlePre}
          titleMain={dict.hero.titleMain}
          subtitle={dict.hero.subtitle}
          pillars={dict.hero.pillars}
          scrollCue={dict.hero.scrollCue}
          ctaMenu={dict.hero.ctaMenu}
          ctaFind={dict.hero.ctaFind}
          whatsappHref={waHref(dict.info.whatsappMsg)}
          whatsappLabel="WhatsApp"
        />

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
        <section id="specialties" className="scroll-mt-28 bg-cream-dark/40">
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
        <section id="gallery" className="scroll-mt-28 bg-cream">
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
        <section id="about" className="scroll-mt-28 bg-basil text-cream">
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

        {/* People — the team behind Lola */}
        <section id="people" className="scroll-mt-28 bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 md:grid-cols-2">
            <div className="relative order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-cream-dark shadow-[0_30px_70px_-30px_rgba(226,98,29,0.5)]">
                <Image
                  src="/photos/15-la-squadra-in-cucina.jpg"
                  alt={dict.people.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-5 pb-4 pt-12 text-sm text-cream/90">
                  {dict.people.caption}
                </div>
              </div>
            </div>
            <div className="order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-tomato">
                {dict.people.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
                {dict.people.title}
              </h2>
              <div className="tricolore mt-4 w-24 rounded-full" />
              <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
                {dict.people.body}
              </p>
              <p className="mt-6 font-serif text-2xl text-basil">
                — Ristorante da <span className="text-[#9c6f2b]">Lola</span>
              </p>
            </div>
          </div>
        </section>

        {/* Info — Find Us */}
        <section
          id="info"
          className="brace-find scroll-mt-28 bg-charcoal text-cream"
        >
          <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2">
            {/* Left — the invitation */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                {dict.hero.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                {dict.info.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/80">
                {dict.info.invite}
              </p>

              <dl className="mt-9 space-y-5">
                <InfoRow
                  label={dict.info.addressLabel}
                  icon={<PinIcon />}
                >
                  <span className="whitespace-pre-line">{dict.info.address}</span>
                </InfoRow>
                <InfoRow label={dict.info.hoursLabel} icon={<ClockIcon />}>
                  <span className="whitespace-pre-line">
                    {dict.info.hoursValue}
                  </span>
                </InfoRow>
                <InfoRow label={dict.info.phoneLabel} icon={<PhoneIcon />}>
                  <a
                    href={`tel:${TEL}`}
                    className="transition-colors hover:text-amber-300"
                  >
                    {dict.info.phoneValue}
                  </a>
                  <span className="px-2 text-cream/30">·</span>
                  <a
                    href={`tel:${TEL_MOBILE}`}
                    className="transition-colors hover:text-amber-300"
                  >
                    {dict.info.mobileValue}
                  </a>
                </InfoRow>
                <InfoRow label={dict.info.emailLabel} icon={<MailIcon />}>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all transition-colors hover:text-amber-300"
                  >
                    {dict.info.email}
                  </a>
                </InfoRow>
              </dl>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={MAP_QUERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brace-btn brace-btn-primary"
                >
                  {dict.info.mapCta}
                </a>
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
                  {dict.info.callCta}
                </a>
              </div>
            </div>

            {/* Right — the live map */}
            <div className="brace-map relative min-h-[340px] overflow-hidden rounded-3xl ring-1 ring-white/15 lg:min-h-[440px]">
              <iframe
                title="Ristorante da Lola — Fermignano"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-charcoal/85 to-transparent px-5 pb-4 pt-10 text-sm text-cream">
                <PinIcon />
                <span>Via S. Caterina da Siena, 16 · Fermignano</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center">
          <span className="font-serif text-2xl text-cream">
            Ristorante da <span className="text-[#ecd39a]">Lola</span>
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

      {/* Floating WhatsApp action */}
      <a
        href={waHref(dict.info.whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.info.whatsappCta}
        className="brace-fab group"
      >
        <span className="brace-fab-ring" aria-hidden="true" />
        <WhatsAppIcon className="relative z-10 h-7 w-7 shrink-0 fill-current" />
        <span className="brace-fab-label">{dict.info.whatsappCta}</span>
      </a>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.5 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.8-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48c0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z" />
    </svg>
  );
}

function InfoRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tomato/15 text-amber-300 ring-1 ring-amber-300/25">
        {icon}
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wide text-cream/55">
          {label}
        </dt>
        <dd className="mt-1 font-medium text-cream">{children}</dd>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 3.7 2.1-1 1.7L11 13.5V6.5h2v6.1Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 3.25V18h16V7.25l-8 5-8-5ZM18.4 6H5.6l6.4 4Z" />
    </svg>
  );
}
