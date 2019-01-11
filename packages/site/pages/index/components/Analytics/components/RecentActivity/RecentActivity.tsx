import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import { config, SpringConfig, Transition } from "react-spring"
import { CardContainer } from "~/components/collections"
import RecentActivityItem from "./components/RecentActivityItem"
import { mock } from "./mock"
import { produce } from "immer"

interface Props {
  test?: string
}

interface State {
  test?: string
  data?: any[]
  current?: number
}

interface ActivityProps {
  id?: number
  img?: string
  name?: string
  activityDescription?: string
  date?: string
  note?: string
}

const spring: SpringConfig = { ...config.default, precision: 0.1 }

export default class RecentActivity extends React.Component<Props, State> {
  public activityInterval: NodeJS.Timeout

  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      current: 0
    }
    this.add.bind(this)
  }

  public add = () => {
    if (this.state.current === mock.length) {
      this.setState({
        current: 0
      })
    }

    this.setState({
      data: [
        { ...mock[this.state.current], id: new Date() },
        ...this.state.data.slice(0, 3)
      ],

      current: this.state.current + 1
    })
  }

  public componentDidMount() {
    this.activityInterval = setInterval(() => {
      console.log("hi")
      this.add()
    }, 2300)
  }

  // public config = (_item: any, state: any) =>
  //   state === "leave" ? [{ duration: 1000 }, spring, spring] : spring

  public render() {
    return (
      <CardContainer style={{ height: 400, overflow: "hidden" }}>
        <Grid container>
          <Typography variant="subtitle1">Recent Activity</Typography>
        </Grid>
        <Grid container style={{ marginTop: 10 }}>
          <Transition
            items={this.state.data}
            keys={item => item.id}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: "auto" }}
            leave={{ opacity: 0, height: 0 }}
            // @ts-ignore
            // config={this.config}
          >
            {(item: any) => (style: React.CSSProperties) => (
              <RecentActivityItem
                key={item.id}
                img={item.img}
                name={item.name}
                note={item.note}
                activityDescription={item.activityDescription}
                date={item.date}
                style={style}
              />
            )}
          </Transition>
        </Grid>
      </CardContainer>
    )
  }
}
