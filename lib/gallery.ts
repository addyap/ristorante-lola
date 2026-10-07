// Photos live in /public/photos, short videos in /public/video. Alt text uses
// the dish's Italian name, which is authentic across every language.
export type GalleryItem = {
  /** Image source, or — for a video tile — the poster still shown before play. */
  src: string;
  alt: string;
  /** When set, the tile plays this looping, muted video instead of a still. */
  video?: string;
  /** Extra grid classes for this tile (spans). Defaults to a square tile. */
  cls?: string;
};

export const gallery: GalleryItem[] = [
  { src: "/photos/02-bistecca-fiorentina-alla-brace.jpg", alt: "Bistecca fiorentina alla brace", cls: "col-span-2 row-span-2 aspect-square" },
  { src: "/video/scampi-alla-brace-poster.jpg", alt: "Scampi alla brace sulla griglia", video: "/video/scampi-alla-brace.mp4" },
  { src: "/photos/18-scampi-sulla-brace.jpg", alt: "Scampi freschi sulla brace" },
  { src: "/photos/17-scampi-alla-griglia.jpg", alt: "Scampi alla griglia" },
  { src: "/photos/03-tagliatelle-al-tartufo.jpg", alt: "Tagliatelle al tartufo" },
  { src: "/photos/05-pizze-caprese-forno-a-legna.jpg", alt: "Pizze caprese in forno a legna" },
  { src: "/photos/19-scampi-vassoio.jpg", alt: "Il nostro vassoio di scampi" },
  { src: "/photos/09-tagliatelle-ragu-fatte-in-casa.jpg", alt: "Tagliatelle al ragù fatte in casa" },
  { src: "/photos/06-pizza-alici-olive-rucola.jpg", alt: "Pizza con alici, olive e rucola" },
  { src: "/photos/12-carne-alla-brace.jpg", alt: "Carne alla brace" },
  { src: "/photos/08-ravioli-verdi-salvia.jpg", alt: "Ravioli verdi burro e salvia" },
  { src: "/photos/07-pizza-bianca-pere.jpg", alt: "Pizza bianca con pere" },
  { src: "/photos/13-gamberoni-alla-griglia.jpg", alt: "Gamberoni alla griglia" },
  { src: "/photos/04-tartufo-bianco-e-vino.jpg", alt: "Tartufo bianco e vino del territorio" },
  { src: "/photos/14-pomodoro-e-burrata.jpg", alt: "Pomodoro e burrata" },
  { src: "/photos/16-sala-interna-bar.jpg", alt: "Il bar e la sala del ristorante" },
];

// Specialties use one representative photo each.
export const specialtyImages = [
  "/photos/09-tagliatelle-ragu-fatte-in-casa.jpg",
  "/photos/02-bistecca-fiorentina-alla-brace.jpg",
  "/photos/05-pizze-caprese-forno-a-legna.jpg",
];
