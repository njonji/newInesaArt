const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    home:'./src/home.js',
    story:'./src/story.js',
    gallery:'./src/galerija.js',
    shop:'./src/shop.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name]bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  optimization: {
    minimizer:[new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins:[new MiniCssExtractPlugin({filename:"[name].css"}),
          new webpack.LoaderOptionsPlugin({options: { postcss: [autoprefixer()]}}),
     
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          "plugins": [
            ["@babel/transform-runtime"]
           ]
        }
      }
    },
    
   {
     test:/\.scss$/,
     exclude: /node_modules/,
     use:[
       MiniCssExtractPlugin.loader,
       "css-loader",
       "postcss-loader",
       "sass-loader"
     ]
   },
  ]
  }
 
};