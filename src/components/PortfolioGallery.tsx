"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import type { PortfolioMediaItem } from "@/lib/portfolioMedia";

type LightboxState = { mode: "grid" | "single"; index: number } | null;

export default function PortfolioGallery({
  media,
  captions,
  labels,
}: {
  media: PortfolioMediaItem[];
  captions: string[];
  labels: {
    viewAllPhotos: string;
    allPhotosHeading: string;
    closeLightbox: string;
    backToGrid: string;
    prevPhoto: string;
    nextPhoto: string;
  };
}) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  // Only photos take part in the click-to-gallery lightbox; videos keep
  // playing inline in the grid as before.
  const photos = media
    .map((item, i) => ({ item, caption: captions[i] ?? "", originalIndex: i }))
    .filter((entry) => entry.item.type === "image");

  useEffect(() => {
    if (!lightbox) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (lightbox?.mode === "single") {
        if (e.key === "ArrowRight") {
          setLightbox((s) =>
            s ? { mode: "single", index: (s.index + 1) % photos.length } : s
          );
        }
        if (e.key === "ArrowLeft") {
          setLightbox((s) =>
            s
              ? { mode: "single", index: (s.index - 1 + photos.length) % photos.length }
              : s
          );
        }
      }
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, photos.length]);

  return (
    <>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item, i) => {
          const caption = captions[i] ?? "";
          return (
            <Reveal key={item.src} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <div className="card-surface overflow-hidden rounded-2xl">
                {item.type === "video" ? (
                  <video
                    controls
                    preload="metadata"
                    className="aspect-video w-full bg-black/40 object-cover"
                    aria-label={caption}
                  >
                    <source src={item.src} />
                  </video>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        mode: "grid",
                        index: photos.findIndex((p) => p.originalIndex === i),
                      })
                    }
                    className="group relative block aspect-video w-full cursor-zoom-in"
                    aria-label={caption}
                  >
                    <Image
                      src={item.src}
                      alt={caption}
                      fill
                      sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                      <span className="rounded-full border border-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-white">
                        {labels.viewAllPhotos}
                      </span>
                    </span>
                  </button>
                )}
                {caption && <p className="px-4 py-3 text-xs text-fg/45">{caption}</p>}
              </div>
            </Reveal>
          );
        })}
      </div>

      {lightbox && (
        <div
          className="lightbox-fade fixed inset-0 z-[60] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={labels.closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fg/70 transition-colors hover:border-gold/60 hover:text-gold sm:right-8 sm:top-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {lightbox.mode === "grid" ? (
            <div
              className="max-h-full w-full max-w-5xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="eyebrow mb-6 text-center">{labels.allPhotosHeading}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {photos.map((p, i) => (
                  <button
                    key={p.item.src}
                    type="button"
                    onClick={() => setLightbox({ mode: "single", index: i })}
                    className="lightbox-item relative aspect-square overflow-hidden rounded-xl border border-white/10 transition-transform duration-300 hover:scale-[1.03] hover:border-gold/50"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <Image
                      src={p.item.src}
                      alt={p.caption}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div key={lightbox.index} className="lightbox-image-in relative max-h-[75vh] w-full">
                <Image
                  src={photos[lightbox.index].item.src}
                  alt={photos[lightbox.index].caption}
                  width={1200}
                  height={1600}
                  sizes="90vw"
                  className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain"
                  priority
                />
              </div>

              {photos[lightbox.index].caption && (
                <p className="mt-4 text-sm text-fg/60">{photos[lightbox.index].caption}</p>
              )}

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((s) =>
                      s ? { mode: "single", index: (s.index - 1 + photos.length) % photos.length } : s
                    )
                  }
                  aria-label={labels.prevPhoto}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fg/70 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setLightbox({ mode: "grid", index: lightbox.index })}
                  className="rounded-full border border-white/15 px-5 py-2 text-xs font-medium tracking-wide text-fg/70 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  {labels.backToGrid}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((s) =>
                      s ? { mode: "single", index: (s.index + 1) % photos.length } : s
                    )
                  }
                  aria-label={labels.nextPhoto}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fg/70 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
