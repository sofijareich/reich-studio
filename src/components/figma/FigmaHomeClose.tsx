import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";
import FigmaArrowLink from "./FigmaArrowLink";

/**
 * End of the homepage narrative — the ask, after the story has been told.
 * No band, no filled button: a heading and two arrow links.
 */
export default async function FigmaHomeClose() {
  const t = await getTranslations("CtaBand");
  const tHero = await getTranslations("Hero");

  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(5rem,15vh,11rem)]">
      <FigmaReveal>
        <h2 className="fg-h2 max-w-[18ch] lowercase">{t("heading")}</h2>
        <p className="fg-lead mt-[clamp(1rem,2.5vh,1.75rem)] max-w-[44ch] text-black/70">
          {t("subtext")}
        </p>
      </FigmaReveal>

      <FigmaReveal
        delay={0.1}
        className="mt-[clamp(1.75rem,4vh,3rem)] flex flex-wrap gap-x-[clamp(1.5rem,4vw,3rem)] gap-y-3"
      >
        <FigmaArrowLink href="/contact">{t("bookCall")}</FigmaArrowLink>
        <FigmaArrowLink href="/pricing">{tHero("seePricing")}</FigmaArrowLink>
      </FigmaReveal>
    </section>
  );
}
