import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import { animated, Transition } from "react-spring"
import ParallaxThing from "./ParallaxThing"
import "./style.css"

interface State {
  value?: number
}

const arrayThing: any[] = []

export default class Fun extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0
    }
    arrayThing.push(pages[0])
  }

  public handleChange = (_event: any, value: number) => {
    this.setState({ value })
    arrayThing.push(pages[value])
  }

  public handleChangeIndex = (index: number) => {
    this.setState({ value: index })
  }
  public render() {
    const SectionHeight = 800
    return (
      <Grid container direction="row" style={{ backgroundColor: "#EEEEEE" }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", margin: "60px 0px" }}
          >
            It Starts With Your Vision
          </Typography>
        </Grid>
        <Grid item xs={12} xl={6}>
          <div style={{ height: 48 }}>{/* Spacer */}</div>
          <ParallaxThing
            handleChange={this.handleChange}
            value={this.state.value}
            handleChangeIndex={this.handleChangeIndex}
            height={SectionHeight}
          />
        </Grid>
        <Grid item xs={12} xl={6} style={{ height: SectionHeight }}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Your Idea" />
              <Tab label="Our Experience" />
              <Tab label="A Complete Vision" />
            </Tabs>
          </AppBar>
          <div style={{}}>
            <div
              style={{
                position: "relative",
                display: "flex",
                height: SectionHeight * 0.8,
                overflow: "hidden"
              }}
            >
              <div style={{}} className="main">
                <Transition
                  native
                  reset
                  unique
                  items={this.state.value}
                  from={{ opacity: 0, transform: "translate3d(0%,100%,0)" }}
                  enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                  leave={{ opacity: 0, transform: "translate3d(0%,-100%,0)" }}
                >
                  {index => pages[index]}
                </Transition>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
}
const pages = [
  (style: React.CSSProperties) => (
    <animated.div style={{ ...style, ...pageStyle }}>
      Whether it's a new app or web service, or doing more with your site than
      what was possible at the time, we love collaborating with motivated people
    </animated.div>
  ),
  (style: React.CSSProperties) => (
    <animated.div style={{ ...style, ...pageStyle }}>
      With your vision and our experience in developing useful products, we'll
      hlep you define your MVP (Minimum Viable Product) to get your idea out to
      your audience!
    </animated.div>
  ),
  (style: React.CSSProperties) => (
    <animated.div style={{ ...style, ...pageStyle }}>
      Together we set a plan to get you to market, launched, and ready to evolve
    </animated.div>
  )
]

const pageStyle = {
  padding: 24
}
