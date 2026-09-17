import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FigmaPageHero from "@/components/figma/FigmaPageHero";
import FigmaReveal from "@/components/figma/FigmaReveal";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ImpressumPage" });
  return pageMetadata(locale, "/impressum", t("metaTitle"), t("metaDescription"));
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-black/15 py-[clamp(0.9rem,2vh,1.25rem)] sm:grid sm:grid-cols-[12rem_1fr] sm:gap-6">
      <p className="fg-small uppercase text-black/60">{label}</p>
      <div className="fg-small mt-1 text-black sm:mt-0">{children}</div>
    </div>
  );
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ImpressumPage");

  return (
    <>
      <FigmaPageHero
        eyebrow={t("heroEyebrow")}
        lines={[t("heroLine1")]}
        subtext={t("heroSubtext")}
      />

      <section className="fg-page-x pb-[clamp(3.5rem,9vh,7rem)]">
        <div className="max-w-2xl">
          <FigmaReveal>
            <h2 className="fg-h2 lowercase">{t("providerHeading")}</h2>
            <div className="mt-[clamp(1.25rem,3vh,1.75rem)]">
              <Row label={t("nameLabel")}>{t("name")}</Row>
              <Row label={t("legalFormLabel")}>{t("legalForm")}</Row>
              <Row label={t("addressLabel")}>
                <p>{t("addressLine1")}</p>
                <p>{t("addressLine2")}</p>
                <p>{t("addressLine3")}</p>
              </Row>
            </div>
          </FigmaReveal>

          <FigmaReveal delay={0.1} className="mt-[clamp(2.5rem,6vh,4rem)]">
            <h2 className="fg-h2 lowercase">{t("contactHeading")}</h2>
            <div className="mt-[clamp(1.25rem,3vh,1.75rem)]">
              <div className="border-t border-black/15 py-[clamp(0.9rem,2vh,1.25rem)] sm:grid sm:grid-cols-[12rem_1fr] sm:gap-6">
                <p className="fg-small uppercase text-black/60">{t("emailLabel")}</p>
                <a
                  href="mailto:sofija.reich@reichstudio.ch"
                  className="fg-small mt-1 block text-black underline sm:mt-0"
                >
                  sofija.reich@reichstudio.ch
                </a>
              </div>
              <div className="border-t border-black/15 py-[clamp(0.9rem,2vh,1.25rem)] sm:grid sm:grid-cols-[12rem_1fr] sm:gap-6">
                <p className="fg-small uppercase text-black/60">{t("phoneLabel")}</p>
                <a
                  href="tel:+41784217611"
                  className="fg-small mt-1 block text-black underline sm:mt-0"
                >
                  +41 78 421 76 11
                </a>
              </div>
            </div>
          </FigmaReveal>

          <FigmaReveal delay={0.15} className="mt-[clamp(2.5rem,6vh,4rem)]">
            <h2 className="fg-h2 lowercase">{t("liabilityHeading")}</h2>
            <p className="fg-small mt-[clamp(1.25rem,3vh,1.75rem)] text-black/70">
              {t("liabilityText")}
            </p>
          </FigmaReveal>

          <FigmaReveal delay={0.2} className="mt-[clamp(2.5rem,6vh,4rem)]">
            <h2 className="fg-h2 lowercase">{t("copyrightHeading")}</h2>
            <p className="fg-small mt-[clamp(1.25rem,3vh,1.75rem)] text-black/70">
              {t("copyrightText")}
            </p>
          </FigmaReveal>
        </div>
      </section>
    </>
  );
}
