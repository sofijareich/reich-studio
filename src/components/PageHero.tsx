export default function PageHero({
  eyebrow,
  lines,
  subtext,
}: {
  eyebrow: string;
  lines: string[];
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-20 sm:px-10 sm:pt-48 sm:pb-24">
      <div className="glow h-72 w-72 -translate-x-1/2 -translate-y-1/4 sm:h-96 sm:w-96" style={{ top: 0, left: "20%" }} />
      <div className="relative mx-auto max-w-5xl">
        <p className="rise-in eyebrow mb-6">{eyebrow}</p>
        <h1 className="display-heading">
          {lines.map((line, i) => (
            <span
              key={line}
              className="rise-in block"
              style={{ animationDelay: `${0.12 + i * 0.12}s` }}
            >
              {i === lines.length - 1 ? <span className="gold-text">{line}</span> : line}
            </span>
          ))}
        </h1>
        {subtext && (
          <p
            className="rise-in mt-8 max-w-xl text-lg text-fg/60"
            style={{ animationDelay: `${0.12 + lines.length * 0.12}s` }}
          >
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
