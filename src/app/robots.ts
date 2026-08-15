import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/products/thanks", "/produkte/danke", "/de/produkte/danke"],
    },
    sitemap: "https://reichstudio.ch/sitemap.xml",
  };
}
