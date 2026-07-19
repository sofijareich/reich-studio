import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Reich Studio — Kontakt",
  description:
    "Kurze Nachricht reicht. Sofija meldet sich innert ein bis zwei Tagen persönlich zurück.",
};

const FAQ_ITEMS = [
  {
    q: "Was passiert nach meiner Anfrage?",
    a: "Ich melde mich persönlich, meist innert ein bis zwei Tagen, und wir vereinbaren ein kurzes Erstgespräch.",
  },
  {
    q: "Kostet das Erstgespräch etwas?",
    a: "Nein. Es dient dazu, zu klären, ob und wie wir zusammenarbeiten.",
  },
  {
    q: "Ich weiss noch nicht, was ich brauche — ist das ein Problem?",
    a: "Nein. Die meisten wissen das nicht genau. Dafür ist das Gespräch da.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        lines={["Lass uns", "reden."]}
        subtext="Kurze Nachricht reicht. Ich melde mich persönlich zurück — meist innert ein bis zwei Tagen."
      />
      <Contact />
      <Faq eyebrow="Bevor du schreibst" heading="Kurz beantwortet" items={FAQ_ITEMS} />
    </>
  );
}
