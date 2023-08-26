# 環境構築・勉強メモ

## Gulp環境から以降するために必要な要件

- [ ] scssのコンパイル
- [ ] pugのコンパイル
- [ ] jsのバンドル
- [ ] 画像の圧縮
- [ ] webpの生成
- [ ] キャッシュクリア
- [ ] vueのバンドル（hp-staticのみ）

## やったこと

### 開発ディレクトリをsrcに

- `root: "src"`

### buildオプション

vite環境構築のキモと思われる

- `emptyOutDir: false`
  - outDirがルートにないため、npm scriptsで削除する
  - 警告が出るためfalseを指定しておく
  - [build.emptyOutDir](https://ja.vitejs.dev/config/build-options.html#build-emptyoutdir)
- `copyPublicDir`
  - デフォルトで`true`なので何も書かないが、publicフォルダをdistにコピーして欲しいので必要
  - 動画ファイルなど、そのままコピーしたいものを格納する想定。
  - [build.copyPublicDir](https://ja.vitejs.dev/config/build-options.html#build-copypublicdir)

### rollupOptions

- index.htmlがルートではなく、srcにあるので、`input`で位置を教えてあげる必要がある
- css、js、imgはデフォルトだと、index-[hash].css, index-[hash].js, imageName-[hash].[ext]になり。dist/assets配下に入ってしまう。srcの構成の通り入って欲しいので設定が必要となる。
- jsは`entryFileNames`で行う
- その他(css, images)は`assetFileNames`で行う

## その他のメモ

- scssでのnode_modulesの読み込みはデフォルトで`node_modules`を省略できる
- `npm run dev`した後vite.config.jsを編集した場合、`[vite]server restarted`となって、設定が即座に反映される。（serverを再起動する必要がない。）

## 課題

- `npm run dev`で下層ページが表示されない（TOPと同じものが表示される...）
- style.scss、main.jsがindex.[ext]に変わってしまう...

## 参考サイト

- Vite
  - https://ja.vitejs.dev/
- 初期インストール ~ sass、stylelint、eslintの導入
  - https://zenn.dev/hiiiita/articles/a4881dab7226aa
  - https://yuito-blog.com/vite-develop/#index_id15
- npm scriptsからviteへの載せ替え
  - https://whyisthis.dev/others/old-env-to-vite/
- viteでpugを使う
  - https://designsupply-web.com/media/programming/7652/
