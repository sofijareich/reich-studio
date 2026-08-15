import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

export default async function About() {
  const t = await getTranslations("About");
  const values = t.raw("values") as { title: string; text: string }[];

  return (
    <>
      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-fg/70">
              <p className="text-2xl font-medium text-fg">{t("lead")}</p>
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/30">
              <Image
                src="/images/sofija.jpg"
                alt={t("imageAlt")}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">{t("valuesEyebrow")}</p>
            <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("valuesTitle")}
            </h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
