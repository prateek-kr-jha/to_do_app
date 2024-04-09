const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins:[
        new HtmlWebpackPlugin({
            title: "To Do List",
            filename: "index.html",
            template: "./src/index.html",
            inject: "body",
        })
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|gif|jpg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ],
    }, 
    optimization: {
        runtimeChunk: 'single',
    },
}