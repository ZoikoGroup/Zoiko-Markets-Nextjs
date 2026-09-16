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
  tone?: "light" | "dark";
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
    <section
      id={id}
      className={cn(
        "px-4 py-20 sm:px-6 lg:px-8",
        isDark ? "bg-brand-dark text-white" : "bg-background text-brand-dark",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
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
