import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Direct line",
    text: "You talk to me. Not an account team that hands you off.",
  },
  {
    title: "Systems, not reports",
    text: "Automation that runs — instead of dashboards nobody reads.",
  },
  {
    title: "Clear, not buzzwords",
    text: "Every term I use comes with a concrete example behind it.",
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
