import { Navbar } from "@valpunk/core"
import Router from "next/router"
import * as React from "react"

const navButtons = [
  {
    text: "Dev Blog",
    onClick: () => {
      Router.push("/blog")
    }
  },
  {
    text: "Projects",
    onClick: () => {
      Router.push("/projects")
    }
  },
  {
    text: "A La Carte",
    onClick: () => {
      Router.push("/carte")
    }
  },
  {
    text: "Contact",
    onClick: () => {
      Router.push("/contact")
    }
  }
]

export default class Layout extends React.Component {
  public handleClick = () => {
    Router.push("")
  }
  public render() {
    return (
      <div>
        <Navbar
          logo={{
            src:
              "https://s3-us-west-1.amazonaws.com/valpunk-images/logo_colors.png",
            style: {
              height: 50,
              width: 50
            },
            onClick: () => {
              Router.push("/")
            }
          }}
          navButtons={navButtons}
        />
        {this.props.children}
        {/* <Footer /> */}
      </div>
    )
  }
}
