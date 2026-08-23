import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import FaqJsonLd from "@/components/FaqJsonLd";
import {
  ServiceIntro,
  ServiceList,
  ServiceJsonLd,
  type ServiceBlock,
} from "@/components/ServiceSections";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "MarketingAutomationPage",
  });
  return pageMetadata(
    locale,
    "/services/marketing-automation",
    t("metaTitle"),
    t("metaDescription")
  );
}

export default async function MarketingAutomationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("MarketingAutomationPage");
  const blocks = t.raw("blocks") as ServiceBlock[];
  const faqItems = t.raw("faq") as { q: string; a: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <ServiceIntro lead={t("introLead")} body={t("introBody")} />
      <ServiceList
        eyebrow={t("blocksEyebrow")}
        heading={t("blocksHeading")}
        items={blocks}
      />
      <Faq heading={t("faqHeading")} items={faqItems} />
      <FaqJsonLd items={faqItems} />
      <ServiceJsonLd
        name={t("schemaName")}
        description={t("metaDescription")}
        serviceType={t("schemaType")}
        url={
          locale === "de"
            ? "/de/leistungen/marketing-automatisierung"
            : "/services/marketing-automation"
        }
      />
      <CtaBand heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
