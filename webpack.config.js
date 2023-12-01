const path = require("path");

module.exports = (env, args) => {
  const { mode } = args;
  const isProd = mode === "production";

  return {
    entry: "./src/index.ts",
    resolve: {
      extensions: [".ts", ".tsx", "..."],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js",
      library: {
        name: 'rMiniUtil',
        type: 'umd'
      },
      clean: true
    },
    module: {
      rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    },
    devServer: {
      port: 8088,
    },
    mode,
  };
};
