const path = require("path");
const miniCssExtract = require("mini-css-extract-plugin");

module.exports = env => {
  const isproduction = env === "production";
  const cssExtract = new miniCssExtract({ filename: "styles.css" });
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "/public"),
      filename: "bundle.js"
    },

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

    plugins: [cssExtract],

    devtool: isproduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "/public"),
      historyApiFallback: true
    }
  };
};
