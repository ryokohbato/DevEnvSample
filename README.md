# DevEnvSample

Dart Sass + TypeScriptを用いた開発環境のサンプル

![サンプル](https://raw.githubusercontent.com/ryokohbato/DevEnvSample/images/images/usage.gif?token=AQDMNV75FZAD2S4UJSK7AZK7C3O3Y)

## 主な機能

- [destyle.css](https://github.com/nicolas-cusan/destyle.css/)付属
- sassコンパイル・自動ベンダープレフィックス付与(``.browserslistrc``参照)
- tsコンパイル(デフォルトでES3に変換)
- jsバンドル・変換(Babel)
- ソースマップ
- ビルド(minify)・簡易的なコード難読化
- ファイル変更検知・自動コンパイル
- ローカルサーバー起動

| 機能 | run / watch | build |
|:-----:|:-----:|:-----:|
| ソースマップ | ✓ | × |
| コード最小化 | × | ✓ |

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
出力 : ``dist/main.js``  

### JavaScript

エントリーポイント : ``src/script/main.js``  
監視対象 : ``["src/script/*.ts", "src/script/*/*.ts", "src/script/*.js", "src/script/*/*.js"]``  
出力 : ``dist/main.js``

## 使い方

このリポジトリをgit cloneして、

```npm
// プロジェクトの名前は適宜変更してください
$ npm install
```

これで使えるようになります。

```npm
// コンパイル実行
$ npm run dev
```

```npm
// ファイル変更検知・自動コンパイル・ローカルサーバー起動
$ npm run watch
```

```npm
// ビルド
$ npm run build
```

npm scriptsは、TypeScriptでの開発を前提として作成。JavaScriptでの開発を行う場合は、``[script]_js``を使用するか、直接npm scriptsを書き換える。  
エントリーポイントとなるファイルを書き換える場合、および監視対象のファイルを追加/変更する場合は、``gulpfile.js``を編集する。

--------------

## License

MIT License

## Author

[ryokohbato](https://github.com/ryokohbato)
