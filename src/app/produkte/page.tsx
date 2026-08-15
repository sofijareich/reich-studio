import PageHero from "@/components/PageHero";
import ProductDetail from "@/components/ProductDetail";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { product, productFaq } from "@/lib/product";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/produkte", `Reich Studio — ${product.name}`, product.description);

export default function ProduktePage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Product"
        lines={["Automate it yourself.", "No agency."]}
        subtext={product.description}
      />
      <ProductDetail />
      <Faq
        eyebrow="Questions about the kit"
        heading="What you should know"
        items={productFaq}
      />
      <CtaBand
        heading="Would rather hand it all off than set it up yourself?"
        subtext="In the first call, we'll see if working with Reich Studio makes more sense."
      />
    </>
  );
}
