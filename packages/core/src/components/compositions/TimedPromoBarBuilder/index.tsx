import { ApolloClient } from "apollo-boost"
import * as React from "react"
import { withApollo } from "react-apollo"
import { Value } from "slate"
import {
  BusinessType,
  PromoStatusType
} from "../../../../__generated__/globalTypes"
import EditorFrame from "./components/EditorFrame"

interface Props {
  client: ApolloClient<any>
  uriEndpoint?: string

  promoSlug?: string
  businessType?: BusinessType
  // status?: PromoStatusType
}

interface State {

}

class TimedPromoBarBuilder extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <>
        <EditorFrame
          businessType={this.props.businessType}
          uriEndpoint={this.props.uriEndpoint}
          slug={this.props.promoSlug}
        />
      </>
    )
  }
}

export default withApollo(TimedPromoBarBuilder)
