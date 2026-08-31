import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import DecodeNumber from "./DecodeNumber";
import type { Stat } from "@/lib/referenzen";

export default async function ReferenzenTeaser() {
  const t = await getTranslations("ReferenzenTeaser");
  const tStats = await getTranslations("Stats");
  const stats = tStats.raw("items") as Stat[];
  const featured = stats.slice(0, 3);

  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">{t("eyebrow")}</p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("title")}
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-gold underline underline-offset-4"
            >
              {t("seeAll")}
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((stat) => (
            <Reveal key={stat.label}>
              <div className="card-surface-gold h-full rounded-2xl p-8">
                <p className="gold-text text-4xl font-bold tracking-tight sm:text-5xl">
                  <DecodeNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium text-fg">{stat.label}</p>
                {stat.sublabel && <p className="mt-1 text-xs text-fg/45">{stat.sublabel}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
