import { ScrollReveal } from "@/components/shared";

const DIFFERENTIATORS = [
  {
    label: "Active strategic ownership",
    description:
      "Zoiko Markets does not merely hold shares. It sets portfolio logic, allocates capital, governs risk, provides shared capabilities and drives enterprise-value creation.",
  },
  {
    label: "Focused markets mandate",
    description:
      "New businesses enter the portfolio only when they strengthen a coherent markets, data, workflow or infrastructure position.",
  },
  {
    label: "Evidence-led technology",
    description:
      "Products are designed around source quality, provenance, auditability and repeatability where the use case demands it.",
  },
  {
    label: "Shared leverage, operating speed",
    description: "Common strategic capabilities are shared while operating teams retain category focus.",
  },
  {
    label: "Portfolio-level technology advantage",
    description:
      "Operating businesses can benefit from wider Zoiko capabilities in cloud, AI, cybersecurity, identity, developer infrastructure and enterprise software where strategically appropriate.",
  },
  {
    label: "Governance before scale",
    description:
      "Regulatory fit, risk, ownership logic and economic quality are portfolio design inputs — not cleanup activities after launch.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            What Makes Us Different
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            Not another fintech brand
          </h2>

          <div className="mt-10 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
            {DIFFERENTIATORS.map((item, index) => (
              <div
                key={item.label}
                className={
                  index % 2 === 1
                    ? "grid gap-2 bg-surface-sage px-4 py-5 sm:grid-cols-2 sm:gap-8"
                    : "grid gap-2 px-4 py-5 sm:grid-cols-2 sm:gap-8"
                }
              >
                <p className="text-base font-semibold text-brand-dark">{item.label}</p>
                <p className="text-sm leading-relaxed text-brand-dark/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-brand-plum p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Signature Differentiator
            </p>
            <p className="mt-3 text-lg font-medium leading-relaxed text-white">
              Zoiko Markets is not &ldquo;another fintech company.&rdquo; It is a focused owner
              and builder of specialist market businesses, using shared strategic leverage to
              create stronger operating companies and more defensible market infrastructure.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
