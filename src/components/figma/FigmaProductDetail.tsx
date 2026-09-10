import { getTranslations } from "next-intl/server";
import FigmaReveal from "./FigmaReveal";

/**
 * Restyled ProductDetail: includes list + "who it's for" on the left,
 * sticky price card on the right. The old gold-glow card-surface-gold
 * becomes a solid black card (same inversion used for the featured
 * pricing tier) so the price still reads as the page's focal point.
 */
export default async function FigmaProductDetail() {
  const t = await getTranslations("Product");
  const includes = t.raw("includes") as string[];
  const name = t("name");
  const price = t("price");

  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  const buyHref = stripeLink
    ? stripeLink
    : `mailto:sofijareich@gmail.com?subject=${encodeURIComponent(
        "Reserve " + name
      )}&body=${encodeURIComponent(
        "Hi Sofija, I'd like to buy the " + name + " (" + price + ") as soon as direct checkout is available."
      )}`;
  const buyLabel = stripeLink ? t("buyNow", { price }) : t("reserveByEmail");

  return (
    <section className="fg-page-x pb-[clamp(3rem,8vh,6rem)]">
      <div className="grid gap-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <FigmaReveal>
            <p className="fg-small uppercase text-black/50">{t("whatsInside")}</p>
            <ul className="mt-[1.25em] space-y-[0.85em]">
              {includes.map((item) => (
                <li key={item} className="fg-mid flex items-start gap-3 text-black/80">
                  <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FigmaReveal>

          <FigmaReveal delay={0.1}>
            <div className="mt-[clamp(2rem,4vh,3rem)] border-t border-black/15 pt-[clamp(1.5rem,3vh,2rem)]">
              <p className="fg-small uppercase text-black/50">{t("whoItsFor")}</p>
              <p className="fg-mid mt-[0.75em] max-w-xl text-black/70">{t("forWhom")}</p>
            </div>
          </FigmaReveal>
        </div>

        <div className="lg:sticky lg:top-[clamp(1.5rem,4vh,3rem)]">
          <FigmaReveal delay={0.15}>
            <div className="flex flex-col border border-black bg-black p-[clamp(1.75rem,3vw,2.5rem)] text-white">
              <p className="fg-small uppercase text-white/60">{t("format")}</p>
              <p className="fg-stat-value mt-[0.4em]">{price}</p>
              <p className="fg-small mt-[0.3em] text-white/50">{t("oneTime")}</p>
              <p className="fg-small mt-[1.25em] text-white/70">{t("tagline")}</p>
              <a
                href={buyHref}
                className="fg-mid mt-[1.75em] inline-flex items-center justify-center rounded-lg bg-white px-[1.6rem] py-[0.9rem] tracking-[-0.05em] text-black transition-colors hover:bg-white/80 lowercase"
              >
                {buyLabel}
              </a>
              {!stripeLink && (
                <p className="fg-small mt-[1em] text-white/45">{t("comingSoon")}</p>
              )}
            </div>
          </FigmaReveal>
        </div>
      </div>
    </section>
  );
}
