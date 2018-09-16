import grey from "@material-ui/core/colors/grey"
// import { greyColor } from '../theme/colors'
// import { orange } from '@material-ui/core/colors'
import yellow from "@material-ui/core/colors/yellow"
import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme"
// import { OverflowYProperty } from "../../node_modules/csstype";

// ? Declare new theme variables
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appBar: {
      flexGrow: number
      backgroundColor: string
    }
    paper: {
      height: string
      color: string
      backgroundColor: string
      // overflowY: OverflowYProperty
    }
  }

  interface ThemeOptions {
    appBar: {
      flexGrow: number
      backgroundColor: string
    }
    paper: {
      height: string
      color: string
      backgroundColor: string
      // overflowY: OverflowYProperty
    }
  }
}

// ?? Add new theme variables
export const theme = createMyTheme({
  appBar: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  paper: {
    height: "100vh",
    color: "black",
    backgroundColor: yellow[200]
    // overflowY: "scroll"
  }
})

// Edit Original MUI Settings
function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          "&:before": {
            borderBottomColor: grey[400]
          },
          "&:hover:not($disabled):not($error):not($focused):before": {
            borderBottomColor: grey[800]
          },
          "&:after": {
            borderBottomColor: grey[600]
          }
        }
      }
    },
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
