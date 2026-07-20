import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CaseStudyIndex from "@/components/CaseStudyIndex";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { caseStudies } from "@/lib/referenzen";

export const metadata: Metadata = {
  title: "Reich Studio — Referenzen",
  description:
    "Echte Projekte von Reich Studio — mit Zahlen, Hintergrund und den Medien, die dahinterstecken.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        lines={["Echte Projekte.", "Echte Zahlen."]}
        subtext="Wie jedes Projekt zustande kam, wie lange es lief und wofür jedes Medium gedacht war — ein Klick öffnet die volle Case Study."
      />
      <CaseStudyIndex items={caseStudies} />
      <Testimonials />
      <CtaBand
        heading="Dein Projekt könnte das nächste sein."
        subtext="Erzähl mir, worum es geht — den Rest klären wir im Gespräch."
      />
    </>
  );
}
