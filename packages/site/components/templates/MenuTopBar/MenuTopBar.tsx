import { withWidth } from "@material-ui/core"
import { WithWidth } from "@material-ui/core/withWidth"
import * as React from "react"
import MobileTopBar from "./components/MobileTopBar"
import NormalTopBar from "./components/NormalTopBar"

class MenuTopBar extends React.PureComponent<WithWidth> {
  public render() {
    if (this.props.width === "xs" || this.props.width === "sm") {
      return <MobileTopBar />
    }
    return <NormalTopBar />
  }
}

export default withWidth()(MenuTopBar)
