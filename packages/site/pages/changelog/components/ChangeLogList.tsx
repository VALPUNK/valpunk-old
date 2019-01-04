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

export default class ChangeLogList extends React.Component<Props> {
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

  public render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#474747",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1467646208740-18124b37eb58)",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              backgroundColor: "#041c23",
              boxShadow: "0 0 5px 0 black"
            }}
          >
            <Divider />
            <div style={{ padding: "15px", color: "#e8e8e8" }}>
              {this.props.changeLogList.map(log => (
                <div
                  key={log.log}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontSize: "1.25em",
                    padding: "5px",
                    fontWeight: 50
                  }}
                >
                  {this.bulletType(log.type)}
                  <span style={{width: "1em"}}/>
                  {log.log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
