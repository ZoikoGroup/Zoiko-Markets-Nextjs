export type NavLink = {
  label: string;
  href: string;
};

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our approach", href: "/our-approach" },
  { label: "Insights", href: "/insights" },
];

export const footerNavGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about-us" },
      { label: "Our approach", href: "/our-approach" },
      { label: "Governance", href: "/governance" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Talvrin", href: "/portfolio/talvrin" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookie settings", href: "/cookie-settings" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];
