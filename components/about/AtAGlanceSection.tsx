import Link from "next/link";
import { ScrollReveal } from "@/components/shared";

const QUESTIONS = [
  {
    number: "01",
    question: "What are we building?",
    answer:
      "A portfolio of specialist businesses across market intelligence, financial data, trading and workflow technology, market connectivity, transaction-enablement infrastructure, research and discovery services, and adjacent market services.",
  },
  {
    number: "02",
    question: "Who will use it?",
    answer:
      "Financial institutions, public-market professionals, research teams, data and technology teams, enterprises, market participants, partners and organizations that need better intelligence, evidence, workflows or infrastructure.",
  },
  {
    number: "03",
    question: "What problems will it solve?",
    answer:
      "Fragmented information, weak evidence trails, inefficient market workflows, disconnected systems, hard-to-reproduce research, operational friction and gaps between market data, decisions and execution infrastructure.",
  },
  {
    number: "04",
    question: "What makes it different?",
    answer:
      "Zoiko Markets combines active ownership, disciplined capital allocation, shared technology leverage, evidence-led product design, governance and a focused markets mandate — not a loose collection of financial brands.",
  },
];

const VALUE_QUESTION = {
  number: "05",
  question: "How do we create value?",
  answer:
    "We centralize what creates leverage — capital, governance, shared infrastructure and strategic capabilities — while giving operating businesses the focus and speed to build category-specific products, customers and economics.",
};

export function AtAGlanceSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            At A Glance
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            Four questions, answered immediately
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {QUESTIONS.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.08}>
              <p className="text-sm font-semibold text-brand-gold">{item.number}</p>
              <h3 className="mt-3 text-lg font-semibold text-brand-dark">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">{item.answer}</p>
              <Link
                href={`#${item.question}`}
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-dark"
              >
                Learn more
                <span aria-hidden className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          delay={0.3}
          className="mt-10 grid gap-4 bg-surface-sage p-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10"
        >
          <div className="flex items-baseline gap-3 sm:flex-col sm:items-start">
            <span className="text-sm font-semibold text-brand-gold">{VALUE_QUESTION.number}</span>
            <h3 className="text-xl font-semibold text-brand-dark">{VALUE_QUESTION.question}</h3>
          </div>
          <p className="text-sm leading-relaxed text-brand-dark/70">{VALUE_QUESTION.answer}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
