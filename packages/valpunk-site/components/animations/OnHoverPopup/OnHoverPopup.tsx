import * as React from "react"
import { Spring } from "react-spring"

interface Props {
  open: boolean
  mousedOver: boolean
  _onMouseEnter: () => void
  _onMouseLeave: () => void
}

export default class OnHoverPopup extends React.PureComponent<Props> {
  public render() {
    const { mousedOver, _onMouseEnter, _onMouseLeave } = this.props
    return (
      <Spring
        to={{ transform: mousedOver ? "scale(1.1)" : "scale(1)" }}
        // delay={this.props.delay || 0}
      >
        {styles => (
          <div
            style={{ ...styles, width: "100%", height: "auto" }}
            // ref={this.props.innerRef}
            onMouseEnter={_onMouseEnter}
            onMouseLeave={_onMouseLeave}
          >
            {this.props.children}
          </div>
        )}
      </Spring>
    )
  }
}
