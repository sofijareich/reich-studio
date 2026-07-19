import Reveal from "./Reveal";

const services = [
  {
    name: "Starter",
    price: "ab CHF 2'800",
    period: "einmalig",
    description: "Der Einstieg: eine Website und die Automatisierungen, die stehen bleiben.",
    points: ["Website-Setup", "1-2 Kernautomatisierungen", "Klare Übergabe"],
  },
  {
    name: "Growth",
    price: "ab CHF 2'500",
    period: "/Monat",
    description: "Laufender Content und Leads, ohne dass du selbst dranbleiben musst.",
    points: ["Content-Produktion", "Lead-Automatisierung", "Monatliches Update"],
    featured: true,
  },
  {
    name: "Full-Service",
    price: "ab CHF 5'000",
    period: "/Monat",
    description: "Du machst dein Fachgebiet. Wir übernehmen den Rest — komplett.",
    points: ["Alles aus Growth", "Volle Kundenkommunikation", "Direkter Draht zu mir"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Leistungen
          </p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Drei Wege, wie wir zusammenarbeiten können.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} className={i === 1 ? "md:-translate-y-2" : ""}>
              <div
                className={`h-full rounded-2xl border p-8 ${
                  service.featured
                    ? "border-gold bg-gold/5"
                    : "border-white/10 bg-white/[0.02]"
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
