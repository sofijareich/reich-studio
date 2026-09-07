"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppPathnames } from "@/i18n/routing";

/**
 * EN / DE toggle for the shared FigmaTopNav — same switching logic as the
 * old dark LanguageSwitcher, restyled to a black hairline pill so it fits
 * the editorial black-on-white nav.
 */
export default function FigmaLanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname() as AppPathnames;
  const params = useParams();
  const router = useRouter();

  function switchTo(nextLocale: "en" | "de") {
    router.replace(
      // @ts-expect-error -- params shape is dynamic per-route
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <div
      className="fg-small inline-flex shrink-0 items-center border border-black/20 lowercase"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
        className={`px-2.5 py-1 transition-colors ${
          locale === "en" ? "bg-black text-white" : "text-black/50 hover:text-black"
        }`}
      >
        en
      </button>
      <button
        type="button"
        onClick={() => switchTo("de")}
        aria-pressed={locale === "de"}
        className={`px-2.5 py-1 transition-colors ${
          locale === "de" ? "bg-black text-white" : "text-black/50 hover:text-black"
        }`}
      >
        de
      </button>
    </div>
  );
}
