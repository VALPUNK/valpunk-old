const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve = {
    ...baseConfig.resolve,
    alias: {
      "~/components/basic": path.resolve(__dirname, "../src/components/basic"),
      "~/components/collections": path.resolve(
        __dirname,
        "../src/components/collections"
      ),

      "~/components/compositions": path.resolve(
        __dirname,
        "../src/components/compositions"
      ),
      "~/components/special": path.resolve(
        __dirname,
        "../src/components/special"
      ),
      "~/components/templates": path.resolve(
        __dirname,
        "../src/components/templates"
      ),

      "react-final-form": path.resolve(
        __dirname,
        "../node_modules/react-final-form/dist"
      )
    }
  };
  return config;
};
