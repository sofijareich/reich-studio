"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * Wraps a single interactive child (button/link) and pulls it a few px
 * toward the cursor on hover, springing back on leave. Subtle by design —
 * `strength` caps how far it can travel, so it reads as "this is alive"
 * rather than a distracting wobble.
 */
export default function FigmaMagnetic({
  children,
  strength = 14,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-flex ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
