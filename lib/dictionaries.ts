import type { Locale } from "./i18n";
import it from "@/dictionaries/it.json";
import en from "@/dictionaries/en.json";
import fr from "@/dictionaries/fr.json";
import de from "@/dictionaries/de.json";

export type Dictionary = typeof it;

const dictionaries: Record<Locale, Dictionary> = {
  it,
  en: en as Dictionary,
  fr: fr as Dictionary,
  de: de as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
