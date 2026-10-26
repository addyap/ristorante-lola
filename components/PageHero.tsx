import type { ReactNode } from "react";
import Link from "next/link";

// Dark, warm opening band for inner pages (blog, FAQ). It sits under the
// fixed header, which stays transparent over it until the visitor scrolls,
// the same way it behaves over the home hero.
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  crumbs: { href?: string; label: string }[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="brace-find text-cream">
      <div className="mx-auto max-w-4xl px-5 pb-14 pt-36 sm:pb-20 sm:pt-44">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-cream/60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-amber-300">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-cream/85">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        <div className="tricolore mt-5 w-24 rounded-full" />
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
