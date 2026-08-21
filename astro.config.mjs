import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://oldgrammar.com",
  output: "server",
  session: false,

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
