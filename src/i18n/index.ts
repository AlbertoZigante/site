import en, { type Dict } from "./locales/en";
import fr from "./locales/fr";
import it from "./locales/it";

export const locales = ["en", "fr", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
// Endonyms: always shown in their own language.
export const localeNames: Record<Locale, string> = { en: "English", fr: "Français", it: "Italiano" };

const dicts: Record<Locale, Dict> = { en, fr, it };

type Paths<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${Paths<T[K]>}`;
}[keyof T & string];
export type Key = Paths<Dict>;

const lookup = (d: unknown, key: string): string | undefined =>
  key.split(".").reduce<any>((o, k) => o?.[k], d);

export function t(lang: Locale, key: Key): string {
  return lookup(dicts[lang], key) ?? lookup(dicts[defaultLocale], key) ?? key;
}

/** "/pricing" -> "/fr/pricing"; "/" -> "/fr" */
export function localePath(lang: Locale, path = "/"): string {
  return `/${lang}${path === "/" ? "" : path}`;
}

/** "/fr/pricing" -> { lang: "fr", rest: "/pricing" } */
export function splitLocale(pathname: string): { lang: Locale; rest: string } {
  const clean = pathname.replace(/\.html$/, "").replace(/\/$/, "").replace(/\/index$/, "") || "/";
  const m = clean.match(new RegExp(`^/(${locales.join("|")})(/.*)?$`));
  return m ? { lang: m[1] as Locale, rest: m[2] ?? "/" } : { lang: defaultLocale, rest: clean };
}

/** Helpers bound to a locale, for pages and components. */
export function useI18n(lang: Locale) {
  return { t: (key: Key) => t(lang, key), l: (path = "/") => localePath(lang, path) };
}

/** Use as `export const getStaticPaths = localePaths;` in every [lang] page. */
export const localePaths = () => locales.map((lang) => ({ params: { lang } }));
