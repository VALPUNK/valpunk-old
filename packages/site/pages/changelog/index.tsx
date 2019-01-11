import * as React from "react"
import { Layout, Meta } from "~/components/universal"
import ChangeLog from "./components/ChangeLog"
import sampleChangeLog from "./mock"
import Head from "next/head";

const changeLogData = sampleChangeLog.changeLogData
const changeLogList = sampleChangeLog.changeLogList
const roadMapList = sampleChangeLog.roadMapList

class Index extends React.Component {
  public render() {
    return (
      <div>
        {/* <Meta /> */}
        <div>
          {/* <Head> */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>
          {`
            body {
              margin: 0;
              font-family: "Roboto", sans-serif;
              // font-family: "Kanit", sans-serif;
            }
          `}
        </style>
      </div>
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
