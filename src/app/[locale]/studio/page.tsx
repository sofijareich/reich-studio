import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeTheme from "@/components/figma/HomeTheme";
import FigmaPageHero from "@/components/figma/FigmaPageHero";
import FigmaAbout from "@/components/figma/FigmaAbout";
import FigmaAiWorkflow from "@/components/figma/FigmaAiWorkflow";
import FigmaCta from "@/components/figma/FigmaCta";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StudioPage" });
  return pageMetadata(locale, "/studio", t("metaTitle"), t("metaDescription"));
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("StudioPage");

  return (
    <>
      <HomeTheme />
      <FigmaPageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <FigmaAbout />
      <FigmaAiWorkflow />
      <FigmaCta heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
