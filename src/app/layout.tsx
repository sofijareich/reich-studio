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

const TITLE = "Reich Studio — The Agency You Don't Need to Hire";
const DESCRIPTION =
  "Reich Studio helps busy professionals automate their marketing and build real trust with clients — no agency retainer, no jargon, no detours.";

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
    locale: "en_CH",
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
    <html lang="en" className={`${inter.variable} h-full`}>
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
