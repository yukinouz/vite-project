# vite-project

viteで静的サイトを作るためのアセットファイル群です。

## 環境説明

## 初回インストール

1. Node をインストールしてください。
   - `.node-version` に記載されている Node バージョンを使用してください。
     - nodenv や nvm を利用していただくことを推奨します。
1. Nodeパッケージのインストールしてください。
   ```sh
   npm install
   ```

## 開発用ビルド

```sh
npm run dev
```

を実行すると、開発のためのビルドが実行されます。

## 本番用ビルド

```sh
npm run build
```

## その他

### 整形, Lint

整形、Lint 関連のコマンド

- `npm run lint:js` ・・・ESLint
- `npm run lint:scss` ・・・Stylelint
