import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { Project } from "../mock"
import Center from "./Center"
import Spacer from "./Spacer"

interface Props {
  data: Project
}

export default class ProjectTitleArea extends React.Component<Props> {
  public render() {
    // const data = this.props
    return (
      <>
        <Center size={9}>
          <Grid container>
            <Grid item xs container justify="flex-end">
              <span
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#ad1457"
                }}
              >
                Project:
              </span>
            </Grid>
            <Grid item xs>
              <span
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#ad1457",
                  marginLeft: 8
                }}
              >
                {this.props.data.projectTitle}
              </span>
            </Grid>
          </Grid>
        </Center>

        <Spacer />
        <Grid container>
          <Grid item xs />
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span style={{ fontWeight: "bold", fontSize: 26 }}>
                  Stakeholder(s):
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: 26, marginLeft: 8 }}>
                  {this.props.data.stakeholders.join()}
                </span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span style={{ fontWeight: "bold", fontSize: 26 }}>
                  Developer(s):
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: 26, marginLeft: 8 }}>
                  {" "}
                  {this.props.data.developers.join()}
                </span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs container justify="flex-end">
                <span style={{ fontWeight: "bold", fontSize: 26 }}>
                  Date of Quote:
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: 26, marginLeft: 8 }}>
                  {" "}
                  {this.props.data.date}
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs />
        </Grid>
        <div style={{ height: 20 }} />
        <div
          style={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40
          }}
        >
          Estimated Schedule
        </div>
      </>
    )
  }
}


