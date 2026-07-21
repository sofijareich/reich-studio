import Reveal from "./Reveal";
import DecodeNumber from "./DecodeNumber";
import type { Stat } from "@/lib/referenzen";

export default function StatsOverview({
  stats,
  source,
}: {
  stats: Stat[];
  source: string;
}) {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-mascot-spot="stats">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="card-surface-gold h-full rounded-2xl p-6">
                <p className="gold-text text-4xl font-bold tracking-tight sm:text-5xl">
                  <DecodeNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium text-fg">{stat.label}</p>
                {stat.sublabel && <p className="mt-1 text-xs text-fg/45">{stat.sublabel}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 text-xs text-fg/35">{source}</p>
        </Reveal>
      </div>
    </section>
  );
}
