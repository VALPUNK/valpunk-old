import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import Head from "next/head"
import * as React from "react"
import { Layout } from "~/components/universal"
import { joinme as data, SubtaskProps, WeekProps, Project } from "../../mock"
import { TextField, Button } from "@material-ui/core"
import { Divider } from "@material-ui/core"


interface Props {
  submit: (data: Partial<Project>) => (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => void
}

interface State {
  projectTitle?: string
  stakeholders?: string[]
  developers?: string[]
  dateOfQuote?: string
  expirationOfQuote?: string
  devPeriod?: string
  costPerPeriod?: number
}

export default class TitleAreaGen extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      projectTitle: "",
      stakeholders: [],
      developers: [],
      dateOfQuote: "",
      expirationOfQuote: "",
      costPerPeriod: 0,
      devPeriod: "",
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
    let stringArray = event.target.value.split('\n')
    this.setState({
      [event.target.name]: stringArray
    })

    console.log(event.target.name, ": ", event.target.value)
  }

  public render() {
    return (
      <>
        <Paper>
          <h2>Title Area</h2>
          <div>
            <TextField label="Project Title" name="projectTitle" onChange={this.handleChange} />
          </div>
          <div>
            <TextField multiline label="Stakeholders" name="stakeholders" onChange={this.handleMultilineChange} />
          </div>
          <div>
            <TextField multiline label="Developers" name="developers" onChange={this.handleMultilineChange} />
          </div>
          <div>
            <TextField label="Date of Quote" name="dateOfQuote" onChange={this.handleChange} />
          </div>
          <div>
            <TextField label="Expiration of Quote" name="expirationOfQuote" onChange={this.handleChange} />
          </div>
          <div>
            <TextField label="Development Period" name="devPeriod" onChange={this.handleChange} />
          </div>
          <div>
            <TextField label="Cost Per Period" name="costPerPeriod" type="number" onChange={this.handleChange} />
          </div>
          <Button
            onClick={this.props.submit(this.state)}
            style={{
              backgroundColor: "royalblue",
              color: "white",
              width: "100%"
            }}
          >
            Save Title Area
          </Button>
        </Paper>
      </>
    )
  }
}
