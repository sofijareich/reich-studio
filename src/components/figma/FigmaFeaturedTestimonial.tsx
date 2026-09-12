"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function QuoteMark() {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true" className="mx-auto fill-black">
      <path d="M0 32V19.5C0 8.5 6 1.5 16 0L17.5 4.5C11 6 8 10 8 14.5H16V32H0Z" />
      <path d="M24 32V19.5C24 8.5 30 1.5 40 0L41.5 4.5C35 6 32 10 32 14.5H40V32H24Z" />
    </svg>
  );
}

/**
 * A single, real client testimonial (Mahmut, All in One Bar) pulled out of
 * the Portfolio's per-project quotes and given its own moment on the
 * homepage - not another card in the grid, but the story's one strongest
 * voice. Scroll-linked (not a fire-once reveal): it tracks scroll position
 * continuously, so it visibly flies up from below as the section arrives,
 * and would fly back out if you scrolled back past it. That continuous,
 * reversible tie to scroll position is what makes it read as
 * "interactive" rather than a one-shot animation.
 */
export default function FigmaFeaturedTestimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [110, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  const paragraphs = quote.split("\n\n");

  return (
    <section className="fg-page-x border-t border-black/15 py-[clamp(4.5rem,12vh,9rem)]">
      <motion.div
        ref={ref}
        style={{ y, opacity, scale }}
        className="mx-auto max-w-3xl text-center"
      >
        <QuoteMark />
        <blockquote className="fg-lead mt-[clamp(1.5rem,3.5vh,2.25rem)] space-y-[1em] text-black/90">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </blockquote>
        <p className="fg-small mt-[clamp(1.25rem,3vh,2rem)] text-black/50">
          {author} · {role}
        </p>
      </motion.div>
    </section>
  );
}
