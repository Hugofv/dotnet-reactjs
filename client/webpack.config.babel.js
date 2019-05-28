const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { env } = process;

const options = {
  mode: env.NODE_ENV,
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    hot: true
  },
  devtool:
    env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : undefined
};

module.exports = options;

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/App.js',
//   module: {
//     rules: [
//       {
//         exclude: /node_modules|packages/,
//         test: /\.js$/,
//         use: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.less$/,
//         use: ['style-loader', 'css-loader', 'less-loader']
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       'react-dom': '@hot-loader/react-dom'
//     }
//     // extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/public',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   // performance: {
//   //   hints: false,
//   //   maxAssetSize: 450000,
//   //   maxEntrypointSize: 8500000,
//   //   assetFilter: assetFilename => {
//   //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
//   //   }
//   // },
//   // optimization: {
//   //   splitChunks: {
//   //     chunks: 'all'
//   //   }
//   // },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: __dirname + '/public/index.html'
//     }),
//     new webpack.NamedModulesPlugin()
//   ]
//   // plugins: [
//   //   new webpack.HotModuleReplacementPlugin(),
//   //   new webpack.ProgressPlugin(),
//   //   new webpack.NamedModulesPlugin(),
//   //   new HtmlWebpackPlugin({
//   //     template: __dirname + '/public/index.html',
//   //     minify: {
//   //       collapseInlineTagWhitespace: true,
//   //       collapseWhitespace: true,
//   //       preserveLineBreaks: true,
//   //       minifyURLs: true,
//   //       removeComments: true,
//   //       removeAttributeQuotes: true
//   //     }
//   //   })
//   // ],
//   // devServer: {
//   //   contentBase: './public',
//   //   hot: true
//   // }
// };
