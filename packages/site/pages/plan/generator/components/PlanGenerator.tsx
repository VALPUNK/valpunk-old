import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CheckBoxOutlineIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined"
import Head from "next/head"
import * as React from "react"
import { Layout } from "~/components/universal"
import { joinme as data, SubtaskProps, WeekProps, Project } from "../../mock"
import { TextField, Button } from "@material-ui/core"
import { Divider } from "@material-ui/core"
import TitleAreaGen from "./TitleAreaGen";
import DevPeriodGen from "./DevPeriodGen";
import PlanComponent from "../../components/PlanComponent";

interface State {
    id?: string
    projectTitle?: string
    stakeholders?: string[]
    developers?: string[]
    dateOfQuote?: string
    expirationOfQuote?: string
    devPeriod?: string
    weeks?: WeekProps[]
    costPerPeriod?: number
    // tempWeek?: {
    //   title?: string
    //   overview?: string
    //   subtasks?: SubtaskProps[]
    // }
}

export default class PlanGenerator extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      id: "",
      projectTitle: "",
      stakeholders: [],
      developers: [],
      dateOfQuote: "",
      expirationOfQuote: "",
      devPeriod: "",
      costPerPeriod: 0,
      weeks: []
      }
    }


  public handleTitleArea = (data: Project) => (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    this.setState({
      projectTitle: data.projectTitle,
      stakeholders: data.stakeholders,
      developers: data.developers,
      dateOfQuote: data.dateOfQuote,
      expirationOfQuote: data.expirationOfQuote,
      devPeriod: data.devPeriod,
    })

    console.log(this.state)
  }

  public handleDevPeriod = (data: WeekProps) => async (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {

    let temporaryWeek = {
      title: data.title,
      overview: data.overview,
      subtasks: data.subtasks
    }

    // await this.setState({
    //   tempWeek: temporaryWeek
    // })

    let tempWeeksArray = this.state.weeks

    tempWeeksArray.push(temporaryWeek)

    await this.setState({
      weeks: tempWeeksArray
    })

    console.log(this.state)
  }

  public render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "1200px" }}>
          <h1>Plan Generator</h1>

          <TitleAreaGen submit={this.handleTitleArea} />

          <DevPeriodGen submit={this.handleDevPeriod} />

          <Divider />

          <PlanComponent planData={this.state} />
        </div>
      </div>
    )
  }
}