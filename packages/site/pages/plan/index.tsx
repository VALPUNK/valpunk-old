import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import * as React from "react"
import { Layout, Meta } from "~/components/universal"
import { joinme as data, SubtaskProps, WeekProps } from "./mock"

export default class Plan extends React.Component {
  public render() {
    return (
      <div style={{ backgroundColor: "s" }}>
        <Meta />
        <Layout>
          <div style={{ padding: "80px" }}>
            <div style={{ height: 100 }} />

            <div
              style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
            >
              Project: {data.projectTitle}
            </div>
            <Spacer />
            <div>Stakeholder(s): {data.stakeholders.join()}</div>
            <div>Developer(s): {data.developers.join()}</div>
            <Spacer />
            <div
              style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}
            >
              Estimated Schedule
            </div>
            <Spacer />
            {data.weeks.map((wk: WeekProps) => (
              <Week key={wk.id} {...wk} />
            ))}
          </div>
          <div style={{ height: 500 }} />
        </Layout>
      </div>
    )
  }
}

const Spacer = () => <div style={{ height: 100 }} />

const Week = (props: WeekProps) => {
  return (
    <Grid container>
      <Grid item xs />
      <Grid item xs={8}>
        <Grid container style={{ fontSize: 24 }}>
          Week {props.weekNumber}
        </Grid>
        <Grid item container style={{ fontSize: 20 }}>
          <div
            style={{
              display: "flex",
              alingItem: "center",
              justifyContent: "flex-start",
              marginRight: 5
            }}
          >
            <CheckBoxOutlineIcon style={{ display: "flex" }} />
          </div>{" "}
          {props.title}
        </Grid>
        <Grid container style={{ marginLeft: 20 }}>
          {props.subtasks.map((task: SubtaskProps) => (
            <Point key={task.id} {...task} />
          ))}
          {/* <Point />
          <Point />
          <Point />
          <Point /> */}
        </Grid>
        <Grid container>
          <Paper style={{ padding: 16, width: "100%" }}>
            <div>Overview</div>
            <div>{props.overview}</div>
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs />
    </Grid>
  )
}

const Point = (props: SubtaskProps) => (
  <Grid item xs={6} container style={{ fontSize: 16 }} direction="row">
    <Grid
      item
      xs
      style={{
        display: "flex",
        alingItem: "center",
        justifyContent: "center",
        marginRight: 5
      }}
    >
      <CheckBoxOutlineIcon style={{ fontSize: 16 }} />
    </Grid>{" "}
    <Grid item xs={11}>
      {props.name}
    </Grid>
  </Grid>
)

// const USPaper = (props: { children: React.ReactNode }) => (
//   <div style={{ width: 2550, height: 3300 }}>{props.children}</div>
// )
