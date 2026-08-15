import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";

export default async function CtaBand({
  heading,
  subtext,
}: {
  heading?: string;
  subtext?: string;
}) {
  const t = await getTranslations("CtaBand");

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10">
      <div className="glow h-80 w-80" style={{ top: "10%", left: "50%" }} />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {heading ?? t("heading")}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-fg/60">
          {subtext ?? t("subtext")}
        </p>
        <Link
          href="/contact"
          className="gold-btn mt-10 inline-block rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-bg"
        >
          {t("bookCall")}
        </Link>
      </Reveal>
    </section>
  );
}
