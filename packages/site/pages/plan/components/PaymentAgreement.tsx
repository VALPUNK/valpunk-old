import Grid from "@material-ui/core/Grid"
import * as React from "react"
import Point from "./Point"
import Center from "./Center"

interface Props {}

export default class Estimates extends React.Component<Props> {
  public render() {
    return (
      <>
        <Center size={8}>
          <div style={{ fontSize: 22 }}>I want to pay: </div>
          <Point name="Monthly" id={"0"} />
          <Point
            name="3 Months at $5,850/month, totalling $17,550."
            id="1"
            subtask
          />
          <Point
            name="6 Months at $2,762/month, totalling $15,600."
            id="1"
            subtask
          />
          <Point
            name="9 Months at $1,950/month, totalling $17,550."
            id="1"
            subtask
          />
          <Point name="Per Week" id={"1"} />
          <Point
            name="At $1,500/week for the described set of tasks."
            subtask
          />
          <Point name="Lump Sum" />
          <Point
            name="50% Lump Sum to start work at $9,750, understanding that I will need to pay the other $9,750 when the project is finished."
            id={"2"}
            subtask
          />
        </Center>
      </>
    )
  }
}


