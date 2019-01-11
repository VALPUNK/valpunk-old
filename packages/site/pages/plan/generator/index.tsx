import * as React from "react"
import { Content } from "~/components/templates"
import { Layout, Meta } from "~/components/universal"
import PlanGenerator from "./components/PlanGenerator"

class Index extends React.Component {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          <div style={{maxWidth: "1200px", margin: "auto" }}>
            <PlanGenerator />
          </div>
        </Layout>
      </div>
    )
  }
}

export default Index