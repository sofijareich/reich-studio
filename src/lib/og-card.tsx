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
        background: "#ffffff",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} alt="" width={140} height={140} style={{ marginBottom: 36 }} />
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#000000",
          letterSpacing: -1,
        }}
      >
        Reich Studio
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 28,
          color: "rgba(0,0,0,0.6)",
          letterSpacing: 1,
        }}
      >
        The Agency You Don&apos;t Need to Hire
      </div>
    </div>
  );
}
