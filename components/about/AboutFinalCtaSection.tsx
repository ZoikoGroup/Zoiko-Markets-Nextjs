import { Button } from "@/components/shared";
import { AboutSection } from "./shared";

export function AboutFinalCtaSection() {
  return (
    <AboutSection
      id="final-cta"
      eyebrow="Get in touch"
      title="Interested in partnering with Zoiko Markets?"
      tone="dark"
    >
      <Button href="/contact" tone="gold" variant="outline">
        Contact us
      </Button>
    </AboutSection>
  );
}
