# math-lab
数学に関する物事をクラス化するお勉強用プロジェクト。
作成したクラスはNode環境やブラウザでライブラリとして利用できるものを想定。

## 環境
このプロジェクトは以下の環境で作っている。

- Node.js v10.10.0 インストール済
- yarn v1.22.0 インストール済  

## 全体のディレクトリ構成

```
.
├── README.md
├── package.json
├── src                ... ソースコード
│    └── index.ts     ... バンドルのためのts    
├── dist               ... トランスパイルされたjsとtsの型定義ファイル
├── browser            ... ブラウザ用にビルドされたjsが出力される
├── example            ... サンプルサイト(gulpによってpublicフォルダに出力される)
├── public             ... exampleの出力結果
├── jest.config.js     ... jestの設定
├── tsconfig.json      ... tsの共通設定
├── tsconfig.node.json ... Node環境用にビルドするための追加設定
├── gulpfile.js        ... サンプルサイトを生成するタスクを定義
├── webpack.config.js  ... ビルド設定
└── yarn.lock
```

# example/vendersについて
このフォルダはgit管理しません。
ただ実際に動作させるためには以下のファイルをこのフォルダに配置する必要があります。
下記に示すものを手動で取得し、このフォルダに配置してください。

```
venders
├ somali
│ └ somali.min.js (https://github.com/kurodakazumichi/Somali/raw/master/browser/somali.min.js)
│ └ somali.js (https://github.com/kurodakazumichi/Somali/raw/master/browser/somali.js)
└ highlight (https://highlightjs.org/download/)
   ├ highlight.pack.js
   └ atom-one-dark.css
```

# 本番用のpublicの作成手順
0. example/vencersに必要なjsをそろえる
1. `yarn build`する。
2. example/layout 内でデバッグ用のjsを参照していたら xxxxx.min.js に書き換える
3. example/layout/default.ejsの冒頭にあるバージョンを上げる
4. `yarn build:example` をする

# 開発時のコマンド
1. yarn build:dev --watch
2. yarn example