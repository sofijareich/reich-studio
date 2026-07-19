import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialPlaceholders from "@/components/TestimonialPlaceholders";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Reich Studio — Referenzen",
  description:
    "Wie ein Ergebnis mit Reich Studio aussehen kann — echte Case Studies folgen mit den ersten abgeschlossenen Projekten.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        lines={["Referenzen", "im Aufbau."]}
        subtext="Reich Studio ist jung. Hier zeige ich dir, wie ein Ergebnis aussehen kann — echte Case Studies folgen, sobald sie da sind."
      />
      <PortfolioGrid />
      <TestimonialPlaceholders />
      <CtaBand
        heading="Eines der ersten Projekte sein?"
        subtext="Früh dabei zu sein hat Vorteile — sprich mit mir."
      />
    </>
  );
}
