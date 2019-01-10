import { Divider, FormControl, Grid, Paper, TextField } from "@material-ui/core"
import { RegularButton } from "@valpunk/core"
import * as React from "react"
// @ts-ignore
import ChangeLogItem from "../../components/ChangeLogItem"

interface Props {
  addListing?: (listing: string, data: any) => void
  previewData?: any[]
}

interface State {
  title?: string
  description?: string
  imageList?: FileList
  images?: string[]
}

export default class FeaturedChangesGen extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      title: "",
      description: "",
      images: []
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

  public handleAddListing = (data: any) => (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    this.props.addListing("featuredChanges", this.state)
    console.log(data)
  }

  public handleFileUploads = (event: any) => {
    let tempFileList = event.target.files
    let realFileList = []

    for (let i = 0; i < tempFileList.length; i++) {
      realFileList.push(tempFileList.item(i).name)
    }

    this.setState({
      imageList: tempFileList,
      images: realFileList
    })
    console.log(event.target.files)
    console.log(realFileList)
  }

  public render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "10px" }}>
              <div>Featured Changes:</div>
              <Divider />
              <FormControl style={{ width: "100%" }}>
                <TextField
                  name="title"
                  label="Title"
                  onChange={this.handleChange}
                />
                <TextField
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  onChange={this.handleChange}
                />
                <div>Upload Pictures</div>
                <input
                  name="images"
                  type="file"
                  multiple
                  required
                  onChange={this.handleFileUploads}
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
              <div>Current Featured Changes:</div>
              {this.props.previewData.map((change, index) => (
                <div key={index}>
                  <ChangeLogItem ltr={index % 2 ? true : false} data={change} />
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
