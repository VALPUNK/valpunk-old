import Grid from "@material-ui/core/Grid"
import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Spring, Transition } from "react-spring"
import Carousel from "./index"
;(storiesOf("React Spring", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Spring", () => (
    <Grid container={true} justify="center" style={{ padding: 50 }}>
      <Grid item={true} lg={3} md={6} sm={8} xs={12} style={{ padding: 20 }}>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <div style={props}>hello</div>}
        </Spring>
      </Grid>
    </Grid>
  ))
  .add("Transition", () => (
    <Grid container={true} justify="center" style={{ padding: 50 }}>
      <Grid item={true} lg={3} md={6} sm={8} xs={12} style={{ padding: 20 }}>
        <Transition
          items={[
            { key: 1, text: "hello" },
            { key: 2, text: "41231" },
            { key: 3, text: "asdfasdf" },
          ]}
          keys={item => item.key}
          from={{ transform: "translate3d(0,-40px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-40px,0)" }}
        >
          {item => props => <div style={props}>{item.text}</div>}
        </Transition>
      </Grid>
    </Grid>
  ))
  .add("Carousel", () => <Carousel />)
// .addWithJSX("Error", () => <Button error>1234567</Button>)
