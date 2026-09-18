import { ScrollReveal } from "@/components/shared";
import { DefinitionRow } from "./shared";

const FUNCTIONS = [
  {
    label: "Portfolio stewardship",
    description:
      "Set the mandate, sequence priorities, review performance and decide where businesses should scale, partner, acquire, hold or exit.",
  },
  {
    label: "Capital allocation",
    description:
      "Direct resources toward businesses and capabilities with the strongest strategic fit, risk-adjusted economics and evidence of customer value.",
  },
  {
    label: "Governance & risk oversight",
    description:
      "Create common standards for legal, regulatory, security, data, model risk, product claims and major strategic decisions.",
  },
  {
    label: "Shared strategic infrastructure",
    description:
      "Provide access to reusable technology, architecture, data, security, design, commercial and operating capabilities where sharing creates real leverage.",
  },
  {
    label: "Enterprise-value creation",
    description:
      "Help operating businesses improve product quality, distribution, economics, defensibility, partnerships and long-term strategic options.",
  },
];

export function ApproachSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            How Zoiko Markets creates value
          </h2>

          <div className="mt-10 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
            {FUNCTIONS.map((row, index) => (
              <div key={row.label} className={index % 2 === 1 ? "bg-surface-sage" : undefined}>
                <div className="px-4">
                  <DefinitionRow
                    eyebrowLabel="Function"
                    label={row.label}
                    eyebrowDescription="In Practice"
                    description={row.description}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-surface-sage p-8 text-center">
            <p className="text-xl font-semibold text-brand-dark">
              Centralize what creates leverage. Decentralize what creates speed.
            </p>
            <div className="mt-8 grid gap-8 text-left sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  Centralize
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
                  Capital discipline, governance, shared platforms, strategic data, security,
                  architecture and portfolio standards.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  Decentralize
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
                  Customer intimacy, category expertise, product decisions, operating execution
                  and market-specific speed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-brand-gold/10 p-6">
            <p className="text-xs leading-relaxed text-brand-dark/60">
              Zoiko Markets creates value through ownership in operating businesses. Revenue
              models are determined at the operating-company level and may include recurring
              software or data subscriptions, enterprise contracts, licensing, platform services,
              integrations, infrastructure fees or other approved models.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
