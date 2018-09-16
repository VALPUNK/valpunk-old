import * as React from "react"
import { Spring } from "react-spring"

interface State {
  mousedOver: boolean
}

interface Props {
  children(props?: { styles: React.CSSProperties }): React.ReactNode
  delay?: number
}

export default class OnHoverFadeIn extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { mousedOver: false }
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
    const { mousedOver } = this.state
    return (
      <Spring
        to={{ opacity: mousedOver ? 1 : 0 }}
        config={{friction: 10}}
      >
        {(styles: React.CSSProperties) => (
          <div
            // ref={this.props.innerRef}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}
          >
            {this.props.children({ styles })}
          </div>
        )}
      </Spring>
    )
  }
}
