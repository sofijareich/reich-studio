import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Reich Studio — Über uns",
  description:
    "Reich Studio ist Sofijas Ein-Personen-Studio für Marketing- und Automatisierungssysteme. Persönlich, ehrlich, ohne Buzzwords.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Reich Studio"
        lines={["Ein Name.", "Eine Verantwortung."]}
        subtext="Kein Account-Team, kein anonymes Studio. Nur eine Person, die für das Ergebnis geradesteht."
      />
      <About />
      <CtaBand
        heading="Lust, mich kennenzulernen?"
        subtext="Im Erstgespräch klären wir in 20 Minuten, ob es passt."
      />
    </>
  );
}
