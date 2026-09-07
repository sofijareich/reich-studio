"use client";

import { ReactLenis } from "lenis/react";

/**
 * Site-wide inertia scroll (the lenis.dev effect itself) — wraps the whole
 * document so every page gets the smoother, slightly-trailing scroll feel,
 * not just the pages that have been visually rebuilt yet. Purely a scroll
 * physics change: it still drives the real `window.scrollY`, so IntersectionObserver
 * (the portfolio sub-nav) and `position: sticky` (product price card,
 * upcoming stacking cards) keep working unmodified.
 *
 * Tuned gentle rather than heavy: short duration + a standard ease-out, so it
 * reads as "smoothed", not "laggy".
 */
export default function FigmaSmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
