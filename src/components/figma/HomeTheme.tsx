"use client";

import { useEffect } from "react";

const SET_THEME = `document.documentElement.dataset.homeTheme="light"`;

/**
 * Flips the document to the Figma redesign's light theme while this page is
 * mounted, and hands it back to the dark theme on the way out. Keeping it on
 * <html> (rather than a wrapper div) lets the token overrides in globals.css
 * reach the header, footer and any fixed-position chrome too.
 *
 * The inline script runs while the HTML streams in, so a hard load paints
 * white immediately instead of flashing the dark theme first; the effect
 * covers client-side navigations, where the script tag is not re-executed.
 */
export default function HomeTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.homeTheme = "light";
    return () => {
      delete root.dataset.homeTheme;
    };
  }, []);

  return <script dangerouslySetInnerHTML={{ __html: SET_THEME }} />;
}
