import { AboutSection } from "./shared";

const STANDARDS = [
  "Consistent reporting across every portfolio company",
  "Independent oversight of governance practices",
  "Clear escalation paths for risk and compliance",
];

export function TrustStandardSection() {
  return (
    <AboutSection id="trust-standard" eyebrow="Our trust standard" title="A single bar, applied everywhere" tone="dark">
      <ul className="space-y-3">
        {STANDARDS.map((item) => (
          <li key={item} className="border-l-2 border-brand-gold pl-4 text-sm text-white/70">
            {item}
          </li>
        ))}
      </ul>
    </AboutSection>
  );
}
