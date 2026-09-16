import { AboutSection } from "./shared";

const AUDIENCES = [
  { title: "Founders", body: "Considering a long-term home for the company they built." },
  { title: "Management teams", body: "Looking for an owner that backs multi-year plans." },
  { title: "Partners", body: "Working with our portfolio companies day to day." },
];

export function WhoWeServeSection() {
  return (
    <AboutSection id="who-we-serve" eyebrow="Who we serve" title="Built for the people we work with">
      <div className="grid gap-8 sm:grid-cols-3">
        {AUDIENCES.map((audience) => (
          <div key={audience.title}>
            <h3 className="text-lg font-semibold text-brand-dark">{audience.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{audience.body}</p>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}
