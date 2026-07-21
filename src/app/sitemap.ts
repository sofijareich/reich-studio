import type { MetadataRoute } from "next";

const BASE_URL = "https://reichstudio.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/studio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/referenzen", changeFrequency: "monthly", priority: 0.8 },
    { path: "/preise", changeFrequency: "monthly", priority: 0.8 },
    { path: "/produkte", changeFrequency: "monthly", priority: 0.7 },
    { path: "/kontakt", changeFrequency: "yearly", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
