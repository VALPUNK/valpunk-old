import Grid from "@material-ui/core/Grid"
import React from "react"
import { Layout, Meta } from "~/components/universal"
import Jumbotron from "./components/Jumbotron"
import Mobile from "./components/Mobile"
import WhatWeDo from "./components/WhatWeDo"
import Analytics from "./components/Analytics"

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
          <Jumbotron height={800} />
          <Grid container justify="center">
            <Grid
              container
              style={{ backgroundColor: "#EEEEEE" }}
              justify="center"
            >
              <Grid item xs={12} xl={8} lg={9} md={10} sm={11}>
                <WhatWeDo />
              </Grid>
            </Grid>
            <Mobile />
            <Grid
              container
              style={{ backgroundColor: "#CFD8DC" }}
              justify="center"
            >
              <Grid item xs={12} xl={7} lg={8} md={10} sm={11}>
                <Analytics />
              </Grid>
            </Grid>
            <div style={{ height: 500 }}>Integrations boi</div>
          </Grid>

          <div style={{ height: 500 }}>Footer</div>
        </Layout>
      </div>
    )
  }
}
