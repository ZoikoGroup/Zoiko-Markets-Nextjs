import { AboutSection } from "./shared";

const FAQS = [
  {
    question: "Does Zoiko Markets ever sell its portfolio companies?",
    answer: "We hold for the long term and are not structured around a fixed exit timeline.",
  },
  {
    question: "How involved is Zoiko Markets in day-to-day operations?",
    answer: "Management teams keep operating control; we provide support and oversight, not daily direction.",
  },
  {
    question: "What kinds of companies does Zoiko Markets acquire?",
    answer: "Specialist businesses across financial markets, data and infrastructure.",
  },
];

export function AboutFaqSection() {
  return (
    <AboutSection id="faq" eyebrow="FAQ" title="Common questions">
      <div className="divide-y divide-brand-dark/10">
        {FAQS.map((faq) => (
          <div key={faq.question} className="py-6 first:pt-0 last:pb-0">
            <h3 className="text-base font-semibold text-brand-dark">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{faq.answer}</p>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}
