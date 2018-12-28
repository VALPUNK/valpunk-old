import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import styled from "styled-components"
import Icon from "@material-ui/icons/PhoneIphone"
import { ChartData } from "react-chartjs-2"
import * as chartjs from "chart.js"
import { CardContainer } from "~/components/collections"
import LineChart from "../LineChart/LineChart"

interface Props {
  test?: string
}

interface State {
  test?: string
}

const purpleColor = "#7B60E6"

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
      data: [65, 59, 80, 81]
    }
  ]
}

export default class extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <CardContainer style={{ backgroundColor: purpleColor, color: "white" }}>
        <Grid container>
          <Grid container item xs={2} justify="center">
            <StyledIconDiv>
              <Icon />
            </StyledIconDiv>
          </Grid>
          <Grid container item xs={6} direction="column">
            <Typography variant="subtitle1" style={{ color: "white" }}>
              App Usage
            </Typography>
            <Typography style={{ color: "white" }}>March 2018</Typography>
          </Grid>
          <Grid container item xs={4} justify="center" alignItems="center">
            <Typography style={{ color: "white" }}>
              200 Actions by 40 users
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
