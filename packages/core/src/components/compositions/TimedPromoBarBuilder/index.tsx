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
import { GET_PROMOTION } from '../TimedPromoBar/index';
import { SAVE_CONTENT } from '~/components/special/RichTextEditor';
import { createOrConnectContent, createOrConnectContentVariables } from '~/components/special/RichTextEditor/__generated__/createOrConnectContent';
import EditorFrame from './components/EditorFrame';
// import EditorFrame from '../../special/DestructuredEditor/EditorFrame';

interface Props {
  client: ApolloClient<any>
  uriEndpoint?: string

  promoSlug?: string
  businessType?: BusinessType
  status?: PromoStatusType
}

interface State {
  startDate?: Date
  endDate?: Date
  status?: PromoStatusType
  content?: Value

  slug?: string
  contentSlug?: string
}

class TimedPromoBarBuilder extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    // this.state = {
    //   content: Value.fromJSON(initialValue),
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   status: PromoStatusType.ENABLED,
    //   slug: "",
    //   contentSlug: ""
    // }
  }

  // public retrievePromotion = async (promoSlug: string) => {
  //   const uriEndpoint = this.props.uriEndpoint
  //     ? this.props.uriEndpoint
  //     : "https://valpunk-server.now.sh/"
  //   const result = await this.props.client.query<
  //     getPromotionDisplay,
  //     getPromotionDisplayVariables
  //   >({
  //     query: GET_PROMOTION,
  //     variables: {
  //       promoSlug
  //     },
  //     context: {
  //       uri: uriEndpoint
  //     }
  //   })

  //   const {
  //     valueContent,
  //     startDate,
  //     endDate,
  //     status,
  //     contentSlug
  //   } = result.data.getPromotion

  //   // console.log("ContentId: ", contentId)
  //   // console.log("Content itself: ", valueContent)

  //   const content = this.convertValue(valueContent)

  //   await this.setState({
  //     startDate,
  //     endDate,
  //     status,
  //     content,
  //     contentSlug
  //   })
  // }

  public componentDidMount() {
    // this.props.promoSlug && this.setState({slug: this.props.promoSlug})
    // this.retrievePromotion(this.props.promoSlug)
    console.log("I mounted!")
  }

  // public convertValue = (stringContent: string) => {
  //   const valueContent = Value.fromJSON(JSON.parse(stringContent))
  //   return valueContent
  // }


  public render() {
    // console.log("Active? ", this.state.active)

    // console.log("Error!")
    // console.log("The state of everything: ", this.state)
    return (
      <>

      <EditorFrame
businessType={this.props.businessType}
uriEndpoint={this.props.uriEndpoint}
contentId="3"
        // value={this.state.content}
        // businessType={this.props.businessType}
        // slug={this.state.slug}
        // startDate={this.state.startDate}
        // endDate={this.state.endDate}
        // contentSlug={this.state.contentSlug}
        // status={this.state.status}


        // save={this.savePromotionInfo}
        // onChange={this.onChange}
        // onChangeField={this.onChangeField}
        // submitting={this.state.submitting}
      />
      </>
    )
  }
}




export default withApollo(TimedPromoBarBuilder)
