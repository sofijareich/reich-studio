import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { NAV_ITEMS } from "@/lib/nav";

/**
 * The Figma redesign's own footer — the light theme hides the old dark
 * <Footer> (see globals.css), so without this every redesigned page just
 * ended after its last section. Mirrors FigmaTopNav's brand mark and the
 * "mini menu" shape of the reference nav: page links, contact details, a
 * few real FAQ questions (pulled from the Contact page's own FAQ so nothing
 * here is invented), and the legally-required Impressum link.
 */
export default async function FigmaFooter() {
  const tNav = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");
  const tContact = await getTranslations("ContactPage");
  const faqItems = (tContact.raw("faq") as { q: string; a: string }[]).slice(0, 3);

  return (
    <footer data-figma-footer className="fg-page-x border-t border-black/15 pb-[clamp(1.75rem,4vh,2.5rem)] pt-[clamp(3rem,7vh,5rem)]">
      {/* brand banner — same big mark + mix-blend-multiply treatment as the
          homepage hero's footline, so the mark reads as a recurring brand
          device instead of a one-off */}
      <div className="flex items-end justify-between gap-6 border-b border-black/15 pb-[clamp(2rem,5vh,3rem)]">
        <div>
          <Link href="/" className="fg-small lowercase text-black">
            reichstudio.ch
          </Link>
          <p className="fg-small mt-[clamp(0.75rem,2vh,1.25rem)] max-w-[30ch] text-black/60">
            {tFooter("tagline")}
          </p>
        </div>
        <Image
          src="/logo/reich-mark-figma.png"
          alt="Reich Studio"
          width={180}
          height={138}
          className="h-auto w-[clamp(4.5rem,9.4vw,11.25rem)] shrink-0 mix-blend-multiply"
        />
      </div>

      <div className="mt-[clamp(2.5rem,6vh,3.5rem)] grid gap-x-[clamp(2rem,4vw,4rem)] gap-y-[clamp(2.5rem,6vh,3.5rem)] lg:grid-cols-3">
        <nav>
          <p className="fg-small uppercase text-black/60">{tFooter("pagesLabel")}</p>
          <ul className="mt-[clamp(0.9rem,2vh,1.25rem)] space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="fg-small lowercase text-black/80 transition-colors hover:text-black"
                >
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="fg-small uppercase text-black/60">{tFooter("contactLabel")}</p>
          <div className="mt-[clamp(0.9rem,2vh,1.25rem)] space-y-2">
            <a
              href="mailto:sofija.reich@reichstudio.ch"
              className="fg-small block text-black/80 transition-colors hover:text-black"
            >
              sofija.reich@reichstudio.ch
            </a>
            <a
              href="tel:+41784217611"
              className="fg-small block text-black/80 transition-colors hover:text-black"
            >
              {tFooter("phone")}
            </a>
            <p className="fg-small text-black/80">{tFooter("location")}</p>
          </div>
        </div>

        <nav>
          <p className="fg-small uppercase text-black/60">{tFooter("faqLabel")}</p>
          <ul className="mt-[clamp(0.9rem,2vh,1.25rem)] space-y-2">
            {faqItems.map((item) => (
              <li key={item.q}>
                <Link
                  href={{ pathname: "/contact", hash: "faq" }}
                  className="fg-small block text-black/80 transition-colors hover:text-black"
                >
                  {item.q}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-[clamp(2.5rem,6vh,3.5rem)] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-black/15 pt-[clamp(1.25rem,3vh,1.75rem)]">
        <p className="fg-small text-black/60">
          Reich Studio · {tFooter("location")} · © {new Date().getFullYear()}
        </p>
        <Link href="/impressum" className="fg-small text-black/60 underline hover:text-black">
          {tFooter("impressum")}
        </Link>
      </div>
    </footer>
  );
}
