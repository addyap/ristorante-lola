import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

// Article cover: the post's photo when it has one, otherwise a warm
// typographic card in the site's "brace" palette, keyed to the category.
const MOTIF: Record<BlogPost["category"], string> = {
  traditions: "Tradizioni",
  food: "Sapori",
  places: "Territorio",
};

export default function BlogCover({
  post,
  alt,
  sizes,
  priority = false,
}: {
  post: BlogPost;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  if (post.cover) {
    return (
      <Image
        src={post.cover}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className="brace-find absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
    >
      <span className="font-serif text-3xl italic text-[#ecd39a] sm:text-4xl">
        {MOTIF[post.category]}
      </span>
      <span className="tricolore w-16 rounded-full" />
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cream/60">
        Fermignano · Montefeltro
      </span>
    </div>
  );
}
