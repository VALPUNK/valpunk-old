import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import Head from "next/head"
import * as React from "react"
import { Layout } from "~/components/universal"
import { joinme as data, SubtaskProps, WeekProps } from "./mock"

export default class Plan extends React.Component {
  public render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link
              href="https://fonts.googleapis.com/css?family=Kanit"
              rel="stylesheet"
            />
          </Head>
          <style jsx global>
            {`
              body {
                margin: 0;
                font-family: "Kanit", sans-serif;
              }
            `}
          </style>
        </div>
        <div style={{ padding: "80px" }}>
          <div style={{ height: 50 }} />
          <Center size={9}>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ad1457"
                  }}
                >
                  Project:
                </span>
              </Grid>
              <Grid item xs>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ad1457",
                    marginLeft: 8
                  }}
                >
                  {data.projectTitle}
                </span>
              </Grid>
            </Grid>
          </Center>

          <Spacer />
          <Grid container>
            <Grid item xs />
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs container justify="flex-end">
                  <span style={{ fontWeight: "bold", fontSize: 26 }}>
                    Stakeholder(s):
                  </span>
                </Grid>
                <Grid item xs>
                  <span style={{ fontSize: 26, marginLeft: 8 }}>
                    {data.stakeholders.join()}
                  </span>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs container justify="flex-end">
                  <span style={{ fontWeight: "bold", fontSize: 26 }}>
                    Developer(s):
                  </span>
                </Grid>
                <Grid item xs>
                  <span style={{ fontSize: 26, marginLeft: 8 }}>
                    {" "}
                    {data.developers.join()}
                  </span>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs container justify="flex-end">
                  <span style={{ fontWeight: "bold", fontSize: 26 }}>
                    Date of Quote:
                  </span>
                </Grid>
                <Grid item xs>
                  <span style={{ fontSize: 26, marginLeft: 8 }}>
                    {" "}
                    January 8, 2019
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs />
          </Grid>
          <div style={{ height: 20 }} />
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 40
            }}
          >
            Estimated Schedule
          </div>
          <Spacer />
          {data.weeks.map((wk: WeekProps) => (
            <Week key={wk.id} {...wk} />
          ))}
          <div style={{ height: 50 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px"
            }}
          >
            <div style={{ width: "80%", borderBottom: "1px solid black" }} />
          </div>
          <Center size={8}>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span style={{ fontWeight: "bold", fontSize: 26 }}>
                  Estimated Time:{" "}
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: 26, marginLeft: 8 }}>13 weeks</span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span style={{ fontWeight: "bold", fontSize: 26 }}>
                  Developer Cost Per Week:{" "}
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: 26, marginLeft: 8 }}>$1,500</span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span style={{ fontWeight: "bold", fontSize: 26 }}>
                  Total Raw Cost:{" "}
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: 26, marginLeft: 8 }}>$19,500</span>
              </Grid>
            </Grid>
          </Center>
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
              (Prices are based on lengthening development time out to 3, 6, and
              9 months)
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
                  <span style={{ fontWeight: "bold", fontSize: 24 }}>
                    $9,750
                  </span>
                  .
                </div>

                <div style={{ fontSize: 22 }}>
                  When the project is finished and ready for delivery, you will
                  need to pay the other 50% to own the app.{" "}
                  <span style={{ fontWeight: "bold", fontSize: 24 }}>
                    $9,750
                  </span>
                  .
                </div>
              </Center>
            </div>
          </Center>
        </div>

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
        <div style={{ marginTop: 160 }}>
          <Center size={8}>
            <Grid container>
              <Grid
                item
                xs={4}
                style={{
                  borderTop: "2px solid black",
                  paddingTop: 10,
                  fontSize: 22
                }}
              >
                Signature
              </Grid>
              <Grid item xs />
              <Grid
                item
                xs={4}
                style={{
                  borderTop: "2px solid black",
                  paddingTop: 10,
                  fontSize: 22
                }}
              >
                Date
              </Grid>
            </Grid>
          </Center>
        </div>
        <div style={{ marginTop: 80 }}>
          <Center size={8}>
            <div style={{ fontSize: 26, fontWeight: "bold" }}>
              This quote expires on February 5, 2019
            </div>
          </Center>
        </div>
        <div style={{ marginTop: 80 }}>
          <Center size={8}>
            <div style={{ fontSize: 26, fontWeight: "bold" }}>
              Terms and Conditions
            </div>
          </Center>
        </div>
        <div style={{ marginTop: 20 }}>
          <Center size={8}>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              VAL PUNK, LLC reserves the right to develop apps and services on
              our own system. While you will own the code and data for any app
              or site you pay for, you will not own any code that belongs to a
              VAL PUNK, LLC service. This includes but is not limited to email,
              texting, and notification services, as well as our own proprietary
              content management service, and our payment management system.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              You may continue to use any VALPUNK, LLC service that the app or
              service was developed using and will only be required to pay your
              fair share of the use of these services that require fees by third
              party sources.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              For monthly plans, you will own any code that was developed up
              until the most recent paid invoice. If work has been done in
              coordination with an upaid invoice, that work will not be owned by
              you until that invoice is paid and received by VAL PUNK, LLC.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              For week plans, you will own any code that was developed for the
              week that had been paid for.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              For lump sum plans, you will own code when VAL PUNK, LLC receives
              payment for both the intial and final lump sum payments.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              We reserve the right to share any work we do on this project
              (unless otherwise specified in an Non Disclosure Agreement) as a
              part of our portfolio.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              Work that we are requested to do that is not specified in this
              quote may be assessed at a rate of $80/hr.
            </div>
          </Center>
        </div>
        <div style={{ height: 400 }} />
      </div>
    )
  }
}

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

const blue = "#1e88e5"

const Spacer = () => <div style={{ height: 40 }} />

const Week = (props: WeekProps) => {
  return (
    <Grid container style={{ marginTop: 40 }}>
      <Grid item xs />
      <Grid item xs={8}>
        <Paper style={{ padding: 16 }}>
          <Grid
            container
            style={{ fontSize: 24, color: "#1e88e5", fontWeight: "bold" }}
          >
            Week {props.weekNumber}
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
            <span style={{ fontWeight: "bold" }}>{props.title}</span>
          </Grid>
          <Grid container style={{ marginLeft: 20, marginTop: 5 }}>
            {props.subtasks.map((task: SubtaskProps) => (
              <Point key={task.id} {...task} />
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
                {props.overview}
              </div>
            </div>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs />
    </Grid>
  )
}

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

const Center = ({
  size,
  children
}: {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  children: React.ReactNode
}) => (
  <Grid container>
    <Grid item xs />
    <Grid item xs={size}>
      {children}
    </Grid>
    <Grid item xs />
  </Grid>
)

// const USPaper = (props: { children: React.ReactNode }) => (
//   <div style={{ width: 2550, height: 3300 }}>{props.children}</div>
// )
