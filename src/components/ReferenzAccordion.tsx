"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Referenz } from "@/lib/referenzen";

function CoverMedia({ src, alt }: { src: string; alt: string }) {
  const isVideo = src.endsWith(".webm") || src.endsWith(".mp4");
  if (isVideo) {
    return (
      <video
        src={src}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }
  return <Image src={src} alt={alt} fill className="object-cover" />;
}

export default function ReferenzAccordion({ items }: { items: Referenz[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  function toggle(id: string) {
    const willOpen = openId !== id;
    setOpenId(willOpen ? id : null);
    if (willOpen) {
      setTimeout(() => {
        refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }

  return (
    <section id="projekte" className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-5xl space-y-5">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              id={item.id}
              ref={(el) => {
                refs.current[item.id] = el;
              }}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? "border-gold/50" : "border-white/10"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-5 p-4 text-left sm:p-6"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-white/5 sm:h-24 sm:w-36">
                  <CoverMedia src={item.cover} alt={item.name} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow mb-1">{item.category}</p>
                  <h3 className="truncate text-lg font-semibold sm:text-xl">{item.name}</h3>
                </div>
                <span
                  className={`shrink-0 text-2xl text-gold transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-400 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 p-4 sm:p-6">
                    <p className="mb-6 max-w-2xl text-sm leading-relaxed text-fg/60">
                      {item.description}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {item.media.map((m, i) =>
                        m.type === "video" ? (
                          <video
                            key={i}
                            src={m.src}
                            className="col-span-full w-full rounded-xl"
                            controls
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <div
                            key={i}
                            className="relative aspect-[4/3] overflow-hidden rounded-xl"
                          >
                            <Image src={m.src} alt={m.alt} fill className="object-cover" />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
