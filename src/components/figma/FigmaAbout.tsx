import Image from "next/image";
import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";

export default async function FigmaAbout() {
  const t = await getTranslations("About");
  const values = t.raw("values") as { title: string; text: string }[];

  return (
    <>
      <section className="fg-page-x py-[clamp(3rem,8vh,6rem)]">
        <div className="grid gap-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FigmaReveal className="space-y-[clamp(1rem,2.5vh,1.5rem)]">
            <p className="fg-lead text-black">{t("lead")}</p>
            <p className="fg-mid text-black/70">{t("p1")}</p>
            <p className="fg-mid text-black/70">{t("p2")}</p>
            <p className="fg-mid text-black/70">{t("p3")}</p>
          </FigmaReveal>

          <FigmaReveal delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden border border-black/15">
              <Image
                src="/images/sofija.jpg"
                alt={t("imageAlt")}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FigmaReveal>
        </div>
      </section>

      <section className="fg-page-x py-[clamp(3rem,8vh,6rem)]">
        <FigmaReveal>
          <p className="fg-small uppercase text-black/50">{t("valuesEyebrow")}</p>
          <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] max-w-2xl lowercase">
            {t("valuesTitle")}
          </h2>
        </FigmaReveal>

        <div className="mt-[clamp(2.5rem,6vh,4rem)] grid gap-[clamp(2rem,4vw,3rem)] sm:grid-cols-3">
          {values.map((v, i) => (
            <FigmaReveal key={v.title} delay={i * 0.1}>
              <div className="border-t border-black pt-[clamp(0.75rem,1.6vh,1.25rem)]">
                <p className="fg-mid lowercase">{v.title}</p>
                <p className="fg-small mt-[clamp(0.5rem,1.2vh,0.75rem)] text-black/60">{v.text}</p>
              </div>
            </FigmaReveal>
          ))}
        </div>
      </section>
    </>
  );
}
