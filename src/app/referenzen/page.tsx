import PageHero from "@/components/PageHero";
import StatsOverview from "@/components/StatsOverview";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { stats, statsSource } from "@/lib/referenzen";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/referenzen",
  "Reich Studio — Work",
  "Real numbers from real projects — results from marketing and automation work."
);

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        lines={["Numbers", "that count."]}
        subtext="Real results from real work — no photo spreads, no filler. Just what matters in the end."
      />
      <StatsOverview stats={stats} source={statsSource} />
      <Testimonials />
      <CtaBand
        heading="Want numbers like these for your field?"
        subtext="Tell me what it's about — we'll figure out the rest in a call."
      />
    </>
  );
}
