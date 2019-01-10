import Grid from "@material-ui/core/Grid"
import * as React from "react"
import Center from "./Center"

interface Props {}

export default class Signature extends React.Component<Props> {
  public render() {
    return (
      <>
        <div style={{ marginTop: 160 }}>
          <Center size={8}>
            <Grid container>
              <Grid
                item
                xs={4}
                style={{
                  borderTop: "2px solid black",
                  paddingTop: 10,
                  fontSize: 22
                }}
              >
                Signature
              </Grid>
              <Grid item xs />
              <Grid
                item
                xs={4}
                style={{
                  borderTop: "2px solid black",
                  paddingTop: 10,
                  fontSize: 22
                }}
              >
                Date
              </Grid>
            </Grid>
          </Center>
        </div>
        <div style={{ marginTop: 80 }}>
          <Center size={8}>
            <div style={{ fontSize: 26, fontWeight: "bold" }}>
              This quote expires on February 5, 2019
            </div>
          </Center>
        </div>
      </>
    )
  }
}
