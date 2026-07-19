import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const ITEMS = [
  { src: "/images/referenz-automation.png", label: "Automatisierung" },
  { src: "/images/referenz-content.png", label: "Content-Systeme" },
  { src: "/images/referenz-trust.png", label: "Vertrauensaufbau" },
];

export default function ReferenzenTeaser() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Referenzen</p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Wie ein Ergebnis aussehen kann.
              </h2>
            </div>
            <Link
              href="/referenzen"
              className="text-sm font-medium text-gold underline underline-offset-4"
            >
              Alle Referenzen →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <Reveal key={item.label}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-fg/90">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
