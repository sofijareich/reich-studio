import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductDetail from "@/components/ProductDetail";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { product, productFaq } from "@/lib/product";

export const metadata: Metadata = {
  title: `Reich Studio — ${product.name}`,
  description: product.description,
};

export default function ProduktePage() {
  return (
    <>
      <PageHero
        eyebrow="Digitales Produkt"
        lines={["Selbst automatisieren.", "Ohne Agentur."]}
        subtext={product.description}
      />
      <ProductDetail />
      <Faq
        eyebrow="Fragen zum Kit"
        heading="Was du wissen solltest"
        items={productFaq}
      />
      <CtaBand
        heading="Lieber alles abgeben statt selbst einrichten?"
        subtext="Im Erstgespräch schauen wir, ob eine Zusammenarbeit mit Reich Studio mehr Sinn macht."
      />
    </>
  );
}
