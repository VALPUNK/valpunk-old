import * as React from "react"
import { Spring } from "react-spring"

export default class UpCount extends React.Component {
  public render() {
    return (
      <Spring
        // @ts-ignore
        config={{ duration: 10000 }}
        from={{ number: 0 }}
        to={{ number: 1000 }}
      >
        {(props: { number: number }) => (
          <div>{Number(props.number).toFixed(0)}</div>
        )}
      </Spring>
    )
  }
}
