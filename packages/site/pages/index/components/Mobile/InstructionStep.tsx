import * as React from "react"
import Grid from "@material-ui/core/Grid"

interface Props {
  img?: string
  backgroundImage?: string
}

interface State {
  test?: string
}

export default class InstructionStep extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        // style={{
        //   backgroundColor: this.props.backgroundColor,
        //   height: 1000
        // }}
        style={{
          backgroundImage: `url("${this.props.backgroundImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 1000
        }}
        direction="row-reverse"
      >
        <Grid container item lg={4} style={{}}>
          {this.props.children}
        </Grid>
        <Grid
          container
          item
          lg={4}
          style={{
            backgroundImage: `url(${this.props.img})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "40% 50%",
            verticalAlign: "top",
            padding: "1000px 30px 0px 30px"
          }}
        />
      </Grid>
    )
  }
}
