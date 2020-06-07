const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'production',
    // 入口文件
    entry: {
        main: './src/main.js'
    },
    // 出口文件
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        open:true,
        port:8888,
        hot:true,
        contentBase:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(css|sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    // 配置插件
    plugins: [
        // 打包指定路径的index.html到dist目录
        new HtmlWebpackPlugin({ template: './public/index.html' }),
       // 在打包之前需要对dist目录里的文件进行清除，从而只保留最新的文件
        new CleanWebpackPlugin(),
        // 在最新版，必须加载此插件，vue才能打包
        new VueLoaderPlugin()
    ],
    // 解決文件大小超出警告
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');

        }
    },
}