# DevEnvSample

開発環境のサンプル

## 主な機能

- destyle.css
- sassコンパイル・自動ベンダープレフィックス付与(``.browserslistrc``参照)・ソースマップ付与
- tsコンパイル(デフォルトでES3)・ソースマップ付与
- jsバンドル・変換(Babel)
- ファイル変更検知・自動コンパイル
- ローカルサーバー起動

## 対象ファイル

変換・監視の対象となるファイル  

### HTML

``src/index.html``

### Sass

エントリーポイント : ``src/style/style.scss``  
監視対象 : ``["src/style/*scss", "src/style/*/*.scss"]``

### TypeScript

エントリーポイント : ``src/script/main.ts``  
監視対象 : ``["src/script/*.ts", "src/script/*/*.ts", "src/script/*js", "src/script/*/*.js"]``

### JavaScript

エントリーポイント : ``src/script/main.js``  
監視対象 : ``["src/script/*.ts", "src/script/*/*.ts", "src/script/*js", "src/script/*/*.js"]``

## npm scripts

main.ts(TypeScript)がエントリーポイントの規定値として設定されているため、main.js(JavaScript)をエントリーポイントとする場合は、npm scriptを書き換える必要がある。

```
// コンパイル実行
npm run dev
```

```
// ファイル変更検知・自動コンパイル・ローカルサーバー起動
npm run watch
```

```
// ビルド(minify)
npm run build
```

npm scriptsは、TypeScriptでの開発を前提として作成。JavaScriptでの開発を行う場合は、``[script]_js``を使用するか、直接npm scriptsを書き換える。  
エントリーポイントとなるファイルを書き換える場合、および監視対象のファイルを追加/変更する場合は、``gulpfile.js``を編集する。
