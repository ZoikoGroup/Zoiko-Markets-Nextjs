import { ScrollReveal } from "@/components/shared";

const VALUES = [
  {
    label: "Evidence before assertion",
    description:
      "Important outputs should be traceable to reliable sources, data and decision records where the product context requires it.",
  },
  {
    label: "Governance by design",
    description:
      "Legal, regulatory, privacy, security and model-risk considerations are embedded into product and portfolio decisions early.",
  },
  {
    label: "Focus over sprawl",
    description:
      "A business belongs in Zoiko Markets only when it strengthens the markets mandate and has credible ownership logic.",
  },
  {
    label: "Leverage without bureaucracy",
    description: "Shared capabilities should accelerate operating companies, not slow them down.",
  },
  {
    label: "Long-term value creation",
    description: "Build durable businesses with defensible technology, data, economics and customer relevance.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark/70">
            We believe the quality of markets depends not only on the information available, but
            on the systems that organize it, connect it, preserve it and make it operationally
            useful. Zoiko Markets exists to build those systems through focused operating
            businesses.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value, index) => (
            <ScrollReveal key={value.label} delay={index * 0.06}>
              <h3 className="text-base font-semibold text-brand-dark">{value.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">{value.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
