import Reveal from "./Reveal";

const STEPS = [
  {
    step: "01",
    title: "Kennenlernen",
    text: "Im Erstgespräch schauen wir, wo dir Marketing gerade Zeit stiehlt — und was sich davon automatisieren lässt.",
  },
  {
    step: "02",
    title: "Aufbauen",
    text: "Ich baue die Website, den Content-Flow und die Automatisierungen, die zu deinem Fachgebiet passen.",
  },
  {
    step: "03",
    title: "Laufen lassen",
    text: "Das System läuft im Hintergrund. Du bekommst nur, was wichtig ist — den Rest übernehme ich.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">So arbeiten wir</p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Drei Schritte. Kein Kleingedrucktes.
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {STEPS.map((s) => (
            <Reveal key={s.step}>
              <div className="border-t border-gold/40 pt-6">
                <p className="gold-text text-4xl font-semibold">{s.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
