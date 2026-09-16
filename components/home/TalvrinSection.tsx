import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";

const TAGS = ["UK Gilts", "US Treasuries", "Product concept"];

const STEPS = [
  { label: "Source", description: "Primary source document" },
  { label: "Data", description: "Structured data extraction" },
  { label: "Calculation", description: "Traceable calculation layer", active: true },
  { label: "Insight", description: "Market insight, source-linked" },
  { label: "Change", description: "Monitored for change over time" },
];

export function TalvrinSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-40 text-white">
      <Image
        src="/images/home/talvrin-bg.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Our Portfolio · Flagship Brand
          </p>
          <p className="mt-4 text-sm font-medium text-white/60">
            Talvrin — Public Markets Intelligence
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Markets, made traceable.</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Talvrin is being built around source-linked evidence, traceable calculations and
            change monitoring — starting with UK gilts and US Treasuries.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/portfolio/talvrin"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold"
          >
            Explore Talvrin
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-3">
            {STEPS.map((step) => (
              <div
                key={step.label}
                className={cn(
                  "flex flex-col gap-1 border px-5 py-4 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                  step.active ? "border-brand-gold" : "border-white/15"
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {step.label}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {step.description}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
