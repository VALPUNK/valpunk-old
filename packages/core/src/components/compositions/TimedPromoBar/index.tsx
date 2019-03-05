import * as React from "react"
import { SimpleContentViewer } from "@valpunk/core"
import {
  BusinessType,
  PromoStatusType
} from "../../../../__generated__/globalTypes"
import gql from "graphql-tag"
import { ApolloClient } from "apollo-boost"
import { withApollo } from "react-apollo"
import {
  getPromotionDisplay,
  getPromotionDisplayVariables
} from "./__generated__/getPromotionDisplay"
import PromoBar from "./components/PromoBar"

interface Props {
  client: ApolloClient<any>
  uriEndpoint?: string

  promoSlug?: string
  businessType?: BusinessType

  // startDate?: Date
  // endDate?: Date
  // contentId?: string
  status?: PromoStatusType

  backgroundColor?: string
  textColor?: string
}

interface State {
  contentId?: string
  startDate?: Date
  endDate?: Date
  status?: PromoStatusType
  active?: boolean
}

class TimedPromoBar extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      contentId: "",
      active: false
    }
  }

  public checkStatus = (status: PromoStatusType) => {
    switch (status) {
      case "ENABLED":
        return this.setState({
          active: true
        })
      case "ACTIVE":
        return this.setState({
          active: true
        })
      case "DISABLED":
        return this.setState({
          active: false
        })
      case "SCHEDULED":
        return this.setState({
          active: false
        })
      case "EXPIRED":
        return this.setState({
          active: false
        })
      default:
        return this.setState({
          active: false
        })
    }
  }

  public checkActive = () => {
    const currentDate = new Date()

    if (this.state.startDate) {
      if (currentDate < this.state.startDate) {
        console.log("Before Start date")
        return this.setState({
          active: false
        })
      }
    }

    if (this.state.endDate) {
      if (currentDate > this.state.endDate) {
        console.log("after End date")
        return this.setState({
          active: false
        })
      }
    }

    console.log("between start and end dates")
    return this.setState({
      active: true
    })
  }

  public retrievePromotion = async (promoSlug: string) => {
    const uriEndpoint = this.props.uriEndpoint
      ? this.props.uriEndpoint
      : "https://valpunk-server.now.sh/"
    const result = await this.props.client.query<
      getPromotionDisplay,
      getPromotionDisplayVariables
    >({
      query: GET_PROMOTION,
      variables: {
        promoSlug
      },
      context: {
        uri: uriEndpoint
      }
    })

    const { contentId, contentSlug, startDate, endDate, status } = result.data.getPromotion

    console.log("ContentId: ", contentId)
    console.log("ContentSlug: ", contentSlug)
    await this.setState({
      contentId,
      startDate,
      endDate,
      status
    })
  }

  public componentDidMount() {
    this.retrievePromotion(this.props.promoSlug)
    if (this.props.status) {
      this.checkStatus(this.props.status)
    } else if (this.state.status) {
      this.checkStatus(this.state.status)
    }
  }

  public render() {
    console.log("Active? ", this.state.active)

    return (
      <>
        <PromoBar
          active={this.state.active}
          status={this.state.status}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          contentId={this.state.contentId}
          businessType={this.props.businessType}
          backgroundColor={this.props.backgroundColor}
          textColor={this.props.textColor}
          uriEndpoint={this.props.uriEndpoint}
        />
      </>
    )
  }
}

const GET_PROMOTION = gql`
  query getPromotionDisplay($promoSlug: String!) {
    getPromotion(promoSlug: $promoSlug) {
      id
      slug
      startDate
      endDate
      contentId
      contentSlug
      status
    }
  }
`

export default withApollo(TimedPromoBar)
