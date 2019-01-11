import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import * as React from "react"
import { SubtaskProps, WeekProps } from "../mock"
import Point from "./Point"

interface Props {
  week: WeekProps,
  index: number,
  devPeriod: string
}

const Week = (props: Props) => {
  return (
    <Grid container style={{ marginTop: 40 }}>
      <Grid item xs />
      <Grid item xs={8}>
        <Paper style={{ padding: 16 }}>
          <Grid
            container
            style={{ fontSize: 24, color: "#1e88e5", fontWeight: "bold" }}
          >
            {props.devPeriod} {props.index + 1}
          </Grid>
          <Grid item container style={{ fontSize: 20, marginTop: 5 }}>
            <div
              style={{
                display: "flex",
                alingItem: "center",
                justifyContent: "flex-start",
                marginRight: 5
              }}
            >
              <CheckBoxOutlineIcon
                style={{ display: "flex", fontWeight: "bold" }}
              />
            </div>{" "}
            <span style={{ fontWeight: "bold" }}>{props.week.title}</span>
          </Grid>
          <Grid container style={{ marginLeft: 20, marginTop: 5 }}>
            {props.week.subtasks.map((task: SubtaskProps, index) => (
              <Point key={index} {...task} />
            ))}
            {/* <Point />
          <Point />
          <Point />
          <Point /> */}
          </Grid>
          <Grid container style={{ marginTop: 16 }}>
            <div
              style={{
                padding: 16,
                width: "100%",
                borderTop: "1px solid black"
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: 20 }}>Overview</div>
              <div style={{ marginTop: 5, fontSize: 18, padding: "0px 5px" }}>
                {props.week.overview}
              </div>
            </div>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs />
    </Grid>
  )
}

export default Week
