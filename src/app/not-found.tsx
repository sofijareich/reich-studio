import Link from "next/link";

export const metadata = {
  title: "Reich Studio: Page not found",
};

/**
 * Fallback for the rare request that doesn't even resolve to a [locale]
 * segment (the real 404 UI users hit lives at src/app/[locale]/not-found.tsx,
 * which next-intl's locale-prefixed routing catches almost everything into).
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "system-ui, sans-serif",
        background: "#ffffff",
        color: "#000000",
      }}
    >
      <p style={{ fontSize: "0.875rem", textTransform: "uppercase", opacity: 0.6 }}>404</p>
      <h1 style={{ fontSize: "2rem", fontWeight: 800 }}>Page not found.</h1>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Back to reichstudio.ch
      </Link>
    </div>
  );
}
