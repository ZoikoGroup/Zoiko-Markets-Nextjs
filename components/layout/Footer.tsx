"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { ScrollReveal } from "@/components/shared";
import {
  footerNavGroups,
  footerOffices,
  footerBottomLinks,
  footerSocialLinks,
} from "@/lib/navigation";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M3.5 5.5h2.2V13H3.5V5.5zM4.6 2.7a1.28 1.28 0 1 1 0 2.56 1.28 1.28 0 0 1 0-2.56zM7.3 5.5h2.1v1.02h.03c.3-.55 1.02-1.13 2.1-1.13 2.25 0 2.67 1.44 2.67 3.32V13h-2.2V9.13c0-.92-.02-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2.04V13h-2.2V5.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M9.5 6.9 14 2h-1.3L8.9 5.9 5.6 2H1l4.7 6.6L1 15h1.3l4.1-4.5L9.7 15H14L9.5 6.9zM7.9 9.2l-.5-.6L3.1 3h1.6l3.3 4.5.5.6 4.4 6.1h-1.6L7.9 9.2z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M14.6 4.9a1.9 1.9 0 0 0-1.35-1.34C12.1 3.2 8 3.2 8 3.2s-4.1 0-5.25.36A1.9 1.9 0 0 0 1.4 4.9 19.8 19.8 0 0 0 1 8.2c0 1.1.13 2.2.4 3.3.2.63.7 1.12 1.35 1.31C3.9 13.2 8 13.2 8 13.2s4.1 0 5.25-.36a1.9 1.9 0 0 0 1.35-1.34c.27-1.08.4-2.2.4-3.3 0-1.1-.13-2.2-.4-3.3zM6.5 10.4V6l3.7 2.2-3.7 2.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="11.6" cy="4.4" r="0.8" fill="currentColor" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, ReactNode> = {
  LinkedIn: <LinkedInIcon />,
  X: <XIcon />,
  YouTube: <YouTubeIcon />,
  Instagram: <InstagramIcon />,
};

function handleSubscribe(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // TODO: wire up to an email service / API route once one is available.
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-background/85">
      <ScrollReveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Link href="/" className="inline-flex items-center rounded-md bg-background px-4 py-3">
              <Image
                src="/logo.png"
                alt="Zoiko Markets"
                width={168}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-background/60">
              A Zoiko Financial Group Inc. company
            </p>

            <h3 className="mt-10 text-[12px] font-bold uppercase tracking-[0.07em] leading-[19.2px] text-brand-gold">
              Follow Zoiko Markets
            </h3>
            <div className="mt-4 flex gap-3">
              {footerSocialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-background/70 transition-colors hover:bg-brand-gold hover:text-brand-navy"
                >
                  {SOCIAL_ICONS[social.label]}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.07em] leading-[19.2px] text-brand-gold">
              Stay Informed
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/60">
              Occasional corporate updates on Zoiko Markets&apos; portfolio, governance and
              strategy — no more than a few times a year.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Work email address"
                className="w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-brand-gold focus:outline-none sm:max-w-xs"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-brand-gold px-6 py-3 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-gold/90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-background/40">
              By subscribing, you agree to receive periodic corporate updates from Zoiko Markets.
              You can unsubscribe at any time. See our{" "}
              <Link href="/privacy" className="underline transition-colors hover:text-brand-gold">
                Privacy Notice
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-3 lg:grid-cols-5">
          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.07em] leading-[19.2px] text-brand-gold">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[14.5px] font-normal leading-[23.2px] text-background/85 transition-colors hover:text-brand-gold"
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
          {footerOffices.map((office) => (
            <div key={office.title}>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.07em] leading-[19.2px] text-brand-gold">
                {office.title}
              </h3>
              <p className="mt-3 text-sm text-background/70">{office.address}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerBottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-background/60 transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p>
              &copy; {year} Zoiko Markets Inc. All rights reserved. Zoiko Markets Inc. is a Zoiko
              Financial Group company.
            </p>
            <p>Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.</p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
