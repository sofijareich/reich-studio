import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ProductDetail from "@/components/ProductDetail";
import Faq from "@/components/Faq";
import FaqJsonLd from "@/components/FaqJsonLd";
import CtaBand from "@/components/CtaBand";
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
      <PageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={tProduct("description")}
      />
      <ProductDetail />
      <Faq eyebrow={t("faqEyebrow")} heading={t("faqHeading")} items={faqItems} />
      <FaqJsonLd items={faqItems} />
      <CtaBand heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
