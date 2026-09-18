import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonTone = "dark" | "plum" | "gold" | "white";
type ButtonVariant = "solid" | "outline";

type ToneStyle = {
  base: string;
  fill: string;
  hoverText: string;
};

const TONE_STYLES: Record<`${ButtonTone}-${ButtonVariant}`, ToneStyle> = {
  "dark-solid": {
    base: "border border-brand-dark bg-brand-dark text-white",
    fill: "bg-white",
    hoverText: "group-hover:text-brand-dark",
  },
  "dark-outline": {
    base: "border border-brand-dark bg-transparent text-brand-dark",
    fill: "bg-brand-dark",
    hoverText: "group-hover:text-white",
  },
  "plum-solid": {
    base: "border border-brand-plum bg-brand-plum text-white",
    fill: "bg-white",
    hoverText: "group-hover:text-brand-plum",
  },
  "plum-outline": {
    base: "border border-brand-plum bg-transparent text-brand-plum",
    fill: "bg-brand-plum",
    hoverText: "group-hover:text-white",
  },
  "gold-solid": {
    base: "border border-brand-gold bg-brand-gold text-brand-navy",
    fill: "bg-white",
    hoverText: "group-hover:text-brand-gold",
  },
  "gold-outline": {
    base: "border border-brand-gold bg-transparent text-brand-gold",
    fill: "bg-brand-gold",
    hoverText: "group-hover:text-brand-dark",
  },
  "white-solid": {
    base: "border border-white bg-white text-brand-plum",
    fill: "bg-brand-plum",
    hoverText: "group-hover:text-white",
  },
  "white-outline": {
    base: "border border-white/50 bg-transparent text-white",
    fill: "bg-white",
    hoverText: "group-hover:text-brand-plum",
  },
};

type ButtonSharedProps = {
  children: ReactNode;
  tone?: ButtonTone;
  variant?: ButtonVariant;
  showArrow?: boolean;
  roundedClassName?: string;
  className?: string;
};

type ButtonAsLink = ButtonSharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
    type?: never;
  };

type ButtonAsButton = ButtonSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
    type: "button" | "submit";
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Shared CTA button: sliding fill + diagonal light-sweep on hover, matching
 * the interaction pattern supplied by the user (colors adapted to brand palette).
 */
export function Button({
  children,
  tone = "dark",
  variant = "solid",
  showArrow = true,
  roundedClassName,
  className,
  ...rest
}: ButtonProps) {
  const style = TONE_STYLES[`${tone}-${variant}`];

  const content = (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
          style.fill
        )}
      />
      <span
        aria-hidden
        className="absolute inset-y-0 z-[1] -left-full w-1/2 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[120%]"
      />
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-2 transition-transform duration-500 ease-out group-hover:translate-x-0.5",
          style.hoverText
        )}
      >
        {children}
        {showArrow && (
          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
    </>
  );

  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-sm font-medium transition-all duration-500 ease-out hover:-translate-y-0.5 active:scale-[0.98]",
    roundedClassName,
    style.base,
    className
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={sharedClassName} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { type, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button type={type} className={sharedClassName} {...buttonRest}>
      {content}
    </button>
  );
}
