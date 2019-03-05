import * as React from "react"
import { SimpleContentViewer } from "@valpunk/core"
import { PromoStatusType, BusinessType } from '../../../../../__generated__/globalTypes';

interface Props {
  startDate?: Date
  endDate?: Date
  status?: PromoStatusType

  businessType?: BusinessType
  uriEndpoint?: string
  contentId?: string

  backgroundColor?: string
  textColor?: string

  active: boolean
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
          {console.log("ContentId in Viewer: ", this.props.contentId)}
            <SimpleContentViewer
              businessType={this.props.businessType}
              // contentId="cjsv2vsok003d0816dp7d6mks"
              contentId={this.props.contentId}
              uriEndpoint={this.props.uriEndpoint}
            />
          </div>
        )}
      </>
    )
  }
}

export default PromoBar
