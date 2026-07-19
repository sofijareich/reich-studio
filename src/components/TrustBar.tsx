import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Direkter Draht",
    text: "Du sprichst mit mir. Nicht mit einem Account-Team, das dich weiterreicht.",
  },
  {
    title: "Systeme, keine Reportings",
    text: "Automatisierung, die läuft — statt Dashboards, die niemand liest.",
  },
  {
    title: "Klar statt Buzzword",
    text: "Jeder Begriff, den ich benutze, hat ein konkretes Beispiel dahinter.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        {POINTS.map((point, i) => (
          <Reveal key={point.title} className={i === 1 ? "sm:translate-y-2" : ""}>
            <p className="mb-3 text-2xl gold-text font-semibold">0{i + 1}</p>
            <h3 className="text-lg font-semibold">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/60">{point.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
