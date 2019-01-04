import * as React from "react"
import ChangeLogItem from "./ChangeLogItem"
import ChangeLogList from "./ChangeLogList"

interface ChangeLogProps {
  featuredChanges?: FeaturedChange[]
  changeLogList?: ChangeListing[]
  roadMapList?: ChangeListing[]
}

export interface FeaturedChange {
  title: string
  description: string
  images: string[]
}

export interface ChangeListing {
  type?: "bug" | "enhancement" | "newFeature" | "adjustment" | "misc" | ""
  log: string
  nestedLog?: ChangeListing[]
}

export default class ChangeLog extends React.Component<ChangeLogProps> {
  public render() {
    return (
      <div>
        <div
          style={{
            fontSize: "3em",
            textAlign: "center",
            padding: "75px 0"
          }}
        >
          Change Log
        </div>

        {this.props.featuredChanges.map((change, index) => (
          <div key={index}>
            <ChangeLogItem ltr={index % 2 ? true : false} data={change} />
          </div>
        ))}

        {this.props.changeLogList && (
          <>
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "2em",
                padding: "50px 0",
                backgroundColor: "black"
              }}
            >
              General Changes:
            </div>
            <ChangeLogList changeLogList={this.props.changeLogList} />
          </>
        )}

        {this.props.roadMapList && (
          <>
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "2em",
                padding: "50px 0",
                backgroundColor: "black"
              }}
            >
              Road Map:
            </div>
            <ChangeLogList changeLogList={this.props.roadMapList} />
          </>
        )}

        <div />
      </div>
    )
  }
}
