import type { MetadataRoute } from "next";
import { langs } from "@/lib/i18n";
import { posts } from "@/lib/blog/posts";

const base = "https://digitalimplant.az";

const staticRoutes = [
  "",
  "/planning",
  "/guided-surgery",
  "/3shape",
  "/workflow",
  "/brands",
  "/faq",
  "/about",
  "/blog",
  "/contact",
  "/appointment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${base}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
      });
    }

    for (const post of posts) {
      entries.push({
        url: `${base}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.isoDate),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
