import type { Dictionary } from "@/lib/dictionaries";
import { menu, pizzaAddons } from "@/lib/menu";

export default function MenuSection({ dict }: { dict: Dictionary }) {
  const m = dict.menu;

  return (
    <section id="menu" className="scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            {m.title}
          </h2>
          <div className="tricolore mx-auto mt-4 w-24 rounded-full" />
          <p className="mt-4 text-charcoal/70">{m.subtitle}</p>
        </div>

        {/* Quick category jump */}
        <nav className="mt-8 flex flex-wrap justify-center gap-2">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#menu-${cat.id}`}
              className="rounded-full bg-cream-dark/50 px-3.5 py-1.5 text-sm font-medium text-charcoal/75 ring-1 ring-cream-dark transition-colors hover:bg-basil/10 hover:text-basil-dark"
            >
              {m.categories[cat.id as keyof typeof m.categories]}
            </a>
          ))}
        </nav>

        {/* Note about prices still being confirmed */}
        {m.note && (
          <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-tomato/8 px-4 py-3 text-center text-sm text-charcoal/70 ring-1 ring-tomato/15">
            {m.note}
          </p>
        )}

        <div className="mt-12 space-y-14">
          {menu.map((cat) => (
            <div key={cat.id} id={`menu-${cat.id}`} className="scroll-mt-28">
              <h3 className="font-serif text-2xl text-basil sm:text-3xl">
                {m.categories[cat.id as keyof typeof m.categories]}
              </h3>
              {m.categoryNotes?.[cat.id as keyof typeof m.categoryNotes] && (
                <p className="mt-1 text-sm italic text-charcoal/55">
                  {m.categoryNotes[cat.id as keyof typeof m.categoryNotes]}
                </p>
              )}
              <div className="tricolore mt-3 w-16 rounded-full" />

              <ul className="mt-6 divide-y divide-cream-dark/60">
                {cat.items.map((item) => {
                  const entry = m.items[item.id as keyof typeof m.items] as
                    | { name: string; desc?: string }
                    | undefined;
                  if (!entry) return null;
                  return (
                    <li
                      key={item.id}
                      className="flex items-baseline gap-3 py-3.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-charcoal">
                          {entry.name}
                        </p>
                        {entry.desc && (
                          <p className="mt-0.5 text-sm leading-snug text-charcoal/60">
                            {entry.desc}
                          </p>
                        )}
                      </div>
                      <span
                        aria-hidden="true"
                        className="hidden min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-cream-dark sm:block"
                      />
                      {item.price ? (
                        <span className="shrink-0 whitespace-pre-line text-right font-semibold text-charcoal tabular-nums">
                          {item.price}
                        </span>
                      ) : (
                        <span className="shrink-0 rounded-full bg-cream-dark/60 px-2.5 py-0.5 text-xs font-medium text-charcoal/60">
                          {m.priceTbd}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Extra pizza toppings, under the special pizzas */}
              {cat.id === "pizzeSpeciali" && (
                <div className="mt-5 rounded-xl bg-cream-dark/30 px-4 py-3 text-sm text-charcoal/70">
                  <span className="font-semibold text-charcoal/80">
                    {m.addonsTitle}:
                  </span>{" "}
                  {pizzaAddons.map((a, i) => (
                    <span key={a.id}>
                      {i > 0 && " · "}
                      {m.addons[a.id as keyof typeof m.addons]} {a.price}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
