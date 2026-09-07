"use client";

import { motion } from "framer-motion";

/**
 * Splits a line of text into characters and fades/rises each one in on
 * mount, staggered — the hero headline's "first thing you see" moment.
 * Runs once on load (not scroll-linked: it's above the fold), so it reads
 * as the page introducing itself rather than a scroll gimmick.
 *
 * Spaces render as non-breaking so the stagger doesn't collapse word gaps,
 * and each word is wrapped in an inline-block so wrapping still breaks
 * between words, not mid-word.
 */
export default function FigmaCharReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => {
            const i = charIndex++;
            return (
              <motion.span
                key={ci}
                aria-hidden="true"
                className="inline-block"
                initial={{ opacity: 0, y: "0.5em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: delay + i * 0.022,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
