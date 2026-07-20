import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReferenzAccordion from "@/components/ReferenzAccordion";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { referenzen } from "@/lib/referenzen";

export const metadata: Metadata = {
  title: "Reich Studio — Referenzen",
  description:
    "Echte Projekte von Reich Studio — Food- und Interior-Fotografie, Event-Content und Video-Ads für Gastronomie und Nightlife.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        lines={["Echte Projekte.", "Kein Fülltext."]}
        subtext="Ein Klick auf ein Projekt öffnet die volle Galerie — Fotos und Videos, so wie sie entstanden sind."
      />
      <ReferenzAccordion items={referenzen} />
      <Testimonials />
      <CtaBand
        heading="Dein Projekt könnte das nächste sein."
        subtext="Erzähl mir, worum es geht — den Rest klären wir im Gespräch."
      />
    </>
  );
}
