import Image from "next/image";
import { Button, ScrollReveal } from "@/components/shared";

export function FinalCtaSection() {
  return (
    <section className="bg-brand-plum px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Building The Businesses Behind Better Markets
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s talk about where your work connects
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            If you are building, operating or enabling technology, data or infrastructure that
            can materially improve how markets are understood or run, we want to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" tone="white" variant="outline">
              Partner With Us
            </Button>
            <Button href="/contact" tone="white" variant="outline">
              Contact Zoiko Markets
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="group relative aspect-[505/412] w-full overflow-hidden">
            <Image
              src="/images/about/final-cta.webp"
              alt="Colleagues discussing market data on a trading floor"
              fill
              sizes="40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
