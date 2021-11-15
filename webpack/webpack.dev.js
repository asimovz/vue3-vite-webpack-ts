const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const { mode } = process.env
const envPath = path.resolve(__dirname, `../.env${mode ? `.${mode}` : ``}`)
const envConfig = dotenv.config({ path: envPath }).parsed

const PublicVar = obj => {
  let newObj = JSON.parse(JSON.stringify(obj))
  Object.keys(newObj).map(item => {
    newObj[item] = JSON.stringify(newObj[item])
  })
  return newObj
}

const plugins = [
  new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
  // new webpack.DefinePlugin(PublicVar(envConfig)),
  new webpack.DefinePlugin({
    'process.env': {
      ...PublicVar(envConfig),
    },
    ...PublicVar(envConfig),
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../index.html'),
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../public'),
        to: '',
      },
    ],
  }),
]

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      refSugar: true,
    },
    exclude: /node_modules/,
  },
  {
    test: /\.(t|j)sx?$/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
    exclude: [/node_modules/],
  },
  {
    test: /\.ts?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]',
    },
  },
]

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    publicPath: envConfig['VITE_STATIC_URL'],
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
  },
  resolve: {
    alias: {
      //路径别名
      '@': path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: rules,
  },
  plugins: plugins,
  devServer: {
    port: 3000,
  },
}
