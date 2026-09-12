"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { PortfolioMediaItem } from "@/lib/portfolioMedia";

type LightboxState =
  | { mode: "grid" | "single"; index: number }
  | { mode: "video"; src: string; caption: string }
  | null;

type GalleryLabels = {
  viewAllPhotos: string;
  allPhotosHeading: string;
  closeLightbox: string;
  backToGrid: string;
  prevPhoto: string;
  nextPhoto: string;
  playVideo: string;
  pauseVideo: string;
  muteVideo: string;
  unmuteVideo: string;
};

function PlayGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 2.5L13.5 8L4 13.5V2.5Z" fill="currentColor" />
    </svg>
  );
}

function PauseGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3.5" y="2.5" width="3" height="11" fill="currentColor" />
      <rect x="9.5" y="2.5" width="3" height="11" fill="currentColor" />
    </svg>
  );
}

function MutedGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 6H4L8 2.5V13.5L4 10H1V6Z" fill="currentColor" />
      <path d="M10.5 5.5L14.5 9.5M14.5 5.5L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UnmutedGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 6H4L8 2.5V13.5L4 10H1V6Z" fill="currentColor" />
      <path d="M10.8 4.8C11.9 5.9 11.9 10.1 10.8 11.2M12.8 3C14.7 4.9 14.7 11.1 12.8 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * A video tile in the grid: no native <video> controls (no play bar, no
 * fullscreen button). Hovering plays it muted and looped inline, like a
 * silent preview; leaving pauses and rewinds it. The badge is the only UI -
 * visible at rest to signal "this moves", fading out while the preview
 * plays. Clicking opens the full video with sound in the lightbox.
 */
function VideoTile({
  src,
  caption,
  playLabel,
  onOpen,
}: {
  src: string;
  caption: string;
  playLabel: string;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);

  function handleEnter() {
    setHovering(true);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }

  function handleLeave() {
    setHovering(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  return (
    <button
      type="button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onOpen}
      className="group relative block aspect-video w-full cursor-pointer"
      aria-label={caption || playLabel}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full bg-black/5 object-cover"
      >
        <source src={src} />
      </video>
      <span
        className={`absolute inset-0 flex items-center justify-center bg-black/15 transition-opacity duration-300 ${
          hovering ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-11 w-11 items-center justify-center border border-white/80 text-white">
          <PlayGlyph size={18} />
        </span>
      </span>
    </button>
  );
}

/**
 * The video lightbox player: sound is on by default (opening it is a
 * deliberate "watch this" click, unlike the muted grid preview), with a
 * hairline-bordered play/pause and mute button pair matching the photo
 * lightbox's prev/next buttons instead of the browser's native controls.
 */
function VideoLightboxPlayer({
  src,
  caption,
  labels,
}: {
  src: string;
  caption: string;
  labels: GalleryLabels;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      setPlaying(false);
    });
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      className="relative flex max-h-full w-full max-w-3xl flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        ref={videoRef}
        muted={muted}
        loop
        playsInline
        autoPlay
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="max-h-[70vh] w-full cursor-pointer border border-black/10 object-contain"
      >
        <source src={src} />
      </video>

      {caption && <p className="fg-small mt-4 text-black/50">{caption}</p>}

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? labels.pauseVideo : labels.playVideo}
          className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
        >
          {playing ? <PauseGlyph /> : <PlayGlyph />}
        </button>
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? labels.unmuteVideo : labels.muteVideo}
          className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
        >
          {muted ? <MutedGlyph /> : <UnmutedGlyph />}
        </button>
      </div>
    </div>
  );
}

/**
 * Figma has no gallery/lightbox frame to match, so this restyles the
 * original dark-theme version (PortfolioGallery.tsx) in the editorial
 * black-on-white language established elsewhere on the page: thin black
 * hairline borders instead of filled dark cards, sharp corners, no glow.
 * Interaction structure is unchanged - grid, click photo, full-grid
 * overview, single image with prev/next. Videos get their own hover-preview
 * + custom-controls lightbox instead of native <video controls>.
 */
export default function FigmaPortfolioGallery({
  media,
  captions,
  labels,
}: {
  media: PortfolioMediaItem[];
  captions: string[];
  labels: GalleryLabels;
}) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const photos = media
    .map((item, i) => ({ item, caption: captions[i] ?? "", originalIndex: i }))
    .filter((entry) => entry.item.type === "image");

  useEffect(() => {
    if (!lightbox || lightbox.mode !== "single") return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setLightbox((s) =>
          s && s.mode === "single" ? { mode: "single", index: (s.index + 1) % photos.length } : s
        );
      }
      if (e.key === "ArrowLeft") {
        setLightbox((s) =>
          s && s.mode === "single"
            ? { mode: "single", index: (s.index - 1 + photos.length) % photos.length }
            : s
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, photos.length]);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="mt-[clamp(2rem,5vh,3.5rem)] grid gap-[clamp(0.75rem,1.5vw,1.25rem)] sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item, i) => {
          const caption = captions[i] ?? "";
          return (
            <div
              key={item.src}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div className="overflow-hidden border border-black/15">
                {item.type === "video" ? (
                  <VideoTile
                    src={item.src}
                    caption={caption}
                    playLabel={labels.playVideo}
                    onOpen={() => setLightbox({ mode: "video", src: item.src, caption })}
                  />
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
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                      <span className="fg-small border border-white/70 px-4 py-1.5 lowercase text-white">
                        {labels.viewAllPhotos}
                      </span>
                    </span>
                  </button>
                )}
              </div>
              {caption && (
                <p className="fg-small mt-2 text-black/45">{caption}</p>
              )}
            </div>
          );
        })}
      </div>

      {lightbox && (
        <div
          className="lightbox-fade fixed inset-0 z-[60] flex items-center justify-center bg-white/97 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={labels.closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-black/20 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white sm:right-8 sm:top-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {lightbox.mode === "video" ? (
            <VideoLightboxPlayer src={lightbox.src} caption={lightbox.caption} labels={labels} />
          ) : lightbox.mode === "grid" ? (
            <div
              className="max-h-full w-full max-w-5xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="fg-small mb-6 text-center lowercase text-black/50">
                {labels.allPhotosHeading}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {photos.map((p, i) => (
                  <button
                    key={p.item.src}
                    type="button"
                    onClick={() => setLightbox({ mode: "single", index: i })}
                    className="lightbox-item relative aspect-square overflow-hidden border border-black/15 transition-transform duration-300 hover:scale-[1.03] hover:border-black"
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
                  className="mx-auto max-h-[75vh] w-auto border border-black/10 object-contain"
                  priority
                />
              </div>

              {photos[lightbox.index].caption && (
                <p className="fg-small mt-4 text-black/50">
                  {photos[lightbox.index].caption}
                </p>
              )}

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((s) =>
                      s && s.mode === "single"
                        ? { mode: "single", index: (s.index - 1 + photos.length) % photos.length }
                        : s
                    )
                  }
                  aria-label={labels.prevPhoto}
                  className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setLightbox({ mode: "grid", index: lightbox.index })}
                  className="fg-small border border-black/20 px-5 py-2 lowercase text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  {labels.backToGrid}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((s) =>
                      s && s.mode === "single"
                        ? { mode: "single", index: (s.index + 1) % photos.length }
                        : s
                    )
                  }
                  aria-label={labels.nextPhoto}
                  className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
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
