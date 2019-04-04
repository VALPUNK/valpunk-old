import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import BugIcon from "@material-ui/icons/BugReport"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import EmailIcon from "@material-ui/icons/Email"
import HelpIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
import BusinessCardIcon from "@material-ui/icons/CardTravel"
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle"
import Link from "next/link"
import Router from "next/router"
import * as React from "react"

export const mailFolderListItems = (
  <div>
    {/* <Link href="/admin"> */}
    <ListItem onClick={() => Router.push("/admin")} button={true}>
      <ListItemIcon>
        <HomeIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary={<span style={{ color: "white" }}>Home</span>} />
    </ListItem>

    {/* </Link> */}
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <Link href="/admin/example">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Admin Example" />
      </ListItem>
    </Link>
  </div>
)

export const bottomSideBarIcons = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <BugIcon />
      </ListItemIcon>
      <ListItemText primary="Report Bug" />
    </ListItem>
  </div>
)
