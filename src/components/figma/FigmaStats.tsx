import { getTranslations } from "next-intl/server";
import type { Stat } from "@/lib/referenzen";
import FigmaReveal from "./FigmaReveal";

function formatValue(stat: Stat) {
  return `${stat.prefix ?? ""}${stat.value.toLocaleString("de-CH")}${stat.suffix ?? ""}`;
}

/**
 * Results — a clean aligned grid (one hairline-topped cell per number),
 * matching the portfolio's stat blocks. Was a diagonal cascade before;
 * the rebuilt homepage wants every section to read as structured.
 */
export default async function FigmaStats() {
  const tStats = await getTranslations("Stats");
  const stats = tStats.raw("items") as Stat[];

  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(4rem,11vh,8rem)]">
      <div className="grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-[clamp(2rem,5vh,3.5rem)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FigmaReveal key={stat.label} delay={i * 0.1}>
            <div className="border-t border-black pt-[clamp(0.75rem,1.6vh,1.25rem)]">
              <p className="fg-stat-value">{formatValue(stat)}</p>
              <p className="fg-small mt-[0.5em] lowercase text-black/80">{stat.label}</p>
              {stat.sublabel && (
                <p className="fg-small mt-[0.15em] text-black/60">{stat.sublabel}</p>
              )}
            </div>
          </FigmaReveal>
        ))}
      </div>

      <p className="fg-small mt-[clamp(2rem,5vh,3.5rem)] max-w-[70ch] text-black/60">
        {tStats("source")}
      </p>
    </section>
  );
}
