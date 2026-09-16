import { AboutSection } from "./shared";

const DETAILS = [
  { label: "Legal name", value: "Zoiko Markets Inc." },
  { label: "Parent company", value: "Zoiko Financial Group Inc." },
];

export function CorporateInfoSection() {
  return (
    <AboutSection id="corporate-information" eyebrow="Corporate information" title="Zoiko Markets Inc.">
      <dl className="grid gap-6 sm:grid-cols-2">
        {DETAILS.map((detail) => (
          <div key={detail.label}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">
              {detail.label}
            </dt>
            <dd className="mt-1 text-base text-brand-dark">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </AboutSection>
  );
}
