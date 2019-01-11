import Grid from "@material-ui/core/Grid"
import * as React from "react"
import Point from "./Point"
import Center from "./Center"
import { Project } from "../mock"

interface Props {
  data: Project
}

export default class Estimates extends React.Component<Props> {

  public calcTotalPrice = (percent: number) => {
    const discountedPackageTotal =
      this.props.data.costPerPeriod * 13 * ((100 - percent) / 100)
    return discountedPackageTotal
  }

  public calcMonthlyPrice = (percent: number, months: number) => {
    const discountedPackageTotal =
      this.props.data.costPerPeriod * 13 * ((100 - percent) / 100)
    const monthlyPrice = discountedPackageTotal / months
    return monthlyPrice
  }

  public calcLumpSum = () => {
    const lumpSum = this.props.data.costPerPeriod * this.props.data.weeks.length * 0.5
    return lumpSum
  }

  public render() {

    return (
      <>
        <Center size={8}>
          <div style={{ fontSize: 22 }}>I want to pay: </div>
          <Point name="Monthly" id={"0"} />
          <Point
            name={`3 Months at $${this.calcMonthlyPrice(10,3).toLocaleString()}/month, totalling $${this.calcTotalPrice(10).toLocaleString()}.`}
            id="1"
            subtask
          />
          <Point
            name={`6 Months at $${this.calcMonthlyPrice(20,6).toLocaleString()}/month, totalling $${this.calcTotalPrice(20).toLocaleString()}.`}
            id="1"
            subtask
          />
          <Point
            name={`9 Months at $${this.calcMonthlyPrice(10,9).toLocaleString()}/month, totalling $${this.calcTotalPrice(10).toLocaleString()}.`}
            id="1"
            subtask
          />
          <Point name={`Per ${this.props.data.devPeriod}`} id={"1"} />
          <Point
            name={`At $${this.props.data.costPerPeriod}/${this.props.data.devPeriod} for the described set of tasks.`}
            subtask
          />
          <Point name="Lump Sum" />
          <Point
            name={`50% Lump Sum to start work at $${this.calcLumpSum().toLocaleString()}, understanding that I will need to pay the other $${this.calcLumpSum().toLocaleString()} when the project is finished.`}
            id={"2"}
            subtask
          />
        </Center>
      </>
    )
  }
}
