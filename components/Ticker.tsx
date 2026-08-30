// Moving announcement ribbon shown under the top menu. Pure-CSS marquee:
// the item sequence is rendered twice so a -50% translate loops seamlessly.
// Pauses on hover; becomes a static, manually-scrollable strip when the
// visitor prefers reduced motion (see globals.css).
export default function Ticker({
  items,
  label,
}: {
  items: string[];
  label: string;
}) {
  if (!items || items.length === 0) return null;

  const Sequence = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="ticker-seq" aria-hidden={hidden || undefined}>
      {items.map((text, i) => (
        <span key={i} className="ticker-item">
          <span className="ticker-dot" aria-hidden="true" />
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker" role="region" aria-label={label}>
      <div className="ticker-track">
        <Sequence />
        <Sequence hidden />
      </div>
    </div>
  );
}
