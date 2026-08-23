import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathnames } from "@/i18n/routing";

export function pageMetadata(
  locale: string,
  href: AppPathnames,
  title: string,
  description: string
): Metadata {
  const path = getPathname({ locale, href } as never);

  // Every locale's version of this page, so Google can tell the DE and EN
  // variants apart instead of treating them as competing duplicates.
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ locale: l, href } as never)])
  );

  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
