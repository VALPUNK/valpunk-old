import { Hidden } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import * as classNames from "classnames"
import { withRouter, WithRouterProps } from "next/router"
import * as React from "react"
import { compose } from "recompose"

const drawerWidth = 300

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
      backgroundColor: "#142b47",
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
      backgroundColor: theme.palette.background.default,
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
  listItems?: any
}

interface State {
  open: boolean
  anchorEl?: HTMLElement | undefined
  search?: string
}

class SideMenu extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      anchorEl: undefined,
      search: ""
    }
  }

  public handleSearch = (_event: React.MouseEvent<HTMLButtonElement>) => {

  }

  public handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {

    this.setState({
      search: event.target.value
    })

  }

  public handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  public handleDrawerClose = () => {
    this.setState({ open: false })
  }

  public render() {
    const { classes, theme } = this.props

    return (
      <div>
        <div
          className={classes.root}
          style={{ height: "100vh", position: "relative" }}
        >
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar
            )}
          >
            <Toolbar disableGutters={false}>
              <Hidden mdUp>
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
              </Hidden>

              <div
                style={{
                  width: "100%",
                  display: "inline-flex",
                  justifyContent: "flex-end"
                }}
              >
                <input
                  type="search"
                  placeholder="Search..."
                  style={{ borderRadius: "4px", width: "80%" }}
                  onChange={this.handleSearchInput}
                />
                <Button
                  type="submit"
                  onClick={this.handleSearch}
                  style={{
                    position: "relative",
                    backgroundColor: "#2196F3",
                    color: "white"
                  }}
                >
                  <SearchIcon />
                </Button>
              </div>


            </Toolbar>
          </AppBar>
          <Hidden mdDown>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper)
              }}
            >
              <div className={classes.toolbar}>
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap={true}
                  style={{ flex: 1, color: "white", textAlign: "center" }}
                >
                  {this.props.businessName}
                </Typography>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>{this.props.listItems}</List>
            </Drawer>
          </Hidden>

          <Hidden mdUp>
            <Drawer
              variant="temporary"
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
                  {this.props.businessName}
                </Typography>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>{this.props.listItems}</List>
            </Drawer>
          </Hidden>

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

const dashboardContainer = enhance(SideMenu)
export default dashboardContainer as typeof SideMenu
