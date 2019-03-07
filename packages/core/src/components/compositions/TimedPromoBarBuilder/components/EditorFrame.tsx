import { TextField } from "@material-ui/core"
import { ApolloClient } from "apollo-boost"
import gql from "graphql-tag"
import React from "react"
import { withApollo } from "react-apollo"
import { Value } from "slate"
import { Editor } from "slate-react"
import {
  BusinessType,
  PromoStatusType
} from "../../../../../__generated__/globalTypes"
import RichTextEditor, { SAVE_CONTENT } from "../../../special/RichTextEditor"
import {
  createOrConnectContent,
  createOrConnectContentVariables
} from "../../../special/RichTextEditor/__generated__/createOrConnectContent"
import { Button } from "./components"
import DestructuredEditor from "../../../special/DestructuredEditor"
import { initialValue } from "../../../special/RichTextEditor/value"

import { GET_PROMOTION } from "~/components/compositions/TimedPromoBar"
import {
  getPromotionDisplay,
  getPromotionDisplayVariables
} from "../../TimedPromoBar/__generated__/getPromotionDisplay"
import {
  savePromotion,
  savePromotionVariables
} from "./__generated__/savePromotion"

interface RichTextEditorProps {
  slug?: string
  client?: ApolloClient<any>
  businessType?: BusinessType
  uriEndpoint?: string
  contentId?: string
  contentSlug?: string
  value?: Value

  startDate?: Date
  endDate?: Date
  status?: PromoStatusType
}

interface State {
  value?: Value
  slug?: string
  promoId?: string
  contentId?: string
  // contentSlug?: string
  submitting?: boolean

  status?: PromoStatusType
  startDate?: Date
  endDate?: Date
}

class EditorFrame extends React.Component<RichTextEditorProps, State> {
  public editor = React.createRef<Editor>()

  constructor(props: any) {
    super(props)
    this.state = {
      value: Value.fromJSON(initialValue),
      slug: "",
      promoId: "",
      contentId: "",
      submitting: false,
      // contentSlug: "",
      status: PromoStatusType.ENABLED
      // startDate: new Date(),
      // endDate: new Date()
    }
  }

  public retrievePromotion = async (promoSlug: string) => {
    console.log("Getting Promo!")
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
      id,
      contentId,
      valueContent,
      startDate,
      endDate,
      status
    } = result.data.getPromotion

    // console.log("ContentId: ", contentId)
    // console.log("Content itself: ", valueContent)

    const value = this.convertValue(valueContent)

    await this.setState({
      promoId: id,
      contentId,
      slug: this.props.slug,
      startDate,
      endDate,
      status,
      value
    })

    console.log("Promo State: ", this.state)
  }

  public convertValue = (stringContent: string) => {
    const valueContent = Value.fromJSON(JSON.parse(stringContent))
    return valueContent
  }

  public componentDidMount = () => {
    console.log("Editor Frame Props: ", this.props.value)

    if (this.props.slug) {
      this.retrievePromotion(this.props.slug)
    }

    console.log("State: ", this.state)
  }

  public render() {
    console.log("Editor Frame: ", this.state)
    return (
      <div>
        <div>
          <TextField
            name="slug"
            label="Slug"
            value={this.state.slug}
            onChange={this.onChangeField}
          />
        </div>

        <div style={{ margin: "30px 0px" }}>
          <DestructuredEditor
            value={this.state.value}
            onChange={this.onChange}
          />
        </div>

        <div
          style={{
            paddingTop: "20px"
          }}
        >
          <Button
            style={{
              backgroundColor: this.state.submitting ? "#ddd" : "#2196f3",
              color: "white",
              padding: "10px",
              borderRadius: "4px"
            }}
            onClick={e => {
              e.preventDefault()
              this.savePromotionInfo()
            }}
          >
            Save
          </Button>
        </div>
      </div>
    )
  }

  public onChange = (value: Value) => {
    this.setState({
      value
    })
  }

  public onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  public savePromotionInfo = async () => {
    await this.setState({
      submitting: true
    })

    await this.onClickSave()
    await this.savePromo()

    await this.setState({
      submitting: false
    })
  }

  public onClickSave = async () => {
    const saveContent = JSON.stringify(this.state.value.toJSON())
    const contentSlug = this.state.slug
    const contentId = this.state.contentId
    const uriEndpoint = this.props.uriEndpoint
      ? this.props.uriEndpoint
      : "https://valpunk-server.now.sh/"
    const result = await this.props.client.mutate<
      createOrConnectContent,
      createOrConnectContentVariables
    >({
      mutation: SAVE_CONTENT,
      variables: {
        slug: contentSlug,
        content: saveContent,
        contentId,
        businessType: this.props.businessType
      },
      context: {
        uri: uriEndpoint
      }
    })

    // console.log("Just saved all this stuff: ", result)

    this.setState({
      contentId: result.data.createOrConnectContent.id
    })

    console.log("ContentId: ", result.data.createOrConnectContent.id)

    console.log("Content Saved.")
    console.log("CurrentContentState: ", this.state)
  }

  public savePromo = async () => {
    const uriEndpoint = this.props.uriEndpoint
      ? this.props.uriEndpoint
      : "https://valpunk-server.now.sh/"

    const promoId = this.state.promoId
    const promoSlug = this.state.slug
    const contentSlug = this.state.slug
    const startDate = this.state.startDate
    const endDate = this.state.endDate

    const result = await this.props.client.mutate<
      savePromotion,
      savePromotionVariables
    >({
      mutation: SAVE_PROMOTION,
      variables: {
        promoId,
        promoSlug,
        businessType: this.props.businessType,
        contentSlug,
        startDate,
        endDate
      },
      context: {
        uri: uriEndpoint
      }
    })

    this.setState({
      promoId: result.data.createOrConnectPromotion.id
    })

    console.log("Promo Id: ", result.data.createOrConnectPromotion.id)

    console.log("Promotion Saved.")
    console.log("CurrentPromoState: ", this.state)
  }
}

export const SAVE_PROMOTION = gql`
  mutation savePromotion(
    $promoId: String
    $promoSlug: String!
    $businessType: BusinessType!
    $contentSlug: String!
    $startDate: DateTime
    $endDate: DateTime
    $status: PromoStatusType
  ) {
    createOrConnectPromotion(
      promoId: $promoId
      promoSlug: $promoSlug
      businessType: $businessType
      contentSlug: $contentSlug
      startDate: $startDate
      endDate: $endDate
      status: $status
    ) {
      id
      promoSlug
      startDate
      endDate
      status
    }
  }
`

export default withApollo(EditorFrame)
