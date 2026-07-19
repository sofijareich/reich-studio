"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "sofijareich@gmail.com";
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Erstgespräch — ${name || "Anfrage"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nE-Mail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
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
    <section className="px-6 pb-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          {status === "sent" ? (
            <div className="card-surface-gold rounded-2xl p-8 text-center">
              <p className="text-lg font-medium">Danke — deine Nachricht ist da.</p>
              <p className="mt-2 text-sm text-fg/60">
                Ich melde mich innert ein bis zwei Tagen persönlich zurück.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-fg/40 focus:border-gold focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-fg/40 focus:border-gold focus:outline-none"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Was beschäftigt dich gerade?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-fg/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="gold-btn rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-bg disabled:opacity-60"
              >
                {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Da ist etwas schiefgelaufen. Schreib mir direkt per Mail.
                </p>
              )}
            </form>
          )}

          <p className="mt-8 text-sm text-fg/40">
            Oder direkt per Mail:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gold underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
