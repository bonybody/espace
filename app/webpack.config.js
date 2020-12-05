const src = __dirname + "/src";
const dist = __dirname + "/dist";
const MODE = 'development';
const enabledSourceMap = MODE === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.js",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: dist,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        type: "asset/inline",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ],
  target: ['web', 'es5']
};