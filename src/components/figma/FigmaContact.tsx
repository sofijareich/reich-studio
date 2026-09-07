"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Restyled Contact form: same fetch-to-/api/contact logic and states as
 * the dark original, hairline black-bordered inputs instead of white/10 +
 * gold focus rings, black submit button.
 */
export default function FigmaContact() {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="fg-page-x pb-[clamp(3rem,8vh,6rem)]">
      <div className="max-w-2xl">
        {status === "sent" ? (
          <div className="border border-black p-[clamp(1.75rem,3vw,2.5rem)] text-center">
            <p className="fg-mid lowercase text-black">{t("successTitle")}</p>
            <p className="fg-small mt-[0.5em] text-black/60">{t("successSubtext")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder={t("namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="fg-mid border border-black/20 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-black focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="fg-mid border border-black/20 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-black focus:outline-none"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder={t("messagePlaceholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="fg-mid w-full border border-black/20 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-black focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="fg-btn fg-btn-dark fg-mid lowercase disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : t("send")}
            </button>
            {status === "error" && (
              <p className="fg-small text-red-600">{t("error")}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
