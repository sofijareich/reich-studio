import Image from "next/image";
import { getTranslations } from "next-intl/server";
import FigmaTopNav from "./FigmaTopNav";
import FigmaCharReveal from "./FigmaCharReveal";
import FigmaReveal from "./FigmaReveal";
import FigmaArrowLink from "./FigmaArrowLink";

export default async function FigmaHero() {
  const t = await getTranslations("Hero");
  const tHome = await getTranslations("HomeFigma");

  return (
    <section className="fg-page-x flex min-h-screen flex-col justify-between pb-[clamp(2.5rem,5vh,4rem)] pt-[clamp(1.5rem,3vh,2.5rem)]">
      {/* top bar — brand, nav, and the short rule that runs off the left edge */}
      <FigmaTopNav />

      {/* headline + actions */}
      <div className="py-[clamp(2rem,6vh,5rem)]">
        <h1 className="fg-display lowercase">
          <span className="block">
            <FigmaCharReveal text={t("titleLine1")} />
          </span>
          <span className="block">
            <FigmaCharReveal text={t("titleLine2")} delay={0.3} />
          </span>
        </h1>

        <FigmaReveal delay={0.5} y={12}>
          <p className="fg-lead mt-[clamp(1.25rem,3vh,2rem)] max-w-[46ch] text-black/70">
            {t("subtext")}
          </p>
        </FigmaReveal>

        <FigmaReveal
          delay={0.6}
          y={12}
          className="mt-[clamp(1.5rem,4vh,2.5rem)] flex flex-wrap gap-x-[clamp(1.5rem,4vw,3rem)] gap-y-3"
        >
          <FigmaArrowLink href="/contact">{t("bookCall")}</FigmaArrowLink>
          <FigmaArrowLink href="/pricing">{t("seePricing")}</FigmaArrowLink>
        </FigmaReveal>
      </div>

      {/* footline — positioning + mark */}
      <FigmaReveal delay={0.7} y={12} className="flex items-end justify-between gap-6">
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
      </FigmaReveal>
    </section>
  );
}
