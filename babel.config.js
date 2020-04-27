presets: [
  ["@babel/preset-env", {
    targets: ['> 1%', 'last 2 versions'],
    useBuiltIns: "usage", // or "entry"
    corejs: 3,
  }]
]