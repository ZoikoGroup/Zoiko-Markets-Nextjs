import { ScrollReveal } from "@/components/shared";
import { MENU_ICONS } from "@/components/layout/menuIcons";

const GAPS = [
  { label: "Fragmentation", icon: MENU_ICONS.grid },
  { label: "Traceability", icon: MENU_ICONS.document },
  { label: "Workflow friction", icon: MENU_ICONS.share },
  { label: "Connectivity", icon: MENU_ICONS.link },
  { label: "Governance", icon: MENU_ICONS.shield },
];

export function WhyWeExistSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Why We Exist
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            A structural gap in modern markets
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70">
            Modern financial markets generate enormous volumes of data, analysis, signals and
            workflow activity, but more information does not automatically produce better
            understanding.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70">
            Market participants still face fragmented sources, inconsistent evidence,
            disconnected tools, duplicated workflows and infrastructure that can be difficult to
            integrate or govern. Zoiko Markets exists to build and scale businesses that reduce
            that friction — connecting market information to evidence, workflow and
            infrastructure in ways that are more useful, traceable and operationally credible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="divide-y divide-brand-dark/10 border-t border-brand-dark/10">
          {GAPS.map((gap) => (
            <div key={gap.label} className="flex items-center gap-4 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-dark/5 text-brand-dark/70">
                {gap.icon}
              </span>
              <span className="text-sm font-medium text-brand-dark">{gap.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
