import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeTheme from "@/components/figma/HomeTheme";
import FigmaHero from "@/components/figma/FigmaHero";
import FigmaSituation from "@/components/figma/FigmaSituation";
import FigmaRoadmap from "@/components/figma/FigmaRoadmap";
import FigmaStats from "@/components/figma/FigmaStats";
import FigmaTrust from "@/components/figma/FigmaTrust";
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

  return (
    <>
      <HomeTheme />
      {/* homepage narrative, top to bottom:
          hero → the situation → the roadmap → results → voices → the ask → newsletter */}
      <FigmaHero />
      <FigmaSituation />
      <FigmaRoadmap
        eyebrow={tProcess("eyebrow")}
        title={tProcess("title")}
        steps={steps}
      />
      <FigmaStats />
      <FigmaTrust />
      <FigmaHomeClose />
      <FigmaNewsletter />
    </>
  );
}
