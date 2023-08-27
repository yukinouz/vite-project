import { resolve } from "path";
import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: "./", // 相対パスでビルドする
  root: "src", // 開発ディレクトリ設定
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        includePaths: ["src/scss"],
      },
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: false, // npm scriptsで実行
    rollupOptions: {
      input: {
        index: "src/index.html",
        about: "src/about/index.html",
      },
      output: {
        entryFileNames: "assets/js/[name][hash].js",
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return "assets/images/[name][hash][extname]";
          }
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name][hash][extname]";
          }
          return "assets/[name][hash][extname]";
        },
      },
    },
  },
  plugins: [
    pugPlugin({
      localImports: true,
    }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
});
