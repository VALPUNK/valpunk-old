import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import * as React from "react"
import Center from "./Center"
import { Project } from "../mock";

interface Props {
  data: Project
}

export default class PaymentOptions extends React.Component<Props> {
  public render() {
    return (
      <>
        <Center size={8}>
          <div
            style={{
              textAlign: "center",
              marginTop: 80,
              fontSize: 40,
              fontWeight: "bold"
            }}
          >
            Payment Options
          </div>
          <div
            style={{
              marginTop: 80,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: blue
            }}
          >
            Monthly
          </div>
          <div style={{ textAlign: "center" }}>
            (Prices are based on lengthening development time out to 3, 6, and 9
            months)
          </div>

          <Grid container spacing={40} style={{ marginTop: 30 }}>
            <Grid item xs={4}>
              <MonthlyCard
                percentOff={10}
                weeklyFee={this.props.data.costPerPeriod}
                months={3}
              />
            </Grid>
            <Grid item xs={4}>
              <MonthlyCard
                percentOff={20}
                weeklyFee={this.props.data.costPerPeriod}
                months={6}
                big
              />
            </Grid>
            <Grid item xs={4}>
              <MonthlyCard
                percentOff={10}
                weeklyFee={this.props.data.costPerPeriod}
                months={9}
              />
            </Grid>
          </Grid>

          <div
            style={{
              marginTop: 100,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: blue
            }}
          >
            Pay Per Week
          </div>

          <div style={{ marginTop: 18 }}>
            <Center size={8}>
              <div style={{ fontSize: 22 }}>
                You may pay{" "}
                <span style={{ fontWeight: "bold", fontSize: 24 }}>
                  ${this.props.data.costPerPeriod.toLocaleString()}{" "}
                </span>
                for a given week of work. Upon completion and when you are
                ready, you may pay for another week. These weeks can be
                completed in any order you want. We can do this until the
                project is finished or until you are satisified.
              </div>
            </Center>
          </div>

          <div
            style={{
              marginTop: 100,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: blue
            }}
          >
            50% to Start, 50% on Delivery
          </div>

          <div style={{ marginTop: 18 }}>
            <Center size={8}>
              <div style={{ fontSize: 22 }}>
                You may pay 50% in a lump sum to get work started.{" "}
                <span style={{ fontWeight: "bold", fontSize: 24 }}>${(this.props.data.costPerPeriod * this.props.data.weeks.length * 0.5).toLocaleString()}</span>
                .
              </div>

              <div style={{ fontSize: 22 }}>
                When the project is finished and ready for delivery, you will
                need to pay the other 50% to own the app.{" "}
                <span style={{ fontWeight: "bold", fontSize: 24 }}>${(this.props.data.costPerPeriod * this.props.data.weeks.length * 0.5).toLocaleString()}</span>
                .
              </div>
            </Center>
          </div>
        </Center>
      </>
    )
  }
}

const blue = "#1e88e5"

const MonthlyCard = ({
  percentOff,
  weeklyFee,
  months,
  big
}: {
  percentOff: number
  weeklyFee: number
  months: number
  big?: boolean
}) => {

  const discountedPackageTotal = weeklyFee * 13 * ((100 - percentOff)/100)
  const monthlyDiscountedPackageTotal = discountedPackageTotal / months

  return (
  <Paper style={{ padding: 16, transform: big ? "scale(1.2)" : "scale(0.9)" }}>
    <div style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
      Save {percentOff}%
    </div>
    <div
      style={{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        margin: 4
      }}
    >
      ${monthlyDiscountedPackageTotal.toLocaleString()}/mo
    </div>
    <div style={{ textAlign: "center", fontSize: 20, margin: 4 }}>
      for {months} months
    </div>
    <div style={{ textAlign: "center", fontSize: 18, margin: 4 }}>
      (${(discountedPackageTotal).toLocaleString()})
    </div>
  </Paper>
)
    }
