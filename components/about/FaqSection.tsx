"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What is Zoiko Markets?",
    answer:
      "Zoiko Markets Inc. is the specialist markets, financial-technology, market-intelligence, data and market-infrastructure holding company within Zoiko Financial Group Inc. It builds, owns, governs and scales markets-focused operating businesses.",
  },
  {
    question: "What does Zoiko Markets build?",
    answer:
      "A portfolio of specialist businesses across market intelligence, financial data, trading and workflow technology, market connectivity, transaction-enablement infrastructure, research and discovery services, and adjacent market services.",
  },
  {
    question: "Who does Zoiko Markets serve?",
    answer:
      "Financial institutions, public-market professionals, research and investment teams, data and technology teams, enterprises with market exposure, founders and specialist operators, and strategic partners.",
  },
  {
    question: "What problems is Zoiko Markets trying to solve?",
    answer:
      "Fragmented market information, hard-to-trace evidence, duplicated research and workflows, systems that do not connect cleanly, AI that can obscure source quality, and specialist businesses that struggle to scale alone.",
  },
  {
    question: "What makes Zoiko Markets different from a typical fintech company?",
    answer:
      "Zoiko Markets is not another fintech brand. It is a focused owner and builder of specialist market businesses, combining active strategic ownership, evidence-led technology, shared strategic leverage and governance before scale.",
  },
  {
    question: "What is Talvrin?",
    answer:
      "Talvrin is Zoiko Markets' confirmed flagship portfolio company — an evidence-linked public-markets intelligence and monitoring platform.",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer: "No. Talvrin provides market intelligence and monitoring tools. It does not provide investment advice.",
  },
  {
    question: "Does Zoiko Markets trade securities or manage money for clients?",
    answer:
      "No. Zoiko Markets is a specialist holding company and strategic owner of operating businesses. It is not a broker-dealer, investment adviser, asset manager, exchange, trading venue, bank, custodian or execution service.",
  },
  {
    question: "How does Zoiko Markets create value?",
    answer:
      "Through portfolio stewardship, capital allocation, governance and risk oversight, shared strategic infrastructure, and enterprise-value creation across its operating businesses.",
  },
  {
    question: "How does Zoiko Markets decide what belongs in the portfolio?",
    answer:
      "Against admission criteria including strategic fit, regulatory fit, scalable economics, defensible IP or data advantage, technology leverage, portfolio synergy, risk-adjusted return and ownership clarity.",
  },
  {
    question: "How is Zoiko Markets related to Zoiko Financial Group?",
    answer:
      "Zoiko Markets Inc. is the specialist markets holding company within Zoiko Financial Group Inc., its parent company.",
  },
  {
    question: "How can organizations partner with Zoiko Markets?",
    answer:
      "Strategic partners, founders and specialist operators can reach out through our contact page to discuss data, infrastructure, distribution, research or technology partnerships.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            About Zoiko Markets
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 divide-y divide-brand-dark/10 border-t border-brand-dark/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-5">
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
