"use client";

import { useTranslations } from "next-intl";
import { useWaitlistSubmit } from "../Waitlist";
import FigmaReveal from "./FigmaReveal";

export default function FigmaNewsletter() {
  const t = useTranslations("Waitlist");
  const tHome = useTranslations("HomeFigma");
  const { email, setEmail, status, handleSubmit } = useWaitlistSubmit("Homepage");

  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(3.5rem,10vh,6rem)]">
      <FigmaReveal>
        <h2 className="text-[clamp(1.5rem,2.6vw,3.25rem)] font-normal uppercase leading-none tracking-[-0.04em]">
          {tHome("newsletterTitle")}
        </h2>
      </FigmaReveal>

      <FigmaReveal delay={0.1} className="mt-[clamp(1.25rem,3vh,2rem)] flex gap-[clamp(0.5rem,1vw,1rem)]">
        <svg
          viewBox="0 0 10 12"
          aria-hidden="true"
          className="mt-[0.4em] h-[0.55em] w-[0.45em] shrink-0 fill-black"
        >
          <path d="M0 0l10 6-10 6z" />
        </svg>
        <p className="fg-mid max-w-[52ch]">{t("subtext")}</p>
      </FigmaReveal>

      {status === "sent" ? (
        <p className="fg-mid mt-[clamp(1.25rem,3vh,2rem)]">{t("successSection")}</p>
      ) : (
        <FigmaReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="mt-[clamp(1.25rem,3vh,2rem)] flex flex-wrap items-end gap-x-[clamp(1.5rem,4vw,3rem)] gap-y-4"
          >
            <input
              required
              type="email"
              placeholder={t("placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label={t("placeholder")}
              className="fg-mid w-full max-w-xs border-x-0 border-t-0 border-b border-black/30 bg-transparent pb-2 text-black placeholder:text-black/60 focus:border-b-black focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="fg-mid group inline-flex items-baseline gap-[0.55em] lowercase text-black disabled:opacity-50"
            >
              <span className="border-b border-black/30 pb-[0.12em] transition-colors group-hover:border-black">
                {status === "sending" ? t("sending") : tHome("submit")}
              </span>
              <span
                aria-hidden="true"
                className="translate-y-[0.05em] transition-transform duration-200 group-hover:translate-x-[0.3em]"
              >
                &rarr;
              </span>
            </button>
          </form>
        </FigmaReveal>
      )}

      {status === "error" && (
        <p className="fg-small mt-3 text-red-700">{t("errorSection")}</p>
      )}
    </section>
  );
}
