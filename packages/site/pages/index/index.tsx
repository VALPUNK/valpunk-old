import { AppBar, Tab, Tabs } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { Layout, Meta } from "~/components/universal"
import Jumbotron from "./components/Jumbotron"
import Mobile from "./components/Mobile"
import WhatWeDo from "./components/WhatWeDo"

interface State {
  value?: number
}

export default class Index extends React.Component<{}, State> {
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
    return (
      <div>
        <Meta />
        <Layout>
          {/* <Attributes/> */}
          <div style={{ height: 1000 }}>
            <Jumbotron />
          </div>
          <Grid container justify="center">
            <Grid item xs={12} lg={8}>
              <AppBar position="sticky" color="default">
                <Tabs
                  value={this.state.value}
                  // onChange={this.handleChange}
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
              {/* <SwipeableViews
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <Grid container>
                  <Mobile />
                </Grid>
                <Grid container>
                  <WhatWeDo />
                </Grid>
              </SwipeableViews> */}
              <Mobile />
              <WhatWeDo />
            </Grid>
          </Grid>

          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ height: 1000, width: 800, overflow: "hidden" }}>
              <WhatWeDo />
            </div>
          </div> */}
          <div style={{ height: 500 }}>Footer</div>
        </Layout>
      </div>
    )
  }
}
