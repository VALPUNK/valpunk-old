import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { ImageCompareSlider } from "@valpunk/core"

export default class Transformations extends React.Component {
  public render() {
    return (
      <Grid container>
        <Grid item xs={6}>
          <div style={{ height: 500 }}>
            <ImageCompareSlider
              leftImage="https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/kush_home.png"
              rightImage="https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/nod_home.png"
              sliderLineWidth={5}
              handleSize={80}
              sliderPositionPercentage={0.5}
              hover={false}
            />
          </div>
        </Grid>
        <Grid item xs={6} style={{ padding: 24 }}>
          <Typography variant="h3">The Nod</Typography>
          <Typography variant="h5">A lengthy description</Typography>
        </Grid>
      </Grid>
    )
  }
}
