import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";

function NetworkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="6" r="3" stroke="#1F2925" strokeWidth="1.5" />
      <circle cx="6" cy="24" r="3" stroke="#1F2925" strokeWidth="1.5" />
      <circle cx="26" cy="24" r="3" fill="#B4965A" />
      <path d="M16 9v6M16 15L8 22M16 15l8 7" stroke="#1F2925" strokeWidth="1.5" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="6" width="12" height="9" rx="1" stroke="#1F2925" strokeWidth="1.5" />
      <rect x="18" y="17" width="10" height="9" rx="1" stroke="#B4965A" strokeWidth="1.5" />
      <path d="M10 15v4a2 2 0 0 0 2 2h6" stroke="#1F2925" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ConnectivityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="6" cy="16" r="2.5" fill="#1F2925" />
      <circle cx="16" cy="16" r="2.5" fill="#B4965A" />
      <circle cx="26" cy="16" r="2.5" fill="#1F2925" />
      <path d="M8.5 16h5M18.5 16h5" stroke="#1F2925" strokeWidth="1.5" />
    </svg>
  );
}

const FOCUS_AREAS: { number: string; title: string; body: string; icon: ReactNode }[] = [
  {
    number: "01",
    title: "Market intelligence and financial data",
    body: "Building the analytical and data infrastructure that helps market participants understand what is happening, and why.",
    icon: <NetworkIcon />,
  },
  {
    number: "02",
    title: "Trading and workflow technology",
    body: "Developing systems that make trading, operations and market workflows faster, clearer and more resilient.",
    icon: <WorkflowIcon />,
  },
  {
    number: "03",
    title: "Market connectivity and infrastructure",
    body: "Owning and scaling the connective infrastructure that links participants, venues and data across markets.",
    icon: <ConnectivityIcon />,
  },
];

export function FocusAreasSection() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal
          as="div"
          className="relative flex min-h-[320px] items-end overflow-hidden bg-brand-dark px-6 py-10 sm:px-10"
        >
          <Image
            src="/images/home/focus-banner.webp"
            alt=""
            aria-hidden
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover opacity-60"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
              Where We Build And Invest
            </p>
            <h2 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">
              Three areas of focus, one mandate
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-6 grid bg-background sm:grid-cols-3">
          {FOCUS_AREAS.map((area, index) => (
            <ScrollReveal
              key={area.number}
              delay={index * 0.1}
              className={cn("p-8", index > 0 && "sm:border-l sm:border-brand-dark/15")}
            >
              <p className="text-sm font-semibold text-brand-gold">{area.number}</p>
              <div className="mt-4 flex justify-center">{area.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-brand-dark">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">{area.body}</p>
              <Link
                href="/our-approach"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-dark"
              >
                Learn more
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
