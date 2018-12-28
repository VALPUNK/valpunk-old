import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

interface Props {
  img: string
  name: string
  note: string
  activityDescription: string
  date: string
}

interface State {
  test?: string
}

export default class RecentActivityItem extends React.PureComponent<
  Props,
  State
> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <Grid container item xs={12}>
        <Grid container item xs={2} justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src={this.props.img} />
        </Grid>
        <Grid container item xs={10} spacing={0}>
          <Grid container item xs={12} direction="row">
            <Typography style={{ fontSize: 14 }}>{this.props.name}</Typography>
            <Typography
              style={{
                fontSize: 10,
                fontWeight: "bold",
                color: "red",
                alignItems: "center",
                display: "flex",
                marginLeft: 5
              }}
            >
              {this.props.note}
            </Typography>
          </Grid>{" "}
          <Grid container item xs={12} direction="column">
            <Typography style={{ fontSize: 10 }}>
              {this.props.activityDescription}
            </Typography>
            <Typography style={{ fontSize: 10 }}>{this.props.date}</Typography>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: 10, marginBottom: 10, width: "100%" }} />
      </Grid>
    )
  }
}
