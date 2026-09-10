"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked "stacking" effect for a long section: as the section
 * scrolls up and out the top of the viewport, it scales down slightly and
 * dims, so the sections you've already read visibly recede behind the one
 * you're on — the reference's stacking-cards idea, adapted for full-height
 * editorial sections (no sticky pinning, so nothing about the existing
 * layout changes). Full size and opacity for the whole time the section is
 * being read; the shrink only starts once its top passes the fold.
 */
export default function FigmaRecede({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0.4]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
