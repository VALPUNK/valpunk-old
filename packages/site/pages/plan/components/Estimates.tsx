import Grid from "@material-ui/core/Grid"
import * as React from "react"
import Center from "./Center"

interface Props {}

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
              <span style={{ fontSize: 26, marginLeft: 8 }}>13 weeks</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs container justify="flex-end">
              <span style={{ fontWeight: "bold", fontSize: 26 }}>
                Developer Cost Per Week:{" "}
              </span>
            </Grid>
            <Grid item xs>
              <span style={{ fontSize: 26, marginLeft: 8 }}>$1,500</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs container justify="flex-end">
              <span style={{ fontWeight: "bold", fontSize: 26 }}>
                Total Raw Cost:{" "}
              </span>
            </Grid>
            <Grid item xs>
              <span style={{ fontSize: 26, marginLeft: 8 }}>$19,500</span>
            </Grid>
          </Grid>
        </Center>
      </>
    )
  }
}

