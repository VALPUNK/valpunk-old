import * as React from "react"
import Grid from "@material-ui/core/Grid"
import InstructionStep from "./InstructionStep"
import Typography from "@material-ui/core/Typography"
import { cdn } from "~/constants/constants"

interface Props {
  test?: string
}

interface State {
  test?: string
}

export default class Mobile extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <Grid container>
        <InstructionStep
          img={cdn + "/img/Step1_draw.png"}
          backgroundColor="white"
        >
          <Grid item xs={12}>
            <Typography variant="h4">Step 1: Mock it up</Typography>
          </Grid>
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              It's important to know all the steps for your MVP (Minimum Vialbe
              Product)
            </Typography>
          </Grid>
        </InstructionStep>
        <InstructionStep img={cdn + "/img/Step1.png"} backgroundColor="#FBFBFB">
          <Grid item xs={12}>
            <Typography variant="h4">Step 2: Design</Typography>
          </Grid>
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              Before we touch code we like to design the app or site in Adobe XD
              or Photoshop
            </Typography>
          </Grid>
        </InstructionStep>
        <InstructionStep img={cdn + "/img/Step3.png"} backgroundColor="white">
          <Grid item xs={12}>
            <Typography variant="h4">Step 3: Coding</Typography>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              With a good gameplan and a solid idea of what you want, we can
              begin coding. You're input will be welcome in refinining the
              product.
            </Typography>
          </Grid>
        </InstructionStep>
        <InstructionStep img={cdn + "/img/Step4.png"} backgroundColor="#FBFBFB">
          <Grid item xs={12}>
            <Typography variant="h4">Step 4: Woohoo!</Typography>
          </Grid>
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              Now we can get the app into the hands of your friends, family, and
              customers! Though this is often a milestone to rest our hats on,
              this is the first step of many to making the perfect app for your
              audience.
            </Typography>
          </Grid>
        </InstructionStep>
      </Grid>
    )
  }
}
