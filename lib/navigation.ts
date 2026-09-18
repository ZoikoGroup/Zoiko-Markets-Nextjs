export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "/about-us", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio", hasDropdown: true },
  { label: "Focus Areas", href: "/our-approach#focus-areas", hasDropdown: true },
  { label: "Our Approach", href: "/our-approach", hasDropdown: true },
  { label: "Insights", href: "/insights", hasDropdown: true },
  { label: "Governance", href: "/governance" },
  { label: "Contact", href: "/contact" },
];

export const partnerCta: NavLink = { label: "Partner With Us", href: "/contact" };

export const footerNavGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Vision & Mission", href: "/about-us#mission" },
      { label: "What We Build", href: "/about-us#what-we-build" },
      { label: "Who We Serve", href: "/about-us#who-we-serve" },
      { label: "Our Group", href: "/about-us#our-group" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Portfolio Overview", href: "/portfolio" },
      { label: "Talvrin", href: "/portfolio/talvrin" },
      { label: "Portfolio Criteria", href: "/portfolio#criteria" },
      { label: "Building & Scaling", href: "/portfolio#building-and-scaling" },
    ],
  },
  {
    title: "Focus Areas",
    links: [
      { label: "Financial Markets", href: "/our-approach#focus-areas" },
      { label: "Market Intelligence", href: "/our-approach#market-intelligence" },
      { label: "Financial Data", href: "/our-approach#financial-data" },
      { label: "Trading & Workflow Technology", href: "/our-approach#trading-and-workflow-technology" },
      { label: "Market Infrastructure", href: "/our-approach#market-infrastructure" },
    ],
  },
  {
    title: "Our Approach",
    links: [
      { label: "Operating Model", href: "/our-approach#operating-model" },
      { label: "Active Ownership", href: "/our-approach#active-ownership" },
      { label: "Portfolio Stewardship", href: "/our-approach#portfolio-stewardship" },
      { label: "Capital Allocation", href: "/our-approach#capital-allocation" },
      { label: "Technology Leverage", href: "/our-approach#technology-leverage" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Insights Hub", href: "/insights" },
      { label: "Perspectives", href: "/insights#perspectives" },
      { label: "Reports & Publications", href: "/insights#reports" },
      { label: "News & Announcements", href: "/insights#news" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Governance Overview", href: "/governance" },
      { label: "Risk & Oversight", href: "/governance#risk-and-oversight" },
      { label: "Corporate & Regulatory Boundaries", href: "/governance#regulatory-boundaries" },
      { label: "Responsible Technology", href: "/governance#responsible-technology" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { label: "Partner With Us", href: "/contact" },
      { label: "Strategic Partnerships", href: "/contact#strategic-partnerships" },
      { label: "Technology Partnerships", href: "/contact#technology-partnerships" },
      { label: "Portfolio Opportunities", href: "/contact#portfolio-opportunities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Global Presence", href: "/about-us#geographic-footprint" },
      { label: "Zoiko Financial Group", href: "/about-us#corporate-information" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Corporate Enquiries", href: "/contact#corporate-enquiries" },
      { label: "Media Enquiries", href: "/contact#media-enquiries" },
      { label: "Legal & Compliance", href: "/contact#legal-and-compliance" },
      { label: "Accessibility Feedback", href: "/contact#accessibility-feedback" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Notice", href: "/cookie-notice" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Security", href: "/security" },
    ],
  },
];

export const footerOffices: { title: string; address: string }[] = [
  { title: "Global Headquarters", address: "Sacramento, California, United States" },
  {
    title: "European Headquarters",
    address: "167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom",
  },
];

export const footerBottomLinks: NavLink[] = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Notice", href: "/cookie-notice" },
  { label: "Cookie Preferences", href: "/cookie-preferences" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Security", href: "/security" },
];

export const footerSocialLinks: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
];
