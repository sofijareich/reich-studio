import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mascots from "@/components/Mascots";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL("https://reichstudio.ch"),
    title,
    description,
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        de: "/de",
      },
    },
    openGraph: {
      title,
      description,
      url: locale === routing.defaultLocale ? "/" : `/${locale}`,
      siteName: "Reich Studio",
      locale: locale === "de" ? "de_CH" : "en_CH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const description = t("description");

  const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://reichstudio.ch/#organization",
    name: "Reich Studio",
    url: "https://reichstudio.ch",
    logo: "https://reichstudio.ch/icon.png",
    image: "https://reichstudio.ch/opengraph-image",
    description,
    email: "sofijareich@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sursee",
      addressRegion: "LU",
      addressCountry: "CH",
    },
    areaServed: ["Sursee", "Luzern", "Sempachersee", "Schweiz", "Switzerland"],
    knowsAbout: [
      "Marketing Automation",
      "AI Automation",
      "KI-Automation",
      "Content Marketing",
      "Marketing Agentur",
    ],
    founder: {
      "@type": "Person",
      name: "Sofija Reich",
    },
  };

  return (
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Mascots />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
