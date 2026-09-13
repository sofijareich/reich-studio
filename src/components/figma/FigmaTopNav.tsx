import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import FigmaLanguageSwitcher from "./FigmaLanguageSwitcher";
import FigmaMobileMenu from "./FigmaMobileMenu";
import { NAV_ITEMS as NAV } from "@/lib/nav";

/**
 * Brand + nav + the short rule running off the left edge — the top bar
 * shared by every page in the Figma redesign. Originally lived inline in
 * FigmaHero (the homepage's hero doubles as the page's only "header"); pulled
 * out so other pages can reuse it without duplicating the markup.
 *
 * Below `lg` the inline nav row gives way to a hamburger trigger
 * (FigmaMobileMenu) that opens a full-screen takeover instead of wrapping
 * links onto a second line.
 */
export default async function FigmaTopNav() {
  const tNav = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");
  const navItems = NAV.map((item) => ({ href: item.href, label: tNav(item.key) }));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo/reich-mark-figma.png"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 shrink-0"
          />
          <span className="fg-small lowercase">reichstudio.ch</span>
        </Link>

        <nav className="hidden w-full max-w-[46rem] flex-wrap items-baseline justify-end gap-x-[clamp(1.25rem,3vw,3rem)] gap-y-3 lg:flex lg:justify-between">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="fg-small lowercase text-black/70 transition-colors hover:text-black"
            >
              {tNav(item.key)}
            </Link>
          ))}
          <FigmaLanguageSwitcher />
        </nav>

        <FigmaMobileMenu
          navItems={navItems}
          openLabel={tNav("openMenu")}
          closeLabel={tNav("closeMenu")}
          locationLabel={tFooter("locationLabel")}
          location={tFooter("location")}
          contactLabel={tFooter("contactLabel")}
          email="sofija.reich@reichstudio.ch"
        />
      </div>

      <div
        className="mt-[clamp(0.75rem,1.6vh,1.25rem)] h-px w-[19.5vw] bg-black"
        style={{ marginInlineStart: "calc(-1 * clamp(1.25rem, 4.58vw, 5.5rem))" }}
      />
    </div>
  );
}
