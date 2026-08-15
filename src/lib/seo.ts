import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import type { AppPathnames } from "@/i18n/routing";

export function pageMetadata(
  locale: string,
  href: AppPathnames,
  title: string,
  description: string
): Metadata {
  const path = getPathname({ locale, href } as never);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
