import Link from "next/link";
import { AboutSection } from "./shared";

export function AboutFinalCtaSection() {
  return (
    <AboutSection
      id="final-cta"
      eyebrow="Get in touch"
      title="Interested in partnering with Zoiko Markets?"
      tone="dark"
    >
      <Link
        href="/contact"
        className="inline-flex items-center border border-brand-gold px-6 py-3 text-sm font-medium text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-dark"
      >
        Contact us
      </Link>
    </AboutSection>
  );
}
