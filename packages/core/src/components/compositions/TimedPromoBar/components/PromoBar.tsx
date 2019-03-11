import * as React from "react"
import { Value } from "slate"
import { DestructuredViewer } from "../../../../components/special"

interface Props {
  startDate?: Date
  endDate?: Date

  backgroundColor?: string
  textColor?: string

  active: boolean
  valueContent?: Value
}

class PromoBar extends React.PureComponent<Props> {
  public render() {
    return (
      <>
        {this.props.active && (
          <div
            style={{
              width: "100%",
              backgroundColor: this.props.backgroundColor,
              color: this.props.textColor,
              textAlign: "center",
              padding: "0.5em"
            }}
          >
            <DestructuredViewer value={this.props.valueContent} />
          </div>
        )}
      </>
    )
  }
}

export default PromoBar
