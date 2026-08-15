import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

type Testimonial = { name: string; role: string; photo: string; quote: string };

export default async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="px-6 pb-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="mb-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.name}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-8">
                <p className="flex-1 text-sm leading-relaxed text-fg/70">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image src={item.photo} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">{item.name}</p>
                    <p className="text-xs text-fg/40">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
