import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import { WaitlistInline } from "./Waitlist";

export default async function Footer() {
  const t = await getTranslations("Nav");
  const tf = await getTranslations("Footer");

  const NAV_LINKS = [
    { href: "/" as const, label: t("home") },
    { href: "/studio" as const, label: t("studio") },
    { href: "/work" as const, label: t("work") },
    { href: "/portfolio" as const, label: t("portfolio") },
    { href: "/pricing" as const, label: t("pricing") },
    { href: "/products" as const, label: t("products") },
    { href: "/contact" as const, label: t("contact") },
  ];

  const SERVICE_LINKS = [
    { href: "/services/ai-automation" as const, label: t("aiAutomation") },
    {
      href: "/services/marketing-automation" as const,
      label: t("marketingAutomation"),
    },
  ];

  return (
    <footer className="border-t border-white/5 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-fg/40">{tf("tagline")}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-fg/60">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-2 text-sm text-fg/60">
          <p className="text-xs tracking-wide text-fg/40 uppercase">
            {t("services")}
          </p>
          {SERVICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>

        <WaitlistInline />
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-fg/40 sm:flex-row sm:items-center">
        <p>
          Reich Studio — {tf("location")} — © {new Date().getFullYear()}
        </p>
        <a href="mailto:sofijareich@gmail.com" className="hover:text-fg/70">
          sofijareich@gmail.com
        </a>
      </div>
    </footer>
  );
}
