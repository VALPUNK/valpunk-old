import { ApolloClient } from "apollo-boost"
import gql from "graphql-tag"
import * as React from "react"
import { withApollo } from "react-apollo"
import { Value } from "slate"
import { initialValue } from "~/components/special/DestructuredEditor/value"
import {
  BusinessType,
  PromoStatusType
} from "../../../../__generated__/globalTypes"
import PromoBar from "./components/PromoBar"
import {
  getPromotionDisplay,
  getPromotionDisplayVariables
} from "./__generated__/getPromotionDisplay"

interface Props {
  client: ApolloClient<any>
  uriEndpoint?: string

  promoSlug?: string
  businessType?: BusinessType
  status?: PromoStatusType

  backgroundColor?: string
  textColor?: string
}

interface State {
  startDate?: Date
  endDate?: Date
  status?: PromoStatusType
  active?: boolean
  content?: Value
}

class TimedPromoBar extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      active: true,
      content: Value.fromJSON(initialValue)
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
    const startDate = new Date(this.state.startDate)
    const endDate = new Date(this.state.endDate)

    console.log("Checking Time... Current Date: ", currentDate)
    console.log("Start Date: ", startDate)
    console.log("End Date: ", endDate)
    if (this.state.startDate) {
      if (currentDate < startDate) {
        console.log("Before Start date")
        return this.setState({
          active: false
        })
      }
    }

    if (this.state.endDate) {
      if (currentDate > endDate) {
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

    const {
      valueContent,
      startDate,
      endDate,
      status
    } = result.data.getPromotion

    // console.log("ContentId: ", contentId)
    // console.log("Content itself: ", valueContent)

    const content = this.convertValue(valueContent)

    console.log("Retrieved Promo: ", result.data.getPromotion)
    await this.setState({
      startDate,
      endDate,
      status,
      content
    })
  }

  public async componentDidMount() {
    await this.retrievePromotion(this.props.promoSlug)
    await this.checkActive()
    if (this.props.status) {
      this.checkStatus(this.props.status)
    } else if (this.state.status) {
      this.checkStatus(this.state.status)
    }
  }

  public convertValue = (stringContent: string) => {
    const valueContent = Value.fromJSON(JSON.parse(stringContent))
    return valueContent
  }

  public render() {
    // console.log("Active? ", this.state.active)

    return (
      <>
        <PromoBar
          active={this.state.active}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          valueContent={this.state.content}
          backgroundColor={this.props.backgroundColor}
          textColor={this.props.textColor}
        />
      </>
    )
  }
}

export const GET_PROMOTION = gql`
  query getPromotionDisplay($promoSlug: String!) {
    getPromotion(promoSlug: $promoSlug) {
      id
      contentId
      promoSlug
      startDate
      endDate
      valueContent
      status
    }
  }
`

export default withApollo(TimedPromoBar)
