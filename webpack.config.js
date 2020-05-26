const CssExt = require('mini-css-extract-plugin');

module.exports = env => {

  const isProd = env === 'prod';

  return {
    entry: ["@babel/polyfill", "./raw/script.js"],

    output: {
      path: __dirname + "/public/",
      filename: "script.js",
    },

    plugins: [
      new CssExt({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "styles.css",
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node-modules/,
          loader: "babel-loader",
        },

        {
          test: /\.(s)?css$/,
          use: [CssExt.loader, "css-loader", "sass-loader"],
        },
      ],
    },

    devtool: isProd ? "source-map" : "eval-nosources-source-map",

    devServer: {
      contentBase: __dirname + "/public/",
      port: 9000,
      historyApiFallback: true,
    },
  };

}


