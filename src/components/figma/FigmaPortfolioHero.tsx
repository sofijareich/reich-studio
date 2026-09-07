import FigmaTopNav from "./FigmaTopNav";

export default function FigmaPortfolioHero({
  eyebrow,
  lines,
  subtext,
}: {
  eyebrow: string;
  lines: string[];
  subtext: string;
}) {
  return (
    <section className="fg-page-x pb-[clamp(3rem,7vh,5rem)] pt-[clamp(1.5rem,3vh,2.5rem)]">
      <FigmaTopNav />

      <div className="pt-[clamp(3rem,9vh,7rem)]">
        <p className="fg-small uppercase text-black/50">{eyebrow}</p>
        <h1 className="fg-display mt-[clamp(0.5rem,1.5vh,1rem)] lowercase">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="fg-lead mt-[clamp(1.5rem,3vh,2.5rem)] max-w-[42ch] text-black/70">
          {subtext}
        </p>
      </div>
    </section>
  );
}
