import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FigmaPageHero from "@/components/figma/FigmaPageHero";
import FigmaContact from "@/components/figma/FigmaContact";
import FigmaFaq from "@/components/figma/FigmaFaq";
import FaqJsonLd from "@/components/FaqJsonLd";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return pageMetadata(locale, "/contact", t("metaTitle"), t("metaDescription"));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  const faqItems = t.raw("faq") as { q: string; a: string }[];

  return (
    <>
      <FigmaPageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <FigmaContact />
      <FigmaFaq eyebrow={t("faqEyebrow")} heading={t("faqHeading")} items={faqItems} />
      <FaqJsonLd items={faqItems} />
    </>
  );
}
