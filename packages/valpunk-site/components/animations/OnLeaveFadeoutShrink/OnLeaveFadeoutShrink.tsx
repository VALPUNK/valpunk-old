import * as React from "react"
import { Spring } from "react-spring"

export default class OnLeaveFadeoutShrink extends React.Component {
  public render() {
    return (
      <Spring
        from={{ opacity: 1 }}
        to={{ opacity: 1 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {styles => (
          <div style={{ ...styles, }}>
            {this.props.children}
          </div>
        )}
      </Spring>
    )
  }
}
