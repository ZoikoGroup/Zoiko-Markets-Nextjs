import { ScrollReveal } from "@/components/shared";

const CRITERIA = [
  {
    number: "01",
    title: "Strategic fit",
    description: "Does this strengthen the markets, data, workflow or infrastructure mandate?",
  },
  {
    number: "02",
    title: "Regulatory fit",
    description: "Can the business operate within a clear, governable legal and regulatory posture?",
  },
  {
    number: "03",
    title: "Scalable economics",
    description: "Is there a credible path to attractive, repeatable and capital-efficient economics?",
  },
  {
    number: "04",
    title: "Defensible IP / data advantage",
    description:
      "Can the company gain real advantage from shared technology, proprietary data, workflow position or know-how?",
  },
  {
    number: "05",
    title: "Technology leverage",
    description:
      "Can the company gain real advantage from shared Zoiko technology, or create durable leverage for the wider portfolio?",
  },
  {
    number: "06",
    title: "Portfolio synergy",
    description:
      "Does the business improve distribution, data, infrastructure, customer access or strategic optionality across the estate?",
  },
  {
    number: "07",
    title: "Risk-adjusted return",
    description: "Is the potential enterprise value proportionate to execution, regulatory and capital risk?",
  },
  {
    number: "08",
    title: "Ownership clarity",
    description: "Is there a clear reason Zoiko Markets should own, build, partner with or acquire the business?",
  },
];

const HIERARCHY = ["Zoiko Group", "Zoiko Financial Group Inc.", "Zoiko Markets Inc.", "Talvrin"];

export function GovernanceSection() {
  return (
    <section className="bg-surface-sage px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Governance
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            Portfolio admission criteria
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CRITERIA.map((item, index) => (
            <ScrollReveal
              key={item.number}
              delay={index * 0.05}
              className="border border-brand-dark/10 bg-white p-6"
            >
              <p className="text-sm font-semibold text-brand-gold">{item.number}</p>
              <h3 className="mt-3 text-base font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ScrollReveal className="bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
              Corporate Hierarchy
            </p>
            <ul className="mt-4 space-y-2">
              {HIERARCHY.map((item, index) => (
                <li
                  key={item}
                  style={{ paddingLeft: `${index * 1.25}rem` }}
                  className="flex items-center gap-2 text-sm text-brand-dark"
                >
                  {index > 0 ? <span className="text-brand-dark/30">↳</span> : null}
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-brand-dark/40">
              Zoiko Markets is the specialist markets holding company. It is not a substitute name
              for Zoiko Financial Group Inc., and Talvrin is not the holding company.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
              What Zoiko Markets Is — And Is Not
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-dark/70">
              <span className="font-semibold text-brand-dark">IS:</span> a specialist holding
              company and strategic owner of markets-focused operating businesses.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">
              <span className="font-semibold text-brand-dark">IS NOT:</span> a broker-dealer,
              investment adviser, asset manager, exchange, trading venue, bank, custodian or
              execution service. Any regulated activity must be carried out by an appropriately
              authorized entity and described only where legally approved.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
