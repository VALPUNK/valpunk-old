import Grid from "@material-ui/core/Grid"
import * as React from "react"
import Center from "./Center"

interface Props {
  devPeriod: string
  numberPeriods: number
  costPerPeriod: number
}

export default class Estimates extends React.Component<Props> {
  public render() {
    return (
      <>
        <Center size={8}>
          <Grid container>
            <Grid item xs container justify="flex-end">
              <span style={{ fontWeight: "bold", fontSize: 26 }}>
                Estimated Time:{" "}
              </span>
            </Grid>
            <Grid item xs>
              <span style={{ fontSize: 26, marginLeft: 8 }}>{this.props.numberPeriods}{" "}{this.props.devPeriod}s</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs container justify="flex-end">
              <span style={{ fontWeight: "bold", fontSize: 26 }}>
                Developer Cost Per {this.props.devPeriod}:{" "}
              </span>
            </Grid>
            <Grid item xs>
              <span style={{ fontSize: 26, marginLeft: 8 }}>${this.props.costPerPeriod.toLocaleString()}</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs container justify="flex-end">
              <span style={{ fontWeight: "bold", fontSize: 26 }}>
                Total Raw Cost:{" "}
              </span>
            </Grid>
            <Grid item xs>
              <span style={{ fontSize: 26, marginLeft: 8 }}>${(this.props.costPerPeriod * this.props.numberPeriods).toLocaleString()}</span>
            </Grid>
          </Grid>
        </Center>
      </>
    )
  }
}

