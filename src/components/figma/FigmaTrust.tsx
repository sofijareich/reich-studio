import { getTranslations } from "next-intl/server";

type Testimonial = { name: string; role: string; quote: string };

export default async function FigmaTrust() {
  const t = await getTranslations("Testimonials");
  const tHome = await getTranslations("HomeFigma");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="fg-page-x py-[clamp(4rem,10vh,8rem)]">
      <h2 className="fg-display lowercase">{tHome("trustTitle")}</h2>

      <div className="mt-[clamp(2.5rem,7vh,5rem)] grid gap-[clamp(2rem,4vw,3.5rem)] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.name} className="border-t border-black pt-[clamp(1rem,2vh,1.5rem)]">
            <blockquote className="fg-mid">{item.quote}</blockquote>
            <figcaption className="fg-small mt-[clamp(1rem,2vh,1.5rem)] text-black/60">
              {item.name} — {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
