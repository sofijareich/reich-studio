import Link from "next/link";
import Logo from "./Logo";
import { WaitlistInline } from "./Waitlist";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Reich Studio" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/preise", label: "Preise" },
  { href: "/produkte", label: "Produkte" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-fg/40">
            Marketing- und Automatisierungssysteme für Professionals, die
            keine Zeit dafür haben.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-fg/60">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>

        <WaitlistInline />
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-fg/40 sm:flex-row sm:items-center">
        <p>
          Reich Studio — © {new Date().getFullYear()}
        </p>
        <a href="mailto:sofijareich@gmail.com" className="hover:text-fg/70">
          sofijareich@gmail.com
        </a>
      </div>
    </footer>
  );
}
