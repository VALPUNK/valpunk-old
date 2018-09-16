import hoistNonReactStatics from "hoist-non-react-statics"
import * as React from "react"
import { Spring } from "react-spring"

interface State {
  mousedOver: boolean
}

export interface WithHoverPopupProps {
  _onMouseEnter?: () => void
  _onMouseLeave?: () => void
  mousedOver?: boolean
  style?: React.CSSProperties
}

const WithHoverPopup = <P extends WithHoverPopupProps>(
  UnwrappedComponent: React.ComponentType<P>
) => {
  class HOC extends React.Component<P, State> {
    constructor(props: any) {
      super(props)
      this.state = {
        mousedOver: false
      }
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
      let { mousedOver } = this.state
      return (
        <Spring to={{transform: mousedOver ? "scale(1.1)" : "scale(1)"}} >
          {styles => (
            <UnwrappedComponent
              {...this.props}
              _onMouseEnter={this._onMouseEnter.bind(this)}
              _onMouseLeave={this._onMouseLeave.bind(this)}
              mousedOver={mousedOver}
              style={styles}
            />
          )}
        </Spring>
      )
    }
  }
  return hoistNonReactStatics(HOC, UnwrappedComponent)
}

export default WithHoverPopup
