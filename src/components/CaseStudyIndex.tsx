import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import type { CaseStudy } from "@/lib/referenzen";

export default function CaseStudyIndex({ items }: { items: CaseStudy[] }) {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        {items.map((study) => (
          <Reveal key={study.id}>
            <Link
              href={`/referenzen/${study.id}`}
              className="group grid gap-0 overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-gold/40 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]"
            >
              <div className="relative aspect-[4/3] sm:aspect-auto">
                <Image
                  src={study.cover}
                  alt={study.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="eyebrow mb-3">{study.category}</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{study.name}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-fg/60">{study.logline}</p>
                <p className="mt-4 text-xs text-fg/40">{study.duration}</p>
                <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-gold">
                  Case Study ansehen
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
