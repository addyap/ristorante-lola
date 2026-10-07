"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { menu, pizzaAddons } from "@/lib/menu";

export default function MenuSection({ dict }: { dict: Dictionary }) {
  const rootRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.inView = String(entry.isIntersecting);
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);
  const m = dict.menu;
  const [category, setCategory] = useState("all");
  const categories = category === "all" ? menu : menu.filter((cat) => cat.id === category);

  return (
    <section ref={rootRef} id="menu" className="scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">{m.title}</h2>
          <div className="tricolore mx-auto mt-4 w-24 rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/75">{m.subtitle}</p>
        </div>

        <div className="mt-8 grid items-start gap-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
          <nav aria-label={m.browseLabel} className="sticky top-28 z-20 bg-cream py-2 md:top-32 md:py-0">
            <label htmlFor="menu-category" className="mb-2 block text-sm font-semibold text-charcoal md:hidden">{m.browseLabel}</label>
            <select id="menu-category" value={category} onChange={(event) => setCategory(event.target.value)}
              className="min-h-12 w-full rounded-xl border border-basil/25 bg-white px-4 text-base text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-basil md:hidden">
              <option value="all">{m.allCategories}</option>
              {menu.map((cat) => <option key={cat.id} value={cat.id}>{m.categories[cat.id as keyof typeof m.categories]}</option>)}
            </select>
            <div className="hidden space-y-1 md:block">
              {[{ id: "all" }, ...menu].map((cat) => (
                <button key={cat.id} type="button" aria-pressed={category === cat.id} onClick={() => setCategory(cat.id)}
                  className={`min-h-12 w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-basil ${category === cat.id ? "bg-basil text-white" : "text-charcoal/80 hover:bg-basil/10"}`}>
                  {cat.id === "all" ? m.allCategories : m.categories[cat.id as keyof typeof m.categories]}
                </button>
              ))}
            </div>
          </nav>

          <div className="min-w-0">
            {m.note && <p className="mb-6 rounded-xl border border-cream-dark bg-cream-dark/30 px-4 py-3 text-sm leading-relaxed text-charcoal/75">{m.note}</p>}
            <div className="space-y-8">
              {categories.map((cat) => (
                <article key={cat.id} id={`menu-${cat.id}`} className="scroll-mt-32 rounded-2xl border border-cream-dark bg-white/60 p-4 sm:p-6">
                  <h3 className="font-serif text-2xl text-basil sm:text-3xl">{m.categories[cat.id as keyof typeof m.categories]}</h3>
                  {m.categoryNotes?.[cat.id as keyof typeof m.categoryNotes] && <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{m.categoryNotes[cat.id as keyof typeof m.categoryNotes]}</p>}
                  <ul className="mt-4 divide-y divide-cream-dark">
                    {cat.items.map((item) => {
                      const entry = m.items[item.id as keyof typeof m.items] as { name: string; desc?: string } | undefined;
                      if (!entry) return null;
                      const tiered = item.price.includes("\n");
                      return (
                        <li key={item.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 py-4">
                          <div className="min-w-0">
                            <p className="font-semibold leading-snug text-charcoal">{entry.name}</p>
                            {entry.desc && <p className="mt-1 max-w-prose text-sm leading-relaxed text-charcoal/75">{entry.desc}</p>}
                          </div>
                          {item.price ? (
                            <p className={`${tiered ? "col-span-2 rounded-lg bg-cream-dark/30 px-3 py-2 text-sm sm:col-span-1 sm:bg-transparent sm:p-0" : "text-sm sm:text-base"} whitespace-pre-line text-right font-semibold leading-relaxed text-charcoal tabular-nums`}>{item.price}</p>
                          ) : (
                            <span className="self-start rounded-md bg-cream-dark/50 px-2 py-1 text-xs leading-snug text-charcoal/75">{m.priceTbd}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {cat.id === "pizzeSpeciali" && (
                    <div className="mt-4 rounded-xl bg-cream-dark/40 p-4">
                      <h4 className="text-sm font-semibold text-charcoal">{m.addonsTitle}</h4>
                      <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm text-charcoal/80 sm:grid-cols-2">
                        {pizzaAddons.map((addon) => <li key={addon.id} className="flex justify-between gap-4"><span>{m.addons[addon.id as keyof typeof m.addons]}</span><span className="font-medium tabular-nums">{addon.price}</span></li>)}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
