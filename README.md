# DevEnvSample

Dart Sass + TypeScriptを用いた開発環境のサンプル

## 主な機能

- [destyle.css](https://github.com/nicolas-cusan/destyle.css/)付属
- sassコンパイル・自動ベンダープレフィックス付与(``.browserslistrc``参照)・ソースマップ付与
- tsコンパイル(デフォルトでES3)・ソースマップ付与
- jsバンドル・変換(Babel)
- ファイル変更検知・自動コンパイル
- ローカルサーバー起動

## 対象ファイル

変換・監視の対象となるファイル  

### HTML

エントリーポイント・監視対象 : ``src/index.html``  
出力 : ``dist/index.html``

### Sass

エントリーポイント : ``src/style/style.scss``  
監視対象 : ``["src/style/*.scss", "src/style/*/*.scss"]``  
出力 : ``dist/style.css``

### TypeScript

エントリーポイント : ``src/script/main.ts``  
監視対象 : ``["src/script/*.ts", "src/script/*/*.ts", "src/script/*.js", "src/script/*/*.js"]``  
出力(通常) : ``dist/main.js``  
出力(minify) : ``dist/main-min.js``

### JavaScript

エントリーポイント : ``src/script/main.js``  
監視対象 : ``["src/script/*.ts", "src/script/*/*.ts", "src/script/*.js", "src/script/*/*.js"]``  
出力 : ``dist/main.js``

## 使い方

このリポジトリをgit cloneして、

```
$ npm install
```

これで使えるようになります。

```
// コンパイル実行
$ npm run dev
```

```
// ファイル変更検知・自動コンパイル・ローカルサーバー起動
$ npm run watch
```

```
// ビルド(minify)
$ npm run build
```

npm scriptsは、TypeScriptでの開発を前提として作成。JavaScriptでの開発を行う場合は、``[script]_js``を使用するか、直接npm scriptsを書き換える。  
エントリーポイントとなるファイルを書き換える場合、および監視対象のファイルを追加/変更する場合は、``gulpfile.js``を編集する。

--------------

## License

Apache License Version 2.0

## Author

[ryokohbato](https://github.com/ryokohbato)