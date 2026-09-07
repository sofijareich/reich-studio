import { getTranslations } from "next-intl/server";
import type { Stat } from "@/lib/referenzen";
import FigmaReveal from "./FigmaReveal";

/**
 * The Figma lays these out as a staggered diagonal rather than a grid: each
 * number sits at its own indent, with its label hanging off the opposite side.
 * The offsets below repeat if there are ever more stats than entries here.
 */
const LAYOUT = [
  { indent: "18%", labelSide: "right" as const },
  { indent: "34%", labelSide: "left" as const },
  { indent: "10%", labelSide: "right" as const },
  { indent: "40%", labelSide: "left" as const },
];

function formatValue(stat: Stat) {
  return `${stat.prefix ?? ""}${stat.value.toLocaleString("de-CH")}${stat.suffix ?? ""}`;
}

export default async function FigmaStats() {
  const tStats = await getTranslations("Stats");
  const stats = tStats.raw("items") as Stat[];

  return (
    <section className="fg-page-x py-[clamp(4rem,12vh,9rem)]">
      <div className="flex flex-col gap-[clamp(2rem,6vh,4.5rem)]">
        {stats.map((stat, i) => {
          const layout = LAYOUT[i % LAYOUT.length];
          const labelBlock = (
            <div
              className={`flex flex-col justify-end pb-[0.6em] ${
                layout.labelSide === "left" ? "lg:text-right" : ""
              }`}
            >
              <p className="fg-lead lowercase">{stat.label}</p>
              {stat.sublabel && (
                <p className="fg-small mt-1 text-black/70">{stat.sublabel}</p>
              )}
            </div>
          );

          return (
            <FigmaReveal key={stat.label} delay={i * 0.08} y={16}>
              <div
                className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-[clamp(1rem,2vw,2.5rem)]"
                style={{ marginInlineStart: `min(${layout.indent}, 30vw)` }}
              >
                {layout.labelSide === "left" && (
                  <div className="order-1 lg:order-none">{labelBlock}</div>
                )}
                <p className="fg-display order-2 lg:order-none">{formatValue(stat)}</p>
                {layout.labelSide === "right" && (
                  <div className="order-1 lg:order-none">{labelBlock}</div>
                )}
              </div>
            </FigmaReveal>
          );
        })}
      </div>

      <p className="fg-small mt-[clamp(2rem,5vh,3.5rem)] max-w-[70ch] text-black/50">
        {tStats("source")}
      </p>
    </section>
  );
}
