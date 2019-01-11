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
import { RegularButton } from "@valpunk/core";
import { ChangeListing } from "../../components/ChangeLog"
import ChangeLogList from "../../components/ChangeLogList";

interface Props {
  addListing?: (listing: string, data: any) => void
  previewData?: any[]
}

interface State {
  type?: string
  log?: string
  nestedLog?: ChangeListing[]
}

export default class RoadMapListGen extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state ={
      type: "",
      log: "",
    }
  }

    public handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      this.setState({
        [event.target.name]: event.target.value
      })

      console.log(event.target.name,": ", event.target.value)
    }

    public handleAddListing = (data: any) => (_event: React.MouseEvent<HTMLButtonElement>) => {
      this.props.addListing("roadMapList", this.state)
      console.log(data)
    }

  public render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "10px" }}>
              <div>Road Map List:</div>
              <Divider/>
              <FormControl style={{width: "100%"}}>
                <div>Type of Change:</div>
                <Select
                value={this.state.type}
                onChange={this.handleChange}
                inputProps={{name: "type"}}
                >
                  <MenuItem value="" />
                  <MenuItem value="adjustment">Adjustment</MenuItem>
                  <MenuItem value="bug">Bug</MenuItem>
                  <MenuItem value="enhancement">Enhancement</MenuItem>
                  <MenuItem value="misc">Miscellaneous</MenuItem>
                  <MenuItem value="newFeature">New Feature</MenuItem>
                </Select>
                <TextField name="log" label="Log" multiline rows={4} onChange={this.handleChange} />
                <RegularButton onClick={this.handleAddListing(this.state)} style={{backgroundColor: "#2196f3"}}>Add Listing</RegularButton>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "10px" }}>
              <div>Current Change Log List:</div>
              <div>
                <ChangeLogList changeLogList={this.props.previewData} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
