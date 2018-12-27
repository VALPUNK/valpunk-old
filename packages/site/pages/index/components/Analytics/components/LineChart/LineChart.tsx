import * as chartjs from "chart.js"
import * as React from "react"
import { ChartData, Line } from "react-chartjs-2"


interface Props {
  data: ChartData<chartjs.ChartData>
}

// const options = { scales: { yAxes: [ { ticks: { beginAtZero: true, callback: (value:any) => formatNumberDecimal(value) } } ], xAxes: [ { ticks: { callback: value => { const date = value.split(' | '); return date[0]; } } } ] }; };

export default class LineChart extends React.PureComponent<Props> {
  public render() {
    return (
      <div style={{maxWidth: "95%"}}>
        <Line
          data={this.props.data}
          options={{
            layout: {
              padding: 10
            },
            responsive: true,
            elements: {
              line: {
                tension: 0.5,
                borderColor: "white"
              }
            },
            legend: {
              display: false,
              labels: {
                fontColor: "white",
                fontFamily: "Poppins"
              }
            },
            scales: {
              scaleLabel: {
                fontColor: "white"
              },
              xAxes: [
                {
                  display: false,
                  gridLines: {
                    color: "rgba(0,0,0,0)",
                  
                  },
                  scaleLabel: {
                    fontColor: "red",
                    fontFamily: "Poppins"
                  }
                },
                
              ],
              yAxes: [
                {
                  display: false,
                  gridLines: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              ]
            }
          }}
        />
      </div>
    )
  }
}
