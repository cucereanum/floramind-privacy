import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://cucereanum.github.io",
  base: "/floramind-privacy",
  vite: {
    plugins: [tailwindcss()],
  },
});
