import * as React from "react"
import Waypoint from "react-waypoint"
import FadeInMoveUp from "../FadeInMoveUp/FadeInMoveUp"

interface State {
  inView: boolean,
}

interface Props {
  delay?: number
}

export default class OnEnterFadeIn extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      inView: false
    }
  }

  public handleEnter = () => {
    this.setState({
      inView: true
    })
  }

  public render() {
    return (
      <Waypoint onEnter={this.handleEnter} topOffset={"-500px"}>
        <FadeInMoveUp inView={this.state.inView} delay={this.props.delay || 0}>
          {this.props.children}
        </FadeInMoveUp>
      </Waypoint>
    )
  }
}
