import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import * as React from "react"

interface Props {
  children?: React.ReactNode
  onClick?: (_event: React.MouseEvent<HTMLElement>) => void
  logo?: { src?: string; onClick?: () => void; style?: React.CSSProperties }
  barStyle?: React.CSSProperties
}

interface State {
  auth: boolean
  anchorEl: EventTarget & HTMLElement
}

const DesktopNavbar = ({ logo, children, barStyle }: Props) => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 5, ...barStyle }}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
          fontFamily: "Roboto"
        }}
      >
        <Toolbar
          variant="regular"
          style={{
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          <IconButton color="inherit" aria-label="Menu" onClick={logo.onClick}>
            <img
              src={logo.src}
              style={{ width: 100, height: "auto", ...logo.style }}
              // onClick={logo.onClick}
            />
          </IconButton>
          <div style={{ flexGrow: 1 }} />

          {children}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default DesktopNavbar
