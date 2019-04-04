const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const withCSS = require("@zeit/next-css")
require("dotenv").config()
const path = require("path")
const Dotenv = require("dotenv-webpack")
const glob = require("glob")

module.exports = withTypescript(
  withCSS({
    webpack(config, options) {
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin())

      // config.resolve.alias = {
      //   "styled-components": path.resolve("./node_modules/styled-components")
      // }
      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ]

      return config
    },

    exportPathMap: defaultPathMap => {
      const pathMap = {
        "/": { page: "/" }
      }
      glob
        .sync("pages/**/index.tsx", {
          ignore: [
            "pages/_document.js",
            "pages/_app.tsx",
            "pages/**/components/**/*.tsx",
            "__generated__"
          ]
        })
        .forEach(s => {
          const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, "/")
          const uri = path.replace("/index", "")
          pathMap[uri] = { page: uri }
        })
      return pathMap
    }
  })
)
