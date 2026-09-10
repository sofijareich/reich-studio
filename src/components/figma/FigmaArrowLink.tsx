import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

/**
 * The homepage's only call-to-action style: text + arrow, underline on
 * hover — no fill, no border. Everything on the homepage is unshaded
 * ("nichts hinterlegt"), buttons included, so a CTA is just a link that
 * leans forward.
 */
export default function FigmaArrowLink({
  href,
  children,
  className,
}: {
  href: ComponentProps<typeof Link>["href"];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`fg-mid group inline-flex items-baseline gap-[0.55em] lowercase text-black ${className ?? ""}`}
    >
      <span className="border-b border-black/30 pb-[0.12em] transition-colors group-hover:border-black">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="translate-y-[0.05em] transition-transform duration-200 group-hover:translate-x-[0.3em]"
      >
        &rarr;
      </span>
    </Link>
  );
}
