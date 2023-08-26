import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // 相対パスでビルドする
  root: "src", // 開発ディレクトリ設定
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: ["src/index.html", "src/about/index.html"],
      output: {
        entryFileNames: "assets/js/[name][hash].js",
        chunkFileNames: "assets/js/[name][hash].js",
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return "assets/images/[name][hash].[ext]";
          }
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name][hash].[ext]";
          }
          return "assets/[name][hash].[ext]";
        },
      },
    },
  },
});
