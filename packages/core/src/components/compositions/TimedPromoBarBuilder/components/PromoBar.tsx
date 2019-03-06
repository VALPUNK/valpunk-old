import * as React from "react"
import { Value } from "slate"
import { DestructuredViewer } from "~/components/special"

interface Props {
  startDate?: Date
  endDate?: Date

  backgroundColor?: string
  textColor?: string

  valueContent?: Value
}

class PromoBar extends React.PureComponent<Props> {
  public render() {
    return (
      <>

            <DestructuredViewer value={this.props.valueContent} />

        )}
      </>
    )
  }
}

export default PromoBar
