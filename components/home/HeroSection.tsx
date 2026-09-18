import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, Button } from "@/components/shared";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Zoiko Markets Inc. · A Zoiko Financial Group company
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-[3.25rem]">
            Building the businesses behind better markets.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-dark/60">
            Zoiko Markets Inc. is the specialist markets holding company within Zoiko Financial
            Group Inc. We build, own, govern and scale businesses across market intelligence,
            financial data and market infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/portfolio" tone="dark" variant="solid">
              Explore our portfolio
            </Button>
            <Button href="/contact" tone="dark" variant="outline">
              Partner with us
            </Button>
          </div>

          <Link
            href="/portfolio/talvrin"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark"
          >
            <span className="border-b border-transparent transition-colors group-hover:border-brand-dark">
              Discover Talvrin, our flagship brand
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <div className="mt-16 hidden items-center gap-3 sm:flex">
            <span className="relative h-10 w-px overflow-hidden bg-brand-dark/15">
              <span className="absolute inset-x-0 top-0 h-4 animate-scroll-indicator bg-brand-gold" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark/50">
              Scroll
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="group relative mx-auto aspect-[447/520] w-full max-w-md overflow-hidden lg:max-w-none">
            <span
              aria-hidden
              className="absolute left-0 top-0 z-10 h-6 w-6 border-l-2 border-t-2 border-brand-dark/30"
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 z-10 h-6 w-6 border-b-2 border-r-2 border-brand-dark/30"
            />
            <Image
              src="/images/home/hero.png"
              alt="Collage of Zoiko Markets' work across market intelligence, financial data and infrastructure"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
