const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['./src', './node_modules/'],
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/],
        use: ['babel-loader', 'ts-loader']
      }
    ]
  }

}