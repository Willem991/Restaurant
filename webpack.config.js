const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
      initial: './src/initial.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    static:'./dist',
  },
  plugins:[
    new HtmlWebpackPlugin({
        title: 'Output Management',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module:{
    rules:[
        {
            test:/\.css$/i,
            use:['style-loader','css-loader'],
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
},
};
