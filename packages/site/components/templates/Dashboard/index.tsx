import AppBar from "@material-ui/core/AppBar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import MenuIcon from "@material-ui/icons/Menu"
import SettingsIcon from "@material-ui/icons/Settings"
import * as classNames from "classnames"
import { withRouter, WithRouterProps } from "next/router"
import * as React from "react"
import { compose } from "recompose"
import { VP_BLACK, NOD_GREEN } from "~/constants/constants"
// import { primaryColor } from "~/lib/theme/colors"
import { mailFolderListItems } from "./sideBarData"
// import { Meta } from "~/components/basic"

const drawerWidth = 240

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      backgroundColor: VP_BLACK
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    content: {
      flexGrow: 1,
      // backgroundColor: theme.palette.background.default,
      backgroundColor: VP_BLACK,
      padding: theme.spacing.unit * 3,
      overflowY: "scroll"
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawerPaper: {
      position: "relative",

      backgroundColor: NOD_GREEN,
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    }
  })

interface ClassProps {
  root: string
  appBar: string
  appBarShift: string
  menuButton: string
  hide: string
  drawerPaper: string
  drawerPaperClose: string
  toolbar: string
  content: string
}
interface Props extends WithRouterProps {
  classes?: ClassProps
  theme?: Theme
  userName?: string
  businessName?: string
}

interface State {
  open: boolean
  anchorEl?: HTMLElement | undefined
}

class DashboardAdmin extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: true,
      anchorEl: undefined
    }
  }

  public handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  public handleDrawerClose = () => {
    this.setState({ open: false })
  }

  public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = () => {
    this.setState({ anchorEl: undefined })
  }

  public logout = async () => {
    this.props.router.push("/")
    // await this.props.client.resetStore()
    localStorage.clear()
  }

  public render() {
    const { classes, theme, userName } = this.props
    // const { classes, theme } = this.props
    const open = Boolean(this.state.anchorEl)

    return (
      <div>
        <div
          className={classes.root}
          style={{ height: "100vh", position: "relative" }}
        >
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                noWrap={true}
                style={{ flex: 1 }}
              >
                JIM ROLFE
              </Typography>
              <div>
                {/* <Button
                  aria-owns={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  style={{ color: "white" }}
                >
                  Prson
                </Button> */}
                <IconButton
                  color="inherit"
                  aria-label="options"
                  className={classNames(classes.menuButton)}
                  onClick={this.handleMenu}
                >
                  <SettingsIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.logout}>Log out</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            style={
              !this.state.open
                ? {
                    position: "relative",
                    whiteSpace: "nowrap",
                    overflowX: "hidden"
                  }
                : {}
            }
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap={true}
                style={{ flex: 1, color: "white", textAlign: "center" }}
              >
                THE NOD
              </Typography>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon style={{ color: "white" }} />
                ) : (
                  <ChevronLeftIcon style={{ color: "white" }} />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>{mailFolderListItems}</List>
          </Drawer>
          <main className={classes.content} style={{ overflowY: "scroll" }}>
            <div className={classes.toolbar} />
            <div>{this.props.children}</div>
          </main>
        </div>
      </div>
    )
  }
}

const enhance = compose(
  withStyles(styles, { withTheme: true }),
  withRouter
)

const dashboardContainer = enhance(DashboardAdmin)
export default dashboardContainer as typeof DashboardAdmin
