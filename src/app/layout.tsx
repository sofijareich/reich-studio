import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reich Studio — Marketing- und KI-Automatisierung für Professionals",
  description:
    "Reich Studio hilft Professionals ohne Zeit für Marketing, ihr Fachgebiet zu automatisieren und Vertrauen bei Endkunden aufzubauen. Ohne Fachchinesisch, ohne Umwege.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
