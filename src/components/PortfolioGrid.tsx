import Image from "next/image";
import Reveal from "./Reveal";

const ITEMS = [
  {
    src: "/images/referenz-automation.png",
    label: "Automatisierung",
    caption: "Beispielhafte Darstellung — kein reales Kundenprojekt.",
  },
  {
    src: "/images/referenz-content.png",
    label: "Content-Systeme",
    caption: "Beispielhafte Darstellung — kein reales Kundenprojekt.",
  },
  {
    src: "/images/referenz-trust.png",
    label: "Vertrauensaufbau",
    caption: "Beispielhafte Darstellung — kein reales Kundenprojekt.",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <Reveal key={item.label}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image src={item.src} alt="" fill className="object-cover" />
                </div>
                <div className="card-surface p-5">
                  <p className="text-sm font-semibold text-fg">{item.label}</p>
                  <p className="mt-1 text-xs text-fg/40">{item.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
