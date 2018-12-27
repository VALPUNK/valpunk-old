import * as React from "react"
import { Spring } from "react-spring"

const UpCount = () => {
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

export default UpCount
