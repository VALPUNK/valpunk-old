import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import ParallaxThing from "./ParallaxThing"

interface State {
  value?: number
}

export default class Fun extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0
    }
  }

  public handleChange = (_event: any, value: number) => {
    this.setState({ value })
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
          <ParallaxThing
            handleChange={this.handleChange}
            value={this.state.value}
            handleChangeIndex={this.handleChangeIndex}
            height={SectionHeight}
          />
        </Grid>
        <Grid
          item
          xs={12}
          xl={6}
          style={{ height: SectionHeight, padding: 60 }}
        >
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Idea" />
              <Tab label="Code" />
              <Tab label="Solutions" />
            </Tabs>
          </AppBar>
          <div>Some Content</div>
        </Grid>
      </Grid>
    )
  }
}
