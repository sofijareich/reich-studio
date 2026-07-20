"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Reich Studio" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/preise", label: "Preise" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 sm:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo size={scrolled ? 28 : 34} className="transition-all duration-300" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-fg/70 hover:text-fg"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/kontakt"
          className="gold-btn hidden rounded-full px-5 py-2 text-sm font-semibold text-bg md:inline-block"
        >
          Erstgespräch buchen
        </Link>

        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-fg transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-fg transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/5 bg-bg px-6 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-base font-medium ${
                  active ? "text-gold" : "text-fg/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="gold-btn mt-3 rounded-full px-5 py-3 text-center text-sm font-semibold text-bg"
          >
            Erstgespräch buchen
          </Link>
        </nav>
      )}
    </header>
  );
}
