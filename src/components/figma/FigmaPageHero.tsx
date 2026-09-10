import FigmaTopNav from "./FigmaTopNav";
import FigmaCharReveal from "./FigmaCharReveal";
import FigmaReveal from "./FigmaReveal";

/**
 * Top nav + eyebrow + headline + subtext — the shape every inner page in
 * the Figma redesign opens with (first built for /portfolio). Generic so
 * it doesn't need rebuilding per page; page-specific content stays in the
 * sections that follow it.
 *
 * Headline reveals character by character on load; eyebrow and subtext
 * fade in under it — the same intro motion the homepage hero uses.
 */
export default function FigmaPageHero({
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
        <FigmaReveal y={12}>
          <p className="fg-small uppercase text-black/50">{eyebrow}</p>
        </FigmaReveal>
        <h1 className="fg-display mt-[clamp(0.5rem,1.5vh,1rem)] lowercase">
          {lines.map((line, i) => (
            <span key={line} className="block">
              <FigmaCharReveal text={line} delay={0.1 + i * 0.25} />
            </span>
          ))}
        </h1>
        <FigmaReveal delay={0.2} y={12}>
          <p className="fg-lead mt-[clamp(1.5rem,3vh,2.5rem)] max-w-[42ch] text-black/70">
            {subtext}
          </p>
        </FigmaReveal>
      </div>
    </section>
  );
}
