"use client";

import { useEffect, useRef, useState } from "react";

export default function FigmaPortfolioNav({
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
    <div className="fg-page-x sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="flex items-center gap-2 py-3">
        <span className="fg-small mr-2 hidden shrink-0 lowercase text-black/50 sm:inline">
          {navLabel}
        </span>
        <div
          ref={railRef}
          className="flex gap-[clamp(1rem,2.5vw,2rem)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p) => (
            <a
              key={p.id}
              data-id={p.id}
              href={`#${p.id}`}
              className={`fg-small shrink-0 whitespace-nowrap border-b py-1 lowercase transition-colors ${
                active === p.id
                  ? "border-black text-black"
                  : "border-transparent text-black/45 hover:text-black/80"
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
