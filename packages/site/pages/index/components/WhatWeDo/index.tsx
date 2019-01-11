import { Button } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
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

  public changeIndex = () => {
    this.setState({
      value: this.state.value === 2 ? 0 : this.state.value + 1
    })
  }

  public render() {
    const SectionHeight = 500
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={{ backgroundColor: "#EEEEEE", margin: "60px 0px" }}
      >
        <Grid item xs={12} xl={10} container direction="row">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              style={{ textAlign: "center", margin: "60px 0px" }}
            >
              It Starts With Your Vision
            </Typography>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={6}>
              <ParallaxThing
                handleChange={this.handleChange}
                value={this.state.value}
                handleChangeIndex={this.handleChangeIndex}
                height={SectionHeight}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ height: SectionHeight }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  height: SectionHeight * 0.8 * 0.5,
                  overflow: "hidden"
                }}
              >
                <div style={{}} className="main">
                  <Transition
                    native
                    reset
                    unique
                    items={this.state.value}
                    from={{ opacity: 0, transform: "translate3d(0%,50%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0%,-100%,0)"
                    }}
                  >
                    {item => pages[item]}
                  </Transition>
                </div>
              </div>
              <div
                style={{
                  height: SectionHeight * 0.8 * 0.5,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ flex: 1 }}>
                  <Button
                    style={{ backgroundColor: "dodgerblue", color: "white" }}
                    onClick={this.changeIndex}
                    size="large"
                  >
                    Next
                  </Button>
                </div>
                <Grid
                  container
                  alignItems="flex-end"
                  spacing={40}
                  style={{ flex: 1 }}
                >
                  <Grid item xs>
                    <StepBar active />
                  </Grid>
                  <Grid item xs>
                    <StepBar />
                  </Grid>
                  <Grid item xs>
                    <StepBar />
                  </Grid>
                  {/* <AppBar position="static" color="default">
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
                  </AppBar> */}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const StepBar = ({ active }: { active?: boolean }) => (
  <div
    style={{
      width: "100%",
      height: 20,
      backgroundColor: active ? "dodgerblue" : "grey"
    }}
  />
)

const content = [
  {
    id: 0,
    title: "Your Idea",
    body:
      " Whether it's a new app or web service, or doing more with your site than what was possible at the time, we love collaborating with motivated people"
  },

  {
    id: 1,
    title: "Our Experience",
    body:
      " With your vision and our experience in developing useful products, we'll help you define your MVP (Minimum Viable Product) to get your idea out to your audience!"
  },
  {
    id: 2,
    title: "A Complete Vision",
    body:
      " Whether it's a new app or web service, or doing more with your site than what was possible at the time, we love collaborating with motivated people Together we set a plan to get you to market, launched, and ready to evolve"
  }
]

const pages = [
  (style: React.CSSProperties) => <Page {...content[0]} style={style} />,
  (style: React.CSSProperties) => <Page {...content[1]} style={style} />,
  (style: React.CSSProperties) => <Page {...content[2]} style={style} />
]

const Page = ({
  title,
  body,
  style
}: {
  title?: string
  body?: string
  style?: React.CSSProperties
}) => (
  <animated.div style={{ ...style }}>
    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</div>
    <div style={{ fontSize: "1.3rem", marginTop: 24 }}>{body}</div>
  </animated.div>
)
