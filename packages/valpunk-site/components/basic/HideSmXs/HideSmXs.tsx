import * as React from "react"
import { withWidth } from "@material-ui/core"
import { WithWidth } from "@material-ui/core/withWidth"

class HideSmXs extends React.PureComponent<WithWidth> {
  public render() {
    return this.props.width === "xs" || this.props.width === "sm"
      ? null
      : this.props.children
  }
}

export default withWidth()(HideSmXs)
