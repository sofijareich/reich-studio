import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-6">Die Ausgangslage</p>
          <p className="text-2xl leading-snug font-medium sm:text-3xl">
            Du bist gut in dem, was du tust. Aber Content, Posts und
            Follow-ups fressen dir genau die Zeit weg, die du eigentlich für
            Kund:innen brauchst.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-fg/60">
            Die meisten Marketing-Agenturen verkaufen dir Buzzwords und
            Reportings, die niemand versteht. Reich Studio baut dir
            stattdessen Systeme, die automatisiert im Hintergrund laufen —
            ohne dass du selbst zur Marketing-Expertin werden musst.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
