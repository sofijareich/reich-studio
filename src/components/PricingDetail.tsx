import Reveal from "./Reveal";
import { services } from "@/lib/services";

export default function PricingDetail() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-6xl" data-mascot-spot="preise">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} className={i === 1 ? "md:-translate-y-2" : ""}>
              <div
                className={`flex h-full flex-col rounded-2xl p-8 ${
                  service.featured ? "card-surface-gold" : "card-surface"
                }`}
              >
                {service.featured && (
                  <p className="eyebrow mb-4">Meistgewählt</p>
                )}
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-4 text-4xl font-semibold tracking-tight">
                  {service.price}
                  <span className="text-base font-normal text-fg/50">
                    {" "}
                    {service.period}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg/60">
                  {service.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-fg/70">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="/kontakt"
                  className={`mt-8 inline-block rounded-full px-6 py-3 text-center text-sm font-semibold ${
                    service.featured ? "gold-btn text-bg" : "border border-gold/40 text-gold"
                  }`}
                >
                  Erstgespräch buchen
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
