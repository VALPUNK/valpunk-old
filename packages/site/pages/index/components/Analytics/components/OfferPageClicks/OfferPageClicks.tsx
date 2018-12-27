import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/icons/Mouse"
import * as chartjs from "chart.js"
import * as React from "react"
import { ChartData } from "react-chartjs-2"
import styled from "styled-components"
import LineChart from "../LineChart/LineChart"
import { CardContainer } from "~/components/collections"

interface Props {
  test?: string
}

interface State {
  test?: string
}
const referralColor = "#FA2960"

const data: ChartData<chartjs.ChartData> = {
  labels: ["Mar 1", "Mar 10", "Mar 20", "Mar 31"],
  datasets: [
    {
      label: "User Actions",
      fill: false,
      // lineTension: 0.1,
      // backgroundColor: "rgba(75,192,192,0.4)",
      borderCapStyle: "round",
      // borderDash: [],
      borderColor: "white",
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [13, 32, 21, 39]
    }
  ]
}

export default class OfferPageClicks extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <CardContainer style={{ backgroundColor: referralColor, color: "white" }}>
        <Grid container>
          <Grid container item xs={2} justify="center">
            <StyledIconDiv>
              <Icon />
            </StyledIconDiv>
          </Grid>
          <Grid container item xs={6} direction="column">
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Offers Claimed
            </Typography>
            <Typography style={{ color: "white" }}>March 2018</Typography>
          </Grid>
          <Grid container item xs={4} justify="center" alignItems="center">
            <Typography style={{ color: "white" }}>
              30 Offers Claimed of 52 Visits
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: 10 }}>
          <Grid container item xs={12} justify="center" alignItems="center">
            <LineChart data={data} />
          </Grid>
        </Grid>
      </CardContainer>
    )
  }
}

const StyledIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
