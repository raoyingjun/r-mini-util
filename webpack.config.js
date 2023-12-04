const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, args) => {
    const {esm} = env
    const {mode} = args;
    const isProd = mode === 'production'

    return {
        entry: "./src/index.ts",
        resolve: {
            extensions: [".ts", ".tsx", "..."],
        },
        experiments: {
            outputModule: esm
        },
        output: {
            path: path.resolve(__dirname, 'dist', esm ? 'es' : 'lib'),
            filename: esm ? "index.esm.js" : 'index.js',
            library: esm ? {type: 'module'} : {name: 'rMiniUtil', type: 'umd'},
            clean: true
        },
        module: {
            rules: [{test: /\.ts$/, loader: "ts-loader"}],
        },
        devServer: {
            port: 8088,
        },
        mode,
        plugins: [
            ...(!isProd ? [new HtmlWebpackPlugin()] : [])
        ]
    };
};
