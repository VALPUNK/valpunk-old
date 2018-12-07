import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescriptPlugin from "rollup-plugin-typescript3";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/index.ts",
  output: [
    // {
    //   globals: {
    //     react: "React",
    //     "styled-components": "styled",
    //     immer: "produce"
    //   },
    //   file: pkg.main,
    //   format: "iife",
    //   name: "index.js"
    // },
    {
      globals: {
        react: "React",
        "styled-components": "styled",
        immer: "produce",
        "@material-ui": "Paper"
      },
      file: pkg.main,
      format: "cjs"
    },
    {
      globals: {
        react: "React",
        "styled-components": "styled",
        immer: "produce",
        "@material-ui": "Paper"
      },
      file: pkg.module,
      format: "es"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    resolve({
      jsnext: true,
      extensions: [".ts", ".tsx"],
      main: true,
      browser: true
    }),
    commonjs({
      include: [
        "node_modules/styled-components",
        "node_modules/@material-ui/core"
      ],
      // exclude: ["node_modues/@types/**"],
      namedExports: {
        // The commonjs plugin can't figure out the exports of some modules, so if rollup gives warnings like:
        // ⚠️   'render' is not exported by 'node_modules/react-dom/index.js'
        // Just add the mentioned file / export here
        "src/index.ts": ["RegularButton"],
        "node_modules/@material-ui/core": ["Paper"],
        "node_modules/react-dom/index.js": ["render"],
        "node_modules/react/index.js": [
          "Component",
          "PropTypes",
          "createElement",
          "Children"
        ]
      }
    }),
    postcss({
      plugins: [
        // cssnext(),
        // yourPostcssPlugin()
      ],
      //sourceMap: false, // default value
      //extract: false, // default value
      extensions: [".css", ".sss"], // default value,
      styleInject: {
        fnName: "__$styleInject", // style-inject function name, default value,
        options: {
          insertAt: "top"
        } // Optional
      }
      // parser: sugarss
    }),
    typescriptPlugin({
      target: "es2015",
      jsx: "react"
      // abortOnError: false,
      // importHelpers: true,
      // tsconfigOverride: {
      //   compilerOptions: {
      //     module: "esnext",
      //     strict: false
      //   }
      // }
    }),
    // external(),
    babel({
      exclude: "node_modules/**",
      plugins: [
        [
          "babel-plugin-styled-components",
          { ssr: true, displayName: true, preprocess: true }
        ],
        ["import"],
        ["external-helpers"]
      ]
    })
  ]
};
