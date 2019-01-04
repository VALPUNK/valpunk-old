import * as React from "react"
import { Layout, Meta } from "~/components/universal"
import ChangeLogItem from "./components/ChangeLogItem"
import { Divider } from "@material-ui/core"
import ChangeLogList from "./components/ChangeLogList"
import RoadMapList from "./components/RoadMapList"

const changeLogSample = {
  title: "Epic Changes are ahead",
  description:
    "We changed the total theme of everything. We made it look more like Material Ui and everything is now an amazing blue rather than gray. Everything is awesome.",
  images: [
    "https://loremflickr.com/600/300/clouds",
    "https://loremflickr.com/600/300/fire,flame/all",
    "https://loremflickr.com/300/600/ocean",
    "https://loremflickr.com/600/300/mountain"
  ]
}

const changeLogData = [
  changeLogSample,
  changeLogSample,
  changeLogSample,
  changeLogSample
]

const changeLogListItem: ChangeLogListProps = {
  type: "bug",
  log: "Bug Fix: Replaced glitchy carousel with a newer, more stable version."
}

const enhancement: ChangeLogListProps = {
  type: "enhancement",
  log: "Enhancement: Shined up an old component and made it look new."
}

const newFeature: ChangeLogListProps = {
  type: "newFeature",
  log: "New Feature: Created an all new interactive Rich Text Editor."
}

const adjustment: ChangeLogListProps = {
  type: "adjustment",
  log: "Adjustment: Refactored the whole system to use React Hooks."
}

const misc: ChangeLogListProps = {
  type: "misc",
  log: "Misc: Changed some text in the FAQs."
}

const randomDefault: ChangeLogListProps ={
  log: "This is everything we need to do."
}

const changeLogList = [
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  enhancement,
  enhancement,
  enhancement,
  enhancement,
  newFeature,
  newFeature,
  newFeature,
  adjustment,
  adjustment,
  adjustment,
  adjustment,
  adjustment,
  adjustment,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
]

export interface ChangeLogListProps {
  type?: "bug" | "enhancement" | "newFeature" | "adjustment" | "misc" | ""
  log: string
}

interface State {
  direction: boolean
}

export default class ChangeLog extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      direction: true
    }
  }

  public render() {
    return (
      <div>
        <Meta />
        <Layout>
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

            {changeLogData.map((change, index) => (
              <div key={index}>
                <ChangeLogItem ltr={index % 2 ? true : false} data={change} />
              </div>
            ))}

            {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
            {/* <div style={{ maxWidth: "1200px" }}> */}

            <div
              style={{ color: "white", textAlign: "center", fontSize: "2em", padding: "50px 0", backgroundColor: "black" }}
            >
              General Changes:
            </div>

            <ChangeLogList changeLogList={changeLogList} />


            <div
              style={{ color: "white", textAlign: "center", fontSize: "2em", padding: "50px 0", backgroundColor: "black" }}
            >
              Road Map:
            </div>

            <ChangeLogList changeLogList={changeLogList} />

            {/* </div> */}
            {/* </div> */}
            <div />
          </div>
        </Layout>
      </div>
    )
  }
}
