"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "sofijareich@gmail.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Erstgespräch — ${name || "Anfrage"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kontakt" className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Kontakt
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Lass uns reden.
          </h2>
          <p className="mb-10 text-lg text-fg/60">
            Kurze Nachricht reicht. Ich melde mich persönlich zurück — meist
            innert ein bis zwei Tagen.
          </p>

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
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-bg transition-transform hover:scale-[1.03]"
            >
              Nachricht senden
            </button>
          </form>

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
