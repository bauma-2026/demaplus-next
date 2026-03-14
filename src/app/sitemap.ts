import type { MetadataRoute } from "next";
import { news } from "@/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://demaplus.si";

  const newsUrls = news.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/reference`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/novice`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
    },
    ...newsUrls,
  ];
}