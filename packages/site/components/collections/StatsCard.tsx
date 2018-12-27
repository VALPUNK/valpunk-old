import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
// import Icon from "@material-ui/icons/Home"
import styled from "styled-components"
import CardContainer from "./CardContainer"
import { Counter } from "../basic"

interface Props {
  number: number
  label: string
  color: string
  icon: JSX.Element
}

export default class StatsCard extends React.PureComponent<Props> {
  public render() {
    return (
      <Grid container item xs={6} md={4} lg={3}>
        <Counter endNumber={this.props.number}>
          {({ number }) => (
            <CardContainer>
              <Grid container>
                <Grid
                  container
                  item
                  xs={3}
                  justify="center"
                  alignItems="center"
                >
                  <StyledIconDiv color={this.props.color}>
                    {this.props.icon}
                  </StyledIconDiv>
                </Grid>
                <Grid container item xs={9} direction="column">
                  <Typography style={{ fontSize: 24 }}>{number}</Typography>
                  <Typography style={{ color: "#757575" }}>
                    {this.props.label}
                  </Typography>
                </Grid>
              </Grid>
            </CardContainer>
          )}
        </Counter>
      </Grid>
    )
  }
}

const StyledIconDiv = styled.div`
  border-radius: 25px;
  height: 50px;
  width: 50px;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
