const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const withCSS = require("@zeit/next-css")
require("dotenv").config()
const path = require('path')
const Dotenv = require("dotenv-webpack")

module.exports = withTypescript(
  withCSS({
    webpack(config, options) {
      // if (options.dev) {
      //   config.devtool = 'cheap-module-source-map';
      // }
      // Do not run type checking twice:

      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin())

      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ]

      return config
    }
  })
)
