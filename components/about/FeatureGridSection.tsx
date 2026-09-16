import { AboutSection } from "./shared";

const FEATURES = [
  { title: "Long-term ownership", body: "No fixed exit timeline forcing short-term decisions." },
  { title: "Operating expertise", body: "Hands-on support from people who have run similar businesses." },
  { title: "Disciplined governance", body: "Clear, consistent standards across every portfolio company." },
  { title: "Aligned incentives", body: "Structures that reward durable, compounding performance." },
];

export function FeatureGridSection() {
  return (
    <AboutSection id="what-sets-us-apart" eyebrow="What sets us apart" title="How we support our companies">
      <div className="grid gap-6 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="border border-brand-dark/15 p-6">
            <h3 className="text-base font-semibold text-brand-dark">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{feature.body}</p>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}
