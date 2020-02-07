# math-lab
数学勉強用

開発はTypeScriptで行い、開発時はjestによって動作確認を行うスタイルのプロジェクト。
バンドル化にはparcelを使用する。
最終的にjQueryのように<script></script>で読み込めるライブラリを吐き出す。


## 環境
- Node v10.10.0
- yarn v1.22.0

## 使用するパッケージ

- typescript: ts開発なので必須
- jest: テストがないと実行確認できないので必須
- ts-jest: tsでjestを使うために必須
- parcel: 最終的にbundleするために使用する
- @types/jest @types/node: ないと怒られるので入れる

```bash
yarn add -D typescript jest ts-jest parcel @types/jest @types/node
```

## ディレクトリ構成

```
.
├── README.md
├── package.json
├── src            ... ソースコード
├── build          ... バンドルされたjsが入る
├── jest.config.js ... jestの設定
├── tsconfig.json  ... tsの設定
└── yarn.lock
```