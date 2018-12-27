import { AppBar, Tab, Tabs } from "@material-ui/core"
import * as React from "react"
import { Parallax, ParallaxLayer } from "react-spring/addons.cjs"

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

interface SpotProp {
  children?: React.ReactNode
}

interface State {
  value?: number
}

const standardHeight = "100%"

export default class Fun extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0
    }
  }

  public handleChange = (_event: any, value: number) => {
    this.setState({ value })
    // @ts-ignore
    this.parallax.scrollTo(value)
  }

  public handleChangeIndex = (index: number) => {
    this.setState({ value: index })
    // @ts-ignore
    this.parallax.scrollTo(index)
  }
  public render() {
    return (
      <div style={{ height: 500, width: 800 }}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Mobile" />
            <Tab label="Sites" />
            <Tab label="Tooling" />
            <Tab label="Social Media" />
          </Tabs>
        </AppBar>
        <Parallax
          // @ts-ignore
          ref={ref => (this.parallax = ref)}
          pages={3}
          style={{ width: 800, height: 500 }}
        >
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover"
            }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{
                width: "15%",
                marginLeft: "70%",
                height: standardHeight
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "55%",
                height: standardHeight
              }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "10%",
                marginLeft: "15%",
                height: standardHeight
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "70%",
                height: standardHeight
              }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "40%",
                height: standardHeight
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "10%",
                marginLeft: "10%",
                height: standardHeight
              }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "75%",
                height: standardHeight
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "60%",
                height: standardHeight
              }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "30%",
                height: standardHeight
              }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "10%",
                marginLeft: "80%",
                height: standardHeight
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "5%",
                height: standardHeight
              }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "15%",
                marginLeft: "75%",
                height: standardHeight
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            <img
              src={url("earth")}
              style={{ width: "60%", height: standardHeight }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true)
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            // @ts-ignore
            onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={url("server")}
              style={{ width: "20%", height: standardHeight }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            // @ts-ignore
            onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={url("bash")}
              style={{ width: "40%", height: standardHeight }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            // @ts-ignore
            onClick={() => this.parallax.scrollTo(0)}
          >
            <img
              src={url("clients-main")}
              style={{ width: "40%", height: standardHeight }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
}
