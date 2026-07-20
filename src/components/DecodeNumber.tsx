"use client";

import { useEffect, useRef, useState } from "react";

function formatSwiss(n: number) {
  return n.toLocaleString("de-CH");
}

export default function DecodeNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1100,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => "0".repeat(formatSwiss(value).replace(/[^0-9]/g, "").length));
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const finalStr = formatSwiss(value);
    const digitCount = finalStr.replace(/[^0-9]/g, "").length;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (reduced) {
          setDisplay(finalStr);
          return;
        }

        const start = performance.now();
        function tick(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const lockedDigits = Math.floor(progress * digitCount);

          let digitIndex = 0;
          const rendered = finalStr
            .split("")
            .map((ch) => {
              if (!/[0-9]/.test(ch)) return ch;
              const isLocked = digitIndex < lockedDigits;
              digitIndex++;
              return isLocked ? ch : String(Math.floor(Math.random() * 10));
            })
            .join("");

          setDisplay(rendered);

          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(finalStr);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
