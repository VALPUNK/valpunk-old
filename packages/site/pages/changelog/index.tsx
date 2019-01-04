import * as React from "react"
import { Layout, Meta } from "~/components/universal"
import ChangeLog from "./components/ChangeLog"
import sampleChangeLog from "./mock"

const changeLogData = sampleChangeLog.changeLogData
const changeLogList = sampleChangeLog.changeLogList
const roadMapList = sampleChangeLog.roadMapList

class Index extends React.Component {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          <ChangeLog
            featuredChanges={changeLogData}
            changeLogList={changeLogList}
            roadMapList={roadMapList}
          />
        </Layout>
      </div>
    )
  }
}

export default Index
