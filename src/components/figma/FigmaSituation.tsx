import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";

/**
 * Step 1 of the homepage narrative: the situation the client is in, then
 * the three things that make Reich Studio different. Plain hairline rules,
 * nothing shaded.
 */
export default async function FigmaSituation() {
  const t = await getTranslations("Problem");
  const tTrust = await getTranslations("TrustBar");
  const points = tTrust.raw("points") as { title: string; text: string }[];

  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(4rem,11vh,8rem)]">
      <FigmaReveal>
        <p className="fg-small uppercase text-black/60">{t("eyebrow")}</p>
        <p className="fg-lead mt-[clamp(1rem,2.5vh,1.75rem)] max-w-[36ch] text-black">
          {t("lead")}
        </p>
      </FigmaReveal>

      <FigmaReveal delay={0.1}>
        <p className="fg-mid mt-[clamp(1.25rem,3vh,2rem)] max-w-[62ch] text-black/70">
          {t("body")}
        </p>
      </FigmaReveal>

      <div className="mt-[clamp(3rem,7vh,5.5rem)] grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-[clamp(2rem,4vh,3rem)] sm:grid-cols-3">
        {points.map((p, i) => (
          <FigmaReveal key={p.title} delay={i * 0.1}>
            <div className="border-t border-black pt-[clamp(0.75rem,1.6vh,1.25rem)]">
              <p className="fg-stat-value">{String(i + 1).padStart(2, "0")}</p>
              <p className="fg-mid mt-[0.5em] lowercase">{p.title}</p>
              <p className="fg-small mt-[0.5em] text-black/60">{p.text}</p>
            </div>
          </FigmaReveal>
        ))}
      </div>
    </section>
  );
}
