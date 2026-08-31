"use client";

import { useEffect, useRef, useState } from "react";

export default function PortfolioNav({
  projects,
  navLabel,
}: {
  projects: { id: string; shortName: string }[];
  navLabel: string;
}) {
  const [active, setActive] = useState(projects[0]?.id ?? "");
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = projects
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [projects]);

  useEffect(() => {
    const rail = railRef.current;
    const activeBtn = rail?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (rail && activeBtn) {
      const target =
        activeBtn.offsetLeft - rail.clientWidth / 2 + activeBtn.clientWidth / 2;
      rail.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div className="sticky top-0 z-30 border-b border-white/5 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-3 sm:px-10">
        <span className="eyebrow mr-2 hidden shrink-0 sm:inline">{navLabel}</span>
        <div
          ref={railRef}
          className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p) => (
            <a
              key={p.id}
              data-id={p.id}
              href={`#${p.id}`}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === p.id
                  ? "border-gold/60 bg-gold/10 text-gold"
                  : "border-white/10 text-fg/60 hover:border-white/25 hover:text-fg"
              }`}
            >
              {p.shortName}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
