"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

/**
 * Lenis caches the page's scrollable height and only recomputes it via a
 * debounced ResizeObserver. That's fine for content that grows in place,
 * but a client-side route change can swap in a shorter page while Lenis is
 * still holding onto the previous, taller page's limit — which reads
 * exactly like "scrolling stops before the real bottom". Forcing a resize
 * right after the pathname changes keeps Lenis's limit in sync with what's
 * actually on the page.
 */
function ResizeOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.resize();
  }, [pathname, lenis]);

  return null;
}

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
      <ResizeOnNavigate />
      {children}
    </ReactLenis>
  );
}
