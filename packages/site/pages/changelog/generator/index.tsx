import * as React from "react"
import { Content } from "~/components/templates"
import { Layout, Meta } from "~/components/universal"
import ChangeLogGenerator from "./components/ChangeLogGenerator"
import { Head } from "next/document";

class Index extends React.Component {
  public render() {
    return (
      <div>
        {/* <Meta /> */}
        <Layout>
          <div style={{maxWidth: "1200px", margin: "auto" }}>
            <ChangeLogGenerator />
          </div>
        </Layout>
      </div>
    )
  }
}

export default Index
