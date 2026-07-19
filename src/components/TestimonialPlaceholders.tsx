import Reveal from "./Reveal";

const SLOTS = [1, 2, 3];

export default function TestimonialPlaceholders() {
  return (
    <section className="px-6 pb-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Stimmen</p>
          <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Hier stehen bald echte Kundenstimmen.
          </h2>
          <p className="mb-16 max-w-xl text-fg/60">
            Reich Studio ist neu — deshalb zeige ich hier keine erfundenen
            Zitate. Sobald die ersten Projekte laufen, ersetzen echte
            Rückmeldungen diese Platzhalter.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {SLOTS.map((slot) => (
            <Reveal key={slot}>
              <div className="flex h-full flex-col rounded-2xl border border-dashed border-white/15 p-8">
                <p className="text-sm leading-relaxed text-fg/35 italic">
                  „Zitat folgt, sobald ein echtes Projekt abgeschlossen ist.“
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-white/20 text-xs text-fg/30">
                    ?
                  </div>
                  <div>
                    <p className="text-sm text-fg/40">Name folgt</p>
                    <p className="text-xs text-fg/25">Platzhalter</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
