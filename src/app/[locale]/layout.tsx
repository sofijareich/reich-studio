import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FigmaFooter from "@/components/figma/FigmaFooter";
import Mascots from "@/components/Mascots";
import FigmaSmoothScroll from "@/components/figma/FigmaSmoothScroll";
import ThemeController, { THEME_INIT_SCRIPT } from "@/components/figma/ThemeController";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Manrope carries the Figma redesign — ExtraBold display, Regular everything else.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
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
    verification: {
      google: "google3cb80c9e60067638",
    },
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
    email: "sofija.reich@reichstudio.ch",
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
    /* suppressHydrationWarning: the theme-init script (below) stamps
       data-home-theme onto <html> before React hydrates (the standard theming
       pattern — it only covers this element's own attributes). */
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <NextIntlClientProvider>
          <FigmaSmoothScroll>
            <ThemeController />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FigmaFooter />
            <Mascots />
          </FigmaSmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
