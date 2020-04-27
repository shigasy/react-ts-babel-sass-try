presets: [
  ["@babel/preset-env", {
    useBuiltIns: "usage", // or "entry"
    corejs: 3,
  }],
  "@babel/preset-react", // react用のbabelの設定
]