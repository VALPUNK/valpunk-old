import * as React from "react"
import Grid, { GridProps } from "@material-ui/core/Grid"
import styled from "styled-components"

interface Props extends GridProps {}

export default class Content extends React.PureComponent<Props> {
  public render() {
    return (
      <StyledDiv>
        <Grid
          container
          style={{ ...this.props.style, padding: "30px 10px" }}
          item
          xs={12}
          sm={11}
          md={10}
          lg={9}
          xl={8}
          {...this.props}
        >
          {this.props.children}
        </Grid>
      </StyledDiv>
    )
  }
}

const StyledMainGrid = styled(Grid)`
  padding: 30px 10px;
`

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
