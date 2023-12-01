const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV
console.log('mode----------', mode)
const isProd = mode === 'production'
module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.tsx', '...'],

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader"}
        ]
    },
    devServer: {
        port: 8088,
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
}