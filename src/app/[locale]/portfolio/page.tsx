import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeTheme from "@/components/figma/HomeTheme";
import FigmaPortfolioHero from "@/components/figma/FigmaPortfolioHero";
import FigmaPortfolioNav from "@/components/figma/FigmaPortfolioNav";
import FigmaPortfolioProject from "@/components/figma/FigmaPortfolioProject";
import FigmaCta from "@/components/figma/FigmaCta";
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
      <HomeTheme />
      <FigmaPortfolioHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1"), t("heroLine2")]}
        subtext={t("heroSubtext")}
      />
      <FigmaPortfolioNav
        navLabel={t("navLabel")}
        projects={projects.map((p) => ({ id: p.id, shortName: p.shortName }))}
      />
      {projects.map((project, i) => (
        <FigmaPortfolioProject
          key={project.id}
          project={project}
          index={i}
          originLabel={t("originLabel")}
          approachLabel={t("approachLabel")}
          galleryLabels={{
            viewAllPhotos: t("viewAllPhotos"),
            allPhotosHeading: t("allPhotosHeading"),
            closeLightbox: t("closeLightbox"),
            backToGrid: t("backToGrid"),
            prevPhoto: t("prevPhoto"),
            nextPhoto: t("nextPhoto"),
            playVideo: t("playVideo"),
            pauseVideo: t("pauseVideo"),
            muteVideo: t("muteVideo"),
            unmuteVideo: t("unmuteVideo"),
          }}
        />
      ))}
      <FigmaCta heading={t("ctaHeading")} subtext={t("ctaSubtext")} />
    </>
  );
}
