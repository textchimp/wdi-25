const path = require('path');

module.exports = {
  entry: './src',   // starting point for  webpack
  module: {         // processing to do
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: [
            ['transform-react-jsx']
          ]
        }
      }
    ],
  },
  output: {        // output
    path: path.join(__dirname, 'dist' ),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }
};
