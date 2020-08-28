module.exports = {
  publicPath: '/familia/',
  devServer: {
    proxy: 'http://localhost:3000'
  },
  outputDir: '../public'
}