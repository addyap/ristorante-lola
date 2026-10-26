import type { FaqItem } from "@/lib/faq";

// Accordion of questions, shared by the home section and the FAQ page.
export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-cream-dark overflow-hidden rounded-2xl bg-cream ring-1 ring-cream-dark">
      {items.map((item) => (
        <details key={item.id} id={`q-${item.id}`} className="group scroll-mt-28">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-medium text-charcoal transition-colors hover:bg-cream-dark/30 sm:px-6">
            <span>{item.q}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-basil transition-transform duration-300 group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-charcoal/75 sm:px-6">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
