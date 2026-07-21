import PageHero from "@/components/PageHero";
import PricingDetail from "@/components/PricingDetail";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/preise",
  "Reich Studio — Preise",
  "Drei Pakete: Starter ab CHF 2'800 einmalig, Growth ab CHF 2'500/Monat, Full-Service ab CHF 5'000/Monat."
);

const FAQ_ITEMS = [
  {
    q: "Sind das die Endpreise?",
    a: "Das sind Startpreise. Der genaue Preis hängt von deinem Fachgebiet und Umfang ab — das klären wir im Erstgespräch, bevor irgendetwas verbindlich wird.",
  },
  {
    q: "Muss ich mich langfristig binden?",
    a: "Starter ist einmalig, kein Abo. Bei Growth und Full-Service besprechen wir im Erstgespräch die Laufzeit, die für dich sinnvoll ist.",
  },
  {
    q: "Was, wenn ich nicht weiß, welches Paket passt?",
    a: "Das ist der Normalfall, nicht die Ausnahme. Im Erstgespräch schauen wir gemeinsam, wo du stehst und was wirklich Sinn macht.",
  },
  {
    q: "Kann ich später wechseln?",
    a: "Ja. Die Pakete sind ein Ausgangspunkt, kein Vertrag in Stein — wir passen an, wenn sich dein Bedarf ändert.",
  },
  {
    q: "Wie schnell sehe ich erste Ergebnisse?",
    a: "Bei Starter meist innerhalb weniger Wochen ab Projektstart. Bei Growth und Full-Service hängt es vom Umfang ab — konkrete Zeitrahmen besprechen wir im Erstgespräch.",
  },
  {
    q: "Was, wenn mein Fachgebiet sehr speziell ist?",
    a: "Genau dafür ist Reich Studio da. Je spezifischer dein Fachgebiet, desto klarer lässt sich Vertrauen bei Endkund:innen aufbauen — wir finden gemeinsam die passende Herangehensweise.",
  },
];

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="Preise"
        lines={["Klar kalkuliert.", "Kein Kleingedrucktes."]}
        subtext="Drei Pakete, drei Ausgangspunkte. Der genaue Umfang wird im Erstgespräch auf dein Fachgebiet zugeschnitten."
      />
      <PricingDetail />
      <Faq heading="Fragen zu den Preisen" items={FAQ_ITEMS} />
      <CtaBand
        heading="Welches Paket passt zu dir?"
        subtext="Im Erstgespräch finden wir es gemeinsam heraus."
      />
    </>
  );
}
