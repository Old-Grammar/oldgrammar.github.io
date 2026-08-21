import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://oldgrammar.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
