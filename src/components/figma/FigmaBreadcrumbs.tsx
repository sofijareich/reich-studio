import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPathname } from "@/i18n/navigation";
import type { AppPathnames } from "@/i18n/routing";

const BASE_URL = "https://reichstudio.ch";

/**
 * Hairline "home / current page" trail for every inner page, plus the
 * matching BreadcrumbList structured data. Visually tiny on purpose — this
 * is wayfinding + SEO, not a design statement.
 */
export default async function FigmaBreadcrumbs({ href }: { href: AppPathnames }) {
  const locale = await getLocale();
  const t = await getTranslations("Nav");
  // Nav carries a translation for every one of these routes (home, studio,
  // portfolio, pricing, products, contact, impressum) keyed by its plain
  // slug, so the breadcrumb label falls out of the href with no extra prop.
  const label = t(href.slice(1) as Parameters<typeof t>[0]);
  const homeHref = getPathname({ locale, href: "/" } as never);
  const pageHref = getPathname({ locale, href } as never);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("home"), item: `${BASE_URL}${homeHref}` },
      { "@type": "ListItem", position: 2, name: label, item: `${BASE_URL}${pageHref}` },
    ],
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="fg-small flex items-center gap-2 text-black/50">
        <Link href="/" className="lowercase hover:text-black">
          {t("home")}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="lowercase text-black/70" aria-current="page">
          {label}
        </span>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
