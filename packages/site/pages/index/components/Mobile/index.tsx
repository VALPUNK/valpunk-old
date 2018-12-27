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
        <InstructionStep img={cdn + "/img/Step1.png"} backgroundColor="white">
          <Grid item xs={12}>
            <Typography variant="h4">Tap 1</Typography>
          </Grid>
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              Go through your list of businesses that you follow and tap Send
              Friend.
            </Typography>
          </Grid>
        </InstructionStep>
        <InstructionStep img={cdn + "/img/Step2.png"} backgroundColor="#FBFBFB">
          <Grid item xs={12}>
            <Typography variant="h4">Tap 2</Typography>
          </Grid>
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              Tap a friend from your contacts
            </Typography>
          </Grid>
        </InstructionStep>
        <InstructionStep img={cdn + "/img/Step3.png"} backgroundColor="white">
          <Grid item xs={12}>
            <Typography variant="h4">Tap 3</Typography>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: 10 }}>
            <Typography variant="h6">Tap Send Friend!</Typography>
          </Grid>
        </InstructionStep>
        <InstructionStep img={cdn + "/img/Step4.png"} backgroundColor="#FBFBFB">
          <Grid item xs={12}>
            <Typography variant="h4">Woohoo!</Typography>
          </Grid>
          <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
            <Typography variant="h6">
              Now your referral has been sent! The business will only see their
              contact information if they accept the link sent to them!
            </Typography>
          </Grid>
        </InstructionStep>
      </Grid>
    )
  }
}
