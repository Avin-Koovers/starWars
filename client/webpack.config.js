const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options: {
                  presets: [
                      "@babel/preset-env",
                      "@babel/preset-react"
                  ],
                  plugins: [
                      "@babel/plugin-syntax-dynamic-import",
                      "@babel/plugin-proposal-class-properties"
                  ]
              },
                // "query": {
                //     "presets": ["@babel/preset-env", "@babel/preset-react"],
                //   }
            }
        },
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(svg|jpg|png|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // Inline files smaller than 10 kB
                  limit: 10 * 1024,
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    enabled: false,
                    // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                    // Try enabling it in your environment by switching the config to:
                    // enabled: true,
                    // progressive: true,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4,
                  },
                },
              },
            ],
          },
    
    ]
    },
    devServer: {
        port: 9001,
        historyApiFallback: true,
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },

      performance: {
        hints: false,
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        },
        // new config.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     minChunks: Infinity,
        //   })
        )
    ]

}
