const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool : 'eval-source-map', //调试使用
	entry : __dirname + '/app/main.js',//唯一入口文件
	output : {
		path : __dirname + '/build',//打包后的文件存放点的地方
		filename : 'bundle.js'//打包后输出文件的文件名
	},
	devServer : {
		contentBase : './public',//本地服务器搜加载的页面所在的目录
		historyApiFallback :  true,//不跳转,所有的跳转将指向index.html
		inline : true//实时刷新
	},
	module : {
		rules : [
			{
				test : /(\.jsx|\.js)$/,
				use : {
					loader : 'babel-loader'
				},
				exclude : /node_modules/
			},
			{
				test : /\.css$/,
				use : [
					{
						loader : 'style-loader'
					},
					{
						loader : 'css-loader',
						options : {
							modules : true,//指定启用css module
							localIdentName : '[name]_[local]--[hash:base64:5]' // 指定css的类名格式
						}
					},
					{
						loader : 'postcss-loader'
					}
				]
			}
		]
	},
	plugins : [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template : __dirname + '/app/index.tmpl.html'//new 一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin()//热加载插件
	],
}