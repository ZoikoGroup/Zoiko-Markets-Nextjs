import Link from "next/link";
import { ScrollReveal } from "@/components/shared";

const OWNERSHIP = [
  { label: "Zoiko Financial Group Inc.", caption: "Parent company", indent: 0, bold: false },
  {
    label: "Zoiko Markets Inc.",
    caption: "Specialist markets holding company",
    indent: 1,
    bold: true,
  },
  { label: "Markets-focused businesses", caption: "Including Talvrin", indent: 2, bold: true },
];

export function IntroSection() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            A specialist owner in financial markets
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base leading-relaxed text-brand-dark/70">
            Zoiko Markets Inc. is a markets-focused holding company. It sits within Zoiko
            Financial Group Inc., with a mandate spanning financial technology, market
            intelligence, financial data, trading and workflow technology, and market
            infrastructure.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70">
            We provide portfolio stewardship and capital allocation to the businesses we own, with
            a governance model built for long-term enterprise value creation rather than
            short-term returns.
          </p>

          <Link
            href="/about-us"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark"
          >
            About Zoiko Markets
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <div className="mt-10 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
            {OWNERSHIP.map((row) => (
              <div
                key={row.label}
                style={{ paddingLeft: `${row.indent * 1.5}rem` }}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  <span
                    className={
                      row.bold
                        ? "text-sm font-semibold text-brand-dark"
                        : "text-sm text-brand-dark/80"
                    }
                  >
                    {row.label}
                  </span>
                </div>
                <span className="shrink-0 text-xs text-brand-dark/40">{row.caption}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
