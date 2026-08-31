import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import PortfolioNav from "@/components/PortfolioNav";
import PortfolioProject from "@/components/PortfolioProject";
import CtaBand from "@/components/CtaBand";
import type { PortfolioProject as PortfolioProjectType } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PortfolioPage" });
  return pageMetadata(locale, "/portfolio", t("metaTitle"), t("metaDescription"));
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PortfolioPage");
  const projects = t.raw("projects") as PortfolioProjectType[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <PortfolioNav
        navLabel={t("navLabel")}
        projects={projects.map((p) => ({ id: p.id, shortName: p.shortName }))}
      />
      {projects.map((project, i) => (
        <PortfolioProject
          key={project.id}
          project={project}
          index={i}
          originLabel={t("originLabel")}
          approachLabel={t("approachLabel")}
        />
      ))}
      <CtaBand heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
