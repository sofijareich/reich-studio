import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathnames } from "@/i18n/routing";

const BASE_URL = "https://reichstudio.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    href: AppPathnames;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { href: "/", changeFrequency: "monthly", priority: 1 },
    {
      href: "/services/ai-automation",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      href: "/services/marketing-automation",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { href: "/studio", changeFrequency: "monthly", priority: 0.8 },
    { href: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { href: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { href: "/products", changeFrequency: "monthly", priority: 0.7 },
    { href: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { href: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}${getPathname({ locale, href: route.href } as never)}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );
}
