import { AboutSection } from "./shared";

const REGIONS = ["North America", "Europe", "Asia Pacific"];

export function GeographicSection() {
  return (
    <AboutSection id="geographic-footprint" eyebrow="Geographic footprint" title="Where we operate">
      <div className="flex flex-wrap gap-3">
        {REGIONS.map((region) => (
          <span
            key={region}
            className="border border-brand-dark/15 px-4 py-2 text-sm font-medium text-brand-dark"
          >
            {region}
          </span>
        ))}
      </div>
    </AboutSection>
  );
}
