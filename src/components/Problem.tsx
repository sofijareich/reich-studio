import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

export default async function Problem() {
  const t = await getTranslations("Problem");

  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-6">{t("eyebrow")}</p>
          <p className="text-2xl leading-snug font-medium sm:text-3xl">{t("lead")}</p>
          <p className="mt-6 text-lg leading-relaxed text-fg/60">{t("body")}</p>
        </Reveal>
      </div>
    </section>
  );
}
