"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import FigmaReveal from "./FigmaReveal";

/**
 * Accordion FAQ restyled from the dark gold-accented version — same
 * interaction (click/focus to open, one open at a time), hairline black
 * borders instead of white/10, black instead of gold for the active state.
 */
export default function FigmaFaq({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string;
  heading: string;
  items: { q: string; a: string }[];
}) {
  const t = useTranslations("Faq");
  const [open, setOpen] = useState<number | null>(null);
  const resolvedEyebrow = eyebrow ?? t("eyebrow");

  return (
    <section className="fg-page-x py-[clamp(3rem,8vh,6rem)]">
      <div className="max-w-3xl">
        <FigmaReveal>
          <p className="fg-small uppercase text-black/50">{resolvedEyebrow}</p>
          <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] mb-[clamp(2rem,5vh,3rem)] lowercase">
            {heading}
          </h2>
        </FigmaReveal>

        <FigmaReveal delay={0.1} className="divide-y divide-black/15 border-t border-black/15">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} onMouseEnter={() => setOpen(i)} className="py-[clamp(1.25rem,3vh,1.75rem)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  onFocus={() => setOpen(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <h3 className="fg-mid lowercase text-black">{item.q}</h3>
                  <span
                    className={`fg-mid shrink-0 text-black transition-transform duration-300 ${
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
                    <p className="fg-small mt-[0.75em] text-black/60">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </FigmaReveal>
      </div>
    </section>
  );
}
