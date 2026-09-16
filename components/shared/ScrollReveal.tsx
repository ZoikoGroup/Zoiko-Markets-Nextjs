"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Distance in pixels the content travels from bottom to its resting position. */
  distance?: number;
  /** Element tag to render as. Defaults to "div". */
  as?: "div" | "section" | "article" | "li";
};

const createVariants = (distance: number): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0 },
});

/**
 * Reveals its children by animating from a translated, transparent state
 * up into place the first time they scroll into view. Used in place of a
 * full-page loader so each section of a page animates in as the visitor
 * scrolls down to it.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 48,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={createVariants(distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
