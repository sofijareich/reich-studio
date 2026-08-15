import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import PricingDetail from "@/components/PricingDetail";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
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
      <PageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <PricingDetail />
      <Faq heading={t("faqHeading")} items={faqItems} />
      <CtaBand heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
