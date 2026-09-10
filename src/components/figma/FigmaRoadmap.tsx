"use client";

import { motion } from "framer-motion";
import FigmaReveal from "./FigmaReveal";

type Step = { step: string; title: string; text: string };

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The centrepiece of the rebuilt homepage: the client journey as an actual
 * roadmap — milestones on a single axis that draws itself as you scroll to
 * it, markers popping in left to right (or top to bottom on mobile). The
 * arrow past the last milestone stands for "let it run" — the system keeps
 * going. Hairline axis, solid diamond markers, no shaded panels.
 */
export default function FigmaRoadmap({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: Step[];
}) {
  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(4.5rem,12vh,9rem)]">
      <FigmaReveal>
        <p className="fg-small uppercase text-black/50">{eyebrow}</p>
        <h2 className="fg-h2 mt-[clamp(0.5rem,1.2vh,0.75rem)] max-w-2xl lowercase">{title}</h2>
      </FigmaReveal>

      <div className="mt-[clamp(3rem,9vh,6rem)]">
        {/* desktop: horizontal axis */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-x-[clamp(1.5rem,3vw,3rem)]">
            {steps.map((s, i) => (
              <FigmaReveal key={s.step} delay={0.15 + i * 0.15}>
                <p className="fg-stat-value">{s.step}</p>
              </FigmaReveal>
            ))}
          </div>

          <div className="relative my-[clamp(1.5rem,3vh,2.25rem)] h-3">
            <motion.div
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 origin-left bg-black"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1, ease: EASE }}
            />
            <div className="absolute inset-0 grid grid-cols-3 gap-x-[clamp(1.5rem,3vw,3rem)]">
              {steps.map((s, i) => (
                <div key={s.step} className="flex items-center">
                  <motion.span
                    className="block h-2.5 w-2.5 rotate-45 bg-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.15, ease: EASE }}
                  />
                </div>
              ))}
            </div>
            <motion.span
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-[0.62em] translate-x-[0.1em] leading-none text-black"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.4, delay: 0.9, ease: EASE }}
            >
              &rarr;
            </motion.span>
          </div>

          <div className="grid grid-cols-3 gap-x-[clamp(1.5rem,3vw,3rem)]">
            {steps.map((s, i) => (
              <FigmaReveal key={s.step} delay={0.4 + i * 0.15}>
                <p className="fg-lead lowercase">{s.title}</p>
                <p className="fg-small mt-[0.6em] max-w-[30ch] text-black/60">{s.text}</p>
              </FigmaReveal>
            ))}
          </div>
        </div>

        {/* mobile: vertical axis */}
        <div className="relative flex flex-col gap-[clamp(2.25rem,6vh,3rem)] lg:hidden">
          <motion.div
            className="absolute bottom-3 left-[4px] top-2 w-px origin-top bg-black"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: EASE }}
          />
          {steps.map((s, i) => (
            <FigmaReveal key={s.step} delay={i * 0.12} className="flex gap-5">
              <span className="mt-[0.55em] block h-2.5 w-2.5 shrink-0 rotate-45 bg-black" />
              <div>
                <p className="fg-stat-value">{s.step}</p>
                <p className="fg-lead mt-[0.2em] lowercase">{s.title}</p>
                <p className="fg-small mt-[0.5em] max-w-[38ch] text-black/60">{s.text}</p>
              </div>
            </FigmaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
