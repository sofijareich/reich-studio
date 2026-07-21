"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Default resting spot: tucked near the header, top-right of the viewport.
const HOME = { orbX: -96, orbY: 76, blobX: -140, blobY: 100 };
const OFFSCREEN = { orbX: 260, orbY: 76, blobX: 300, blobY: 100 };

function applyPos(
  orbEl: HTMLDivElement | null,
  blobEl: HTMLDivElement | null,
  pos: { orbX: number; orbY: number; blobX: number; blobY: number }
) {
  if (orbEl) orbEl.style.transform = `translate3d(${pos.orbX}px, ${pos.orbY}px, 0)`;
  if (blobEl) blobEl.style.transform = `translate3d(${pos.blobX}px, ${pos.blobY}px, 0)`;
}

export default function Mascots() {
  const [entered, setEntered] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const activeSpot = useRef<Element | null>(null);

  // entrance: jump out from the right edge shortly after mount
  useEffect(() => {
    applyPos(orbRef.current, blobRef.current, OFFSCREEN);
    const t = setTimeout(() => {
      setEntered(true);
      applyPos(orbRef.current, blobRef.current, HOME);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  // scroll-reactive: migrate toward whichever marked "spot" is in view
  useEffect(() => {
    if (!entered) return;

    function updatePosition() {
      const spot = activeSpot.current;
      const stillVisible =
        spot && (() => {
          const r = spot.getBoundingClientRect();
          return r.top < window.innerHeight && r.bottom > 0;
        })();

      if (stillVisible && spot) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const r = spot.getBoundingClientRect();
        const x = Math.min(r.right - vw + 40, -16);
        const y = Math.max(Math.min(r.top - 10, vh - 140), 70);
        applyPos(orbRef.current, blobRef.current, {
          orbX: x,
          orbY: y,
          blobX: x - 44,
          blobY: y + 26,
        });
      } else {
        applyPos(orbRef.current, blobRef.current, HOME);
      }
    }

    const spots = Array.from(document.querySelectorAll("[data-mascot-spot]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) activeSpot.current = visible.target;
        else if (
          activeSpot.current &&
          !entries.some((e) => e.target === activeSpot.current && e.isIntersecting)
        ) {
          activeSpot.current = null;
        }
        updatePosition();
      },
      { threshold: [0.3, 0.6] }
    );
    spots.forEach((s) => observer.observe(s));

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [entered]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 hidden sm:block"
      aria-hidden="true"
    >
      <div
        ref={orbRef}
        className="mascot-bob mascot-move absolute right-0 top-0 h-11 w-11"
        style={{ animationDelay: "0s", transform: `translate3d(${OFFSCREEN.orbX}px, ${OFFSCREEN.orbY}px, 0)` }}
      >
        <Image src="/images/mascot-orb.png" alt="" fill sizes="44px" priority className="object-contain" />
      </div>
      <div
        ref={blobRef}
        className="mascot-bob mascot-move absolute right-0 top-0 h-12 w-12"
        style={{ animationDelay: "0.6s", transform: `translate3d(${OFFSCREEN.blobX}px, ${OFFSCREEN.blobY}px, 0)` }}
      >
        <Image src="/images/mascot-blob.png" alt="" fill sizes="48px" priority className="object-contain" />
      </div>
    </div>
  );
}
