# math-lab
- 開発はTypeScriptで行い、開発時はjestによって動作確認を行うスタイルのプロジェクト。
- バンドル化にはparcelを使用する。
- 最終的にjQueryのように`script`タグで読み込めるようなライブラリを吐き出してぇ。

という時のためのプロジェクト設定方法

※このプロジェクト自体は数学勉強用のための俺俺ライブラリを作っている例


## 環境
このプロジェクトは以下の環境で作っている。

- MacOS Catalina v10.15.2
- Node.js v10.10.0 インストール済
- yarn v1.22.0 インストール済  
(yarnの代わりにnpmを使ってもいい)

## 全体のディレクトリ構成

```
.
├── README.md
├── package.json
├── src            ... ソースコード
|    └── index.ts  ... バンドルのためのts    
├── build          ... バンドルされたjsが入る
├── dist           ... トランスパイルされたjsとtsの型定義ファイル
├── jest.config.js ... jestの設定
├── tsconfig.json  ... tsの設定
└── yarn.lock
```

## 環境構築手順

### 環境構築手順 その① 下準備
```
# 適当なディレクトリを作って移動
mkdir hoge
cd hoge

# プロジェクト環境の下準備(package.jsonが作られる)
yarn init
```

## 環境構築手順 その② 使用するパッケージ
```bash
# 必要なパッケージを入れる
yarn add -D typescript jest ts-jest parcel @types/jest @types/node
```

### 環境構築手順 その③ tsconfig.json
typescriptの設定ファイルである`tsconfig.json`を作成する。

詳しくは`./tsconfig.json`を参照のこと

### 環境構築手順 その④ jest.config.json
jestの設定ファイルである`jest.config.js`を作成する。  
typescript使う設定などをしている.

詳しくは`./jest.config.js`を参照のこと

### 環境構築手順 その⑤ バンドル用のindex.tsを作る
たくさんのプログラムを最終的に１つにまとめるためのファイルを作る  
このプロジェクトでは`./src/index.ts`がその役目をはたす。

詳しくは`./src/index.ts`を参照のこと

### 環境構築手順 その⑥ 便利コマンドを定義
テストの実行やビルドをコマンド一発でできるように`package.json`に以下の内容を追加

```
"scripts": {
  "test": "jest --watch",
  "test:cover": "jest --coverage",
  "build": "rm -rf ./build && parcel build ./src/index.ts --out-dir=build --no-source-maps",
  "build:map": "rm -rf ./build && parcel build ./src/index.ts --out-dir=build"
}
```

コマンドライン上で
- `yarn test`とすればjestによるテストが起動する。
- `yarn test:cover`とすれば全体のテスト網羅率が表示される。
- `yarn build`とすれば、`./build`にビルド結果の`js`が出力される。
- `yarn build:map`は`yarn build`と一緒だが、mapファイルも出力される。


これで環境構築は終了。

## 実際の開発の流れ

1. 何かしらプログラムを作る -> `./src/hoge.ts`
2. それに対するテストプログラムを作る -> `./src/hoge.spec.ts`
3. テストを実行する -> `yarn test`
4. ビルドする -> `yarn build`
5. おわり。

詳しくは`./src`を参考のこと

### 追記

他のTypeScriptプロジェクトに`yarn add`して使うための設定を追加。
`yarn build:tsc`とすることで`dist`にトランスパイルしたコードが生成される。
