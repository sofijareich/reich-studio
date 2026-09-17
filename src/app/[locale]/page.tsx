import { getTranslations, setRequestLocale } from "next-intl/server";
import FigmaHero from "@/components/figma/FigmaHero";
import FigmaSituation from "@/components/figma/FigmaSituation";
import FigmaRoadmap from "@/components/figma/FigmaRoadmap";
import FigmaStats from "@/components/figma/FigmaStats";
import FigmaFeaturedTestimonial from "@/components/figma/FigmaFeaturedTestimonial";
import FigmaHomeClose from "@/components/figma/FigmaHomeClose";
import FigmaNewsletter from "@/components/figma/FigmaNewsletter";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tProcess = await getTranslations("Process");
  const steps = tProcess.raw("steps") as {
    step: string;
    title: string;
    text: string;
  }[];

  const tPortfolio = await getTranslations("PortfolioPage");
  const projects = tPortfolio.raw("projects") as {
    id: string;
    testimonial?: { quote: string; author: string; role: string };
  }[];
  const featuredTestimonial = projects.find((p) => p.id === "ebikon-bar")?.testimonial;

  return (
    <>
      {/* homepage narrative, top to bottom:
          hero → the situation → the roadmap → results → one real voice → the ask → newsletter */}
      <FigmaHero />
      <FigmaSituation />
      <FigmaRoadmap
        eyebrow={tProcess("eyebrow")}
        title={tProcess("title")}
        steps={steps}
      />
      <FigmaStats />
      {featuredTestimonial && (
        <FigmaFeaturedTestimonial
          quote={featuredTestimonial.quote}
          author={featuredTestimonial.author}
          role={featuredTestimonial.role}
        />
      )}
      <FigmaHomeClose />
      <FigmaNewsletter />
    </>
  );
}
