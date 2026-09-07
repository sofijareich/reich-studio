import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const NAV = [
  { href: "/" as const, key: "home" as const },
  { href: "/studio" as const, key: "studio" as const },
  { href: "/portfolio" as const, key: "portfolio" as const },
  { href: "/pricing" as const, key: "pricing" as const },
  { href: "/products" as const, key: "products" as const },
  { href: "/contact" as const, key: "contact" as const },
];

/**
 * Brand + nav + the short rule running off the left edge — the top bar
 * shared by every page in the Figma redesign. Originally lived inline in
 * FigmaHero (the homepage's hero doubles as the page's only "header"); pulled
 * out so other pages can reuse it without duplicating the markup.
 */
export default async function FigmaTopNav() {
  const tNav = await getTranslations("Nav");

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4">
        <Link href="/" className="fg-small shrink-0 lowercase">
          reichstudio.ch
        </Link>

        <nav className="flex w-full max-w-[46rem] flex-wrap items-baseline justify-end gap-x-[clamp(1.25rem,3vw,3rem)] gap-y-3 lg:justify-between">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="fg-small lowercase text-black/70 transition-colors hover:text-black"
            >
              {tNav(item.key)}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="mt-[clamp(0.75rem,1.6vh,1.25rem)] h-px w-[19.5vw] bg-black"
        style={{ marginInlineStart: "calc(-1 * clamp(1.25rem, 4.58vw, 5.5rem))" }}
      />
    </div>
  );
}
