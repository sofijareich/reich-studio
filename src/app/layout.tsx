import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mascots from "@/components/Mascots";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Reich Studio — Marketing- und KI-Automatisierung für Professionals";
const DESCRIPTION =
  "Reich Studio hilft Professionals ohne Zeit für Marketing, ihr Fachgebiet zu automatisieren und Vertrauen bei Endkunden aufzubauen. Ohne Fachchinesisch, ohne Umwege.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reichstudio.ch"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Reich Studio",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Reich Studio",
  url: "https://reichstudio.ch",
  logo: "https://reichstudio.ch/icon.png",
  image: "https://reichstudio.ch/opengraph-image",
  description: DESCRIPTION,
  email: "sofijareich@gmail.com",
  areaServed: "CH",
  founder: {
    "@type": "Person",
    name: "Sofija Reich",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Mascots />
      </body>
    </html>
  );
}
