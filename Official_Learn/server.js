const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');

//Add 'webpack-hot-middleware/client' into the entry array. This connects to the server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
config.entry.app = ['webpack-hot-middleware/client', config.entry.app];

const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


// 将文件 serve 到 port 3000。
app.listen(3000, function(){
    console.log('Example app listening on port 3000!\n');
})

