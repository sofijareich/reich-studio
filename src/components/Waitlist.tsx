"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";
type Source = "Homepage" | "Footer";

function useWaitlistSubmit(source: Source) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { email, setEmail, status, handleSubmit };
}

export function WaitlistSection() {
  const t = useTranslations("Waitlist");
  const { email, setEmail, status, handleSubmit } = useWaitlistSubmit("Homepage");

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10">
      <div className="glow h-80 w-80" style={{ top: "10%", left: "50%" }} />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-4">{t("eyebrow")}</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {t("titlePlain")} <span className="gold-text">{t("titleGold")}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-fg/60">{t("subtext")}</p>

        {status === "sent" ? (
          <p className="card-surface-gold mx-auto mt-8 max-w-sm rounded-2xl p-6 text-sm font-medium">
            {t("successSection")}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              required
              type="email"
              placeholder={t("placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm placeholder:text-fg/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="gold-btn shrink-0 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide text-bg disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : t("signUp")}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">{t("errorSection")}</p>
        )}
      </Reveal>
    </section>
  );
}

export function WaitlistInline() {
  const t = useTranslations("Waitlist");
  const { email, setEmail, status, handleSubmit } = useWaitlistSubmit("Footer");

  if (status === "sent") {
    return <p className="text-sm text-gold">{t("successInline")}</p>;
  }

  return (
    <div>
      <p className="mb-3 text-sm text-fg/60">{t("inlineText")}</p>
      <form onSubmit={handleSubmit} className="flex max-w-xs gap-2">
        <input
          required
          type="email"
          placeholder={t("placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm placeholder:text-fg/40 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full border border-gold/40 px-4 py-2.5 text-sm font-medium text-gold disabled:opacity-60"
        >
          →
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">{t("errorInline")}</p>
      )}
    </div>
  );
}
