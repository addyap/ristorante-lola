import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "da Lola",
    description:
      "Ristorante da Lola — pizzeria e cucina marchigiana a Fermignano.",
    start_url: "/it",
    display: "standalone",
    background_color: "#f4f1e9",
    theme_color: "#2f7d32",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
