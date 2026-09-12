import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";

type RateItem = { label: string; sublabel: string; low: string; high: string };

function TriangleRight() {
  return (
    <svg
      viewBox="0 0 10 12"
      aria-hidden="true"
      className="mt-[0.45em] h-[0.5em] w-[0.42em] shrink-0 fill-black"
    >
      <path d="M0 0l10 6-10 6z" />
    </svg>
  );
}

/**
 * Replaces the old 3-tier package grid: no packages anymore, just the
 * hourly rate, an explicit "these are estimates, not a price list"
 * disclaimer, and a hairline-rowed list of rough ranges for the most
 * common requests. Exact scope/price is always worked out in the first
 * call — the numbers here are a starting orientation, not a quote.
 */
export default async function FigmaRateCard() {
  const t = await getTranslations("RateCard");
  const items = t.raw("items") as RateItem[];

  return (
    <section className="fg-page-x pb-[clamp(3rem,8vh,6rem)]">
      <FigmaReveal>
        <p className="fg-small uppercase text-black/60">{t("hourlyEyebrow")}</p>
        <p className="fg-stat-value mt-[0.3em]">
          {t("hourlyValue")}
          <span className="fg-small ml-2 text-black/60">{t("hourlyNote")}</span>
        </p>
      </FigmaReveal>

      <FigmaReveal delay={0.1} className="mt-[clamp(1.5rem,3.5vh,2.25rem)] flex gap-[clamp(0.5rem,1vw,1rem)] border-t border-black/15 pt-[clamp(1.5rem,3.5vh,2.25rem)]">
        <TriangleRight />
        <div>
          <p className="fg-small uppercase text-black/60">{t("noteLabel")}</p>
          <p className="fg-mid mt-[0.4em] max-w-[62ch] text-black/80">{t("note")}</p>
        </div>
      </FigmaReveal>

      <FigmaReveal delay={0.15} className="mt-[clamp(3rem,7vh,5rem)]">
        <p className="fg-small uppercase text-black/60">{t("listEyebrow")}</p>
        <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] max-w-2xl lowercase">
          {t("listHeading")}
        </h2>
      </FigmaReveal>

      <div className="mt-[clamp(2rem,5vh,3rem)] divide-y divide-black/15 border-t border-black/15">
        {items.map((item, i) => (
          <FigmaReveal key={item.label} delay={0.05 * i}>
            <div className="grid gap-x-6 gap-y-2 py-[clamp(1.25rem,3vh,1.75rem)] sm:grid-cols-[1fr_auto] sm:items-baseline">
              <div>
                <p className="fg-mid lowercase text-black">{item.label}</p>
                <p className="fg-small mt-[0.35em] text-black/60">{item.sublabel}</p>
              </div>
              <p className="fg-stat-value whitespace-nowrap text-[clamp(1.5rem,2.4vw,2.25rem)] sm:text-right">
                CHF {item.low}–{item.high}
              </p>
            </div>
          </FigmaReveal>
        ))}
      </div>
    </section>
  );
}
