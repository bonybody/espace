const src = __dirname + "/src";
const dist = __dirname + "/dist";
const MODE = process.env.NODE_ENV;
console.log(MODE);
const enabledSourceMap = MODE === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  watch: MODE === 'development',
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  devServer: {
    contentBase: "dist",
    host: '0.0.0.0',
    port: '80'
  },

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.js",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: dist,
    // 出力ファイル名
    filename: "main.js",
    assetModuleFilename: "img/[name][ext]",
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [src + '/scss'],
              },
              additionalData: "@import 'entrypoint.scss';",
              sourceMap: enabledSourceMap
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              quality: 50
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "style.css",
    }),
  ],
  target: ['web', 'es5']
};