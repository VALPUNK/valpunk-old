import * as React from "react"
import { Transition } from "react-spring"

interface Props {
  inView: boolean
  innerRef?: () => void
  delay?: number
}

export default class FadeInMoveUp extends React.Component<Props> {
  public render() {
    if(!this.props.inView) {
      return <div ref={this.props.innerRef}/>
    }
    return (
      <Transition

        from={{ opacity: 0, transform: `translate(0px, 100px)` }}
        enter={{
          opacity: 1,
          transform: `translate(0px, 0px)`
        }}
        config={{ tension: 40, friction: 20, duration: 1000 }}
        delay={this.props.delay || 0}
      >
        {styles => (
          <div
            style={{ ...styles, width: "100%", height: "auto" }}
            ref={this.props.innerRef}
          >
            {this.props.children}
          </div>
        )}
      </Transition>
    )
  }
}
