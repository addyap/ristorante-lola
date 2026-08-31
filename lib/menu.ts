// Single source of truth for the menu's structure and prices.
//
// Prices live here once (language-neutral, with the € sign) so they never
// drift between the four dictionaries. Each item's translated `name` and
// `desc` are looked up per-language in `dictionaries/*.json` under `menu.items`.
//
// price === ""  ->  price not legible on the photographed menu; the UI shows a
//                   "to confirm" chip instead. Fill these in once confirmed.

export type MenuItem = {
  /** Key into `menu.items` in each dictionary. */
  id: string;
  /** Display price incl. currency, e.g. "€ 9,50". "" = to confirm. May contain "\n" for tiered drinks. */
  price: string;
};

export type MenuCategory = {
  /** Key into `menu.categories` in each dictionary. */
  id: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "antipasti",
    items: [
      { id: "crostini", price: "" },
      { id: "granTagliere", price: "" },
      { id: "casciotta", price: "" },
      { id: "bisCarpaccio", price: "" },
      { id: "capreseAntipasto", price: "" },
    ],
  },
  {
    id: "primi",
    items: [
      { id: "gnocchiPrimavera", price: "" },
      { id: "cappellettiLupo", price: "" },
      { id: "tagliatelleOrtolana", price: "" },
      { id: "ravioliTricolore", price: "" },
      { id: "passatelliPorcini", price: "" },
      { id: "carbonara", price: "" },
    ],
  },
  {
    id: "secondi",
    items: [
      { id: "bisteccaVitello", price: "" },
      { id: "bisteccaVitellone", price: "" },
      { id: "grigliataMista", price: "" },
      { id: "agnelloScottadito", price: "" },
      { id: "scaloppine", price: "" },
      { id: "tagliata", price: "" },
      { id: "fiorentina", price: "" },
    ],
  },
  {
    id: "contorni",
    items: [
      { id: "patatineFritte", price: "€ 5,00" },
      { id: "patatineRustiche", price: "€ 5,00" },
      { id: "patateLesse", price: "€ 4,50" },
      { id: "insalataMista", price: "€ 4,00" },
      { id: "verduraCotta", price: "€ 4,50" },
      { id: "verdureGrigliate", price: "" },
      { id: "pastellate", price: "€ 4,50" },
      { id: "oliveAscolana", price: "€ 5,00" },
      { id: "jalapenos", price: "€ 6,00" },
    ],
  },
  {
    id: "insalatone",
    items: [
      { id: "larry", price: "€ 9,00" },
      { id: "mauri", price: "€ 9,00" },
      { id: "estivaSalad", price: "€ 9,00" },
    ],
  },
  {
    id: "pizze",
    items: [
      { id: "ciclista", price: "€ 4,50" },
      { id: "ciclistaRed", price: "€ 5,00" },
      { id: "marinara", price: "€ 5,00" },
      { id: "margherita", price: "€ 6,50" },
      { id: "boscaiola", price: "€ 9,50" },
      { id: "quattroStagioni", price: "€ 9,50" },
      { id: "napoli", price: "€ 8,00" },
      { id: "capricciosa", price: "€ 8,50" },
      { id: "ortolana", price: "€ 8,50" },
      { id: "vegetariana", price: "€ 7,50" },
      { id: "diavola", price: "€ 8,00" },
      { id: "rossini", price: "€ 8,00" },
      { id: "tonnoCipolla", price: "€ 9,00" },
      { id: "quattroFormaggi", price: "€ 10,00" },
      { id: "bufalina", price: "€ 9,00" },
      { id: "parmigianaPizza", price: "€ 9,50" },
      { id: "capresePizza", price: "€ 10,00" },
      { id: "contadina", price: "€ 9,50" },
      { id: "mcdonalds", price: "€ 8,50" },
      { id: "calzone", price: "€ 10,00" },
    ],
  },
  {
    id: "pizzeSpeciali",
    items: [
      { id: "lola", price: "" },
      { id: "giglhi", price: "" },
      { id: "lollo", price: "" },
      { id: "cri", price: "€ 9,00" },
      { id: "sofi", price: "€ 9,00" },
      { id: "elena", price: "€ 11,00" },
      { id: "tirolese", price: "€ 11,00" },
      { id: "franco", price: "€ 9,50" },
      { id: "carlo", price: "€ 9,00" },
      { id: "pirata", price: "€ 10,00" },
      { id: "parmigianaEstiva", price: "€ 11,00" },
      { id: "boccio", price: "€ 10,00" },
      { id: "pizzaTrentina", price: "€ 11,00" },
      { id: "burratina", price: "€ 12,00" },
      { id: "colorata", price: "€ 8,00" },
      { id: "estate", price: "€ 9,00" },
      { id: "autunno", price: "€ 9,50" },
      { id: "pacchia", price: "€ 12,00" },
      { id: "verdurona", price: "€ 9,00" },
      { id: "febbraio", price: "€ 10,00" },
      { id: "grattugia", price: "€ 10,00" },
      { id: "biscotta", price: "€ 11,00" },
      { id: "bustadella", price: "€ 12,00" },
      { id: "mediterranea", price: "€ 10,00" },
    ],
    // addons rendered from `pizzaAddons` below
  },
  {
    id: "hamburger",
    items: [
      { id: "classicoBurger", price: "€ 15,00" },
      { id: "texasBurger", price: "€ 15,00" },
      { id: "ranchBurger", price: "€ 15,00" },
      { id: "chickenBurger", price: "€ 15,00" },
    ],
  },
  {
    id: "dolci",
    items: [
      { id: "tiramisu", price: "€ 5,50" },
      { id: "mousseMascarpone", price: "€ 5,50" },
      { id: "pannaCotta", price: "" },
      { id: "tartufo", price: "€ 5,50" },
      { id: "tartufoAffogato", price: "€ 5,50" },
      { id: "tortinoCioccolato", price: "€ 5,50" },
      { id: "meringaForno", price: "€ 5,50" },
      { id: "sfogliatina", price: "€ 5,50" },
      { id: "caffe", price: "€ 1,50" },
      { id: "caffeCorretto", price: "€ 2,00" },
      { id: "decaOrzo", price: "€ 2,00" },
      { id: "amari", price: "€ 4,00" },
      { id: "distillati", price: "€ 4,00–10,00" },
    ],
  },
  {
    id: "bevande",
    items: [
      { id: "acqua075", price: "€ 2,50" },
      { id: "acqua050", price: "€ 1,50" },
      { id: "bibiteLattina", price: "" },
      { id: "vinoFrizzante", price: "" },
      { id: "vinoCasa", price: "0,25 L · € 3,50\n0,50 L · € 5,00\n1 L · € 10,00" },
      { id: "birraSpina", price: "0,30 L · € 4,00\n0,50 L · € 6,00\n1 L · € 11,00" },
      { id: "forstKronen", price: "€ 5,00" },
      { id: "augustiner", price: "€ 5,00" },
    ],
  },
];

// Extra pizza toppings, shown as a footnote under the special pizzas.
export const pizzaAddons: MenuItem[] = [
  { id: "crudo", price: "€ 2,00" },
  { id: "burrata", price: "€ 2,50" },
  { id: "bufala", price: "€ 2,50" },
  { id: "verdure", price: "€ 1,00" },
  { id: "altro", price: "€ 1,50" },
];
