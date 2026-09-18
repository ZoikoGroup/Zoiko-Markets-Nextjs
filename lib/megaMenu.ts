import type { MenuIconKey } from "@/components/layout/menuIcons";

export type MegaMenuItem = {
  icon: MenuIconKey;
  title: string;
  description: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  items: MegaMenuItem[];
};

export type MegaMenuHighlight = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type MegaMenuFootnote = {
  text: string;
  linkLabel: string;
  href: string;
};

export type MegaMenuConfig = {
  columns: MegaMenuColumn[];
  highlight?: MegaMenuHighlight;
  footnote: MegaMenuFootnote;
};

export const megaMenus: Record<string, MegaMenuConfig> = {
  About: {
    columns: [
      {
        title: "Company",
        items: [
          {
            icon: "grid",
            title: "About Overview",
            description: "See what Zoiko Markets is and how it is structured.",
            href: "/about-us",
          },
          {
            icon: "target",
            title: "Who We Are",
            description: "Our role as an active strategic owner.",
            href: "/about-us#mission",
          },
          {
            icon: "layers",
            title: "What We Build",
            description: "The mandate areas we build and own across.",
            href: "/about-us#what-we-build",
          },
          {
            icon: "star",
            title: "Why Zoiko Markets",
            description: "What sets the holding-company model apart.",
            href: "/about-us#feature-grid",
          },
        ],
      },
      {
        title: "Purpose",
        items: [
          {
            icon: "flag",
            title: "Vision & Mission",
            description: "The future we work toward, and today's mission.",
            href: "/about-us#mission",
          },
          {
            icon: "grid",
            title: "Who We Serve",
            description: "The institutions and teams our portfolio serves.",
            href: "/about-us#who-we-serve",
          },
          {
            icon: "target",
            title: "What We Solve",
            description: "The market problems our businesses address.",
            href: "/about-us#problem",
          },
        ],
      },
      {
        title: "Structure",
        items: [
          {
            icon: "layers",
            title: "Our Group",
            description: "How Zoiko Markets sits within Zoiko Financial Group.",
            href: "/about-us#our-group",
          },
          {
            icon: "document",
            title: "Corporate Information",
            description: "Legal entity naming and the parent relationship.",
            href: "/about-us#corporate-information",
          },
        ],
      },
    ],
    highlight: {
      eyebrow: "About Highlight",
      title: "A specialist markets holding company.",
      description:
        "Built within Zoiko Financial Group Inc. to own, govern and scale businesses serving modern financial markets.",
      image: "/images/menu/about.png",
      imageAlt: "Two colleagues reviewing market data on screens",
      cta: { label: "About Zoiko Markets", href: "/about-us" },
    },
    footnote: {
      text: "Already know Zoiko Markets?",
      linkLabel: "Read the full overview",
      href: "/about-us",
    },
  },

  "Our Approach": {
    columns: [
      {
        title: "Active Ownership",
        items: [
          {
            icon: "target",
            title: "Our Approach Overview",
            description: "How the holding company operates day to day.",
            href: "/our-approach",
          },
          {
            icon: "briefcase",
            title: "Portfolio Stewardship",
            description: "Setting mandate, priorities and review.",
            href: "/our-approach#portfolio-stewardship",
          },
          {
            icon: "shield",
            title: "Strategic Governance",
            description: "Common standards across the portfolio.",
            href: "/our-approach#strategic-governance",
          },
          {
            icon: "layers",
            title: "Operating Autonomy",
            description: "What stays decentralized at the operating level.",
            href: "/our-approach#operating-autonomy",
          },
        ],
      },
      {
        title: "Value Creation",
        items: [
          {
            icon: "trendingUp",
            title: "Capital Allocation",
            description: "Directing resources to the strongest fit.",
            href: "/our-approach#capital-allocation",
          },
          {
            icon: "share",
            title: "Shared Strategic Infrastructure",
            description: "Reusable technology and architecture.",
            href: "/our-approach#technology-leverage",
          },
          {
            icon: "compass",
            title: "Technology Leverage",
            description: "Wider Zoiko capabilities across the portfolio.",
            href: "/our-approach#technology-leverage",
          },
          {
            icon: "star",
            title: "Enterprise Value Creation",
            description: "Improving product, economics and defensibility.",
            href: "/our-approach#enterprise-value-creation",
          },
        ],
      },
      {
        title: "Admission & Growth",
        items: [
          {
            icon: "scale",
            title: "Portfolio Admission Criteria",
            description: "How a business qualifies for the portfolio.",
            href: "/portfolio#criteria",
          },
          {
            icon: "trendingUp",
            title: "Scaling Businesses",
            description: "How portfolio companies grow.",
            href: "/portfolio#building-and-scaling",
          },
          {
            icon: "share",
            title: "Strategic Partnerships",
            description: "Collaborations aligned with the mandate.",
            href: "/contact#strategic-partnerships",
          },
        ],
      },
    ],
    highlight: {
      eyebrow: "Operating Principle",
      title: "Centralise what creates leverage. Decentralise what creates speed.",
      description:
        "Capital discipline and governance stay central; customer intimacy and execution stay close to the business.",
      image: "/images/menu/our-approach.png",
      imageAlt: "Office workspace representing governance in practice",
      cta: { label: "Read the Operating Model", href: "/our-approach#operating-model" },
    },
    footnote: {
      text: "Curious how businesses qualify?",
      linkLabel: "View admission criteria",
      href: "/portfolio#criteria",
    },
  },

  Portfolio: {
    columns: [
      {
        title: "Portfolio",
        items: [
          {
            icon: "briefcase",
            title: "Portfolio Overview",
            description: "What Zoiko Markets owns today.",
            href: "/portfolio",
          },
          {
            icon: "star",
            title: "Talvrin — Flagship Business",
            description: "The confirmed flagship operating brand.",
            href: "/portfolio/talvrin",
          },
        ],
      },
      {
        title: "Ownership Model",
        items: [
          {
            icon: "target",
            title: "Portfolio Mandate",
            description: "The categories we build and own around.",
            href: "/portfolio#mandate",
          },
          {
            icon: "scale",
            title: "Portfolio Admission Criteria",
            description: "How a business qualifies for the portfolio.",
            href: "/portfolio#criteria",
          },
          {
            icon: "trendingUp",
            title: "Building & Scaling Businesses",
            description: "How portfolio companies grow with our support.",
            href: "/portfolio#building-and-scaling",
          },
        ],
      },
      {
        title: "Opportunities",
        items: [
          {
            icon: "share",
            title: "Strategic Partnerships",
            description: "Data, technology and distribution collaborations.",
            href: "/contact#strategic-partnerships",
          },
          {
            icon: "link",
            title: "Portfolio / Acquisition Opportunities",
            description: "Bring a business into the Zoiko Markets portfolio.",
            href: "/contact#portfolio-opportunities",
          },
        ],
      },
    ],
    highlight: {
      eyebrow: "Portfolio Highlight",
      title: "Talvrin — markets, made traceable.",
      description:
        "Evidence-linked public-markets intelligence designed to make market research more traceable and reproducible.",
      image: "/images/menu/portfolio.png",
      imageAlt: "Two analysts reviewing trading screens",
      cta: { label: "Discover Talvrin", href: "/portfolio/talvrin" },
      secondaryCta: { label: "Visit Talvrin.com", href: "#" },
    },
    footnote: {
      text: "Exploring a partnership?",
      linkLabel: "Talk to Zoiko Markets",
      href: "/contact",
    },
  },

  Insights: {
    columns: [
      {
        title: "Explore",
        items: [
          {
            icon: "document",
            title: "Insights Overview",
            description: "Start here for corporate perspectives.",
            href: "/insights",
          },
          {
            icon: "barChart",
            title: "Perspectives",
            description: "Views on markets, data and infrastructure.",
            href: "/insights#perspectives",
          },
          {
            icon: "document",
            title: "Reports & Publications",
            description: "Longer-form corporate publications.",
            href: "/insights#reports",
          },
        ],
      },
    ],
    footnote: {
      text: "Have a research question?",
      linkLabel: "Contact Zoiko Markets",
      href: "/contact",
    },
  },

  "Focus Areas": {
    columns: [
      {
        title: "Intelligence & Data",
        items: [
          {
            icon: "target",
            title: "Financial Markets",
            description: "The structural gap our businesses address.",
            href: "/our-approach#focus-areas",
          },
          {
            icon: "grid",
            title: "Market Intelligence",
            description: "Evidence-linked research and monitoring.",
            href: "/our-approach#market-intelligence",
          },
          {
            icon: "document",
            title: "Financial Data",
            description: "Data products, provenance and analytics.",
            href: "/our-approach#financial-data",
          },
          {
            icon: "target",
            title: "Research & Discovery",
            description: "Specialist research and screening services.",
            href: "/our-approach#research-and-discovery",
          },
          {
            icon: "layers",
            title: "Decision Infrastructure",
            description: "Systems that support market decisions.",
            href: "/our-approach#decision-infrastructure",
          },
        ],
      },
      {
        title: "Technology",
        items: [
          {
            icon: "compass",
            title: "Trading & Workflow Technology",
            description: "Tools that improve research and review.",
            href: "/our-approach#trading-and-workflow-technology",
          },
          {
            icon: "compass",
            title: "Market Technology",
            description: "Technology built for market participants.",
            href: "/our-approach#market-technology",
          },
          {
            icon: "share",
            title: "Market Connectivity",
            description: "Connecting users, systems and venues.",
            href: "/our-approach#market-connectivity",
          },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          {
            icon: "share",
            title: "Market Infrastructure",
            description: "The connective layer beneath markets.",
            href: "/our-approach#market-infrastructure",
          },
          {
            icon: "shield",
            title: "Transaction-Enablement Infrastructure",
            description: "Governed control and evidence layers.",
            href: "/our-approach#transaction-enablement",
          },
          {
            icon: "share",
            title: "Adjacent Market Services",
            description: "Selective services that strengthen the estate.",
            href: "/our-approach#adjacent-market-services",
          },
        ],
      },
    ],
    highlight: {
      eyebrow: "Focus Areas Highlight",
      title: "Where we build and own.",
      description:
        "A portfolio mandate across intelligence, data, technology and infrastructure — not a fixed brand list.",
      image: "/images/menu/focus-areas.png",
      imageAlt: "Two analysts pointing at market data on a large screen",
      cta: { label: "Explore Focus Areas", href: "/our-approach#focus-areas" },
    },
    footnote: {
      text: "Want the strategic detail?",
      linkLabel: "Read our approach",
      href: "/our-approach",
    },
  },

  Governance: {
    columns: [
      {
        title: "Governance",
        items: [
          {
            icon: "shield",
            title: "Governance Overview",
            description: "How oversight works across the portfolio.",
            href: "/governance",
          },
          {
            icon: "scale",
            title: "Risk & Oversight",
            description: "Standards for risk and major decisions.",
            href: "/governance#risk-and-oversight",
          },
          {
            icon: "lock",
            title: "Corporate & Regulatory Boundaries",
            description: "What Zoiko Markets is — and is not.",
            href: "/governance#regulatory-boundaries",
          },
        ],
      },
      {
        title: "Trust",
        items: [
          {
            icon: "compass",
            title: "Responsible Technology",
            description: "Governed use of technology and AI.",
            href: "/governance#responsible-technology",
          },
          {
            icon: "lock",
            title: "Privacy & Data Protection",
            description: "How data is handled and protected.",
            href: "/privacy",
          },
          {
            icon: "shield",
            title: "Security",
            description: "Security standards across the estate.",
            href: "/security",
          },
          {
            icon: "eye",
            title: "Accessibility",
            description: "Our commitment to accessible design.",
            href: "/accessibility",
          },
        ],
      },
      {
        title: "Policies",
        items: [
          {
            icon: "document",
            title: "Legal & Policies",
            description: "Terms, privacy and related notices.",
            href: "/terms",
          },
        ],
      },
    ],
    highlight: {
      eyebrow: "Governance Highlight",
      title: "Governance before scale.",
      description:
        "Activities, permissions or regulatory status belonging to a portfolio company are never attributed automatically to Zoiko Markets Inc.",
      image: "/images/menu/governance.png",
      imageAlt: "Looking up at city skyscrapers",
      cta: { label: "Governance Overview", href: "/governance" },
    },
    footnote: {
      text: "Need entity-specific detail?",
      linkLabel: "Contact Zoiko Markets",
      href: "/contact",
    },
  },
};
