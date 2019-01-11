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
  submit: (data: Partial<WeekProps>) => (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => void
}


interface State {
  title?: string
  overview?: string
  subtasks?: SubtaskProps[]
}

export default class DevPeriodGen extends React.Component<Props, State> {
constructor(props: any) {
  super(props)
  this.state = {
    title: "",
    overview: "",
    subtasks: []
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
    let tempStringArray = stringArray.map(subtask => (
      {name: subtask}
    ))
    this.setState({
      [event.target.name]: tempStringArray
    })

    console.log(event.target.name, ": ", event.target.value)
    console.log(this.state)
  }

  public render() {
    return (
      <>
        <Paper>
          <h2>Dev Period Plan</h2>

          <div>
            <TextField label="Title" name="title" onChange={this.handleChange} />
          </div>

          <div>
            <TextField multiline rows={4} label="Subtasks" name="subtasks" onChange={this.handleMultilineChange} />
          </div>

          <div>
            <TextField multiline label="Overview" name="overview" onChange={this.handleChange} />
          </div>

          <Button
            onClick={this.props.submit(this.state)}
            style={{
              backgroundColor: "royalblue",
              color: "white",
              width: "100%"
            }}
          >
            Submit Dev Period
          </Button>
        </Paper>
      </>
    )
  }
}
