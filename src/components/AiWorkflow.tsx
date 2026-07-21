import Reveal from "./Reveal";

const STAGES = [
  {
    step: "01",
    tool: "Claude",
    text: "Konzept, Recherche und Texte — vom ersten Briefing bis zur fertigen Struktur.",
  },
  {
    step: "02",
    tool: "Claude Code (Terminal)",
    text: "Setzt das Konzept in echte Automatisierungen um — Skripte, Integrationen, Deployments, direkt im Terminal gesteuert.",
  },
  {
    step: "03",
    tool: "OpenClaw AI",
    text: "Übernimmt wiederkehrende Abläufe im Hintergrund, ohne dass jeder Schritt manuell angestossen wird.",
  },
  {
    step: "04",
    tool: "Higgsfield",
    text: "Erstellt Bild- und Video-Content per KI — für Visuals, die sonst ein Fotoshooting gebraucht hätten.",
  },
];

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center text-gold/50 ${
        vertical ? "h-8 w-full" : "h-full w-8"
      }`}
      aria-hidden="true"
    >
      {vertical ? (
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 0V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M0 8H20M20 8L14 2M20 8L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function Node({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-gold/30 px-5 py-2 text-center text-xs font-semibold uppercase tracking-widest text-gold/80">
      {label}
    </div>
  );
}

export default function AiWorkflow() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Wie AI-Automatisierung bei mir aussieht</p>
          <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Von der Idee zum laufenden System.
          </h2>
          <p className="mb-16 max-w-xl text-fg/60">
            Kein Blackbox-Versprechen — das ist der tatsächliche Ablauf, mit dem ich Prozesse automatisiere. Vier Tools, ein durchgängiger Fluss.
          </p>
        </Reveal>

        <Reveal>
          <div className="hidden md:block">
            <Node label="Idee / Aufgabe" />
            <div className="mt-2 grid items-stretch" style={{ gridTemplateColumns: "1fr 32px 1fr 32px 1fr 32px 1fr" }}>
              {STAGES.map((s, i) => (
                <div key={s.tool} className="contents">
                  <div className="card-surface flex flex-col rounded-2xl p-6">
                    <p className="gold-text text-3xl font-semibold">{s.step}</p>
                    <h3 className="mt-3 text-base font-semibold">{s.tool}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg/60">{s.text}</p>
                  </div>
                  {i < STAGES.length - 1 && <Arrow />}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-end">
              <Node label="Fertiges Ergebnis" />
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-0 md:hidden">
            <Node label="Idee / Aufgabe" />
            <Arrow vertical />
            {STAGES.map((s) => (
              <div key={s.tool}>
                <div className="card-surface flex flex-col rounded-2xl p-6">
                  <p className="gold-text text-3xl font-semibold">{s.step}</p>
                  <h3 className="mt-3 text-base font-semibold">{s.tool}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{s.text}</p>
                </div>
                <Arrow vertical />
              </div>
            ))}
            <Node label="Fertiges Ergebnis" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
