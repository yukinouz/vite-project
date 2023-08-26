import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./", //相対パスでビルドする
  root: "src", // 開発ディレクトリ設定
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
