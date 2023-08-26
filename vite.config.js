import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        home: "src/index.html",
        about: "src/about/index.html",
      },
    },
  },
});
