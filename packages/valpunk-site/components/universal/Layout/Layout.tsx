import * as React from "react"
import { Footer } from "~/components/templates"
import MenuTopBar from "~/components/templates/MenuTopBar/MenuTopBar"

export default class Layout extends React.Component {
  public render() {
    return (
      <div>
        <MenuTopBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
