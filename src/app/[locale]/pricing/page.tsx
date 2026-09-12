import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeTheme from "@/components/figma/HomeTheme";
import FigmaPageHero from "@/components/figma/FigmaPageHero";
import FigmaRateCard from "@/components/figma/FigmaRateCard";
import FigmaFaq from "@/components/figma/FigmaFaq";
import FaqJsonLd from "@/components/FaqJsonLd";
import FigmaCta from "@/components/figma/FigmaCta";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PricingPage" });
  return pageMetadata(locale, "/pricing", t("metaTitle"), t("metaDescription"));
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PricingPage");
  const faqItems = t.raw("faq") as { q: string; a: string }[];

  return (
    <>
      <HomeTheme />
      <FigmaPageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <FigmaRateCard />
      <FigmaFaq heading={t("faqHeading")} items={faqItems} />
      <FaqJsonLd items={faqItems} />
      <FigmaCta heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
