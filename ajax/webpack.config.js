module.exports = {
  entry:'./src/index.js',
  output:{
    path:'build',
    filename:'bundel.js',
    publicPath:'build/'
  },
  devtool:'eval',//报错到源代码
  resolve: {
    extensions: [".js", ".jsx",".css",".jpg"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,//排除node_modules文件夹
        use: "babel-loader"
      },//js文件用babel加载
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },//css文件的加载,解析文件样式
      {
        test: /\.(jpe?g|png)$/,
        use: 'file-loader'
      }//图片加载
    ]
  }
}
