# react-ts-babel-sass-try
仕組みを知るため

## 機能
- ES5にトランスパイル
- IE11に対応
- TypeScript対応


## 何したのか
1. `webpack webpack-cli webpack-dev-server webpack-merge`をインストール
2. webpackの設定
   1. modeやentryやoutput
   2. resolve.extentionsでmodule解決。相対PATHや絶対PATHをしていしない、モジュール名を使って指定
3. TypeScriptを読み込む & ES5にpolyfill付けてトランスパイルしたいため、`typescript ts-loader @babel/core @babel/preset-env babel-loader core-js@3` をインストール
4. `babel.config.js`書いたり、webpackで`babel-loader`と`ts-loader`を呼び出したり
5. 