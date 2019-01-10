import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import * as React from "react"
import Center from "./Center"

interface Props {}

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
                percentOff={"10"}
                monthlyFee={"5,850"}
                months={"3"}
                savings={"17,550"}
              />
            </Grid>
            <Grid item xs={4}>
              <MonthlyCard
                percentOff={"20"}
                monthlyFee={"2762"}
                months={"6"}
                savings={"15,600"}
                big
              />
            </Grid>
            <Grid item xs={4}>
              <MonthlyCard
                percentOff={"10"}
                monthlyFee={"1950"}
                months={"9"}
                savings={"17,550"}
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
                  $1,500{" "}
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
                <span style={{ fontWeight: "bold", fontSize: 24 }}>$9,750</span>
                .
              </div>

              <div style={{ fontSize: 22 }}>
                When the project is finished and ready for delivery, you will
                need to pay the other 50% to own the app.{" "}
                <span style={{ fontWeight: "bold", fontSize: 24 }}>$9,750</span>
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
  monthlyFee,
  months,
  savings,
  big
}: {
  percentOff: string
  monthlyFee: string
  months: string
  savings: string
  big?: boolean
}) => (
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
      ${monthlyFee}/mo
    </div>
    <div style={{ textAlign: "center", fontSize: 20, margin: 4 }}>
      for {months} months
    </div>
    <div style={{ textAlign: "center", fontSize: 18, margin: 4 }}>
      (${savings})
    </div>
  </Paper>
)
