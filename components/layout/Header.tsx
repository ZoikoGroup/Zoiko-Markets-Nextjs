"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavLinks, partnerCta } from "@/lib/navigation";
import { megaMenus } from "@/lib/megaMenu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared";
import { MegaMenu } from "./MegaMenu";

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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
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

        <div
          className="relative hidden justify-self-center xl:block"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <nav className="flex items-center gap-6" aria-label="Primary">
            {primaryNavLinks.map((link) => {
              const isActive = pathname === link.href;
              const menu = link.hasDropdown ? megaMenus[link.label] : undefined;

              return (
                <div
                  key={link.href}
                  className="flex h-20 items-center"
                  onMouseEnter={() => setOpenMenu(menu ? link.label : null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 text-[14.5px] font-medium tracking-wide text-brand-dark/80 transition-colors hover:text-brand-dark",
                      isActive && "text-brand-dark"
                    )}
                    aria-expanded={menu ? openMenu === link.label : undefined}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDownIcon />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {openMenu && megaMenus[openMenu] && (
            <MegaMenu config={megaMenus[openMenu]} onNavigate={() => setOpenMenu(null)} />
          )}
        </div>

        <div className="flex items-center gap-6 justify-self-end">
          <div className="hidden xl:block">
            <Button href={partnerCta.href} tone="plum" roundedClassName="rounded-[2px]" className="text-[14.5px]">
              {partnerCta.label}
            </Button>
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
          <Button
            href={partnerCta.href}
            onClick={closeMenu}
            tone="plum"
            roundedClassName="rounded-[2px]"
            className="mt-2 w-full"
          >
            {partnerCta.label}
          </Button>
        </div>
      </nav>
    </header>
  );
}
