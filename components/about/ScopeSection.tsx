import { AboutSection } from "./shared";

const SCOPE_ITEMS = [
  "Financial markets infrastructure",
  "Data and information services",
  "Operating technology platforms",
];

export function ScopeSection() {
  return (
    <AboutSection id="scope" eyebrow="Scope" title="Where we focus">
      <ul className="grid gap-4 sm:grid-cols-3">
        {SCOPE_ITEMS.map((item) => (
          <li
            key={item}
            className="border border-brand-dark/15 px-5 py-4 text-sm font-medium text-brand-dark"
          >
            {item}
          </li>
        ))}
      </ul>
    </AboutSection>
  );
}
