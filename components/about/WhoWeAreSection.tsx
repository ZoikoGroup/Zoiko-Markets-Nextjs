import { ScrollReveal } from "@/components/shared";

const HIERARCHY = [
  { label: "Zoiko Group", caption: undefined, indent: 0, bold: false },
  { label: "Zoiko Financial Group Inc.", caption: "Parent company", indent: 1, bold: false },
  { label: "Zoiko Markets Inc.", caption: "Specialist markets holding company", indent: 2, bold: true },
  { label: "Talvrin", caption: "Confirmed flagship", indent: 3, bold: true },
];

export function WhoWeAreSection() {
  return (
    <section className="bg-surface-sage px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            An active strategic owner
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70">
            Zoiko Markets is an active strategic owner of markets-focused businesses. We sit
            within Zoiko Financial Group Inc. and concentrate on businesses where technology,
            data, evidence, market structure and financial workflows can create durable
            enterprise value.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70">
            Our role is not to place one corporate layer over unrelated businesses. It is to
            build a coherent portfolio, allocate capital deliberately, provide common governance
            and strategic infrastructure, and help each operating business scale with the focus
            its market requires.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
            Entity Hierarchy
          </p>
          <ul className="mt-4 divide-y divide-brand-dark/10">
            {HIERARCHY.map((row) => (
              <li
                key={row.label}
                style={{ paddingLeft: `${row.indent * 1.25}rem` }}
                className="flex items-center justify-between gap-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      row.bold ? "bg-brand-gold" : "bg-brand-dark/30"
                    }`}
                  />
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
                {row.caption ? (
                  <span className="shrink-0 text-xs text-brand-dark/40">{row.caption}</span>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-brand-dark/40">
            Future operating businesses appear only after formal corporate / portfolio approval.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
