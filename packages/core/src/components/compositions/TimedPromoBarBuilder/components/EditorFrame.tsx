import {
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core"
import { ApolloClient, gql } from "apollo-boost"
import React from "react"
import { withApollo } from "react-apollo"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Value } from "slate"
import { Editor } from "slate-react"
import { GET_PROMOTION } from "~/components/compositions/TimedPromoBar"
import {
  BusinessType,
  PromoStatusType
} from "../../../../../__generated__/globalTypes"
import DestructuredEditor from "../../../special/DestructuredEditor"
import { SAVE_CONTENT } from "../../../special/RichTextEditor"
import { initialValue } from "../../../special/RichTextEditor/value"
import {
  createOrConnectContent,
  createOrConnectContentVariables
} from "../../../special/RichTextEditor/__generated__/createOrConnectContent"
import {
  getPromotionDisplay,
  getPromotionDisplayVariables
} from "../../TimedPromoBar/__generated__/getPromotionDisplay"
import { Button } from "./components"
import {
  savePromotion,
  savePromotionVariables
} from "./__generated__/savePromotion"

interface RichTextEditorProps {
  slug?: string
  client?: ApolloClient<any>
  businessType?: BusinessType
  uriEndpoint?: string
}

interface State {
  value?: Value
  slug?: string
  promoId?: string
  contentId?: string
  submitting?: boolean

  status?: string
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
      status: "ENABLED"
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

    const newStatus = this.statusToString(status)

    // console.log("ContentId: ", contentId)
    // console.log("Content itself: ", valueContent)

    const value = this.convertValue(valueContent)

    await this.setState({
      promoId: id,
      contentId,
      slug: this.props.slug,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: newStatus,
      value
    })

    console.log("Promo State: ", this.state)
  }

  public convertValue = (stringContent: string) => {
    const valueContent = Value.fromJSON(JSON.parse(stringContent))
    return valueContent
  }

  public stringToStatus = (status: string) => {
    switch (status) {
      case "ENABLED":
        return PromoStatusType.ENABLED
      case "DISABLED":
        return PromoStatusType.DISABLED
      default:
        const checkedStatus = this.checkDate()
        return checkedStatus
    }
  }

  public statusToString = (status: PromoStatusType) => {
    switch (status) {
      case "ENABLED":
        return "ENABLED"
      case "DISABLED":
        return "DISABLED"
      default:
        return "AUTO"
    }
  }

  public checkDate = () => {
    if (this.state.startDate || this.state.endDate) {
      const currentDate = new Date()
      const startDate = new Date(this.state.startDate)
      const endDate = new Date(this.state.endDate)

      console.log("Current Date: ", currentDate)
      console.log("Start Date: ", startDate)
      console.log("End Date: ", endDate)

      if (this.state.startDate) {
        if (currentDate < startDate) {
          // console.log("Before Start date")
          return PromoStatusType.SCHEDULED
        }
      }

      if (this.state.endDate) {
        if (currentDate > endDate) {
          // console.log("after End date")
          return PromoStatusType.EXPIRED
        }
      }

      // console.log("between start and end dates")
      return PromoStatusType.ACTIVE
    } else {
      return PromoStatusType.ENABLED
    }
  }

  public componentDidMount = () => {
    if (this.props.slug) {
      this.retrievePromotion(this.props.slug)
    }

    // console.log("State: ", this.state)
  }

  public render() {
    // console.log("Editor Frame: ", this.state)

    // const startDate = new Date(this.state.startDate)
    return (
      <div>
        <div>
          <TextField
            name="slug"
            label="Slug"
            defaultValue={this.props.slug}
            onChange={this.onChangeField}
          />
        </div>

        <div style={{ marginTop: "1em" }}>
          <div>
            <InputLabel>Status</InputLabel>
          </div>
          <div>
            <Select
              name="status"
              value={this.state.status}
              onChange={this.onChangeStatus}
              input={<Input name="status" id="satus-selector" />}
            >
              <MenuItem value="AUTO">SCHEDULE</MenuItem>
              <MenuItem value="ENABLED">ENABLED</MenuItem>
              <MenuItem value="DISABLED">DISABLED</MenuItem>
            </Select>
          </div>
        </div>

        {this.state.status === "AUTO" && (
          <div style={{ display: "flex", marginTop: "1em" }}>
            <div>
              <div>
                <InputLabel>Start Date</InputLabel>
              </div>
              <div>
                <DatePicker
                  name="startDate"
                  showTimeSelect
                  // timeIntervals={1}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  selected={this.state.startDate}
                  onChange={this.onChangeDate("startDate")}
                />
              </div>
            </div>
            <div>
              <div>
                <InputLabel>End Date</InputLabel>
              </div>
              <div>
                <DatePicker
                  name="endDate"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  selected={this.state.endDate}
                  onChange={this.onChangeDate("endDate")}
                />
              </div>
            </div>
          </div>
        )}

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

  public onChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  public onChangeDate = (name: string) => (date: Date) => {
    this.setState({ [name]: date })
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

    // console.log("ContentId: ", result.data.createOrConnectContent.id)

    console.log("Content Saved.")
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
    const status = this.state.status

    const saveStatus = await this.stringToStatus(status)

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
        endDate,
        status: saveStatus
      },
      context: {
        uri: uriEndpoint
      }
    })

    this.setState({
      promoId: result.data.createOrConnectPromotion.id
    })

    // console.log("Promo Id: ", result.data.createOrConnectPromotion.id)

    console.log("Promotion Saved.")
    // console.log("CurrentPromoState: ", this.state)
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
