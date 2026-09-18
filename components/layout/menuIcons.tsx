import type { ReactNode } from "react";

export type MenuIconKey =
  | "grid"
  | "target"
  | "layers"
  | "star"
  | "flag"
  | "document"
  | "briefcase"
  | "shield"
  | "trendingUp"
  | "share"
  | "scale"
  | "lock"
  | "eye"
  | "compass"
  | "barChart"
  | "link";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const MENU_ICONS: Record<MenuIconKey, ReactNode> = {
  grid: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <rect x="2" y="2" width="6" height="6" rx="1" />
      <rect x="10" y="2" width="6" height="6" rx="1" />
      <rect x="2" y="10" width="6" height="6" rx="1" />
      <rect x="10" y="10" width="6" height="6" rx="1" />
    </svg>
  ),
  target: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <circle cx="9" cy="9" r="7" />
      <circle cx="9" cy="9" r="2.5" />
    </svg>
  ),
  layers: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M9 2 2 6l7 4 7-4-7-4z" />
      <path d="M2 10l7 4 7-4" />
    </svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M9 2.5l2 4.2 4.5.6-3.3 3.2.8 4.5L9 12.8l-4 2.2.8-4.5-3.3-3.2 4.5-.6L9 2.5z" />
    </svg>
  ),
  flag: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M4 2v14" />
      <path d="M4 3h9l-2 3 2 3H4" />
    </svg>
  ),
  document: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M5 2h5l3 3v11H5V2z" />
      <path d="M10 2v3h3" />
    </svg>
  ),
  briefcase: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <rect x="2" y="6" width="14" height="9" rx="1.5" />
      <path d="M6.5 6V4.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5V6" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M9 2l6 2.2v4.3c0 4-2.6 6.6-6 7.5-3.4-.9-6-3.5-6-7.5V4.2L9 2z" />
    </svg>
  ),
  trendingUp: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M2 13l4.5-5 3 3L16 4" />
      <path d="M11.5 4H16v4.5" />
    </svg>
  ),
  share: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <circle cx="4" cy="9" r="2" />
      <circle cx="14" cy="4" r="2" />
      <circle cx="14" cy="14" r="2" />
      <path d="M5.8 8l6.4-3M5.8 10l6.4 3" />
    </svg>
  ),
  scale: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M9 2v13" />
      <path d="M4.5 15h9" />
      <path d="M2 5.5h5M2 5.5L1 8.5a2 2 0 0 0 4 0L4 5.5" />
      <path d="M11 5.5h5M11 5.5l-1 3a2 2 0 0 0 4 0l-1-3" />
    </svg>
  ),
  lock: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <rect x="3.5" y="8" width="11" height="7.5" rx="1.5" />
      <path d="M6 8V5.5a3 3 0 0 1 6 0V8" />
    </svg>
  ),
  eye: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M1.5 9S4.5 3.5 9 3.5 16.5 9 16.5 9 13.5 14.5 9 14.5 1.5 9 1.5 9z" />
      <circle cx="9" cy="9" r="2.3" />
    </svg>
  ),
  compass: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <circle cx="9" cy="9" r="7" />
      <path d="M11.3 6.7l-1.5 3.8-3.8 1.5 1.5-3.8 3.8-1.5z" />
    </svg>
  ),
  barChart: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M3 15V9M8 15V3M13 15v-5" />
    </svg>
  ),
  link: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden {...strokeProps}>
      <path d="M7.5 10.5l3-3" />
      <path d="M7 5.5 8.6 3.9a2.5 2.5 0 1 1 3.5 3.5L10.5 9" />
      <path d="M11 12.5 9.4 14.1a2.5 2.5 0 1 1-3.5-3.5L7.5 9" />
    </svg>
  ),
};
