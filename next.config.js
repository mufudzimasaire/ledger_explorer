const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const windows = process.env.WINDOWS || false

module.exports = withCSS(withSass({
  poweredByHeader: false,
  assetPrefix: process.env.ASSET_HOST || '',

  webpackDevMiddleware: (config) => {
    if (windows) {
      config.watchOptions = {
        ignored: /node_modules/,
        poll: 500,
        aggregateTimeout: 300
      }
    }

    return config
  },
  webpack (config, { dev }) {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            query: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]'
            }
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true, quality: 65 },
            optipng: { enabled: false },
            pngquant: { quality: '65-90', speed: 4 },
            gifsicle: { interlaced: false },
            webp: { quality: 75 }
          }
        }
      ]
    },
    {
      test: /\.(eot|woff|woff2|ttf|jpg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000, name: '[name].[ext]'
        }
      }
    })

    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }

      return rule
    })

    return config
  }
}))