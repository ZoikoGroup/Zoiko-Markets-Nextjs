import Image from "next/image";
import { ScrollReveal } from "@/components/shared";

export function VisionMissionSection() {
  return (
    <ScrollReveal as="section" className="relative overflow-hidden">
      <div className="relative aspect-[1440/560] w-full">
        <Image
          src="/images/about/vision-mission-banner.webp"
          alt="Looking up at skyscrapers through hazy light"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-brand-dark-overlay" />
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
                Our Vision
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-white/90">
                To help shape a future in which financial markets are more intelligible,
                connected and trustworthy because the infrastructure behind market information,
                evidence and workflows is better designed.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
                Our Mission
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-white/90">
                To build, own, govern and scale high-value businesses across market intelligence,
                financial data, workflow technology, market connectivity and adjacent market
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
