import React from "react"
import { Layout, Meta } from "~/components/universal"


export default class Index extends React.Component {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          hello
        </Layout>        
      </div>
    )
  }
}
