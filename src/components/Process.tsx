import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

export default async function Process() {
  const t = await getTranslations("Process");
  const steps = t.raw("steps") as { step: string; title: string; text: string }[];

  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <Reveal key={s.step}>
              <div className="border-t border-gold/40 pt-6">
                <p className="gold-text text-4xl font-semibold">{s.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
