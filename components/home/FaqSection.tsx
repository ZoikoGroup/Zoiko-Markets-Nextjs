"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What is Zoiko Markets Inc.?",
    answer:
      "Zoiko Markets Inc. is a specialist markets-focused holding company. It builds, owns, governs and scales businesses across market intelligence, financial data, financial technology, trading and workflow technology, market connectivity and market infrastructure.",
  },
  {
    question: "How is Zoiko Markets related to Zoiko Financial Group?",
    answer:
      "Zoiko Markets Inc. is a specialist markets holding company within Zoiko Financial Group Inc., its parent company.",
  },
  {
    question: "Which brands sit within Zoiko Markets?",
    answer:
      "Our portfolio includes Talvrin, a public markets intelligence brand, alongside other markets-focused businesses as they are built and acquired.",
  },
  {
    question: "What is Talvrin being developed to do?",
    answer:
      "Talvrin is being built around source-linked evidence, traceable calculations and change monitoring, starting with UK gilts and US Treasuries.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            Questions about Zoiko Markets
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-dark">{faq.question}</span>
                  <span aria-hidden className="text-xl font-light text-brand-dark/50">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <p className="min-h-0 overflow-hidden text-sm leading-relaxed text-brand-dark/60">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
