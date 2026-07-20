import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatsOverview from "@/components/StatsOverview";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { stats, statsSource } from "@/lib/referenzen";

export const metadata: Metadata = {
  title: "Reich Studio — Referenzen",
  description: "Echte Zahlen aus echten Projekten — Ergebnisse aus Marketing- und Automatisierungsarbeit.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        lines={["Zahlen,", "die zählen."]}
        subtext="Echte Ergebnisse aus echter Arbeit — keine Fotostrecken, keine Fülltexte. Nur das, was am Ende zählt."
      />
      <StatsOverview stats={stats} source={statsSource} />
      <Testimonials />
      <CtaBand
        heading="Willst du solche Zahlen für dein Fachgebiet?"
        subtext="Erzähl mir, worum es geht — den Rest klären wir im Gespräch."
      />
    </>
  );
}
