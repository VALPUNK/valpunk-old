import { Divider } from "@material-ui/core"
import NewFeatureIcon from "@material-ui/icons/AddCircle"
import BugIcon from "@material-ui/icons/BugReport"
import MiscIcon from "@material-ui/icons/CheckCircle"
import DefaultIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import EnhancementIcon from "@material-ui/icons/Star"
import AdjustmentIcon from "@material-ui/icons/SwapVerticalCircle"
import * as React from "react"

interface Props {
  changeLogList: any[]
}

export default class RoadMapList extends React.Component<Props> {
  public bulletType = (type: string) => {
    switch (type) {
      case "bug":
        return <BugIcon style={{ fontSize: "1.5em" }} />
      case "enhancement":
        return <EnhancementIcon style={{ fontSize: "1.5em" }} />
      case "newFeature":
        return <NewFeatureIcon style={{ fontSize: "1.5em" }} />
      case "adjustment":
        return <AdjustmentIcon style={{ fontSize: "1.5em" }} />
      case "misc":
        return <MiscIcon style={{ fontSize: "1.5em" }} />
      default:
        return <DefaultIcon style={{ fontSize: "1.5em" }} />
    }
  }

  public nestedListing = (log: any) => {
    log.nestedLog &&
      log.nestedLog.map((nestedLog: any) => (
        <React.Fragment key={nestedLog.log}>
          <div
            key={nestedLog.log}
            style={{
              display: "flex",
              alignItems: "flex-start",
              fontSize: "1.25em",
              padding: "5px",
              marginLeft: "1em"
            }}
          >
            {this.bulletType(nestedLog.type)}
            {nestedLog.log}
          </div>
          {nestedLog.nestedLog && (
            <>{this.nestedListing(nestedLog.nestedLog)}</>
          )}
        </React.Fragment>
      ))
  }

  public render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "1200px" }}>
            <div
              style={{ textAlign: "center", fontSize: "2em", margin: "50px 0" }}
            >
              Road Map:
            </div>
            <Divider />
            <div style={{ padding: "15px" }}>
              {this.props.changeLogList.map(log => (
                <React.Fragment key={log.log}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      fontSize: "1.25em",
                      padding: "5px"
                    }}
                  >
                    {this.bulletType(log.type)}
                    {log.log}
                  </div>
                  {log.nestedLog && <>{this.nestedListing(log.nestedLog)}</>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
