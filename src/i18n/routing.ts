import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/studio": "/studio",
    "/services/ai-automation": {
      en: "/services/ai-automation",
      de: "/leistungen/ki-automatisierung",
    },
    "/services/marketing-automation": {
      en: "/services/marketing-automation",
      de: "/leistungen/marketing-automatisierung",
    },
    "/portfolio": "/portfolio",
    "/pricing": {
      en: "/pricing",
      de: "/preise",
    },
    "/products": {
      en: "/products",
      de: "/produkte",
    },
    "/products/thanks": {
      en: "/products/thanks",
      de: "/produkte/danke",
    },
    "/contact": {
      en: "/contact",
      de: "/kontakt",
    },
  },
});

export type AppPathnames = keyof typeof routing.pathnames;
