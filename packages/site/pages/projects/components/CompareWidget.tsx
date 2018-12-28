import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import * as React from "react"
import SwipeableViews from "react-swipeable-views"
// @ts-ignore
import { Parallax, ParallaxLayer } from "react-spring/addons.cjs"

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

interface State {
  value?: number
  widgetStatus?: "BEFORE" | "AFTER"
}

interface CompareWidgetProps {
  height?: number
}

const standardHeight = "100%"

const pWidth = "100%"
export default class CompareWidget extends React.Component<
  CompareWidgetProps,
  State
> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0,
      widgetStatus: "BEFORE"
    }
  }

  public componentDidMount() {
    this.handleChangeIndex(0)
  }

  public handleChange = (_event: any, value: number) => {
    this.setState({ value })
    const goTo: number = value === 0 ? 1 : 0
    // @ts-ignore
    this.leftParallax.scrollTo(goTo)
    // @ts-ignore
    this.rightParallax.scrollTo(goTo)
  }

  public handleChangeIndex = (index: number) => {
    this.setState({ value: index })
    const goTo: number = index === 0 ? 1 : 0
    // @ts-ignore
    this.leftParallax.scrollTo(goTo)
    // @ts-ignore
    this.rightParallax.scrollTo(goTo)
  }

  public render() {
    return (
      <Grid container>
        <Grid item lg>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Parallax
              // @ts-ignore
              ref={ref => (this.leftParallax = ref)}
              pages={2}
              style={{
                height: this.props.height ? this.props.height + 48 : 500
              }}
              scrolling={false}
              horizontal
            >
              <div>
                <ParallaxLayer
                  offset={0}
                  speed={0.1}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: pWidth
                  }}
                >
                  <img
                    src={url("bash")}
                    style={{ width: "40%", height: standardHeight }}
                  />
                </ParallaxLayer>
                <ParallaxLayer
                  offset={1}
                  speed={0.1}
                  style={{
                    display: "flex",
                    width: pWidth
                  }}
                >
                  <div
                    // src={url("server")}
                    style={{ width: "100%", height: standardHeight }}
                  />
                </ParallaxLayer>
              </div>
            </Parallax>
          </div>
        </Grid>
        <Grid item lg>
          <Paper style={{ height: "100%" }}>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                fullWidth
              >
                <Tab label="Before" />
                <Tab label="After" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              <div style={{ height: 500 }}> A bunch of before stuff</div>
              <div style={{ height: 500 }}> A bunch of after stuff</div>
            </SwipeableViews>
          </Paper>
        </Grid>
        <Grid item lg>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Parallax
              // @ts-ignore
              ref={ref => (this.rightParallax = ref)}
              pages={2}
              style={{
                height: this.props.height ? this.props.height + 48 : 500
              }}
              scrolling={false}
              horizontal
              config={{ delay: 1000 }}
            >
              <div>
                <ParallaxLayer
                  offset={0}
                  speed={0.1}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: 20,
                    width: pWidth
                  }}
                >
                  <img
                    src={url("bash")}
                    style={{ width: "40%", height: standardHeight }}
                  />
                </ParallaxLayer>
                <ParallaxLayer
                  offset={1}
                  speed={0.1}
                  style={{
                    display: "flex",
                    width: pWidth
                  }}
                >
                  <div
                    // src={url("server")}
                    style={{ width: "100%", height: standardHeight }}
                  />
                </ParallaxLayer>
              </div>
            </Parallax>
          </div>
        </Grid>
      </Grid>
    )
  }
}
