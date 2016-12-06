/**
 * Created by leonardli on 11/24/16.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: [
    "./main.jsx"
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: "http:/localhost:8080/"
  },
  devtool: "#inline-source-map",
  resolve: {
    modulesDirectories: [
      "node_modules"
    ],
    // When requiring, you don't need to add these extensions
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    proxy: {
      '/graphql': 'http://localhost:8002'
    },
    publicPath: 'http://localhost:8080/',
    hot: true,
    progress: true,
    quiet: false,
    noInfo: false,
    historyApiFallback: true,
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    },
    headers: {"Access-Control-Allow-Origin": "*"},
    host: 'localhost',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.(html|css)$/,
        loader: "file?name=[name].[ext]"
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
};