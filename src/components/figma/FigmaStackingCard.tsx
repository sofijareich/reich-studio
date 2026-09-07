"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * One card in a sticky "stack" — pin it via CSS (`sticky top-*`) on the
 * parent list item, and this scales the card down slightly as the next one
 * scrolls over it, so the stack reads as cards being set down one on top of
 * another rather than a plain scroll list. Framer's `useScroll` with
 * `target` tracks this card's own element against the viewport, so each
 * card in the stack drives its own transform independently.
 *
 * Not wired into any page yet — built ahead of the Portfolio pass, where
 * the project sections are the natural fit for this effect. Reads the
 * existing editorial style (hairline border, no shadow) rather than the
 * reference's dark elevated cards.
 *
 * Usage once wired in:
 *   <div className="sticky top-24">
 *     <FigmaStackingCard index={i} total={items.length}>...</FigmaStackingCard>
 *   </div>
 */
export default function FigmaStackingCard({
  children,
  index,
  total,
  className,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Every card but the last scales down slightly as it's scrolled past.
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`border border-black/15 bg-white ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
