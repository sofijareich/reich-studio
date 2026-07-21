import { ImageResponse } from "next/og";
import { getLogoDataUri, OgCard } from "@/lib/og-card";

export const alt = "Reich Studio — Marketing- und KI-Automatisierung für Professionals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoSrc = await getLogoDataUri();
  return new ImageResponse(<OgCard logoSrc={logoSrc} />, size);
}
