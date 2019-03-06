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
import {
  savePromotion,
  savePromotionVariables
} from "../__generated__/savePromotion"
import { SimpleContentEditor } from '~/components/special';

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
  contentId?: string
  contentSlug?: string
  submitting?: boolean

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
      contentId: "",
      submitting: false,
      contentSlug: "",
      startDate: new Date(),
      endDate: new Date(),
    }
  }

  public componentDidMount = () => {
    // console.log("Value: ", this.props.value)
    // this.props.value && this.setState({ value: this.props.value })
    // this.props.slug && this.setState({ slug: this.props.slug })
    // this.props.contentSlug && this.setState({ contentSlug: this.props.contentSlug })
    // this.props.startDate && this.setState({ startDate: this.props.startDate })
    // this.props.endDate && this.setState({ startDate: this.props.endDate })

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

  public savePromo = async () => {
    const uriEndpoint = this.props.uriEndpoint
      ? this.props.uriEndpoint
      : "https://valpunk-server.now.sh/"

    const result = await this.props.client.mutate<
      savePromotion,
      savePromotionVariables
    >({
      mutation: SAVE_PROMOTION,
      variables: {
        promoSlug: this.state.slug,
        businessType: this.props.businessType,
        contentSlug: this.state.contentSlug,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      },
      context: {
        uri: uriEndpoint
      }
    })
  }

  public onChange = (value: Value) => {
    this.setState({
      value
    })
  }

  public onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  public onClickSave = async () => {
    // console.log("Submitting...")

    const saveContent = JSON.stringify(this.state.value.toJSON())
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
        slug: this.state.slug,
        content: saveContent,
        contentId: contentId,
        businessType: this.props.businessType
      },
      context: {
        uri: uriEndpoint
      }
    })

    // console.log("Just saved all this stuff: ", result)

    this.props.contentId
      ? {}
      : this.setState({
          contentId: result.data.createOrConnectContent.id
        })

    await this.setState({
      submitting: false
    })

    console.log("Content Saved.")
  }
}

export const SAVE_PROMOTION = gql`
  mutation savePromotion(
    $promoSlug: String!
    $businessType: BusinessType!
    $contentSlug: String!
    $startDate: DateTime
    $endDate: DateTime
    $status: PromoStatusType
  ) {
    createOrConnectPromotion(
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
