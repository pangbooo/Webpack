const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry:"./src/index.js",
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'./dist'),
    },
    devtool: 'inline-source-map', // build时显示报错具体位置
    module:{
        rules:[ // 同loader（使用rules兼容好一些）
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            },
            {
                test:/\.less$/,
                use:["less-loader","style-loader","css-loader"],
            },
            {
                // sideEffects: false //去除副作用
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}