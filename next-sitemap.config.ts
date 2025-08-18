import type { IConfig } from "next-sitemap";
const config:IConfig = {
  siteUrl: "https://shabuj-global-education.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 5000,                        // optional: max URLs per sitemap
  changefreq: "daily",                      // optional: page update frequency
  priority: 0.7,                            // default priority
  autoLastmod: true,
};

export default config;