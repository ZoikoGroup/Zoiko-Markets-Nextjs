import Image from "next/image";
import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";

export type AboutSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "sage";
};

const TONE_BG: Record<NonNullable<AboutSectionProps["tone"]>, string> = {
  light: "bg-background text-brand-dark",
  dark: "bg-brand-dark text-white",
  sage: "bg-surface-sage text-brand-dark",
};

/** Shared section shell used by every /about-us section, so spacing, tone and the scroll-reveal animation stay consistent. */
export function AboutSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "light",
}: AboutSectionProps) {
  const isDark = tone === "dark";

  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 lg:px-8", TONE_BG[tone], className)}>
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          {description ? (
            <p
              className={cn(
                "mt-4 max-w-3xl text-base leading-relaxed",
                isDark ? "text-white/70" : "text-brand-dark/70"
              )}
            >
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </ScrollReveal>
      </div>
    </section>
  );
}

type ImageBannerProps = {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
};

/** Full-bleed photo with a caption strip beneath it. */
export function ImageBanner({ src, alt, caption, aspect = "aspect-[16/9] sm:aspect-[21/9]" }: ImageBannerProps) {
  return (
    <ScrollReveal as="section">
      <div className={cn("relative w-full", aspect)}>
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 border-b border-brand-dark/10 bg-background px-4 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <p className="max-w-xl text-base font-medium text-brand-dark">{caption}</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
          Zoiko Markets
        </p>
      </div>
    </ScrollReveal>
  );
}

/** Bold label + description row, divided by a hairline — used across several tables in this page. */
export function DefinitionRow({
  label,
  description,
  eyebrowLabel,
  eyebrowDescription,
}: {
  label: string;
  description: string;
  eyebrowLabel?: string;
  eyebrowDescription?: string;
}) {
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-2 sm:gap-8">
      <div>
        {eyebrowLabel ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            {eyebrowLabel}
          </p>
        ) : null}
        <p className="mt-1 text-base font-semibold text-brand-dark">{label}</p>
      </div>
      <div>
        {eyebrowDescription ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            {eyebrowDescription}
          </p>
        ) : null}
        <p className="mt-1 text-sm leading-relaxed text-brand-dark/70">{description}</p>
      </div>
    </div>
  );
}
