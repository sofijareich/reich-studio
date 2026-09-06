import Image from "next/image";
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

export default async function FigmaHero() {
  const t = await getTranslations("Hero");
  const tNav = await getTranslations("Nav");
  const tHome = await getTranslations("HomeFigma");

  return (
    <section className="fg-page-x flex min-h-screen flex-col justify-between pb-[clamp(2.5rem,5vh,4rem)] pt-[clamp(1.5rem,3vh,2.5rem)]">
      {/* top bar — brand, nav, and the short rule that runs off the left edge */}
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

      {/* headline + actions */}
      <div className="py-[clamp(2rem,6vh,5rem)]">
        <h1 className="fg-display lowercase">
          <span className="block">{t("titleLine1")}</span>
          <span className="block">{t("titleLine2")}</span>
        </h1>

        <div className="mt-[clamp(1.5rem,4vh,3rem)] flex flex-wrap gap-4">
          <Link href="/contact" className="fg-btn fg-mid lowercase">
            {t("bookCall")}
          </Link>
          <Link href="/pricing" className="fg-btn fg-mid lowercase">
            {t("seePricing")}
          </Link>
        </div>
      </div>

      {/* footline — positioning + mark */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[clamp(1.25rem,2.5vw,3rem)] font-normal uppercase leading-none tracking-[-0.04em]">
            {tHome("marketingAutomation")}
          </p>
          <p className="fg-small mt-2 text-black/80">{tHome("basedIn")}</p>
        </div>

        <Image
          src="/logo/reich-mark-figma.png"
          alt="Reich Studio"
          width={180}
          height={138}
          priority
          className="h-auto w-[clamp(4.5rem,9.4vw,11.25rem)] shrink-0 mix-blend-multiply"
        />
      </div>
    </section>
  );
}
