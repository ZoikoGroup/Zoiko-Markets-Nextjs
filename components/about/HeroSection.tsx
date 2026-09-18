import Image from "next/image";
import { Button, ScrollReveal } from "@/components/shared";

const STEPS = [
  { label: "Data", description: "Structured market data" },
  { label: "Evidence", description: "Source-linked traceability" },
  { label: "Workflow", description: "Research & operations" },
  { label: "Connectivity", description: "Systems & participants" },
  { label: "Infrastructure", description: "Transaction enablement" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            About Zoiko Markets
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
            Better markets need better infrastructure.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-dark/60">
            Zoiko Markets Inc. is the specialist markets, financial-technology, market-intelligence,
            data and market-infrastructure holding company within Zoiko Financial Group Inc. We
            build, own, govern and scale businesses designed to make financial markets more
            intelligible, connected and operationally capable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/portfolio/talvrin" tone="plum" variant="solid">
              Explore Talvrin
            </Button>
            <Button href="/our-approach" tone="dark" variant="outline">
              Our Approach
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative aspect-[447/560] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about/hero.webp"
              alt="Analyst reviewing live market data on trading floor screens"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 flex items-center px-7">
              <ul>
                {STEPS.map((step, index) => (
                  <li key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                      {index < STEPS.length - 1 && (
                        <span aria-hidden className="w-px flex-1 bg-white/25" />
                      )}
                    </div>
                    <div className={index < STEPS.length - 1 ? "pb-8" : undefined}>
                      <p className="text-sm font-semibold text-white">{step.label}</p>
                      <p className="mt-0.5 text-xs text-white/60">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
