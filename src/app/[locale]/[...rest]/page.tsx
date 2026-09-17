import { notFound } from "next/navigation";

/**
 * Catches any URL under a locale that doesn't match a real page. Without
 * this, an unmatched deep path (e.g. /de/some-typo) never renders anything
 * inside the [locale] segment at all, so Next falls back to the bare root
 * app/not-found.tsx instead of the localized, styled one next to this file.
 * Throwing notFound() from a page that *is* inside [locale] is what makes
 * Next pick up [locale]/not-found.tsx instead.
 */
export default function CatchAll() {
  notFound();
}
