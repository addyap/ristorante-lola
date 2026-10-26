// Renders a blog body written with the light conventions in lib/blog/types.ts.
export default function ArticleBody({ body }: { body: string[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-charcoal/85">
      {body.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-4 font-serif text-2xl text-basil sm:text-3xl">
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={i} className="space-y-3 pl-1">
              {block.split("\n").map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-tomato"
                  />
                  <span>{line.replace(/^- /, "")}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.startsWith("> ")) {
          return (
            <p
              key={i}
              className="rounded-2xl border-l-4 border-basil bg-basil/10 px-5 py-4 text-base text-basil-dark"
            >
              {block.slice(2)}
            </p>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
