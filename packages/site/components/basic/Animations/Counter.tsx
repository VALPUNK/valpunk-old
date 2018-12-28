import * as React from "react"
import { Spring } from "react-spring"

const Counter = (props: {
  endNumber?: number
  children?: (
    props?: {
      number: number
    }
  ) => React.ReactNode
}) => {
  return (
    <Spring
      config={{ duration: 10000 }}
      from={{ number: 0 }}
      to={{ number: props.endNumber }}
    >
      {(springProps: { number: number }) => (
        <>
          {props.children({
            number: Number(Number(springProps.number).toFixed(0))
          })}
        </>
      )}
    </Spring>
  )
}

export default Counter
