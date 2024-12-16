// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://yc4529.github.io",
  base: "Educational-Inequality-in-NYC",
  integrations: [mdx(), sitemap(), tailwind()],
});
