const path = require("path");
const webpack = require('webpack');
const miniCssExtract = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}


module.exports = env => {
  const isproduction = env === "production";
  const cssExtract = new miniCssExtract({ filename: "styles.css" });

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "/public", "dist"),
      filename: "bundle.js"
    },

    mode: 'development',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },

        {
          test: /\.s?css$/,
          use: [
            miniCssExtract.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },

    plugins: [
      cssExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],

    devtool: isproduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "/public"),
      historyApiFallback: true,
      publicPath: "/dist"
    }
  };
};
