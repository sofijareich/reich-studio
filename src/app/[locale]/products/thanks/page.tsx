import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ThanksPage" });
  return {
    title: t("metaTitle"),
    robots: { index: false, follow: false },
  };
}

export default async function ThanksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ThanksPage");
  const tProduct = await getTranslations("Product");

  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-10 sm:pt-48">
      <div className="glow h-72 w-72 -translate-x-1/2 -translate-y-1/4" style={{ top: 0, left: "50%" }} />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-6">{t("eyebrow")}</p>
        <h1 className="display-heading text-4xl sm:text-6xl">
          {t("thanks")} <span className="gold-text">{t("hereIs")}</span>
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg text-fg/60">
          {t("bothFormats", { productName: tProduct("name") })}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/downloads/AI-Fundament-Hochformat.pdf"
            download
            className="gold-btn inline-block w-full rounded-full px-8 py-4 text-center text-sm font-semibold text-bg sm:w-auto"
          >
            {t("downloadPortrait")}
          </a>
          <a
            href="/downloads/AI-Fundament-Querformat.pdf"
            download
            className="inline-block w-full rounded-full border border-gold/40 px-8 py-4 text-center text-sm font-semibold text-gold sm:w-auto"
          >
            {t("downloadLandscape")}
          </a>
        </div>

        <p className="mt-10 text-sm text-fg/45">
          {t.rich("saveNote", {
            link: (chunks) => (
              <a href="mailto:sofijareich@gmail.com" className="underline">
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </section>
  );
}
