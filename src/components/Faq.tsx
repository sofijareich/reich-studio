"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Faq({
  eyebrow = "Fragen",
  heading,
  items,
}: {
  eyebrow?: string;
  heading: string;
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <div className="divide-y divide-white/10 border-t border-white/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q}>
                <div onMouseEnter={() => setOpen(i)} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    onFocus={() => setOpen(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <h3
                      className={`font-medium transition-colors ${
                        isOpen ? "text-gold" : "text-fg"
                      }`}
                    >
                      {item.q}
                    </h3>
                    <span
                      className={`shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm leading-relaxed text-fg/60">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
