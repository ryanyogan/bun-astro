import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://ryanyogan.com",
  integrations: [mdx(), sitemap()],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
    edgeMiddleware: true,
  }),
});
