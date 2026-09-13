"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import FigmaLanguageSwitcher from "./FigmaLanguageSwitcher";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The mobile nav collapses to this: a hamburger trigger that opens a true
 * full-screen takeover (portalled to <body> so it can never end up trapped
 * inside a scroll-transformed ancestor — see FigmaPortfolioGallery's
 * lightbox for the same fix and why it's needed). Desktop keeps the inline
 * nav row in FigmaTopNav untouched; this only renders below `lg`.
 */
export default function FigmaMobileMenu({
  navItems,
  openLabel,
  closeLabel,
  locationLabel,
  location,
  contactLabel,
  email,
}: {
  navItems: { href: "/" | "/studio" | "/portfolio" | "/pricing" | "/products" | "/contact"; label: string }[];
  openLabel: string;
  closeLabel: string;
  locationLabel: string;
  location: string;
  contactLabel: string;
  email: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        className="fg-small flex shrink-0 items-center gap-2.5 lowercase text-black lg:hidden"
      >
        <span className="flex h-4 w-5 flex-col justify-between">
          <span className="h-px w-full bg-black" />
          <span className="h-px w-full bg-black" />
          <span className="h-px w-full bg-black" />
        </span>
        {openLabel}
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="fg-page-x fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-white pb-[clamp(2rem,5vh,3rem)] pt-[clamp(1.5rem,3vh,2.5rem)]"
              >
                <div className="flex shrink-0 items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <Image
                      src="/logo/reich-mark-figma.png"
                      alt=""
                      width={36}
                      height={36}
                      className="h-8 w-8 shrink-0"
                    />
                    <span className="fg-small lowercase text-black">reichstudio.ch</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label={closeLabel}
                    className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1 1L15 15M15 1L1 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-1 flex-col justify-center gap-2 py-[clamp(2rem,6vh,3rem)]">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="fg-h2 block lowercase text-black transition-opacity active:opacity-60"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                  className="shrink-0 border-t border-black/15 pt-[clamp(1.25rem,3vh,1.75rem)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-5">
                    <div>
                      <p className="fg-small uppercase text-black/60">{locationLabel}</p>
                      <p className="fg-small mt-1 text-black">{location}</p>
                    </div>
                    <div>
                      <p className="fg-small uppercase text-black/60">{contactLabel}</p>
                      <a href={`mailto:${email}`} className="fg-small mt-1 block text-black">
                        {email}
                      </a>
                    </div>
                    <FigmaLanguageSwitcher />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
