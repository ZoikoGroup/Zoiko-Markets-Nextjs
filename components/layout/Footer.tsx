import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared";
import { footerNavGroups } from "@/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/70">
      <ScrollReveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Image
              src="/logo.png"
              alt="Zoiko Markets"
              width={160}
              height={40}
              className="h-8 w-auto transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Zoiko Markets Inc.
              <br />A Zoiko Financial Group company.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Specialist ownership across markets, data and infrastructure.
            </p>
          </div>

          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-white/70 transition-colors hover:text-brand-gold"
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

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Zoiko Markets Inc. All rights reserved.</p>
          <p>A company of Zoiko Financial Group Inc.</p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
