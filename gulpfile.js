//-----------------------------------------------------------------------------
// 必要なライブラリを読み込む
//-----------------------------------------------------------------------------
const { src, dest, watch, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const frontMatter = require('gulp-front-matter');
const layout = require('layout1');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const paths = {
  ejs: {
    src   : "example/**/*.ejs",
    ignore: "!example/layout/**/*",
    dest  : "public",
  },
  lib: {
    src : "browser/**/*.js",
    dest: "public/assets/js"
  },
  styles: {
    src : "example/**/*.scss",
    dest: "public"
  },
  resouces: {
    src: "example/**/*.{js,css}",
    dest: "public"
  }
}
//-----------------------------------------------------------------------------
// example以下にあるejsをhtmlに変換する
//-----------------------------------------------------------------------------
const page = (done) => 
{
  const registLayout = (file) => {
    return `example/layout/${file.data.layout || 'default'}.ejs`;
  };  

  src([paths.ejs.src, paths.ejs.ignore])
    .pipe(frontMatter({property: 'data'}))
    .pipe(layout.ejs(registLayout))
    .pipe(rename({'extname': ".html"}))
    .pipe(dest(paths.ejs.dest));
  done();
}

//-----------------------------------------------------------------------------
// browser以下にあるjsをpublic/jsにコピー
//-----------------------------------------------------------------------------
const copy = (done) => 
{
  src(paths.lib.src)
    .pipe(dest(paths.lib.dest));

  src(paths.resouces.src)
    .pipe(dest(paths.resouces.dest));    

  done();
}

const scss = (done) => 
{
  src(paths.styles.src)
    .pipe(sass())
    .pipe(dest(paths.styles.dest));
  done();
}

//-----------------------------------------------------------------------------
// 開発サーバーを起動する
//-----------------------------------------------------------------------------
const browserSyncOption = {
  port:8081,
  server: {
    baseDir: './public',
    index: 'index.html'
  },
  reloadOnRestart: true
}

const server = (done) => {
  browserSync.init(browserSyncOption);
  done();
}

//-----------------------------------------------------------------------------
// public以下のファイルに変更があったらブラウザをリロードする
//-----------------------------------------------------------------------------
const watchFiles = (done) => 
{
  const browserReload = () => {
    browserSync.reload();
    done();
  };

  watch([paths.lib.src, paths.resouces.src])
    .on('change', series(copy, browserReload));

  watch(paths.ejs.src)
    .on('change', series(page, browserReload));

  watch(paths.styles.src)
    .on('change', series(scss, browserReload));
}

exports.default = series(parallel(page, scss, copy), series(server, watchFiles));

exports.build = series(scss, page, copy);