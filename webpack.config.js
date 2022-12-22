const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
      clean: true
    },
    devServer: {
      static: path.resolve(__dirname, "build"),
      port: 8080,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
      	  test: /\.(png|svg|jpg|jpeg|gif)$/i,
   		    type: 'asset/resource',
       	},
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }
  ),
]
};