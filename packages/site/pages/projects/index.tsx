import Grid from "@material-ui/core/Grid"
import React from "react"
import { Layout, Meta } from "~/components/universal"
import CompareWidget from "./components/CompareWidget"
import Transformations from "./components/Transformations"

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
          <Grid container justify="center">
            <Grid item xs={12} lg={9} md={10} sm={11} style={{ marginTop: 60 }}>
              <CompareWidget height={500} />
            </Grid>

            <Grid item xs={12} lg={9} md={10} sm={11} style={{ marginTop: 60 }}>
              <Transformations />
            </Grid>
          </Grid>
          <div style={{ height: 500 }}>Integrations boi</div>
        </Layout>
      </div>
    )
  }
}
