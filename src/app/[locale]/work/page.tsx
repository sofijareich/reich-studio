import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import StatsOverview from "@/components/StatsOverview";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import type { Stat } from "@/lib/referenzen";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WorkPage" });
  return pageMetadata(locale, "/work", t("metaTitle"), t("metaDescription"));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WorkPage");
  const tStats = await getTranslations("Stats");
  const stats = tStats.raw("items") as Stat[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <StatsOverview stats={stats} source={tStats("source")} />
      <Testimonials />
      <CtaBand heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
