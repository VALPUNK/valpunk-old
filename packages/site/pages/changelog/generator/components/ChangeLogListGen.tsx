import {
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Divider
} from "@material-ui/core"
import * as React from "react"
import { RegularButton } from "@valpunk/core"
import { ChangeListing } from "../../components/ChangeLog"
import ChangeLogList from "../../components/ChangeLogList"

interface Props {
  addListing?: (listing: string, data: any) => void
  previewData?: any[]
}

interface State {
  type?: string
  log?: string[]
  nestedLog?: ChangeListing[]
}

export default class ChangeLogListGen extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      type: "",
      log: []
    }
  }

  public handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    console.log(event.target.name, ": ", event.target.value)
  }

  public handleMultilineChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    let tempStringArray = event.target.value.split('\n')
    this.setState({
      [event.target.name]: tempStringArray
    })

    console.log(event.target.name, ": ", event.target.value)
  }

  public handleAddListing = (data: any) => (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const tempListing = this.state

    const tempLogs = tempListing.log.map(log => (
      {type: this.state.type, log: log }

      ))


    console.log("changeLogList", tempLogs)


    this.props.addListing("changeLogList", tempLogs)
    this.setState({
      type: "",
      log: []
    })
    console.log(data)
  }

  public render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "10px" }}>
              <div>Change Log List:</div>
              <Divider />
              <FormControl style={{ width: "100%" }}>
                <div>Type of Change:</div>
                <Select
                  value={this.state.type}
                  onChange={this.handleChange}
                  inputProps={{ name: "type" }}
                >
                  <MenuItem value="" />
                  <MenuItem value="adjustment">Adjustment</MenuItem>
                  <MenuItem value="bug">Bug</MenuItem>
                  <MenuItem value="enhancement">Enhancement</MenuItem>
                  <MenuItem value="misc">Miscellaneous</MenuItem>
                  <MenuItem value="newFeature">New Feature</MenuItem>
                </Select>
                <TextField
                  name="log"
                  label="Log"
                  multiline
                  // value={this.state.log}
                  rows={4}
                  onChange={this.handleChange}
                />
                <RegularButton
                  onClick={this.handleAddListing(this.state)}
                  style={{ backgroundColor: "#2196f3" }}
                >
                  Add Listing
                </RegularButton>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "10px" }}>
              <div>Current Change Log List:</div>

              <div>
                <ChangeLogList changeLogList={this.props.previewData} />
              </div>

              {/* {this.props.previewData.map((change, index) => (
                <div key={index}>
                  <ChangeLogList changeLogList={change} />
                </div>
              ))} */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
