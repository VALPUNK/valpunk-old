import { Button, Grid } from "@material-ui/core"
import * as React from "react"

interface Props {
  data?: any
}

export default class Documentation extends React.Component<Props> {
  public render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={11} md={10}>
            <h2>Documentation</h2>
            <div>{this.props.data}</div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
