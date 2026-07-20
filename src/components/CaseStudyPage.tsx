import Image from "next/image";
import Reveal from "./Reveal";
import DecodeNumber from "./DecodeNumber";
import CtaBand from "./CtaBand";
import type { CaseStudy } from "@/lib/referenzen";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-16 sm:px-10 sm:pt-48">
        <div className="glow h-72 w-72 -translate-x-1/2 -translate-y-1/4 sm:h-96 sm:w-96" style={{ top: 0, left: "20%" }} />
        <div className="relative mx-auto max-w-5xl">
          <p className="rise-in eyebrow mb-6">{study.category}</p>
          <h1 className="display-heading">
            <span className="rise-in gold-text block" style={{ animationDelay: "0.15s" }}>
              {study.name}
            </span>
          </h1>
          <p className="rise-in mt-8 max-w-xl text-lg text-fg/60" style={{ animationDelay: "0.3s" }}>
            {study.logline}
          </p>
          <p className="rise-in mt-4 text-sm text-gold" style={{ animationDelay: "0.4s" }}>
            {study.duration}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-fg/70">
          <Reveal>
            <p>{study.origin}</p>
          </Reveal>
          {study.approach && (
            <Reveal>
              <p>{study.approach}</p>
            </Reveal>
          )}
        </div>
      </section>

      {study.stats.length > 0 && (
        <section className="px-6 pb-20 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-4">Zahlen</p>
              <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Was dabei rauskam.
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {study.stats.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="card-surface-gold h-full rounded-2xl p-6">
                    <p className="gold-text text-4xl font-bold tracking-tight sm:text-5xl">
                      <DecodeNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </p>
                    <p className="mt-3 text-sm font-medium text-fg">{stat.label}</p>
                    {stat.sublabel && (
                      <p className="mt-1 text-xs text-fg/45">{stat.sublabel}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
            {study.statsSource && (
              <Reveal>
                <p className="mt-6 text-xs text-fg/35">{study.statsSource}</p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">Medien</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Wofür jedes Medium gedacht war.
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {study.media.map((m) => (
              <Reveal key={m.name}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/60">
                    <span className="text-fg/80">Zweck: </span>
                    {m.purpose}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg/60">
                    <span className="text-fg/80">Warum es funktionierte: </span>
                    {m.whyItWorked}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">Galerie</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Fotos, Videos, Print.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.gallery.map((item, i) => (
              <Reveal key={i}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ein ähnliches Projekt im Kopf?"
        subtext="Erzähl mir, worum es geht — den Rest klären wir im Gespräch."
      />
    </>
  );
}
