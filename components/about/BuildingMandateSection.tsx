import Image from "next/image";
import { ScrollReveal } from "@/components/shared";

const CATEGORIES = [
  {
    title: "Market intelligence",
    description:
      "Evidence-linked research, monitoring, discovery and decision-support systems for public markets and market-facing organizations.",
  },
  {
    title: "Financial data",
    description:
      "Data products, normalization, provenance, analytics and information infrastructure that improve the quality and usability of market information.",
  },
  {
    title: "Trading & workflow technology",
    description:
      "Tools that improve research, review, collaboration and market workflows without blurring into unapproved regulated activities.",
  },
  {
    title: "Market connectivity",
    description:
      "Technology that connects users, systems, data providers, venues, counterparties or enterprise workflows where a defensible infrastructure role exists.",
  },
  {
    title: "Transaction-enablement infrastructure",
    description:
      "Control, orchestration, integration and evidence layers around financial workflows where regulation and product boundaries are explicitly governed.",
  },
  {
    title: "Research & discovery services",
    description:
      "Specialist research, screening, monitoring and knowledge products that help users understand markets and opportunities more efficiently.",
  },
];

export function BuildingMandateSection() {
  return (
    <section className="bg-background">
      <ScrollReveal
        as="div"
        className="relative flex min-h-[220px] items-end overflow-hidden bg-brand-dark px-4 py-10 sm:px-6 lg:px-8"
      >
        <Image
          src="/images/about/building-mandate-banner.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            What We Are Building
          </p>
          <h2 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">
            A portfolio mandate, not a brand list
          </h2>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-brand-dark/10 sm:grid-cols-3">
        {CATEGORIES.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 0.06} className="bg-background p-8">
            <h3 className="text-base font-semibold text-brand-dark">{category.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">
              {category.description}
            </p>
          </ScrollReveal>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xs leading-relaxed text-brand-dark/40">
          Categories describe the strategic mandate — they do not imply that every category
          already contains a launched operating company. Additional mandate areas, including
          adjacent market services, are added only after formal portfolio approval.
        </p>
      </div>
    </section>
  );
}
