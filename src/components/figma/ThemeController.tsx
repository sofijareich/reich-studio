"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Paths that still use the old dark theme. Everything else defaults to the
 * Figma redesign's light theme — matching the site's actual direction, so a
 * newly-added page is light by default instead of needing to opt in.
 */
const DARK_PATTERNS = ["/services/", "/leistungen/", "/thanks", "/danke"];

function isDarkPath(pathname: string) {
  return DARK_PATTERNS.some((p) => pathname.includes(p));
}

/**
 * Same light/dark decision as ThemeController below, serialized so the
 * root layout can run it as a `beforeInteractive` <Script> — i.e. before
 * hydration, so the very first paint already has the right theme instead of
 * flashing dark-then-light. Keep this in sync with `isDarkPath` above.
 */
export const THEME_INIT_SCRIPT = `(function(){var p=window.location.pathname;var dark=${JSON.stringify(
  DARK_PATTERNS
)};for(var i=0;i<dark.length;i++){if(p.indexOf(dark[i])!==-1)return}document.documentElement.dataset.homeTheme="light";})();`;

/**
 * Handles every *subsequent* client-side navigation (the beforeInteractive
 * script above only runs once, on the real document load). Rendered once in
 * the root layout — no more per-page <HomeTheme /> opt-in needed.
 */
export default function ThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    if (isDarkPath(pathname)) {
      delete document.documentElement.dataset.homeTheme;
    } else {
      document.documentElement.dataset.homeTheme = "light";
    }
  }, [pathname]);

  return null;
}
