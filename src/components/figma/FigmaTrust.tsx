import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";

type Testimonial = { name: string; role: string; quote: string };

export default async function FigmaTrust() {
  const t = await getTranslations("Testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(4rem,11vh,8rem)]">
      <FigmaReveal>
        <p className="fg-small uppercase text-black/50">{t("eyebrow")}</p>
        <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] max-w-2xl lowercase">
          {t("title")}
        </h2>
      </FigmaReveal>

      <div className="mt-[clamp(2.5rem,7vh,5rem)] grid gap-[clamp(2rem,4vw,3.5rem)] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FigmaReveal key={item.name} delay={i * 0.1}>
            <figure className="border-t border-black pt-[clamp(1rem,2vh,1.5rem)]">
              <blockquote className="fg-mid">{item.quote}</blockquote>
              <figcaption className="fg-small mt-[clamp(1rem,2vh,1.5rem)] text-black/60">
                {item.name} — {item.role}
              </figcaption>
            </figure>
          </FigmaReveal>
        ))}
      </div>
    </section>
  );
}
