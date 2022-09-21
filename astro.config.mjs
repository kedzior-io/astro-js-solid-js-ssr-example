import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";

export default defineConfig({
  site: "https://example.com",
  output: "server",
  integrations: [mdx(), solid()],
});
