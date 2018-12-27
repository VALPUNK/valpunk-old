/* eslint-disable no-underscore-dangle */

import green from "@material-ui/core/colors/green"
import {
  createGenerateClassName,
  createMuiTheme
} from "@material-ui/core/styles"
import { SheetsRegistry } from "jss"
import { DARKBLUE, NOD_GREEN } from "~/constants/constants"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

// A theme with custom primary and secondary color.
// It's optional.

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appBar: {
      flexGrow?: number
      backgroundColor?: string
    }
    paper: {
      height: string
      color: string
      backgroundColor: string
      // overflowY: OverflowYProperty
    }
  }

  interface ThemeOptions {
    appBar?: {
      flexGrow?: number
      backgroundColor?: string
      fontFamily?: string
    }
    paper?: {
      height: string
      color: string
      backgroundColor: string
      // overflowY: OverflowYProperty
    }
  }
}

function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    // overrides: {
    //   MuiInput: {
    //     underline: {
    //       "&:before": {
    //         borderBottomColor: grey[400]
    //       },
    //       "&:hover:not($disabled):not($error):not($focused):before": {
    //         borderBottomColor: grey[800]
    //       },
    //       "&:after": {
    //         borderBottomColor: grey[600]
    //       }
    //     }
    //   }
    // },
    typography: {
      fontFamily: "Poppins"
    },
    palette: {
      background: {
        default: "#ECF5F8"
      }
    },
    ...options
  })
}

export const theme = createMyTheme({
  appBar: {
    backgroundColor: "white",
    fontFamily: "Roboto"
  },
  palette: {
    primary: {
      // light: purple[100],
      main: DARKBLUE,
      dark: DARKBLUE
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    fontFamily: "Roboto"
  }
})

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).

  // @ts-ignore
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  // @ts-ignore
  if (!global.__INIT_MATERIAL_UI__) {
    // @ts-ignore
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }
  // @ts-ignore
  return global.__INIT_MATERIAL_UI__
}
