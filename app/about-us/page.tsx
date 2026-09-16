import type { Metadata } from "next";
import {
  HeroSection,
  MissionSection,
  ProblemSection,
  ScopeSection,
  BusinessModelSection,
  WhoWeServeSection,
  FeatureGridSection,
  TrustAssetSection,
  TrustStandardSection,
  GeographicSection,
  InfrastructureSection,
  GovernanceSection,
  CorporateInfoSection,
  AboutFaqSection,
  AboutFinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Zoiko Markets",
  description: "Specialist ownership across markets, data and infrastructure.",
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProblemSection />
      <ScopeSection />
      <BusinessModelSection />
      <WhoWeServeSection />
      <FeatureGridSection />
      <TrustAssetSection />
      <TrustStandardSection />
      <GeographicSection />
      <InfrastructureSection />
      <GovernanceSection />
      <CorporateInfoSection />
      <AboutFaqSection />
      <AboutFinalCtaSection />
    </>
  );
}
