import Link from "next/link";
import Reveal from "./Reveal";
import DecodeNumber from "./DecodeNumber";
import { stats } from "@/lib/referenzen";

const FEATURED = stats.slice(0, 3);

export default function ReferenzenTeaser() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Referenzen</p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Zahlen, die für sich sprechen.
              </h2>
            </div>
            <Link
              href="/referenzen"
              className="text-sm font-medium text-gold underline underline-offset-4"
            >
              Alle Referenzen →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {FEATURED.map((stat) => (
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
