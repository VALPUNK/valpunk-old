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

interface Props {
  value: number
  handleChange: (_event: any, value: number) => void
  handleChangeIndex: (index: number) => void
  height: number
}

const standardHeight = "100%"

const pWidth = "100%"

export default class ParallaxThing extends React.Component<Props> {
  public handleChange = (_event: any, value: number) => {
    this.props.handleChange(_event, value)
    // @ts-ignore
    this.parallax.scrollTo(value)
  }

  public handleChangeIndex = (index: number) => {
    this.props.handleChangeIndex(index)
    // @ts-ignore
    this.parallax.scrollTo(index)
  }

  public shouldComponentUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      return true
    }
    return false
  }

  public componentDidUpdate() {
    // @ts-ignore
    this.parallax.scrollTo(this.props.value)
  }

  public render() {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Parallax
          // @ts-ignore
          ref={ref => (this.parallax = ref)}
          pages={3}
          style={{
            width: "80%",
            height: this.props.height * 0.8,
            backgroundColor: "white",
            // top: "50%",
            // left: "50%",
            // transform: "translate(50%, 50%)",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.5)"
          }}
          // innerStyle={{ width: "75%" }}
          scrolling={false}
        >
          <div>
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{ backgroundColor: "#805E73", width: "100%" }}
            />
            <ParallaxLayer
              offset={2}
              speed={1}
              style={{ backgroundColor: "#87BCDE", width: "100%" }}
            />

            <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: url("stars", true),
                backgroundSize: "cover",
                width: "100%"
              }}
            />

            <ParallaxLayer
              offset={1.3}
              speed={-0.3}
              style={{ pointerEvents: "none", width: pWidth }}
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

            <ParallaxLayer
              offset={1}
              speed={0.8}
              style={{ opacity: 0.1, width: pWidth }}
            >
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

            <ParallaxLayer
              offset={1.75}
              speed={0.5}
              style={{ opacity: 0.1, width: pWidth }}
            >
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

            <ParallaxLayer
              offset={1}
              speed={0.2}
              style={{ opacity: 0.2, width: pWidth }}
            >
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

            <ParallaxLayer
              offset={1.6}
              speed={-0.1}
              style={{ opacity: 0.4, width: pWidth }}
            >
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

            <ParallaxLayer
              offset={2.6}
              speed={0.4}
              style={{ opacity: 0.6, width: pWidth }}
            >
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
                pointerEvents: "none",
                width: pWidth
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
                backgroundImage: url("clients", true),
                width: pWidth
              }}
            />

            <ParallaxLayer
              offset={0}
              speed={0.1}
              // @ts-ignore
              // onClick={() => this.parallax.scrollTo(1)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: pWidth
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
              // onClick={() => this.parallax.scrollTo(2)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: pWidth
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
                justifyContent: "center",
                width: pWidth
                // width: "50%"
              }}
              // @ts-ignore
              // onClick={() => this.parallax.scrollTo(0)}
            >
              <img
                src={url("clients-main")}
                style={{ width: "40%", height: standardHeight }}
              />
            </ParallaxLayer>
          </div>
        </Parallax>
      </div>
    )
  }
}
