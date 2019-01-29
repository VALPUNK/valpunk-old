import { TextField } from "@material-ui/core"
import { ApolloClient } from "apollo-boost"
import React from "react"
import { withApollo } from "react-apollo"
import { Value } from "slate"
import { Editor } from "slate-react"
import { BusinessType } from "../../../../__generated__/globalTypes"
import { SAVE_CONTENT } from "../RichTextEditor"
import {
  createOrConnectContent,
  createOrConnectContentVariables
} from "../RichTextEditor/__generated__/createOrConnectContent"
import { Button } from "./components"
import DestructuredEditor from "./index"
import { initialValue } from "./value"

interface RichTextEditorProps {
  title?: string
  author?: string
  client: ApolloClient<any>
  businessType: BusinessType
  uriEndpoint?: string
  contentId?: string
  value?: Value
}

interface State {
  value?: Value
  title?: string
  author?: string
  meta?: string
  contentId?: string
  submitting?: boolean
}

class EditorFrame extends React.Component<RichTextEditorProps, State> {
  public editor = React.createRef<Editor>()

  constructor(props: any) {
    super(props)
    this.state = {
      value: Value.fromJSON(initialValue),
      title: "",
      author: "",
      meta: "",
      contentId: "",
      submitting: false
    }
  }

  public componentDidMount = () => {
    // console.log("Value: ", this.props.value)
    this.props.value
      ? this.setState({
          value: this.props.value
        })
      : {}

    this.props.title
      ? this.setState({
          title: this.props.title
        })
      : {}

    this.props.author
      ? this.setState({
          author: this.props.author
        })
      : {}

    this.props.contentId
      ? this.setState({
          contentId: this.props.contentId
        })
      : {}
  }

  public render() {
    return (
      <div>
        <div>
          <TextField
            name="title"
            label="Title"
            value={this.state.title}
            onChange={this.onChangeField}
          />
        </div>
        <div>
          <TextField
            name="author"
            label="Author"
            value={this.state.author}
            onChange={this.onChangeField}
          />
        </div>

        <div>
          <TextField
            name="meta"
            label="Meta"
            value={this.state.meta}
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
              this.onClickSave()
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

  public onClickSave = async () => {
    // console.log("Submitting...")
    await this.setState({
      submitting: true
    })
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
        title: this.state.title,
        author: this.state.author,
        content: saveContent,
        contentId: contentId,
        accountId: "",
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

export default withApollo(EditorFrame)
