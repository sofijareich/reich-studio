"use client";

import { motion } from "framer-motion";

type FigmaRevealProps = {
  children: React.ReactNode;
  /** Stagger offset in seconds, for revealing a group of siblings in sequence. */
  delay?: number;
  /** Vertical travel distance in px. Kept small — this is a nudge, not a slide-in. */
  y?: number;
  className?: string;
};

/**
 * Scroll-triggered fade + rise for a whole section. Fires once, the first
 * time the section enters the viewport, then stays put — this is the
 * "story" pacing device: content arrives as you scroll to it instead of
 * just being there, without turning into a slideshow you have to wait out.
 */
export default function FigmaReveal({ children, delay = 0, y = 24, className }: FigmaRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
