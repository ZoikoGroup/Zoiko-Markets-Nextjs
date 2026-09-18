"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavLinks, partnerCta } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function ChevronDownIcon() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden className="mt-px">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brand-dark bg-background">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Zoiko Markets"
            width={168}
            height={60}
            priority
            className="h-12 w-auto sm:h-[60px]"
          />
        </Link>

        <nav className="hidden items-center justify-self-center gap-6 xl:flex" aria-label="Primary">
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-[14.5px] font-medium tracking-wide text-brand-dark/80 transition-colors hover:text-brand-dark",
                  isActive && "text-brand-dark"
                )}
              >
                {link.label}
                {link.hasDropdown && <ChevronDownIcon />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6 justify-self-end">
          <div className="hidden xl:block">
            <Link
              href={partnerCta.href}
              className="group inline-flex items-center gap-2 rounded-[2px] bg-brand-plum px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-brand-plum/90"
            >
              {partnerCta.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-brand-dark transition-transform",
                isMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn("h-0.5 w-6 bg-brand-dark transition-opacity", isMenuOpen && "opacity-0")}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-brand-dark transition-transform",
                isMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "grid overflow-hidden border-t border-brand-dark/20 bg-background transition-[grid-template-rows] duration-300 ease-out xl:hidden",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="flex min-h-0 flex-col gap-1 px-4 py-4 sm:px-6">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-2 py-3 text-base font-medium text-brand-dark/80 transition-colors hover:bg-brand-dark/5 hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={partnerCta.href}
            onClick={closeMenu}
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-[2px] bg-brand-plum px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-plum/90"
          >
            {partnerCta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
