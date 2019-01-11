import Grid from "@material-ui/core/Grid"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import * as React from "react"
import { SubtaskProps } from "../mock"

const Point = (props: SubtaskProps) => (
  <Grid
    item
    xs={6}
    container
    style={{ fontSize: 16, marginTop: 4, marginLeft: props.subtask && 40 }}
    direction="row"
  >
    <Grid
      item
      xs
      container
      justify="center"
      alignItems="center"
      style={{
        marginRight: 5
      }}
    >
      <CheckBoxOutlineIcon style={{ display: "flex", fontSize: 16 }} />
    </Grid>{" "}
    <Grid item xs={11} container alignItems="center" style={{ fontSize: 18 }}>
      {props.name}
    </Grid>
  </Grid>
)

export default Point
