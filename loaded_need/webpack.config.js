var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry:'./a.js',
    output:{
      filename:'[name].js',
      chunkFilename: '[name].js', //设置按需加载后的chunk名字
      publicPath: '/dist/' //设置基础路径
    
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        hot: true // 开启热更新
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 开始热更新
        new webpack.HotModuleReplacementPlugin()
    ],
    
  }
  