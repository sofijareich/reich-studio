import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/studio": "/studio",
    "/work": {
      en: "/work",
      de: "/referenzen",
    },
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
