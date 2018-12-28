import * as React from "react"
import { Footer } from "~/components/templates"
import { Navbar } from "@valpunk/core"

const navButtons = [
  {
    text: "Dev Blog",
    link: "/blog"
  },
  {
    text: "Projects",
    link: "/projects"
  },
  {
    text: "A La Carte",
    link: "/carte"
  },
  {
    text: "Contact",
    link: "/contact"
  }
]

export default class Layout extends React.Component {
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
            }
          }}
          navButtons={navButtons}
        />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
