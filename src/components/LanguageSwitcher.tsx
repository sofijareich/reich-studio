"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppPathnames } from "@/i18n/routing";

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
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
      className={`inline-flex items-center rounded-full border border-white/15 p-0.5 text-xs font-semibold ${
        mobile ? "" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "en" ? "bg-gold text-bg" : "text-fg/60 hover:text-fg"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("de")}
        aria-pressed={locale === "de"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "de" ? "bg-gold text-bg" : "text-fg/60 hover:text-fg"
        }`}
      >
        DE
      </button>
    </div>
  );
}
