import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import * as React from "react"

interface Props {
  label?: string
  amount?: number
  total?: number
  color?: string
}

export default class MiddleOutBar extends React.PureComponent<Props> {
  public render() {
    const percentage = (this.props.amount / this.props.total) * 100
    return (
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={8}>
            <Typography style={{ textAlign: "center" }}>{percentage}%</Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid container item xs={3} justify="center" alignItems="center">
          <Typography style={{ fontSize: 12 }}>{this.props.label}</Typography>
        </Grid>

        <Grid container item xs={8} style={{ paddingRight: 5, paddingLeft: 5 }}>
          <Grid
            container
            item
            xs={12}
            style={{
              backgroundColor: "#DBD9E2",
              borderRadius: 10,
              height: 10
            }}
            justify="center"
          >
            <Grid
              container
              item
              style={{
                backgroundColor: this.props.color,
                borderRadius: 10,
                height: 10,
                width: `${percentage}%`
              }}
            />
          </Grid>
        </Grid>

        <Grid container item xs={1} justify="center" alignItems="center">
          <Typography>{this.props.amount}</Typography>
        </Grid>
      </Grid>
    )
  }
}
