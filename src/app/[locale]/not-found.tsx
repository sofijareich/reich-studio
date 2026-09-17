import { getTranslations } from "next-intl/server";
import FigmaTopNav from "@/components/figma/FigmaTopNav";
import FigmaReveal from "@/components/figma/FigmaReveal";
import { Link } from "@/i18n/navigation";

// not-found.js doesn't receive route params, so this can't be localized via
// generateMetadata — a static title beats no title at all.
export const metadata = {
  title: "Reich Studio: Page not found / Seite nicht gefunden",
};

export default async function NotFound() {
  const t = await getTranslations("NotFoundPage");

  return (
    <>
      <section className="fg-page-x flex min-h-screen flex-col justify-between pb-[clamp(2.5rem,5vh,4rem)] pt-[clamp(1.5rem,3vh,2.5rem)]">
        <FigmaTopNav />

        <div className="py-[clamp(2rem,6vh,5rem)]">
          <FigmaReveal>
            <p className="fg-small uppercase text-black/60">{t("eyebrow")}</p>
            <h1 className="fg-display mt-[clamp(0.5rem,1.5vh,1rem)] lowercase">
              {t("heading")}
            </h1>
            <p className="fg-lead mt-[clamp(1.5rem,3vh,2.5rem)] max-w-[42ch] text-black/70">
              {t("text")}
            </p>
          </FigmaReveal>

          <FigmaReveal
            delay={0.15}
            y={12}
            className="mt-[clamp(1.5rem,4vh,2.5rem)] flex flex-wrap gap-x-[clamp(1.5rem,4vw,3rem)] gap-y-3"
          >
            <Link href="/" className="fg-btn fg-btn-dark">
              {t("homeLink")}
            </Link>
            <Link href="/contact" className="fg-btn">
              {t("contactLink")}
            </Link>
          </FigmaReveal>
        </div>

        <div />
      </section>
    </>
  );
}
