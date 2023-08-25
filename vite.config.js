import path from "path";
import { resolve } from "path";
import { defineConfig } from "vite";
import pugPlugin from "@macropygia/vite-plugin-pug-static";

const basedir = path.resolve(__dirname, "src");

export default defineConfig({
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        home: "src/index.pug",
      },
    },
  },
  plugins: [
    pugPlugin({
      buildOptions: { basedir },
      serveOptions: { basedir },
    }),
  ],
});
