import Link from "next/link";
import Reveal from "./Reveal";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Leistungen</p>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Drei Wege, wie wir zusammenarbeiten können.
            </h2>
            <Link
              href="/preise"
              className="text-sm font-medium text-gold underline underline-offset-4"
            >
              Alle Preise im Detail →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} className={i === 1 ? "md:-translate-y-2" : ""}>
              <div
                className={`h-full rounded-2xl p-8 ${
                  service.featured ? "card-surface-gold" : "card-surface"
                }`}
              >
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  {service.price}
                  <span className="text-base font-normal text-fg/50">
                    {" "}
                    {service.period}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg/60">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-fg/70">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
