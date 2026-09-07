import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

/**
 * Grey-band closing CTA in the Figma vocabulary (same #d9d9d9 band as the
 * homepage newsletter section). Generic on purpose — every remaining page
 * will end on a call to action, so this is meant to be reused rather than
 * rebuilt per page.
 */
export default async function FigmaCta({
  heading,
  subtext,
}: {
  heading: string;
  subtext: string;
}) {
  const tNav = await getTranslations("Nav");

  return (
    <section className="fg-band fg-page-x py-[clamp(3.5rem,10vh,6.5rem)]">
      <h2 className="fg-h2 max-w-3xl lowercase">{heading}</h2>
      <p className="fg-lead mt-[clamp(1rem,2.5vh,1.75rem)] max-w-[48ch] text-black/75">
        {subtext}
      </p>
      <Link
        href="/contact"
        className="fg-btn fg-btn-dark fg-mid mt-[clamp(1.5rem,3.5vh,2.5rem)] inline-flex lowercase"
      >
        {tNav("bookCall")}
      </Link>
    </section>
  );
}
