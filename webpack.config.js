const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:'development', // 打包模式 production 生产模式（代码压缩），development 开发模式
    entry: './src/index.js', //打包入口目录
    devServer: {  // 开发服务器配置
        host:'127.0.0.1', 
        port:8088 ,
        contentBase: './dist',
        },
    output: {
        filename: 'main[contenthash].js',  // 输出js文件名
        clean: true, // 每次打包先清空disk目录
        },
    optimization: {
        realContentHash: true, // 文件哈希后缀
    },
    // webpack插件
    plugins: [new HtmlWebpackPlugin({
        title: 'webpack学习', // 打包的html页面标题 需设置<title><%= htmlWebpackPlugin.options.title %></title>
        // 使用一个模板输出页面内容
        template: 'index.html'
    })],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/i,
          use: [ "file-loader"],
        },
        {
          test: /\.styl$/i,
          use: ["style-loader", "css-loader", "stylus-loader"],
        },
        {
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
          {
            test: /\.scss$/i,
            use: ["style-loader",
              "css-loader",
              {
                loader: 'sass-loader',
                options: {
                  implementation:require('dart-sass')
                }
              }
            ],
          },
        ],
      },
};