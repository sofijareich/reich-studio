import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FigmaPageHero from "@/components/figma/FigmaPageHero";
import FigmaProductDetail from "@/components/figma/FigmaProductDetail";
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
  const t = await getTranslations({ locale, namespace: "ProductsPage" });
  const tProduct = await getTranslations({ locale, namespace: "Product" });
  return pageMetadata(
    locale,
    "/products",
    t("metaTitle", { productName: tProduct("name") }),
    tProduct("description")
  );
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductsPage");
  const tProduct = await getTranslations("Product");
  const faqItems = tProduct.raw("faq") as { q: string; a: string }[];

  return (
    <>
      <FigmaPageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={tProduct("description")}
        breadcrumbHref="/products"
      />
      <FigmaProductDetail />
      <FigmaFaq eyebrow={t("faqEyebrow")} heading={t("faqHeading")} items={faqItems} />
      <FaqJsonLd items={faqItems} />
      <FigmaCta heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
