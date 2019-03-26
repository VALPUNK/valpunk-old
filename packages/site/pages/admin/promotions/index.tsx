import * as React from "react"
import { Dashboard } from "~/components/templates"

export default class Promotions extends React.Component {
  public static Layout: React.ReactNode = Dashboard
  public render() {
    return (
      <div>
        123<div>123</div>
      </div>
      // <div>
      //   <div>Active Promotions</div>
      //   <div
      //     style={{
      //       minWidth: 500,
      //       minHeight: 800,
      //       color: "white",
      //       borderRadius: 5
      //     }}
      //   >
      //     123
      //   </div>
      // </div>
    )
  }
}
