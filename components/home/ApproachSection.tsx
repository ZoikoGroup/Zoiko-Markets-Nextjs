import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared";

const APPROACH_STEPS = [
  { number: "01", label: "Portfolio stewardship" },
  { number: "02", label: "Capital allocation" },
  { number: "03", label: "Governance and risk oversight" },
  { number: "04", label: "Shared strategic infrastructure" },
  { number: "05", label: "Enterprise value creation" },
];

export function ApproachSection() {
  return (
    <section className="bg-surface-sage px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            Active ownership with a long-term mandate
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-brand-dark/60">
            Centralise what creates leverage. Decentralise what creates speed.
          </p>

          <div className="mt-10 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
            {APPROACH_STEPS.map((step) => (
              <div key={step.number} className="flex items-center gap-4 py-4">
                <span className="text-sm font-semibold text-brand-gold">{step.number}</span>
                <span className="text-sm font-medium text-brand-dark">{step.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
            Accountability at the holding company level
          </p>
          <Link
            href="/governance"
            className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark"
          >
            Our approach to governance
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="group relative aspect-[444/520] w-full overflow-hidden">
            <Image
              src="/images/home/approach.webp"
              alt="Office workspace representing governance in practice"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-xs font-medium text-brand-dark">
              Governance, by design
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
