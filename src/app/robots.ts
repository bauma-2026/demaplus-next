import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://demaplus.si/sitemap.xml",
  };
}