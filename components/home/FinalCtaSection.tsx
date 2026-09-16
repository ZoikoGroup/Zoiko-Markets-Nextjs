import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared";

export function FinalCtaSection() {
  return (
    <section className="bg-brand-plum px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Discuss a strategic opportunity
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Building a markets-focused business, developing financial data or exploring a
            strategic partnership? Tell us where your work connects with our mandate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-brand-plum transition-colors hover:bg-white/90"
            >
              Start a conversation
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand-plum"
            >
              Explore our portfolio
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="group relative aspect-[454/382] w-full overflow-hidden">
            <Image
              src="/images/home/cta-meeting.png"
              alt="Zoiko Markets team meeting with a prospective partner"
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
