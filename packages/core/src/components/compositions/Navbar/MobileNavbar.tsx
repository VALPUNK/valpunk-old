import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import * as React from "react"

interface Props {
  children?: React.ReactNode
  onClick?: (_event: React.MouseEvent<HTMLElement>) => void
  logo?: { src?: string; onClick?: () => void; style?: React.CSSProperties }
  barStyle?: React.CSSProperties
}

interface State {
  anchorEl: any
}

export default class MobileNavbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  public handleClose = () => {
    this.setState({
      anchorEl: undefined
    })
  }

  public render() {
    const open = Boolean(this.state.anchorEl)
    return (
      <div>
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            fontFamily: "Roboto",
            ...this.props.barStyle
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.props.logo.onClick}
            >
              <img
                src={this.props.logo.src}
                style={{ width: 80, height: "auto", ...this.props.logo.style }}
              />
            </IconButton>
            <div style={{ flexGrow: 1 }} />
            <div>
              <IconButton
                color="inherit"
                onClick={this.handleMenu}
                aria-label="Menu"
                style={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={this.handleClose}
              >
                {this.props.children}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
