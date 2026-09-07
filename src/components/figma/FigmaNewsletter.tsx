"use client";

import { useTranslations } from "next-intl";
import { useWaitlistSubmit } from "../Waitlist";
import FigmaReveal from "./FigmaReveal";
import FigmaMagnetic from "./FigmaMagnetic";

export default function FigmaNewsletter() {
  const t = useTranslations("Waitlist");
  const tHome = useTranslations("HomeFigma");
  const { email, setEmail, status, handleSubmit } = useWaitlistSubmit("Homepage");

  return (
    <section className="fg-band fg-page-x py-[clamp(3rem,9vh,5.5rem)]">
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
        <form
          onSubmit={handleSubmit}
          className="mt-[clamp(1.25rem,3vh,2rem)] flex flex-wrap items-center gap-3"
        >
          <input
            required
            type="email"
            placeholder={t("placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label={t("placeholder")}
            className="fg-small w-full max-w-xs rounded-lg bg-white px-4 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/60"
          />
          <FigmaMagnetic>
            <button
              type="submit"
              disabled={status === "sending"}
              className="fg-btn fg-small fg-btn-dark lowercase disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : tHome("submit")}
            </button>
          </FigmaMagnetic>
        </form>
      )}

      {status === "error" && (
        <p className="fg-small mt-3 text-red-700">{t("errorSection")}</p>
      )}
    </section>
  );
}
