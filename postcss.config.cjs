module.exports = {
  plugins: [
    require("autoprefixer")(),
    require("css-declaration-sorter")({
      order: "alphabetical",
    }),
    require("postcss-sort-media-queries")({
      sort: "mobile-first",
    }),
  ],
};
