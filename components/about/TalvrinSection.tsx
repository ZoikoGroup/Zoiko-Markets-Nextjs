import { Button, ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";

const STEPS = [
  { label: "Instrument", description: "Market instrument identified" },
  { label: "Source", description: "Linked to a primary source" },
  { label: "Change", description: "Change detected and logged", active: true },
  { label: "Monitor", description: "Monitored continuously" },
  { label: "Record", description: "Held as a traceable record" },
];

const BELONGS_CHAIN = ["Evidence", "Monitoring", "Market Intelligence", "Workflow", "Data Infrastructure"];

export function TalvrinSection() {
  return (
    <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
              Flagship Portfolio Company
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Talvrin — markets, made traceable.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Talvrin is an evidence-linked public-markets intelligence and monitoring platform
              designed to help users follow market instruments, changes and source-backed
              information with stronger traceability and reproducibility. Its role in the
              portfolio demonstrates the Zoiko Markets thesis: build specialist market technology
              around evidence, disciplined infrastructure and clearly governed product boundaries.
            </p>

            <div className="mt-6 border-l-2 border-brand-gold bg-white/5 p-4">
              <p className="text-sm leading-relaxed text-white/70">
                Talvrin provides market intelligence and monitoring tools. It does not provide
                investment advice.
              </p>
            </div>

            <Button href="/portfolio/talvrin" tone="gold" variant="outline" className="mt-6">
              Explore Talvrin
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ul className="relative space-y-3 border-l border-white/15 pl-6">
              {STEPS.map((step) => (
                <li
                  key={step.label}
                  className={cn(
                    "relative flex flex-col gap-1 border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                    step.active ? "border-brand-gold" : "border-white/15"
                  )}
                >
                  <span className="absolute -left-[27px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-gold" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    {step.label}
                  </span>
                  <span className="text-sm text-white/80">{step.description}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="mt-16 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Why Talvrin Belongs Here
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {BELONGS_CHAIN.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/80">
                  {item}
                </span>
                {index < BELONGS_CHAIN.length - 1 ? (
                  <span aria-hidden className="text-white/30">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-white/40">
            Talvrin is presented as the confirmed flagship. Future brands will not appear until
            their status and placement under Zoiko Markets are formally approved.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
