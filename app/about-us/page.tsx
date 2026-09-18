import type { Metadata } from "next";
import {
  HeroSection,
  InfrastructureBannerSection,
  AtAGlanceSection,
  WhoWeAreSection,
  WhyWeExistSection,
  BuildingMandateSection,
  WhoWeBuildForSection,
  TeamBannerSection,
  ProblemsWeSolveSection,
  DifferentiatorsSection,
  ApproachSection,
  TalvrinSection,
  VisionMissionSection,
  ValuesSection,
  GovernanceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Zoiko Markets",
  description: "Better markets need better infrastructure.",
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <InfrastructureBannerSection />
      <AtAGlanceSection />
      <WhoWeAreSection />
      <WhyWeExistSection />
      <BuildingMandateSection />
      <WhoWeBuildForSection />
      <TeamBannerSection />
      <ProblemsWeSolveSection />
      <DifferentiatorsSection />
      <ApproachSection />
      <TalvrinSection />
      <VisionMissionSection />
      <ValuesSection />
      <GovernanceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
