import type { Key, Locale } from "../i18n";

export const site = {
  name: "DIY Furnitures", // placeholder brand name (not translated)
  appUrl: import.meta.env.PUBLIC_APP_URL ?? "http://localhost:5173",
  apiUrl: import.meta.env.PUBLIC_API_URL ?? "http://localhost:8000",
  noindex: (import.meta.env.PUBLIC_NOINDEX ?? "true") !== "false",
  contactEmail: "contact@example.com", // placeholder
};

/** Link to the 3D modeller carrying the visitor's language (the app reads ?lang=). */
export const appLink = (lang: Locale): string => {
  const u = new URL(site.appUrl);
  u.searchParams.set("lang", lang);
  return u.href;
};

// Labels are i18n keys (src/i18n/locales/*.ts); hrefs are locale-less paths.
export type NavItem = {
  labelKey: Key;
  href: string;
  phase2?: boolean;
  phase3?: boolean;
};
export type NavGroup = { labelKey: Key; items: NavItem[] };

export const nav: NavGroup[] = [
  {
    labelKey: "nav.product",
    items: [
      { labelKey: "nav.howItWorks", href: "/how-it-works" },
      { labelKey: "nav.features", href: "/features" },
      { labelKey: "nav.pricing", href: "/pricing" },
    ],
  },
  {
    labelKey: "nav.resources",
    items: [
      { labelKey: "nav.catalog", href: "/catalog" },
      { labelKey: "nav.realisations", href: "/realisations", phase2: true },
      { labelKey: "nav.delivery", href: "/delivery-suppliers", phase2: true },
    ],
  },
  {
    labelKey: "nav.professionals",
    items: [{ labelKey: "nav.joiners", href: "/joiners" }],
  },
  {
    labelKey: "nav.company",
    items: [
      { labelKey: "nav.about", href: "/about" },
      { labelKey: "nav.contact", href: "/contact" },
    ],
  },
];

export const legal: NavItem[] = [
  { labelKey: "legal.privacy", href: "/legal/privacy" },
  { labelKey: "legal.terms", href: "/legal/terms" },
  { labelKey: "legal.notice", href: "/legal/notice" },
  { labelKey: "legal.cgv", href: "/legal/cgv", phase3: true },
];
