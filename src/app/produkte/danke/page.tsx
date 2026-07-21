import type { Metadata } from "next";
import { product } from "@/lib/product";

export const metadata: Metadata = {
  title: `Reich Studio — Danke für deinen Kauf`,
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-10 sm:pt-48">
      <div className="glow h-72 w-72 -translate-x-1/2 -translate-y-1/4" style={{ top: 0, left: "50%" }} />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-6">Kauf bestätigt</p>
        <h1 className="display-heading text-4xl sm:text-6xl">
          Danke! <span className="gold-text">Hier ist dein Download.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg text-fg/60">
          {product.name} — beide Formate zum direkten Herunterladen.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/downloads/AI-Fundament-Hochformat.pdf"
            download
            className="gold-btn inline-block w-full rounded-full px-8 py-4 text-center text-sm font-semibold text-bg sm:w-auto"
          >
            Hochformat herunterladen
          </a>
          <a
            href="/downloads/AI-Fundament-Querformat.pdf"
            download
            className="inline-block w-full rounded-full border border-gold/40 px-8 py-4 text-center text-sm font-semibold text-gold sm:w-auto"
          >
            Querformat herunterladen
          </a>
        </div>

        <p className="mt-10 text-sm text-fg/45">
          Speichere diese Seite oder die Dateien direkt ab — bei Problemen einfach an{" "}
          <a href="mailto:sofijareich@gmail.com" className="underline">
            sofijareich@gmail.com
          </a>{" "}
          schreiben.
        </p>
      </div>
    </section>
  );
}
