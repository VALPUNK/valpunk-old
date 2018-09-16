import * as React from "react"
import OnHoverPopup from "./OnHoverPopup"

interface State {
  open: boolean
  mousedOver: boolean
}

export default class Index extends React.PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      mousedOver: false
    }
    this._onMouseEnter.bind(this)
    this._onMouseLeave.bind(this)
  }

  _onMouseEnter = () => {
    this.setState({
      mousedOver: true
    })
  }

  _onMouseLeave = () => {
    this.setState({
      mousedOver: false
    })
  }

  public render() {
    let { open, mousedOver } = this.state
    return (
      <OnHoverPopup
        open={open}
        mousedOver={mousedOver}
        _onMouseEnter={this._onMouseEnter}
        _onMouseLeave={this._onMouseLeave}
        {...this.props}
      />
    )
  }
}
