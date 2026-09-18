import { AboutSection, DefinitionRow } from "./shared";

const PROBLEMS = [
  {
    problem: "Market information is fragmented",
    response:
      "Build products that normalize, organize, connect and monitor high-value information rather than adding another disconnected interface.",
  },
  {
    problem: "Evidence is hard to trace or reproduce",
    response:
      "Prioritize provenance, source linkage, versioning, auditability and reproducibility where those capabilities materially improve trust.",
  },
  {
    problem: "Research and workflows are duplicated",
    response:
      "Build repeatable workflows and shared infrastructure so teams spend less time reconstructing the same market context.",
  },
  {
    problem: "Systems do not connect cleanly",
    response:
      "Use integration, APIs and shared technology capabilities to reduce friction between data, applications and enterprise processes.",
  },
  {
    problem: "AI can obscure source quality",
    response:
      "Treat generative models as governed assistance rather than an unquestioned system of record; preserve evidence and human accountability.",
  },
  {
    problem: "Specialist businesses struggle to scale alone",
    response:
      "Provide portfolio-level capital, governance, strategic infrastructure and Group capabilities while preserving operating focus.",
  },
];

export function ProblemsWeSolveSection() {
  return (
    <AboutSection
      id="problems-we-solve"
      eyebrow="Problems We Solve"
      title="Practical friction, addressed directly"
    >
      <div className="divide-y divide-brand-dark/10 border-t border-brand-dark/10">
        {PROBLEMS.map((row) => (
          <DefinitionRow
            key={row.problem}
            eyebrowLabel="Problem"
            label={row.problem}
            eyebrowDescription="Portfolio Response"
            description={row.response}
          />
        ))}
      </div>
    </AboutSection>
  );
}
