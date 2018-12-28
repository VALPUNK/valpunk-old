import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import RecentActivityItem from "./components/RecentActivityItem"
import { mock } from "./mock"
import { CardContainer } from "~/components/collections"

interface Props {
  test?: string
}

interface State {
  test?: string
}

export default class RecentActivity extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <CardContainer>
        <Grid container>
          <Typography variant="subtitle1">Recent Activity</Typography>
        </Grid>
        <Grid container style={{ marginTop: 10 }}>
          {mock.map((activity: any) => (
            <RecentActivityItem
              key={activity.id}
              img={activity.img}
              name={activity.name}
              note={activity.note}
              activityDescription={activity.activityDescription}
              date={activity.date}
            />
          ))}
        </Grid>
      </CardContainer>
    )
  }
}
