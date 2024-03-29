import { Divider } from "@material-ui/core"
import NewFeatureIcon from "@material-ui/icons/AddCircle"
import BugIcon from "@material-ui/icons/BugReport"
import DefaultIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import MiscIcon from "@material-ui/icons/CheckCircle"
import EnhancementIcon from "@material-ui/icons/Star"
import AdjustmentIcon from "@material-ui/icons/SwapVerticalCircle"
import * as React from "react"
import { SectionListing } from "./ChangeLog"

interface Props {
  changeLogList: SectionListing[]
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

  public nestedListing = (log: any[]) => {
    return log.map((nestedLog: any, index: number) => (
      <React.Fragment key={index}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontSize: "1.25em",
            padding: "5px",
            marginLeft: "2em",
            fontWeight: 50,
            color: "#999"

          }}
        >
          {this.bulletType(nestedLog.type)}
          <span style={{ width: "1em" }} />
          {nestedLog.log}
        </div>
        {nestedLog.nestedLog && this.nestedListing(nestedLog.nestedLog)}
      </React.Fragment>
    ))
  }

  public render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#282828",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(40,40,40, 0.3)),
              // url(https://images.unsplash.com/photo-1467646208740-18124b37eb58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)
              `,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              backgroundColor: "#041c23",
              boxShadow: "0 0 5px 0 black",
              padding: "10px 50px 0 50px"
            }}
          >
            <div style={{ padding: "15px", color: "#e8e8e8" }}>
              {this.props.changeLogList.map((section, index) => (
                <div key={index} style={{margin: "10px 0 50px 0"}}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      fontSize: "1.5em",
                      padding: "5px",
                      fontWeight: 500,
                      color: "white",
                      paddingBottom: "20px"
                      // marginTop: 10
                    }}
                  >
                    {section.title}
                  </div>
                  {section.listings.map((log, index) => (
                    <React.Fragment key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          fontSize: "1.25em",
                          padding: "5px",
                          fontWeight: 50,
                          color: "#999"
                        }}
                      >
                        {this.bulletType(log.type)}
                        <span style={{ width: "1em" }} />
                        {log.log}
                      </div>
                      {log.nestedLog && this.nestedListing(log.nestedLog)}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
