import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import MiddleOutBar from "./components/MiddleOutBar"
import { CardContainer } from "~/components/collections"

interface Props {
  test?: string
}

interface State {
  test?: string
}

// const items = [
//   { value: "apple" },
//   { value: "pear" },
//   { value: "orange" },
//   { value: "grape" },
//   { value: "banana" }
// ]

export default class extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <CardContainer>
        <Grid container>
          <Grid container item xs={9}>
            <Typography variant="subtitle1">Referral Conversion</Typography>
          </Grid>
          <Grid container item xs={3} justify="flex-end">
            <Select
              name="age"
              style={{ width: "100%" }}
              defaultValue={10}
              value={10}
            >
              <MenuItem value={10}>March</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={16}
            style={{ marginTop: 10 }}
          >
            <MiddleOutBar
              label="Referrals"
              amount={40}
              total={40}
              color="#651FFF"
            />
            <MiddleOutBar
              label="Viewed"
              amount={28}
              total={40}
              color="#3D5AFE"
            />
            <MiddleOutBar
              label="Accepted"
              amount={19}
              total={40}
              color="#2979FF"
            />
            <MiddleOutBar
              label="Contacted"
              amount={17}
              total={40}
              color="#00B0FF"
            />
            <MiddleOutBar
              label="Consulted"
              amount={8}
              total={40}
              color="#00E5FF"
            />
            <MiddleOutBar
              label="Started"
              amount={4}
              total={40}
              color="#1DE9B6"
            />
          </Grid>
        </Grid>
      </CardContainer>
    )
  }
}
