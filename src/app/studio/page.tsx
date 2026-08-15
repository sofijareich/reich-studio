import PageHero from "@/components/PageHero";
import About from "@/components/About";
import AiWorkflow from "@/components/AiWorkflow";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/studio",
  "Reich Studio — About",
  "Reich Studio is Sofija's one-person studio for marketing and automation systems. Personal, honest, no buzzwords."
);

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Reich Studio"
        lines={["One name.", "One responsibility."]}
        subtext="No account team, no anonymous studio. Just one person who stands behind the result."
      />
      <About />
      <AiWorkflow />
      <CtaBand
        heading="Want to get to know me?"
        subtext="In the first call, we'll figure out in 20 minutes if it's a fit."
      />
    </>
  );
}
