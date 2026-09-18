import { AboutSection, DefinitionRow } from "./shared";

const AUDIENCES = [
  {
    label: "Financial institutions",
    description:
      "Governed market intelligence, data, workflow and infrastructure capabilities that integrate with institutional operating requirements.",
  },
  {
    label: "Public-market professionals",
    description:
      "Faster access to evidence, monitoring, source-linked research and repeatable analytical workflows.",
  },
  {
    label: "Research and investment teams",
    description:
      "Better traceability, reproducibility, collaboration and monitoring across information-intensive processes.",
  },
  {
    label: "Data / technology teams",
    description: "APIs, structured data, integrations and infrastructure designed to reduce custom system friction.",
  },
  {
    label: "Enterprises with market exposure",
    description:
      "Better market monitoring, decision-support and operational visibility where market or financial information matters to the business.",
  },
  {
    label: "Founders / specialist operators",
    description:
      "A focused strategic owner with capital allocation, governance, technology leverage and a clear markets mandate.",
  },
  {
    label: "Strategic partners",
    description: "A portfolio platform for data, infrastructure, distribution, research and technology partnerships.",
  },
];

export function WhoWeBuildForSection() {
  return (
    <AboutSection
      id="who-we-build-for"
      eyebrow="Who We Build For"
      title="Mapped to the markets ecosystem"
      tone="sage"
    >
      <div className="divide-y divide-brand-dark/10 border-t border-brand-dark/10">
        {AUDIENCES.map((audience) => (
          <DefinitionRow key={audience.label} label={audience.label} description={audience.description} />
        ))}
      </div>
    </AboutSection>
  );
}
