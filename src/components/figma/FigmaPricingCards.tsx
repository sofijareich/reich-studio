import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Service } from "@/lib/services";

/**
 * Three-tier pricing grid in the Figma editorial language. The featured
 * tier inverts to a solid black card (same fg-btn-dark treatment used for
 * primary buttons elsewhere) instead of the old gold-glow card-surface, so
 * it still reads as "the one to pick" without reaching for gold.
 */
export default async function FigmaPricingCards() {
  const t = await getTranslations("Services");
  const tp = await getTranslations("PricingDetail");
  const services = t.raw("tiers") as Service[];

  return (
    <section className="fg-page-x pb-[clamp(3rem,8vh,6rem)]">
      <div className="grid gap-[clamp(1.5rem,3vw,2rem)] md:grid-cols-3">
        {services.map((service) => {
          const featured = Boolean(service.featured);
          return (
            <div
              key={service.name}
              className={`flex flex-col border p-[clamp(1.5rem,2.5vw,2.25rem)] ${
                featured ? "border-black bg-black text-white" : "border-black/15 text-black"
              }`}
            >
              {featured && (
                <p className="fg-small uppercase text-white/60">{tp("mostPopular")}</p>
              )}
              <h3 className="fg-mid mt-[0.5em] lowercase">{service.name}</h3>
              <p className="fg-stat-value mt-[0.4em]">
                {service.price}
                <span
                  className={`fg-small ml-2 ${featured ? "text-white/50" : "text-black/50"}`}
                >
                  {service.period}
                </span>
              </p>
              <p
                className={`fg-small mt-[1em] ${featured ? "text-white/70" : "text-black/60"}`}
              >
                {service.description}
              </p>
              <ul
                className={`mt-[1.5em] flex-1 space-y-3 border-t pt-[1.5em] ${
                  featured ? "border-white/20" : "border-black/15"
                }`}
              >
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className={`fg-small flex items-start gap-2 ${
                      featured ? "text-white/80" : "text-black/70"
                    }`}
                  >
                    <span
                      className={`mt-[0.55em] h-1 w-1 shrink-0 rounded-full ${
                        featured ? "bg-white" : "bg-black"
                      }`}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={
                  featured
                    ? "fg-mid mt-[1.5em] inline-flex items-center justify-center rounded-lg bg-white px-[1.6rem] py-[0.9rem] tracking-[-0.05em] text-black transition-colors hover:bg-white/80 lowercase"
                    : "fg-btn fg-mid mt-[1.5em] inline-flex justify-center lowercase"
                }
              >
                {tp("bookCall")}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
