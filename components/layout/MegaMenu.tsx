import Image from "next/image";
import Link from "next/link";
import type { MegaMenuConfig } from "@/lib/megaMenu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared";
import { MENU_ICONS } from "./menuIcons";

function ChevronRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="mt-1 shrink-0 text-brand-dark/30 transition-colors group-hover:text-brand-gold"
    >
      <path
        d="M5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type MegaMenuProps = {
  config: MegaMenuConfig;
  onNavigate: () => void;
};

export function MegaMenu({ config, onNavigate }: MegaMenuProps) {
  const { columns, highlight, footnote } = config;

  return (
    <div className="absolute left-1/2 top-full z-40 mt-1 w-[min(96vw,1250px)] -translate-x-1/2 overflow-hidden rounded-[30px] border border-brand-dark/10 bg-white shadow-2xl">
      <div className={cn("grid gap-10 p-9", highlight && "lg:grid-cols-[1fr_320px]")}>
        <div className={cn("grid gap-10", columns.length > 1 && "sm:grid-cols-3")}>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.08em] leading-[18.4px] text-brand-gold">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} onClick={onNavigate} className="group flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-dark/5 text-brand-dark/70 transition-colors group-hover:bg-brand-gold/15 group-hover:text-brand-dark">
                        {MENU_ICONS[item.icon]}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-bold leading-[18.85px] text-brand-dark">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[12.5px] leading-[17.5px] text-brand-dark/66">
                          {item.description}
                        </span>
                      </span>
                      <ChevronRightIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {highlight && (
          <div className="rounded-xl bg-surface-sage p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-gold">
              {highlight.eyebrow}
            </p>
            <h4 className="mt-2 text-[15px] font-bold leading-snug text-brand-dark">
              {highlight.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
              {highlight.description}
            </p>
            <div className="relative mt-4 aspect-[252/180] w-full overflow-hidden rounded-lg">
              <Image
                src={highlight.image}
                alt={highlight.imageAlt}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <Button
              href={highlight.cta.href}
              onClick={onNavigate}
              tone="plum"
              roundedClassName="rounded-full"
              className="mt-4 w-full"
              showArrow={false}
            >
              {highlight.cta.label}
            </Button>
            {highlight.secondaryCta && (
              <Link
                href={highlight.secondaryCta.href}
                onClick={onNavigate}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-dark/60 transition-colors hover:text-brand-gold"
              >
                {highlight.secondaryCta.label}
                <span aria-hidden>↗</span>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 border-t border-brand-dark/10 px-8 py-4 text-sm text-brand-dark/60">
        <span>{footnote.text}</span>
        <span aria-hidden>·</span>
        <Link
          href={footnote.href}
          onClick={onNavigate}
          className="font-semibold text-brand-dark transition-colors hover:text-brand-gold"
        >
          {footnote.linkLabel}
        </Link>
      </div>
    </div>
  );
}
