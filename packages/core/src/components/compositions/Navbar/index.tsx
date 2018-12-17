import { withWidth } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { WithWidth } from "@material-ui/core/withWidth";
import * as React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileTopBar from "./MobileNavbar";

export interface NavButtonProps {
  text?: string;
  link?: string;
}

const navButtons: NavButtonProps[] = [
  {
    text: "How",
    link: "/how"
  },
  {
    text: "Try Free",
    link: "/tryfree"
  }
];

export interface NavbarProps extends WithWidth {
  onClick?: (_event: React.MouseEvent<HTMLElement>) => void;
  logo?: { src?: string; onClick?: () => void };
}

const Navbar = ({ width, onClick, logo }: NavbarProps) => {
  const NavComponent =
    width === "xs" || width === "sm" ? MobileTopBar : DesktopNavbar;

  return (
    <NavComponent logo={logo}>
      {navButtons.map(item => (
        <MenuItem key={item.text} onClick={onClick}>
          {item.text}
        </MenuItem>
      ))}
    </NavComponent>
  );
};

export default withWidth()(Navbar);
