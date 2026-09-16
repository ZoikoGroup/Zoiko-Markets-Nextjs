"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Zoiko Markets"
            width={160}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {primaryNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide text-brand-dark/80 transition-colors hover:text-brand-dark",
                    isActive && "text-brand-dark"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center border border-brand-dark px-5 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-background"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
          "grid overflow-hidden border-t border-brand-dark/20 bg-background transition-[grid-template-rows] duration-300 ease-out lg:hidden",
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
            href="/contact"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center border border-brand-dark px-5 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-background"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
