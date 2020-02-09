module.exports = {
  // 使用するファイル拡張子のリスト、importする際に拡張子を省略した場合
  // このリストの左から順に拡張子が照合されるのでtypescriptを使う場合は
  // tsが先にくるように定義しなおすのが良い
  moduleFileExtensions: [
    "ts", "js", "json",
  ],

  // typescriptでjestを動作させるための設定
  transform: {
    "^.+\\.ts$": "ts-jest"
  },

  // 使用するtsconfig.jsonの指定
  globals: {
    'ts-jest': {
      "tsConfig": "tsconfig.json"
    }
  },

  // 拡張子が`.spec.ts`ってなってるファイルがテストファイルになる設定
  testRegex: "\\.spec\\.ts$",

  // Aliasの設定、importで`~/****`ってしたら`./src/****/`がimportされる。
  moduleNameMapper: {
    "^~/(.+)": "<rootDir>/src/$1"
  }
}