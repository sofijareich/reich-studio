import { setRequestLocale } from "next-intl/server";
import HomeTheme from "@/components/figma/HomeTheme";
import FigmaHero from "@/components/figma/FigmaHero";
import FigmaWhy from "@/components/figma/FigmaWhy";
import FigmaStats from "@/components/figma/FigmaStats";
import FigmaTrust from "@/components/figma/FigmaTrust";
import FigmaNewsletter from "@/components/figma/FigmaNewsletter";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeTheme />
      <FigmaHero />
      <FigmaWhy />
      <FigmaStats />
      <FigmaTrust />
      <FigmaNewsletter />
    </>
  );
}
