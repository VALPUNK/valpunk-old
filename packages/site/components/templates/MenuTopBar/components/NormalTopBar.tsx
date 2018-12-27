import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import { NOD_GREEN } from "~/constants/constants"
import Link from "next/link"

const styles = (theme: ThemeOptions) =>
  createStyles({
    root: theme.appBar,
    toolbar: {
      paddingLeft: "10%",
      paddingRight: "10%"
    }
  })

interface Props extends WithStyles<typeof styles> {
  history?: History
  title: string
}

interface State {
  auth: boolean
  anchorEl: EventTarget & HTMLElement
}

class NormalTopbar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      auth: true,
      anchorEl: null
    }
  }

  public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = () => {
    this.setState({ anchorEl: undefined })
  }

  public render() {
    // const { classes } = this.props

    return (
      <div>
        <AppBar position="static" className={this.props.classes.root}>
          <Toolbar variant="regular" className={this.props.classes.toolbar}>
            <Link href="/">
              <IconButton
                // className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <img
                  src="https://thenewnod.netlify.com/images/logo.png"
                  style={{ width: "90%", height: "auto" }}
                />
              </IconButton>
            </Link>
            <Typography
              variant="title"
              color="inherit"
              noWrap={true}
              style={{ flex: 1 }}
            >
              The Nod
            </Typography>
            <Link href="/catalog">
              <Button style={{ color: NOD_GREEN }}>Catalog</Button>
            </Link>

            <Link href="/blog">
              <Button style={{ color: NOD_GREEN }}>
                Lifestyle
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NormalTopbar)
