import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getLogoDataUri() {
  const data = await readFile(join(process.cwd(), "src/app/icon.png"));
  return `data:image/png;base64,${data.toString("base64")}`;
}

export function OgCard({ logoSrc }: { logoSrc: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0A0A0A 0%, #17130d 55%, #0A0A0A 100%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} alt="" width={140} height={140} style={{ marginBottom: 36 }} />
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#F5F5F5",
          letterSpacing: -1,
        }}
      >
        Reich Studio
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 28,
          color: "#e8b923",
          letterSpacing: 1,
        }}
      >
        Marketing &amp; KI-Automatisierung für Professionals
      </div>
    </div>
  );
}
