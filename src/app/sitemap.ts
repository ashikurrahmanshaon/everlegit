import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://everlegit.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/services/ecommerce",
    "/services/import-export",
    "/services/saas-software",
    "/services/digital-marketing",
    "/portfolio",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/insights") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
