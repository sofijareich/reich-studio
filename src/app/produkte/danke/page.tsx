import type { Metadata } from "next";
import { product } from "@/lib/product";

export const metadata: Metadata = {
  title: `Reich Studio — Thanks for your purchase`,
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-10 sm:pt-48">
      <div className="glow h-72 w-72 -translate-x-1/2 -translate-y-1/4" style={{ top: 0, left: "50%" }} />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-6">Purchase confirmed</p>
        <h1 className="display-heading text-4xl sm:text-6xl">
          Thanks! <span className="gold-text">Here&apos;s your download.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg text-fg/60">
          {product.name} — both formats, ready to download.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/downloads/AI-Fundament-Hochformat.pdf"
            download
            className="gold-btn inline-block w-full rounded-full px-8 py-4 text-center text-sm font-semibold text-bg sm:w-auto"
          >
            Download portrait
          </a>
          <a
            href="/downloads/AI-Fundament-Querformat.pdf"
            download
            className="inline-block w-full rounded-full border border-gold/40 px-8 py-4 text-center text-sm font-semibold text-gold sm:w-auto"
          >
            Download landscape
          </a>
        </div>

        <p className="mt-10 text-sm text-fg/45">
          Save this page or the files directly — if anything goes wrong, just email{" "}
          <a href="mailto:sofijareich@gmail.com" className="underline">
            sofijareich@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
