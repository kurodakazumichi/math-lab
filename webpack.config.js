const path = require('path');

//-----------------------------------------------------------------------------
// コマンドライン引数には以下の値を指定する
// --mode: development or production
// --type: browser or node
//-----------------------------------------------------------------------------
module.exports = (env, argv) => {

  // コマンドライン引数による判定
  const mode = (argv.mode === undefined)? "production" : "development";
  const isDev = mode === "development";

  // ブラウザ用の設定
  const browser = {
    path: path.join(__dirname, '/browser'),
    filename: `mathLab${(isDev?".js":".min.js")}`,
    configFile: "tsconfig.json",
  };

  // Node環境用の設定
  const node = {
    path: path.join(__dirname, "/dist"),
    filename:"index.js",
    configFile: "tsconfig.node.json"
  };

  // argv.typeにはbrowserかnodeのどちらかを指定する。指定しないと多分エラーになる
  const params = {browser, node}[argv.type];

  const conf = {
    mode: mode,

    entry: './src/index.ts',
    output: {
        path: params.path,
        publicPath: '/',
        filename: params.filename,
        library: "MathLab",
        libraryExport: '',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: params.configFile
                }                
              }
            ]
        }]
    },
    // import 文で .ts ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    // フロントエンドの開発では拡張子を省略することが多いので、
    // 記載したほうがトラブルに巻き込まれにくい。
    resolve: {
      // 拡張子を配列で指定
      extensions: [
        '.ts', '.js',
      ],
    },
    plugins:[],
  }

  // 開発時のみ
  if (isDev) {
    conf.devtool = 'inline-source-map';
  }

  return conf;
}