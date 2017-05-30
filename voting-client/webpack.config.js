module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname.join('/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}
