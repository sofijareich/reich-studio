import PageHero from "@/components/PageHero";
import About from "@/components/About";
import AiWorkflow from "@/components/AiWorkflow";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/studio",
  "Reich Studio — Über uns",
  "Reich Studio ist Sofijas Ein-Personen-Studio für Marketing- und Automatisierungssysteme. Persönlich, ehrlich, ohne Buzzwords."
);

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Reich Studio"
        lines={["Ein Name.", "Eine Verantwortung."]}
        subtext="Kein Account-Team, kein anonymes Studio. Nur eine Person, die für das Ergebnis geradesteht."
      />
      <About />
      <AiWorkflow />
      <CtaBand
        heading="Lust, mich kennenzulernen?"
        subtext="Im Erstgespräch klären wir in 20 Minuten, ob es passt."
      />
    </>
  );
}
