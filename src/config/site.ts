export const site = {
  name: "DIY Furnitures", // placeholder brand name
  tagline: "Design your furniture. Get the cut list. Order the parts.",
  appUrl: import.meta.env.PUBLIC_APP_URL ?? "http://localhost:5173",
  apiUrl: import.meta.env.PUBLIC_API_URL ?? "http://localhost:8000",
  noindex: (import.meta.env.PUBLIC_NOINDEX ?? "true") !== "false",
  contactEmail: "contact@example.com", // placeholder
};

export type NavItem = {
  label: string;
  href: string;
  phase2?: boolean;
  phase3?: boolean;
};
export type NavGroup = { label: string; items: NavItem[] };

export const nav: NavGroup[] = [
  {
    label: "Product",
    items: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Catalog", href: "/catalog" },
      { label: "Past realisations", href: "/realisations", phase2: true },
      { label: "Delivery & suppliers", href: "/delivery-suppliers", phase2: true },
    ],
  },
  {
    label: "Professionals",
    items: [{ label: "For joiners", href: "/joiners" }],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legal: NavItem[] = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Terms of use (CGU)", href: "/legal/terms" },
  { label: "Legal notice (mentions légales)", href: "/legal/notice" },
  { label: "Terms of sale (CGV)", href: "/legal/cgv", phase3: true },
];
