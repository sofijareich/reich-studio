import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

export default async function ProductDetail() {
  const t = await getTranslations("Product");
  const includes = t.raw("includes") as string[];
  const name = t("name");
  const price = t("price");

  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  const buyHref = stripeLink
    ? stripeLink
    : `mailto:sofija.reich@reichstudio.ch?subject=${encodeURIComponent(
        "Reserve " + name
      )}&body=${encodeURIComponent(
        "Hi Sofija, I'd like to buy the " + name + " (" + price + ") as soon as direct checkout is available."
      )}`;
  const buyLabel = stripeLink ? t("buyNow", { price }) : t("reserveByEmail");

  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <Reveal>
          <p className="eyebrow mb-4">{t("whatsInside")}</p>
          <ul className="space-y-4">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-fg/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="eyebrow mb-3">{t("whoItsFor")}</p>
            <p className="max-w-xl text-fg/70">{t("forWhom")}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-surface-gold sticky top-28 flex flex-col rounded-2xl p-8">
            <p className="eyebrow mb-3">{t("format")}</p>
            <p className="text-5xl font-semibold tracking-tight">{price}</p>
            <p className="mt-1 text-sm text-fg/50">{t("oneTime")}</p>
            <p className="mt-6 text-sm leading-relaxed text-fg/70">{t("tagline")}</p>
            <a
              href={buyHref}
              className="gold-btn mt-8 inline-block rounded-full px-6 py-4 text-center text-sm font-semibold text-bg"
            >
              {buyLabel}
            </a>
            {!stripeLink && (
              <p className="mt-4 text-xs leading-relaxed text-fg/45">{t("comingSoon")}</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
