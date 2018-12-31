import { withWidth } from "@material-ui/core"
import MenuItem from "@material-ui/core/MenuItem"
import { WithWidth } from "@material-ui/core/withWidth"
import * as React from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileTopBar from "./MobileNavbar"

export interface NavButtonProps {
  text?: string
  onClick?: () => void
}

export interface NavbarProps extends WithWidth {
  logo?: { src?: string; onClick?: () => void; style?: React.CSSProperties }
  navButtons?: NavButtonProps[]
  barStyle?: React.CSSProperties
}

const Navbar = ({ width, logo, navButtons, barStyle }: NavbarProps) => {
  const NavComponent =
    width === "xs" || width === "sm" ? MobileTopBar : DesktopNavbar

  return (
    <NavComponent logo={logo} barStyle={barStyle}>
      {navButtons.map(item => (
        <MenuItem key={item.text} onClick={item.onClick}>
          {item.text}
        </MenuItem>
      ))}
    </NavComponent>
  )
}

export default withWidth()(Navbar)
